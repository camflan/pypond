"""
Common base classes and mixins.
"""

import warnings


class PypondBase(object):
    """
    Universal base class. Used to provide common functionality (logging, etc)
    to all the other classes.
    """
    def __init__(self):
        """ctor"""

        self._log = None

    def _warn(self, msg, warn_type):  # pylint: disable=no-self-use
        """issue warning"""
        warnings.warn(msg, warn_type, stacklevel=2)


# base classes for pipeline sources, etc


class Observable(PypondBase):
    """
     Base class for objects in the processing chain which
     need other object to listen to them. It provides a basic
     interface to define the relationships and to emit events
     to the interested observers.
    """
    def __init__(self):
        super(Observable, self).__init__()

        self._observers = list()

    def emit(self, event):
        """add event to observers."""
        for i in self._observers:
            i.addEvent(event)

    def flush(self):
        """flush observers."""
        for i in self._observers:
            if issubclass(i, Observable):
                i.flush()

    def add_observer(self, observer):
        """add an observer if it does not already exist."""
        should_add = True

        for i in self._observers:
            if i == observer:
                should_add = False

        if should_add:
            self._observers.append(observer)

    def has_observers(self):
        """does the object have observers?"""
        return bool(len(self._observers) > 0)