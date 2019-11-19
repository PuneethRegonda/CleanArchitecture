define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const counter_type = Object.create(dart.library);
  const CT = Object.create(null);
  counter_type.CounterType = class CounterType extends core.Object {};
  (counter_type.CounterType.new = function() {
    ;
  }).prototype = counter_type.CounterType.prototype;
  dart.addTypeTests(counter_type.CounterType);
  dart.setLibraryUri(counter_type.CounterType, "package:bloc_app/features/IncreDecre/data/datamodel/counter_type.dart");
  counter_type.IncermentCounter = class IncermentCounter extends counter_type.CounterType {};
  (counter_type.IncermentCounter.new = function() {
    ;
  }).prototype = counter_type.IncermentCounter.prototype;
  dart.addTypeTests(counter_type.IncermentCounter);
  dart.setLibraryUri(counter_type.IncermentCounter, "package:bloc_app/features/IncreDecre/data/datamodel/counter_type.dart");
  counter_type.DecrementCounter = class DecrementCounter extends counter_type.CounterType {};
  (counter_type.DecrementCounter.new = function() {
    ;
  }).prototype = counter_type.DecrementCounter.prototype;
  dart.addTypeTests(counter_type.DecrementCounter);
  dart.setLibraryUri(counter_type.DecrementCounter, "package:bloc_app/features/IncreDecre/data/datamodel/counter_type.dart");
  dart.trackLibraries("packages/bloc_app/features/IncreDecre/data/datamodel/counter_type", {
    "package:bloc_app/features/IncreDecre/data/datamodel/counter_type.dart": counter_type
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["counter_type.dart"],"names":[],"mappings":";;;;;;;;;;EAA4B;;;;;;EAEgB;;;;;;EAEA","file":"counter_type.ddc.js"}');
  // Exports:
  return {
    features__IncreDecre__data__datamodel__counter_type: counter_type
  };
});

//# sourceMappingURL=counter_type.ddc.js.map
