Search.setIndex({envversion:47,filenames:["api","index","modules","pypond","pypond.io","pypond.processor","sanitize","tests","time"],objects:{"":{pypond:[3,0,0,"-"]},"pypond.bases":{Observable:[3,1,1,""],PypondBase:[3,1,1,""],setup_log:[3,3,1,""]},"pypond.bases.Observable":{add_observer:[3,2,1,""],emit:[3,2,1,""],flush:[3,2,1,""],has_observers:[3,2,1,""]},"pypond.collection":{Collection:[3,1,1,""]},"pypond.collection.Collection":{"__str__":[3,2,1,""],add_event:[3,2,1,""],aggregate:[3,2,1,""],at:[3,2,1,""],at_first:[3,2,1,""],at_last:[3,2,1,""],at_time:[3,2,1,""],avg:[3,2,1,""],bisect:[3,2,1,""],clean:[3,2,1,""],collapse:[3,2,1,""],count:[3,2,1,""],equal:[3,4,1,""],event_list:[3,2,1,""],event_list_as_list:[3,2,1,""],events:[3,2,1,""],filter:[3,2,1,""],first:[3,2,1,""],is_chronological:[3,2,1,""],last:[3,2,1,""],map:[3,2,1,""],max:[3,2,1,""],mean:[3,2,1,""],median:[3,2,1,""],min:[3,2,1,""],percentile:[3,2,1,""],quantile:[3,2,1,""],range:[3,2,1,""],same:[3,4,1,""],set_events:[3,2,1,""],size:[3,2,1,""],size_valid:[3,2,1,""],slice:[3,2,1,""],sort:[3,2,1,""],sort_by_time:[3,2,1,""],stdev:[3,2,1,""],sum:[3,2,1,""],to_json:[3,2,1,""],to_string:[3,2,1,""],type:[3,2,1,""]},"pypond.event":{Event:[3,1,1,""],EventBase:[3,1,1,""]},"pypond.event.Event":{avg:[3,4,1,""],begin:[3,2,1,""],collapse:[3,2,1,""],combine:[3,4,1,""],end:[3,2,1,""],is_valid_value:[3,4,1,""],map:[3,4,1,""],map_reduce:[3,4,1,""],merge:[3,4,1,""],merge_events:[3,4,1,""],merge_indexed_events:[3,4,1,""],merge_timerange_events:[3,4,1,""],reduce:[3,4,1,""],same:[3,4,1,""],selector:[3,4,1,""],set_data:[3,2,1,""],sum:[3,4,1,""],timestamp:[3,2,1,""],timestamp_as_local_string:[3,2,1,""],timestamp_as_utc_string:[3,2,1,""],to_json:[3,2,1,""],to_point:[3,2,1,""]},"pypond.event.EventBase":{"__eq__":[3,2,1,""],"__str__":[3,2,1,""],begin:[3,2,1,""],data:[3,2,1,""],data_from_arg:[3,4,1,""],end:[3,2,1,""],get:[3,2,1,""],index_from_args:[3,4,1,""],stringify:[3,2,1,""],timerange_from_arg:[3,4,1,""],timestamp:[3,2,1,""],timestamp_from_arg:[3,4,1,""],to_json:[3,2,1,""],to_string:[3,2,1,""],ts:[3,5,1,""],value:[3,2,1,""]},"pypond.exceptions":{CollectionException:[3,6,1,""],CollectionWarning:[3,6,1,""],EventException:[3,6,1,""],EventWarning:[3,6,1,""],FilterException:[3,6,1,""],FilterWarning:[3,6,1,""],IndexException:[3,6,1,""],IndexWarning:[3,6,1,""],PipelineException:[3,6,1,""],PipelineIOException:[3,6,1,""],PipelineIOWarning:[3,6,1,""],PipelineWarning:[3,6,1,""],ProcessorException:[3,6,1,""],ProcessorWarning:[3,6,1,""],TimeRangeException:[3,6,1,""],TimeRangeWarning:[3,6,1,""],TimeSeriesException:[3,6,1,""],TimeSeriesWarning:[3,6,1,""],UtilityException:[3,6,1,""],UtilityWarning:[3,6,1,""]},"pypond.functions":{Filters:[3,1,1,""],Functions:[3,1,1,""],f_check:[3,3,1,""]},"pypond.functions.Filters":{ignore_missing:[3,4,1,""],keep_missing:[3,4,1,""],propogate_missing:[3,4,1,""],zero_missing:[3,4,1,""]},"pypond.functions.Functions":{avg:[3,4,1,""],count:[3,4,1,""],difference:[3,4,1,""],first:[3,4,1,""],keep:[3,4,1,""],last:[3,4,1,""],max:[3,4,1,""],median:[3,4,1,""],min:[3,4,1,""],percentile:[3,4,1,""],stddev:[3,4,1,""],sum:[3,4,1,""]},"pypond.index":{Index:[3,1,1,""]},"pypond.index.Index":{"__str__":[3,2,1,""],as_string:[3,2,1,""],as_timerange:[3,2,1,""],begin:[3,2,1,""],end:[3,2,1,""],get_daily_index_string:[3,4,1,""],get_index_string:[3,4,1,""],get_index_string_list:[3,4,1,""],get_monthly_index_string:[3,4,1,""],get_yearly_index_string:[3,4,1,""],range_from_index_string:[3,2,1,""],to_json:[3,2,1,""],to_nice_string:[3,2,1,""],to_string:[3,2,1,""],utc:[3,5,1,""],window_duration:[3,4,1,""],window_position_from_date:[3,4,1,""]},"pypond.indexed_event":{IndexedEvent:[3,1,1,""]},"pypond.indexed_event.IndexedEvent":{begin:[3,2,1,""],end:[3,2,1,""],index:[3,2,1,""],index_as_string:[3,2,1,""],set_data:[3,2,1,""],timerange:[3,2,1,""],timerange_as_local_string:[3,2,1,""],timerange_as_utc_string:[3,2,1,""],timestamp:[3,2,1,""],to_json:[3,2,1,""],to_point:[3,2,1,""]},"pypond.io":{input:[4,0,0,"-"],output:[4,0,0,"-"]},"pypond.io.input":{Bounded:[4,1,1,""],PipelineIn:[4,1,1,""],Stream:[4,1,1,""]},"pypond.io.input.Bounded":{on_emit:[4,2,1,""],start:[4,2,1,""],stop:[4,2,1,""]},"pypond.io.input.Stream":{add_event:[4,2,1,""],events:[4,2,1,""],start:[4,2,1,""],stop:[4,2,1,""]},"pypond.io.output":{CollectionOut:[4,1,1,""],Collector:[4,1,1,""],EventOut:[4,1,1,""],PipelineOut:[4,1,1,""]},"pypond.io.output.CollectionOut":{add_event:[4,2,1,""],flush:[4,2,1,""],on_emit:[4,2,1,""]},"pypond.io.output.Collector":{add_event:[4,2,1,""],emit_collections:[4,2,1,""],flush_collections:[4,2,1,""]},"pypond.io.output.EventOut":{add_event:[4,2,1,""],flush:[4,2,1,""],on_emit:[4,2,1,""]},"pypond.pipeline":{Pipeline:[3,1,1,""],Runner:[3,1,1,""],default_callback:[3,3,1,""]},"pypond.pipeline.Pipeline":{add_result:[3,2,1,""],aggregate:[3,2,1,""],align:[3,2,1,""],as_events:[3,2,1,""],as_indexed_events:[3,2,1,""],as_time_range_events:[3,2,1,""],clear_group_by:[3,2,1,""],clear_results:[3,2,1,""],clear_window:[3,2,1,""],collapse:[3,2,1,""],count:[3,2,1,""],emit_on:[3,2,1,""],fill:[3,2,1,""],filter:[3,2,1,""],first:[3,2,1,""],from_source:[3,2,1,""],get_emit_on:[3,2,1,""],get_group_by:[3,2,1,""],get_utc:[3,2,1,""],get_window_duration:[3,2,1,""],get_window_type:[3,2,1,""],group_by:[3,2,1,""],input:[3,2,1,""],last:[3,2,1,""],map:[3,2,1,""],mode:[3,2,1,""],offset_by:[3,2,1,""],rate:[3,2,1,""],results_done:[3,2,1,""],select:[3,2,1,""],take:[3,2,1,""],to:[3,2,1,""],to_event_list:[3,2,1,""],to_keyed_collections:[3,2,1,""],window_by:[3,2,1,""]},"pypond.pipeline.Runner":{start:[3,2,1,""]},"pypond.processor":{aggregator:[5,0,0,"-"],align:[5,0,0,"-"],base:[5,0,0,"-"],collapser:[5,0,0,"-"],converter:[5,0,0,"-"],filler:[5,0,0,"-"],filter:[5,0,0,"-"],mapper:[5,0,0,"-"],offset:[5,0,0,"-"],rate:[5,0,0,"-"],selector:[5,0,0,"-"],taker:[5,0,0,"-"]},"pypond.processor.aggregator":{Aggregator:[5,1,1,""]},"pypond.processor.aggregator.Aggregator":{add_event:[5,2,1,""],clone:[5,2,1,""],flush:[5,2,1,""]},"pypond.processor.align":{Align:[5,1,1,""]},"pypond.processor.align.Align":{add_event:[5,2,1,""],clone:[5,2,1,""]},"pypond.processor.base":{Processor:[5,1,1,""],add_prev_to_chain:[5,3,1,""]},"pypond.processor.base.Processor":{chain:[5,2,1,""],pipeline:[5,2,1,""],prev:[5,2,1,""]},"pypond.processor.collapser":{Collapser:[5,1,1,""]},"pypond.processor.collapser.Collapser":{add_event:[5,2,1,""],clone:[5,2,1,""]},"pypond.processor.converter":{Converter:[5,1,1,""]},"pypond.processor.converter.Converter":{add_event:[5,2,1,""],clone:[5,2,1,""],convert_event:[5,2,1,""],convert_indexed_event:[5,2,1,""],convert_time_range_event:[5,2,1,""]},"pypond.processor.filler":{Filler:[5,1,1,""]},"pypond.processor.filler.Filler":{add_event:[5,2,1,""],clone:[5,2,1,""],flush:[5,2,1,""]},"pypond.processor.filter":{Filter:[5,1,1,""]},"pypond.processor.filter.Filter":{add_event:[5,2,1,""],clone:[5,2,1,""]},"pypond.processor.mapper":{Mapper:[5,1,1,""]},"pypond.processor.mapper.Mapper":{add_event:[5,2,1,""],clone:[5,2,1,""]},"pypond.processor.offset":{Offset:[5,1,1,""]},"pypond.processor.offset.Offset":{add_event:[5,2,1,""],clone:[5,2,1,""]},"pypond.processor.rate":{Rate:[5,1,1,""]},"pypond.processor.rate.Rate":{add_event:[5,2,1,""],clone:[5,2,1,""]},"pypond.processor.selector":{Selector:[5,1,1,""]},"pypond.processor.selector.Selector":{add_event:[5,2,1,""],clone:[5,2,1,""]},"pypond.processor.taker":{Taker:[5,1,1,""]},"pypond.processor.taker.Taker":{add_event:[5,2,1,""],clone:[5,2,1,""],flush:[5,2,1,""]},"pypond.range":{TimeRange:[3,1,1,""],TimeRangeBase:[3,1,1,""]},"pypond.range.TimeRange":{"__str__":[3,2,1,""],begin:[3,2,1,""],contains:[3,2,1,""],disjoint:[3,2,1,""],duration:[3,2,1,""],end:[3,2,1,""],equals:[3,2,1,""],extents:[3,2,1,""],humanize:[3,2,1,""],humanize_duration:[3,2,1,""],intersection:[3,2,1,""],last_day:[3,4,1,""],last_month:[3,4,1,""],last_ninety_days:[3,4,1,""],last_seven_days:[3,4,1,""],last_thirty_days:[3,4,1,""],overlaps:[3,2,1,""],range:[3,2,1,""],relative_string:[3,2,1,""],set_begin:[3,2,1,""],set_end:[3,2,1,""],to_json:[3,2,1,""],to_local_string:[3,2,1,""],to_string:[3,2,1,""],to_utc_string:[3,2,1,""],within:[3,2,1,""]},"pypond.range.TimeRangeBase":{awareness_check:[3,4,1,""],sanitize_list_input:[3,4,1,""],validate_range:[3,4,1,""]},"pypond.series":{TimeSeries:[3,1,1,""]},"pypond.series.TimeSeries":{"__str__":[3,2,1,""],aggregate:[3,2,1,""],align:[3,2,1,""],at:[3,2,1,""],at_first:[3,2,1,""],at_last:[3,2,1,""],at_time:[3,2,1,""],avg:[3,2,1,""],begin:[3,2,1,""],bisect:[3,2,1,""],build_metadata:[3,4,1,""],clean:[3,2,1,""],collapse:[3,2,1,""],collect_by_fixed_window:[3,2,1,""],collection:[3,2,1,""],columns:[3,2,1,""],count:[3,2,1,""],crop:[3,2,1,""],daily_rollup:[3,2,1,""],end:[3,2,1,""],equal:[3,4,1,""],event_type_map:[3,5,1,""],events:[3,2,1,""],fill:[3,2,1,""],fixed_window_rollup:[3,2,1,""],hourly_rollup:[3,2,1,""],index:[3,2,1,""],index_as_range:[3,2,1,""],index_as_string:[3,2,1,""],is_utc:[3,2,1,""],map:[3,2,1,""],max:[3,2,1,""],mean:[3,2,1,""],median:[3,2,1,""],meta:[3,2,1,""],min:[3,2,1,""],monthly_rollup:[3,2,1,""],name:[3,2,1,""],percentile:[3,2,1,""],pipeline:[3,2,1,""],quantile:[3,2,1,""],range:[3,2,1,""],rate:[3,2,1,""],rename_columns:[3,2,1,""],same:[3,4,1,""],select:[3,2,1,""],set_collection:[3,2,1,""],set_meta:[3,2,1,""],set_name:[3,2,1,""],size:[3,2,1,""],size_valid:[3,2,1,""],slice:[3,2,1,""],stdev:[3,2,1,""],sum:[3,2,1,""],timerange:[3,2,1,""],timeseries_list_merge:[3,4,1,""],timeseries_list_reduce:[3,4,1,""],timeseries_list_sum:[3,4,1,""],to_json:[3,2,1,""],to_string:[3,2,1,""],yearly_rollup:[3,2,1,""]},"pypond.timerange_event":{TimeRangeEvent:[3,1,1,""]},"pypond.timerange_event.TimeRangeEvent":{begin:[3,2,1,""],end:[3,2,1,""],humanize_duration:[3,2,1,""],set_data:[3,2,1,""],timerange:[3,2,1,""],timerange_as_local_string:[3,2,1,""],timerange_as_utc_string:[3,2,1,""],timestamp:[3,2,1,""],to_json:[3,2,1,""],to_point:[3,2,1,""]},"pypond.util":{Capsule:[3,1,1,""],ObjectEncoder:[3,1,1,""],Options:[3,1,1,""],aware_dt_from_args:[3,3,1,""],aware_utcnow:[3,3,1,""],dt_from_ms:[3,3,1,""],dt_is_aware:[3,3,1,""],format_dt:[3,3,1,""],generate_paths:[3,3,1,""],humanize_dt:[3,3,1,""],humanize_dt_ago:[3,3,1,""],humanize_duration:[3,3,1,""],is_function:[3,3,1,""],is_nan:[3,3,1,""],is_pipeline:[3,3,1,""],is_pmap:[3,3,1,""],is_pvector:[3,3,1,""],is_valid:[3,3,1,""],localtime_from_ms:[3,3,1,""],localtime_info_from_utc:[3,3,1,""],monthdelta:[3,3,1,""],ms_from_dt:[3,3,1,""],nested_get:[3,3,1,""],nested_set:[3,3,1,""],sanitize_dt:[3,3,1,""],to_milliseconds:[3,3,1,""],unique_id:[3,3,1,""]},"pypond.util.ObjectEncoder":{"default":[3,2,1,""]},"pypond.util.Options":{to_dict:[3,2,1,""]},pypond:{bases:[3,0,0,"-"],collection:[3,0,0,"-"],event:[3,0,0,"-"],exceptions:[3,0,0,"-"],functions:[3,0,0,"-"],index:[3,0,0,"-"],indexed_event:[3,0,0,"-"],io:[4,0,0,"-"],pipeline:[3,0,0,"-"],processor:[5,0,0,"-"],range:[3,0,0,"-"],series:[3,0,0,"-"],timerange_event:[3,0,0,"-"],util:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","staticmethod","Python static method"],"5":["py","attribute","Python attribute"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:staticmethod","5":"py:attribute","6":"py:exception"},terms:{"1st":3,"3am":3,"4am":3,"__eq__":3,"__str__":3,"__unicode__":3,"_callback":4,"_collect":4,"_emit_on":4,"_event_list":3,"_index_typ":3,"_input":3,"_log":3,"_output":3,"_processchain":3,"_result":3,"abstract":3,"boolean":[3,8],"break":3,"case":[3,6,7,8],"class":[],"const":3,"default":[3,5,6,8],"float":3,"function":[],"import":[3,5],"int":3,"long":6,"new":[3,5,6,7],"null":3,"return":[3,4,5,6,7,8],"short":3,"static":3,"true":[3,4,6],"try":3,abl:3,about:3,abov:[3,8],accept:3,access:[3,8],accessor:3,accord:3,accordingli:4,accumul:[3,4],accur:8,accuraci:8,across:3,act:[3,4],actual:3,acut:3,add:[3,4,5],add_ev:[3,4,5],add_observ:3,add_prev_to_chain:5,add_result:3,addev:3,addit:7,addition:3,address:3,adjust:6,aforement:3,aforment:3,after:3,again:[3,6,7],against:7,agg:3,aggreg:[],ago:3,alia:3,align:[],all:[3,4,5,6,7,8],allow:[3,6,8],allow_nan:3,allow_neg:[3,6],alon:5,along:3,alongsid:7,alreadi:[3,6],also:[0,1,3,6,7,8],altern:[1,3],alwai:8,amout:3,analysi:3,ani:[1,3,5,6,8],anoth:[3,5,8],append:3,appli:[3,6],applic:[3,8],appropri:[3,8],apropo:[6,8],arbitrari:3,arg1:[3,5],arg2:3,arg:[],argument:[3,5,6],armi:8,around:3,arrai:3,as_ev:3,as_indexed_ev:3,as_str:3,as_time_range_ev:3,as_timerang:3,ask:3,asrang:3,assertequ:3,assign:3,associ:3,assort:3,astimezon:8,at_first:3,at_last:3,at_tim:3,attempt:[4,6],attr:3,attribut:3,aug:3,automat:[3,8],avail:[1,3],averag:[3,8],avg:[3,8],avoid:3,awar:[3,8],aware_dt_from_arg:3,aware_utcnow:3,awareness_check:3,back:[3,4],bad:[3,4,5,6],bad_path:3,bar:3,base:[],basi:6,basic:[3,6],batch:3,baz:3,becaus:[3,6,8],becom:[1,6],been:[1,3,6,8],befor:[3,5,6],begin:[3,8],behav:8,behavior:[5,6],behind:3,below:3,best:[3,6],between:[3,6,8],bin:5,bisect:3,blow:6,bool:3,both:[1,3],bound:[3,4],boundari:[3,6],boundedin:[],branch:3,browser:8,bucket:8,bucketindex:3,bucketindexlist:3,buffer:3,build:[3,7],build_metadata:3,busi:8,cach:[3,5,6],calcul:[3,6],calcvalu:3,calendar:3,call:[3,4,6,7],callback:[3,4],can:[0,1,3,4,5,6,7,8],capsul:[3,4],care:3,caus:3,cback:3,center:3,certain:[5,6],chain:[],chang:[1,3,5,8],chart:3,check:[3,4,7],check_circular:3,choic:8,choos:8,chronolog:3,chronologc:3,circular:3,clean:3,cleanli:6,cleans:3,clear:3,clear_group_bi:3,clear_result:3,clear_window:3,clone:[3,5],close:6,code:[3,5,6],col:3,coll1:3,coll2:3,coll:3,collaps:[],collect:[],collect_by_fixed_window:3,collectionexcept:3,collectionout:[3,4],collectionwarn:3,collector:[4,5],column:[3,5,6,8],com:3,combin:3,come:[3,6],command:7,common:[3,6],comparison:[1,3],complet:[0,1,3,5,6,7],complex:3,conceptu:1,condit:3,conform:3,confus:3,connect:3,consecut:[3,6],consid:[3,6,8],consist:[3,8],constrain:3,construct:[],constructor:[3,5],contain:[3,4,6],contan:3,content:[],continu:6,control:[3,5,6,8],convent:3,convers:[],convert:[],convert_ev:5,convert_indexed_ev:5,convert_time_range_ev:5,copi:[3,5],copy_ev:3,corectli:3,corollari:1,correctli:3,correspond:6,could:[3,5,6],count:[3,6],counter:6,coupl:6,cours:8,courtesi:3,cover:[3,8],coverag:3,creat:[3,6,7,8],creation:3,crop:3,ctor:3,current:[3,4,6],custom:3,cut:3,dai:[3,8],daili:[3,8],daily_avg:3,daily_max_temp:3,daily_rollup:[3,8],data:[1,3,5,6,7,8],data_from_arg:3,data_with_gap:6,datatim:3,date:[3,8],datetim:[3,8],debug:3,decid:3,deep:[3,6],deep_event_list:[],def:[3,6],default_callback:3,defer:3,defin:3,deleg:5,delta:3,denot:6,depend:[3,4,8],deriv:[],describ:3,descript:3,design:3,desir:[3,6,8],destin:3,detail:[0,5],determin:[3,6,8],dev:[3,7],develop:[1,7],deviat:3,devil:3,dic:3,dict:[3,4,6,8],dictionari:3,differ:[1,3,6,8],differenti:[3,6],direct:[3,6],directli:3,directori:7,disabl:3,discard:3,discrep:8,discret:3,disjoint:3,displai:3,disregard:6,divid:3,do_something_with_the_ev:3,do_stuff:3,doc:5,docstr:3,doe:[3,8],doesn:3,don:[3,5],done:[1,3,8],dot:6,doubl:3,down:[3,6,8],downstream:3,drive:3,dt_from_m:3,dt_is_awar:3,dtarg:3,dtime:[3,8],dtime_1:3,dtime_2:3,duck:3,due:[3,6],dump:3,duplic:1,durat:3,dure:3,dynam:3,each:[3,5,6],eachev:[3,8],earlier:3,earliest:3,either:[3,4,5,7],element:3,elist:[],emit:[3,4,5,6],emit_collect:4,emit_on:[3,8],emiton:3,emploi:3,empti:[3,6],emtpi:3,enabl:3,encapsul:3,encod:3,encount:6,encourag:8,end:[3,6,8],ensur:[3,6],ensure_ascii:3,entir:[3,8],entri:[3,6],epoch:[3,8],equal:3,error:3,esnet_ticket:6,essenti:3,etc:[1,3,5,6],even:[3,5,6,8],event1:3,event2:3,event:[],event_list:3,event_list_as_list:3,event_type_map:3,eventbas:3,eventexcept:3,eventout:[3,4],eventwarn:3,everi:3,evert:3,exact:3,exampl:[0,1,3,6,7,8],exce:6,exceed:3,except:[],execut:[3,7],exist:[3,5,6],expect:3,explicitli:8,expos:[3,8],express:3,extens:1,extent:3,extern:7,extra:3,extract:3,extravag:3,f_check:3,factori:3,fail:[3,7],failov:3,fairli:[0,1,7],fall:4,fals:[3,6,8],favor:3,fetch:3,few:3,field:[3,5,6],field_path:3,field_spec:[3,5,6],field_spec_list:3,fieldnam:3,fieldspec:[3,5],fieldspeclist:3,fill:[],fill_limit:[],filler:[],filter:[],filter_func:3,filterexcept:3,filterwarn:3,find:[3,7],fine:8,finish:3,first:[3,6,7],fix:[3,4,8],fixed_window_rollup:3,flag:[3,8],flat:3,flow:5,flt:3,flush:[3,4,5,6],flush_collect:4,fmt:3,follow:[1,3,6,7,8],foo:3,food:5,forc:3,form:[3,8],formal:7,format:[1,3,6,7,8],format_dt:3,found:[3,7],four:6,fraction:3,freak:3,frequenc:6,fresh:3,friendli:3,from:[3,4,5,6,7],from_sourc:[3,6,8],front:3,fspec:3,fthe:3,full:6,fulli:3,func:3,functionali:3,functool:3,further:3,gap:6,gather:[],gener:[3,5,6,7],generate_path:3,get:[3,6],get_daily_index_str:3,get_emit_on:3,get_group_bi:3,get_index_str:3,get_index_string_list:3,get_localzon:8,get_monthly_index_str:3,get_utc:3,get_window_dur:3,get_window_typ:3,get_yearly_index_str:3,getbucketposfromd:3,getlengthfroms:3,github:1,give:6,given:[3,5,6],global:3,global_flush:3,good:6,granular:3,graph:8,greatest:3,greatli:3,green:6,grok:3,group:[3,4,5],group_bi:3,group_by_kei:[3,4],groupbi:3,groupbykei:3,grrr:3,had:3,handl:[],happen:[3,5,8],happi:3,has_observ:3,have:[1,3,4,6,8],held:8,help:3,helper:[3,8],herd:3,here:[1,3],heterogen:4,high:1,higher:[3,8],hit:6,hood:[3,8],hour:[3,8],hourli:[3,6],hourly_max_temp:3,hourly_rollup:3,how:[3,4,6,8],howev:6,http:3,human:3,humanize_dt:3,humanize_dt_ago:3,humanize_dur:3,idea:3,ident:3,idx:3,idx_list:3,idx_str:3,ignor:3,ignore_miss:3,immut:3,implement:[1,3,4],impli:3,in_avg:3,in_onli:3,in_out_data:3,includ:[3,7],incom:[3,5,7],inconsist:3,increas:6,indent:3,independ:6,index:[],index_as_rang:3,index_as_str:3,index_from_arg:3,indexed_ev:[],indexedev:[],indexexcept:3,indexwarn:3,indic:[3,6],individu:5,ineffici:3,initi:[],inner:3,input:[],insid:3,instal:7,instanc:[3,4,5],instance_or_arg:3,instance_or_begin:3,instance_or_index:3,instance_or_list:3,instance_or_tim:3,instance_or_wir:3,instanti:6,instead:6,integ:[3,6],inten:4,inter:3,interest:[3,7],interfac:3,intern:[1,3,4,8],internali:3,interop_test:7,interoper:7,interpol:[3,5,6],interpret:3,intersect:3,interv:[3,6],invalid:[3,5,6],irregular:6,is_chronolog:3,is_even:3,is_funct:3,is_nan:3,is_pipelin:3,is_pmap:3,is_pvector:3,is_utc:3,is_valid:3,is_valid_valu:3,isinst:6,isn:3,issu:[6,7,8],item:3,iter:[3,4],itself:3,jan:3,javascript:[1,3,7,8],json:[1,3],jsonencod:3,june:3,just:[3,6,7,8],kcol:8,keep:3,keep_miss:3,kei:[3,4,6,8],keyword:3,kind:3,kludgi:3,knife:8,know:3,kwarg:3,lag:3,lambda:3,land:3,larger:6,last:[3,6],last_dai:3,last_month:3,last_ninety_dai:3,last_seven_dai:3,last_thirty_dai:3,late:3,later:3,latest:3,launch:3,lead:3,left:6,len:3,length:3,less:[3,6],let:3,level:[1,3,6,7,8],lib:7,like:[3,4,6,8],limit:[],line:3,linear:[],list:[3,6],list_typ:3,listen:3,littl:[6,8],load:3,local:[],local_tz:8,localtim:3,localtime_from_m:3,localtime_info_from_utc:3,log:3,log_path:3,logic:6,longer:4,look:[3,6,8],loop:3,lower:3,lsit:3,made:[3,4],mai:[3,8],main:[1,3,8],maintain:[3,6],make:[3,5,6],manag:3,maneuv:3,mani:[4,6],manipul:[1,3],manual:3,map:[3,5],map_reduc:3,mapper:[],march:3,mark:4,massag:3,match:3,math:6,mathemat:3,max:3,maximum:3,mean:3,median:3,mention:3,merg:3,merge_ev:3,merge_indexed_ev:3,merge_timerange_ev:3,meta:3,metadata:3,method:[],microsecond:[3,8],middl:6,midpoint:3,might:[3,6],millisecond:[3,8],mimic:3,min:3,minimum:3,minut:[3,6,8],mismatch:3,miss:[3,5,6],mistak:3,mixin:3,mode:[3,7],modifi:3,modul:[],moment:3,monoton:6,month:[3,8],monthdelta:3,monthli:3,monthly_max_temp:3,monthly_rollup:[3,8],more:3,moreov:8,mostli:3,ms_from_dt:3,ms_since_epoch:3,msec:3,much:6,multipl:[3,4,6],must:3,mutat:[3,6],naiv:[3,8],name:[1,3,6,8],nan:[3,6],natur:[3,6],nearest:3,necessari:6,need:[1,3,7,8],neg:[3,6],neither:6,nest:[3,6],nested_get:3,nested_set:3,net:[1,3],new_in:3,new_kei:6,new_out:3,new_t:[3,6],next:[3,6],nice:3,niceindexstr:3,node:[3,7],non:[3,6,8],none:[3,4,6],normal:6,nosetest:7,notat:[3,6],note:[],noth:6,notimplementederror:3,now:3,npm:7,num:3,number:[3,5,6],numer:[3,6],numpi:3,obj:[1,3],object:[],objectencod:3,observ:[3,4,5],obviou:1,occur:[3,6],offer:1,offset:[],offset_bi:3,often:3,old:3,on_emit:4,on_trigg:4,onli:[1,3,5,6,7,8],onto:3,ontrigg:4,oper:[3,5,6],optim:6,option:[3,4,5,6,8],order:3,origin:[3,6,7],other:[],otherwis:[3,6],our:3,out:[3,6,7,8],out_avg:3,outcom:6,outer:3,outlin:3,output:[],over:[3,7,8],overlap:3,overrid:3,overwritten:3,own:[3,4,6],pacif:8,packag:[],pad:[3,5,6],page:0,pair:3,paramet:[3,4,5],pariti:8,part:[3,4],parti:8,partial:3,particular:7,partit:4,pass:[3,4,5,6,8],path:[3,7],payloa:3,payload:[3,6],peopl:3,per:[3,6],perc:3,percentil:3,perfectli:8,perform:[3,5,6],period:5,pip:7,pipelin:[],pipeline_in:[],pipeline_out:[],pipelineexcept:3,pipelinein:4,pipelineio:3,pipelineioexcept:[3,4],pipelineiowarn:3,pipelineout:[3,4],pipelinewarn:3,piplin:3,place:6,plan:3,pleas:[3,8],pline:3,pmap:3,point:[3,6],port:3,portion:3,posit:3,positon:3,possibl:[3,8],potenti:[3,4],practic:6,precis:[],prefer:[3,6,8],prefix:3,present:8,presum:3,prev:5,previou:[6,8],previous:3,primari:6,primarili:[3,5,8],print:8,probabl:[3,7],process:[3,5,6],processor:[],processorexcept:[3,5],processorwarn:3,produc:[3,6],project:[1,3],properli:[3,7],properti:3,propogate_miss:3,prototyp:6,provid:3,pull:3,purpos:3,put:3,pvector:3,pypondbas:[3,4],pyrsist:3,pytz:8,quantil:3,queri:3,quux:3,rais:[3,4,5,8],rang:[],range_from_index_str:3,range_obj:3,rate:[],rather:[3,6,8],raw:[3,6],raw_count:6,reach:[3,6],readabl:3,real:[1,6],realli:[3,8],rebuild:3,receiv:3,recombin:3,reconstitut:7,recurs:5,reduc:[3,5],reduct:3,refer:[0,1,4,7],referenc:3,reflect:[3,8],regener:7,regex:3,regular:[3,5],rel:3,relationship:3,relative_str:3,reli:8,remain:[4,6],remap:3,remov:3,renam:[],rename_column:[3,6],rename_map:3,render:[],replac:[3,5,6],report:8,repr:3,repres:[3,8],represent:3,representaion:3,request:[3,6],requir:[3,7],reserv:1,reset:6,rest:6,result:[3,4,5,8],results_don:[3,4],retain:3,retriev:3,retrun:3,roll:3,root:7,round:[3,7,8],row:3,rtd:1,run:[],runner:3,safe:3,safeti:3,sai:6,sake:3,same:[1,3,6,7,8],sampl:[3,6],sample_dict:3,sanit:[],sanitize_dt:3,sanitize_list_input:3,scope:8,script:7,search:[0,3],second:[3,6,8],section:8,see:[3,5,8],seem:3,seen:6,select:[3,5,6],selector:[],self:[3,6],send:[3,7],sens:[3,6],sent:3,separ:3,seri:[],serial:3,series1:3,series2:3,series_list:3,set:[0,1,3,4,6,7,8],set_begin:3,set_collect:3,set_data:3,set_end:3,set_ev:3,set_meta:3,set_nam:3,setup:7,setup_log:3,sever:3,shorter:3,shorthand:3,should:[3,5,6,7,8],show:[6,8],shut:6,side:8,signal:3,significantli:6,similar:3,similarli:6,simpl:[3,5],simple_missing_data:6,simpler:6,simpli:3,simplifi:3,sinc:[1,3,6,8],singl:3,sink:3,sit:3,site:1,situat:[3,6],size:[3,4],size_valid:3,skip:[3,6],skipkei:3,slice:3,smaller:3,smooth:6,snmp:[5,6],softwar:[1,3],solv:3,some:[3,4,6,7],some_valu:3,someth:3,somewhat:[3,6,8],somewher:7,sort:3,sort_by_tim:3,sort_kei:3,sourc:[3,4,6,7],span:[3,6,8],spec:3,specif:3,specifi:[3,8],src:[3,7],stackoverflow:3,standard:[3,7],start:[3,4,6],state:3,statement:3,statu:3,std:3,stddev:3,stdev:3,stdout:7,still:[3,8],stop:[4,5,6],store:[3,8],str:3,straight:3,strategi:[4,6],stream:[3,4,6],strftime:3,string:[3,4,6,8],stringifi:3,structur:[1,3,7,8],style:3,sub:6,subclass:3,submodul:[],subpackag:[],subset:3,succe:3,suffix:3,suit:3,sum:3,sum_list:3,summari:3,superclass:5,suppli:[3,4,5,6],support:3,suppress:3,sure:[3,5,6],surround:[3,6],swiss:8,synonym:3,syntax:3,take:[3,5,6,8],taker:[],temp:3,temperatur:3,terminu:3,test:[],text:3,than:[3,6,8],thaw:3,thei:[3,6,8],them:[3,5,6],thi:[1,3,4,5,6,8],thing:[3,4,8],third:[6,8],those:[3,6,7],though:[3,6,8],three:[3,5,6],through:[1,3],thusli:8,tick:3,ticket:6,ticket_rang:6,time:[],timedelta:3,timerang:[1,3,8],timerange_as_local_str:3,timerange_as_utc_str:3,timerange_ev:[],timerange_from_arg:3,timerangebas:3,timerangeev:[3,5,6,8],timerangeexcept:3,timerangewarn:3,timeseries_list_merg:3,timeseries_list_reduc:3,timeseries_list_sum:3,timeseriesexcept:3,timeserieswarn:3,timestamp:[3,6,8],timestamp_as_local_str:3,timestamp_as_utc_str:3,timestamp_from_arg:3,titl:6,to_dict:3,to_ev:3,to_event_list:3,to_json:3,to_keyed_collect:[3,6,8],to_local_str:3,to_millisecond:3,to_nice_str:3,to_point:3,to_str:[1,3],to_utc_str:3,togeth:[3,6],tonicestr:3,too:6,toolkit:6,top:[3,6],tostr:[1,3],total:3,traffic:[3,6],transform:[3,6],translat:3,transmiss:[1,3],transmit:1,travers:3,treat:3,trigger:[3,4],trio:8,trip:[3,7],ts1:3,ts2:3,tupl:3,turn:3,two:[3,5,6,8],txt:7,type:[3,4,5,6],typic:[3,6],tzlocal:8,uin:3,ultim:3,unawar:3,unbound:[3,4,6],unboundedin:[],unchang:6,undefin:3,under:[3,8],underli:[3,8],underscore_d:3,underyl:3,uneven:6,unfil:6,unifi:5,unique_id:3,unit:[7,8],univers:3,unix:3,unlik:[3,6],unnecessari:3,unpredict:3,unsuit:3,until:6,unus:3,updat:3,upstream:3,usag:[],user:[3,8],usual:[3,6],utc:[],utcnow:3,utf:3,util:[],utilityexcept:3,utilitywarn:3,uuid:3,val:[3,6],valid:[3,5,6],validate_rang:3,valu:[3,4,5,6,8],valuelist:3,vanilla:3,vari:3,variant:[5,8],variat:3,varieti:6,variou:[1,3],veri:1,verifi:5,version:[1,3],via:[1,3],view:8,wai:[3,6,8],want:[3,6],warn:[3,6,8],watermark:3,weather1:3,weather2:3,well:[0,1,3,6,7,8],what:[3,8],whatev:3,when:[3,4,5,6,8],where:[3,6,8],which:[3,4,5,6,7,8],whichev:3,who:3,whole:3,why:[6,8],wide:6,win:3,window:[3,4,5,6,8],window_bi:[3,8],window_dur:3,window_kei:[3,4],window_or_dur:3,window_position_from_d:3,window_s:3,window_typ:3,windowbi:8,windows:3,wire:[1,3,7,8],wish:3,within:3,without:6,word:[1,3],work:3,workign:3,world:6,would:[3,6],wrapper:3,wrong:[3,8],wtin:3,year:[3,8],yearli:3,yearly_rollup:[3,8],yet:[5,8],yield:8,you:[3,6,8],your:[3,6],your_cool_object:3,zero:[3,5,6],zero_miss:3,zone:8},titles:["API Documentation","PyPond - Python Pond timeseries library.","pypond","pypond package","pypond.io package","pypond.processor package","Fill and other sanitizing methods","Running the tests","Notes on time handling"],titleterms:{"class":8,"function":3,aggreg:5,align:[5,6],api:0,arg:6,base:[3,5],chain:6,collaps:5,collect:3,construct:6,content:[3,4,5],convers:8,convert:5,core:1,deriv:6,document:[0,1],event:[3,8],except:3,fill:6,fill_limit:6,filler:5,filter:5,handl:8,hold:6,index:3,indexed_ev:3,indexedev:8,initi:8,input:4,librari:1,limit:6,linear:6,local:8,mapper:5,method:6,modul:[3,4,5],note:8,object:8,offset:5,other:6,output:4,overview:1,packag:[3,4,5],pipelin:[3,6],pipeline_in:[],pipeline_out:[],pond:1,precis:8,processor:5,pypond:[1,2,3,4,5],python:1,rang:3,rate:[5,6],renam:6,render:8,run:7,sanit:6,selector:5,seri:3,submodul:[3,4,5],subpackag:3,taker:5,test:7,time:8,timerange_ev:3,timeseri:1,usag:6,utc:8,util:3}})