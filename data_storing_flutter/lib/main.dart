import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'features/data Storage/presentation/pages/homepage.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ways To Store The data in Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Ways To Store The data in Flutter On Device'),
        ),
        body: MyHomepage(),
        bottomSheet: Input(),
      ),
    );
  }
}

class Input extends StatelessWidget {
  const Input({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Row(
        children: <Widget>[
          Expanded(
            child: TextField(
              decoration: InputDecoration(
                border: OutlineInputBorder(),
              ),
              onSubmitted: (_) {},
            ),
          ),
          SizedBox(
            width: 10.0,
          ),
          CupertinoButton(
              padding: EdgeInsets.all(0.0),
              onPressed: () {},
              child: Container(
                padding: EdgeInsets.all(8.0),
                decoration: BoxDecoration(
                    color: Colors.green,
                    borderRadius: BorderRadius.all(Radius.circular(50.0))),
                child: Icon(Icons.send, color: Colors.white, size: 22.0),
              )),
        ],
      ),
    );
  }
}
