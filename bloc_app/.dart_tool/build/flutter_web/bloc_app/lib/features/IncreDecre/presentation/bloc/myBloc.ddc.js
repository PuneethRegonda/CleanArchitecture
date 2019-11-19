define(['dart_sdk', 'packages/bloc_app/features/IncreDecre/data/datamodel/counter_type'], function(dart_sdk, packages__bloc_app__features__IncreDecre__data__datamodel__counter_type) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const counter_type = packages__bloc_app__features__IncreDecre__data__datamodel__counter_type.features__IncreDecre__data__datamodel__counter_type;
  const myBloc = Object.create(dart.library);
  let StreamControllerOfint = () => (StreamControllerOfint = dart.constFn(async.StreamController$(core.int)))();
  let StreamControllerOfCounterType = () => (StreamControllerOfCounterType = dart.constFn(async.StreamController$(counter_type.CounterType)))();
  const CT = Object.create(null);
  const _intcounter = dart.privateName(myBloc, "_intcounter");
  const _counterStreamController = dart.privateName(myBloc, "_counterStreamController");
  const _counterEventController = dart.privateName(myBloc, "_counterEventController");
  const _mapEventToStream = dart.privateName(myBloc, "_mapEventToStream");
  myBloc.MyCounterBloc = class MyCounterBloc extends core.Object {
    get counterSink() {
      return this[_counterStreamController].sink;
    }
    get stream() {
      return this[_counterStreamController].stream;
    }
    get counterTypeSink() {
      return this[_counterEventController].sink;
    }
    dispose() {
      this[_counterEventController].close();
      this[_counterStreamController].close();
    }
    [_mapEventToStream](counterType) {
      if (counter_type.IncermentCounter.is(counterType)) {
        this[_intcounter] = dart.notNull(this[_intcounter]) + 1;
      } else {
        this[_intcounter] = dart.notNull(this[_intcounter]) - 1;
      }
      this[_counterStreamController].add(this[_intcounter]);
    }
  };
  (myBloc.MyCounterBloc.new = function() {
    this[_intcounter] = 0;
    this[_counterStreamController] = StreamControllerOfint().new();
    this[_counterEventController] = StreamControllerOfCounterType().new();
    this[_counterEventController].stream.listen(dart.bind(this, _mapEventToStream));
  }).prototype = myBloc.MyCounterBloc.prototype;
  dart.addTypeTests(myBloc.MyCounterBloc);
  dart.setMethodSignature(myBloc.MyCounterBloc, () => ({
    __proto__: dart.getMethods(myBloc.MyCounterBloc.__proto__),
    dispose: dart.fnType(dart.void, []),
    [_mapEventToStream]: dart.fnType(dart.void, [counter_type.CounterType])
  }));
  dart.setGetterSignature(myBloc.MyCounterBloc, () => ({
    __proto__: dart.getGetters(myBloc.MyCounterBloc.__proto__),
    counterSink: async.StreamSink$(core.int),
    stream: async.Stream$(core.int),
    counterTypeSink: core.Sink$(counter_type.CounterType)
  }));
  dart.setLibraryUri(myBloc.MyCounterBloc, "package:bloc_app/features/IncreDecre/presentation/bloc/myBloc.dart");
  dart.setFieldSignature(myBloc.MyCounterBloc, () => ({
    __proto__: dart.getFields(myBloc.MyCounterBloc.__proto__),
    [_intcounter]: dart.fieldType(core.int),
    [_counterStreamController]: dart.finalFieldType(async.StreamController$(core.int)),
    [_counterEventController]: dart.finalFieldType(async.StreamController$(counter_type.CounterType))
  }));
  dart.trackLibraries("packages/bloc_app/features/IncreDecre/presentation/bloc/myBloc", {
    "package:bloc_app/features/IncreDecre/presentation/bloc/myBloc.dart": myBloc
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["myBloc.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;AASqC,YAAA,AAAyB;IAAI;;AAEtC,YAAA,AAAyB;IAAM;;AAIhB,YAAA,AAAwB;IAAI;;AAMpC,MAA/B,AAAwB;AACQ,MAAhC,AAAyB;IAC3B;wBAEmC;AACjC,UAAgB,iCAAZ,WAAW;AACA,QAAb,oBAAW,aAAX,qBAAW;;AAEE,QAAb,oBAAW,aAAX,qBAAW;;AAG4B,MAAzC,AAAyB,mCAAI;IAC/B;;;IA5BI,oBAAc;IAEZ,iCAA2B;IAM3B,gCAA0B;AAK0B,IAAxD,AAAwB,AAAO,sDAAO;EACxC","file":"myBloc.ddc.js"}');
  // Exports:
  return {
    features__IncreDecre__presentation__bloc__myBloc: myBloc
  };
});

//# sourceMappingURL=myBloc.ddc.js.map
