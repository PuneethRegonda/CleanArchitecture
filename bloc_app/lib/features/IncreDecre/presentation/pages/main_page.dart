import 'package:flutter/material.dart';

class MyHomePageNormalSetState extends StatefulWidget {
  MyHomePageNormalSetState({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageNormalSetStateState createState() => _MyHomePageNormalSetStateState();
}

class _MyHomePageNormalSetStateState extends State<MyHomePageNormalSetState> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: StreamBuilder(
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text(
                    'You have pushed the button this many times:',
                  ),
                  Text(
                    '$_counter',
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
              onPressed: _incrementCounter,
              icon: Icon(Icons.add),
              label: Text("Increment"),
            ),
            SizedBox(
              width: 10,
            ),
            RaisedButton.icon(
              label: Text("Decrement"),
              onPressed: _incrementCounter,
              icon: Icon(Icons.minimize),
            ),
          ],
        ));
  }
}
