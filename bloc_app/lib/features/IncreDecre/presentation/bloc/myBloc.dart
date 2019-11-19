import 'dart:async';

import '../../data/datamodel/counter_type.dart';

class MyCounterBloc {
  int _intcounter = 0;

  final _counterStreamController = StreamController<int>();

  StreamSink<int> get counterSink => _counterStreamController.sink;

  Stream<int> get stream => _counterStreamController.stream;

  final _counterEventController = StreamController<CounterType>();

  Sink<CounterType> get counterTypeSink => _counterEventController.sink;

  MyCounterBloc() {
    _counterEventController.stream.listen(_mapEventToStream);
  }
  void dispose() {
    _counterEventController.close();
    _counterStreamController.close();
  }

  void _mapEventToStream(CounterType counterType) {
    if (counterType is IncermentCounter) {
      _intcounter++;
    } else {
      _intcounter--;
    }

    _counterStreamController.add(_intcounter);
  }
}
