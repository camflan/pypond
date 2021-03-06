"""
Tests for duplicates and such with the event objects.

Put in its own module since event_test.py is out of control at the moment.

Covers API changes from pond branch 0.8.0 and pypond 0.5.0
"""

import datetime
import unittest

from pypond.collection import Collection
from pypond.event import Event
from pypond.indexed_event import IndexedEvent
from pypond.timerange_event import TimeRangeEvent
from pypond.range import TimeRange
from pypond.series import TimeSeries, TimeSeriesException
from pypond.util import aware_utcnow, ms_from_dt, dt_from_ms

EVENT_LIST = [
    Event(1429673400000, {'in': 1, 'out': 2}),
    Event(1429673460000, {'in': 3, 'out': 4}),
    Event(1429673520000, {'in': 5, 'out': 6}),
]

UNORDERED_EVENT_LIST = [
    Event(1429673460000, {'in': 3, 'out': 4}),
    Event(1429673400000, {'in': 1, 'out': 2}),
    Event(1429673520000, {'in': 5, 'out': 6}),
]

EVENT_LIST_DUP = [
    Event(1429673400000, {'in': 1, 'out': 2}),
    Event(1429673460000, {'in': 3, 'out': 4}),
    Event(1429673460000, {'in': 4, 'out': 5}),
    Event(1429673520000, {'in': 5, 'out': 6}),
]

IDX_EVENT_DUP = [
    IndexedEvent('1d-12354', {'value': 42}),
    IndexedEvent('1d-12355', {'value': 43}),
    IndexedEvent('1d-12355', {'value': 44}),
    IndexedEvent('1d-12356', {'value': 45}),
]


class BaseTestEvent(unittest.TestCase):
    """Base class for comparison tests."""

    def setUp(self):
        pass


class TestComparisonUtils(BaseTestEvent):
    """Test methods checking for/handling duplicate events and other accessors
    introduced in the 8.0 branch of the JS code."""

    def test_at_key_and_dedup(self):
        """test Collection.at_key() and dedup()"""

        # events
        coll = Collection(EVENT_LIST_DUP)

        key_time = dt_from_ms(1429673460000)
        find = coll.at_key(key_time)
        self.assertEqual(len(find), 2)
        self.assertEqual(find[0].get('in'), 3)
        self.assertEqual(find[1].get('in'), 4)

        ddcoll = coll.dedup()
        self.assertEqual(ddcoll.size(), 3)
        self.assertEqual(ddcoll.at(1).get('in'), 4)  # the second dup event

        # indexed events

        coll = Collection(IDX_EVENT_DUP)
        find = coll.at_key('1d-12355')
        self.assertEqual(len(find), 2)
        self.assertEqual(find[0].get('value'), 43)
        self.assertEqual(find[1].get('value'), 44)

        ddcoll = coll.dedup()
        self.assertEqual(ddcoll.size(), 3)
        self.assertEqual(ddcoll.at(1).get('value'), 44)  # the second dup event

        # time range events

        test_end_ts = aware_utcnow()
        test_begin_ts = test_end_ts - datetime.timedelta(hours=12)
        test_end_ms = ms_from_dt(test_end_ts)
        test_begin_ms = ms_from_dt(test_begin_ts)

        dup_tre = [
            TimeRangeEvent((test_begin_ms, test_end_ms), 11),
            TimeRangeEvent((test_begin_ms + 60000, test_end_ms + 60000), 12),
            TimeRangeEvent((test_begin_ms + 60000, test_end_ms + 60000), 13),
            TimeRangeEvent((test_begin_ms + 120000, test_end_ms + 120000), 14),
        ]

        coll = Collection(dup_tre)
        search = TimeRange(test_begin_ms + 60000, test_end_ms + 60000)
        find = coll.at_key(search)
        self.assertEqual(len(find), 2)
        self.assertEqual(find[0].get('value'), 12)
        self.assertEqual(find[1].get('value'), 13)

        ddcoll = coll.dedup()
        self.assertEqual(ddcoll.size(), 3)
        self.assertEqual(ddcoll.at(1).get('value'), 13)  # the second dup event

    def test_list_as_map(self):
        """test collection.list_as_map()"""
        coll = Collection(EVENT_LIST_DUP)
        cmap = coll.event_list_as_map()
        self.assertEqual(len(cmap), 3)
        self.assertEqual(len(cmap.get(1429673400000)), 1)
        self.assertEqual(len(cmap.get(1429673460000)), 2)  # dups

    def test_new_same(self):
        """trigger an error for coverage."""

        self.assertFalse(Event.same(EVENT_LIST[0], IDX_EVENT_DUP[0]))

    def test_nested_merge(self):
        """trigger merging nested data."""

        # pylint: disable=invalid-name
        e_ts = aware_utcnow()

        e1 = Event(e_ts, dict(payload=dict(a=1)))
        e2 = Event(e_ts, dict(payload=dict(b=2)))

        emerge = Event.merge([e1, e2])
        self.assertEqual(emerge[0].get('payload.a'), 1)
        self.assertEqual(emerge[0].get('payload.b'), 2)

    def test_bad_args(self):
        """bad args for new TimeSeries functions/coverage."""
        # def timeseries_list_reduce(data, series_list, reducer, field_spec=None):

        def test_func():
            """test function."""
            i = 1
            return i

        with self.assertRaises(TimeSeriesException):
            TimeSeries.timeseries_list_reduce({}, {}, test_func)

        with self.assertRaises(TimeSeriesException):
            TimeSeries.timeseries_list_reduce({}, [], {})

    def test_is_duplicate(self):
        """Test Event.is_duplicate()"""

        # events

        # pylint: disable=invalid-name
        e_ts = aware_utcnow()

        e1 = Event(e_ts, 23)
        e2 = Event(e_ts, 23)

        self.assertTrue(Event.is_duplicate(e1, e2))
        self.assertTrue(Event.is_duplicate(e1, e2, ignore_values=False))

        e3 = Event(e_ts, 25)

        self.assertTrue(Event.is_duplicate(e1, e3))
        self.assertFalse(Event.is_duplicate(e1, e3, ignore_values=False))

        # indexed events
        ie1 = IndexedEvent('1d-12355', {'value': 42})
        ie2 = IndexedEvent('1d-12355', {'value': 42})

        self.assertTrue(Event.is_duplicate(ie1, ie2))
        self.assertTrue(Event.is_duplicate(ie1, ie2, ignore_values=False))

        ie3 = IndexedEvent('1d-12355', {'value': 44})

        self.assertTrue(Event.is_duplicate(ie1, ie3))
        self.assertFalse(Event.is_duplicate(ie1, ie3, ignore_values=False))

        # time range events
        test_end_ts = aware_utcnow()
        test_begin_ts = test_end_ts - datetime.timedelta(hours=12)
        test_end_ms = ms_from_dt(test_end_ts)
        test_begin_ms = ms_from_dt(test_begin_ts)

        tre1 = TimeRangeEvent((test_begin_ms, test_end_ms), 11)
        tre2 = TimeRangeEvent((test_begin_ms, test_end_ms), 11)

        self.assertTrue(Event.is_duplicate(tre1, tre2))
        self.assertTrue(Event.is_duplicate(tre1, tre2, ignore_values=False))

        tre3 = TimeRangeEvent((test_begin_ms, test_end_ms), 22)

        self.assertTrue(Event.is_duplicate(tre1, tre3))
        self.assertFalse(Event.is_duplicate(tre1, tre3, ignore_values=False))


if __name__ == '__main__':
    unittest.main()
