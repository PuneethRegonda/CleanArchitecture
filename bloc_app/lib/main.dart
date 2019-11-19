import 'package:flutter/material.dart';

import './features/IncreDecre/presentation/pages/bloc_main_Page.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      //
      home: MyHomePageUsingBLOC(title: 'Flutter Demo Using BLOC'),
    );
  }
}
