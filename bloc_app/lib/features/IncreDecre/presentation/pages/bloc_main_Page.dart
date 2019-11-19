import 'package:flutter/material.dart';

import '../../data/datamodel/counter_type.dart';
import '../bloc/myBloc.dart';

class MyHomePageUsingBLOC extends StatefulWidget {
  MyHomePageUsingBLOC({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageUsingBLOCState createState() => _MyHomePageUsingBLOCState();
}

class _MyHomePageUsingBLOCState extends State<MyHomePageUsingBLOC> {
  final _bloc = MyCounterBloc();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: StreamBuilder(
          stream: _bloc.stream,
          initialData: 0,
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text(
                    'You have pushed the button this many times:',
                  ),
                  Text(
                    '${snapshot.data}',
                    style: Theme.of(context).textTheme.display1,
                  ),
                ],
              ),
            );
          },
        ),
        floatingActionButton: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton.icon(
              onPressed: () => _bloc.counterTypeSink.add(IncermentCounter()),
              label: Text("Increment"), icon: Icon(Icons.add),
            ),
            SizedBox(
              width: 10,
            ),
            RaisedButton.icon(
              onPressed: () => _bloc.counterTypeSink.add(DecrementCounter()),
              label: Text("Decrement"), icon: Icon(Icons.minimize),
            ),
          ],
        ));
  }
}
