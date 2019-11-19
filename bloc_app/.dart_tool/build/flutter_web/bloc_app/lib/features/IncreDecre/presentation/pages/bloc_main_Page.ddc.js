define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/bloc_app/features/IncreDecre/presentation/bloc/myBloc', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/bloc_app/features/IncreDecre/data/datamodel/counter_type'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__bloc_app__features__IncreDecre__presentation__bloc__myBloc, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__bloc_app__features__IncreDecre__data__datamodel__counter_type) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const async = packages__flutter__src__widgets__actions.src__widgets__async;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const myBloc = packages__bloc_app__features__IncreDecre__presentation__bloc__myBloc.features__IncreDecre__presentation__bloc__myBloc;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const theme = packages__flutter__material.src__material__theme;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const icons = packages__flutter__material.src__material__icons;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const counter_type = packages__bloc_app__features__IncreDecre__data__datamodel__counter_type.features__IncreDecre__data__datamodel__counter_type;
  const bloc_main_Page = Object.create(dart.library);
  let StreamBuilderOfint = () => (StreamBuilderOfint = dart.constFn(async.StreamBuilder$(core.int)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndAsyncSnapshotToCenter = () => (BuildContextAndAsyncSnapshotToCenter = dart.constFn(dart.fnType(basic.Center, [framework.BuildContext, async.AsyncSnapshot])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 30,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 11,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialData",
        [_Location_column]: 11,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 58,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 47,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 15,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 41,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 58,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 47,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 15,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 41,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart"
      });
    }
  });
  const title$ = dart.privateName(bloc_main_Page, "MyHomePage.title");
  bloc_main_Page.MyHomePage = class MyHomePage extends framework.StatefulWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    createState() {
      return new bloc_main_Page._MyHomePageState.new();
    }
  };
  (bloc_main_Page.MyHomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    bloc_main_Page.MyHomePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bloc_main_Page.MyHomePage.prototype;
  dart.addTypeTests(bloc_main_Page.MyHomePage);
  dart.setMethodSignature(bloc_main_Page.MyHomePage, () => ({
    __proto__: dart.getMethods(bloc_main_Page.MyHomePage.__proto__),
    createState: dart.fnType(bloc_main_Page._MyHomePageState, [])
  }));
  dart.setLibraryUri(bloc_main_Page.MyHomePage, "package:bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart");
  dart.setFieldSignature(bloc_main_Page.MyHomePage, () => ({
    __proto__: dart.getFields(bloc_main_Page.MyHomePage.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  const _bloc = dart.privateName(bloc_main_Page, "_bloc");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  let C8;
  let C7;
  let C6;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C18;
  let C17;
  let C22;
  let C23;
  let C24;
  let C21;
  let C20;
  let C27;
  let C26;
  let C25;
  let C30;
  let C29;
  let C28;
  let C33;
  let C34;
  let C35;
  let C32;
  let C31;
  let C38;
  let C37;
  let C36;
  let C41;
  let C40;
  let C39;
  let C44;
  let C43;
  let C42;
  let C47;
  let C48;
  let C49;
  let C46;
  let C45;
  let C52;
  let C53;
  let C51;
  let C50;
  let C56;
  let C57;
  let C58;
  let C55;
  let C54;
  bloc_main_Page._MyHomePageState = class _MyHomePageState extends framework.State$(bloc_main_Page.MyHomePage) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(this.widget.title, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new (StreamBuilderOfint()).new({stream: this[_bloc].stream, initialData: 0, builder: dart.fn((context, snapshot) => new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("You have pushed the button this many times:", {$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), new text.Text.new(dart.str(snapshot.data), {style: theme.Theme.of(context).textTheme.display1, $creationLocationd_0dea112b090073317d4: C9 || CT.C9})]), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), BuildContextAndAsyncSnapshotToCenter()), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), floatingActionButton: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new raised_button._RaisedButtonWithIcon.new({onPressed: dart.fn(() => this[_bloc].counterTypeSink.add(new counter_type.IncermentCounter.new()), VoidTovoid()), label: new text.Text.new("Increment", {$creationLocationd_0dea112b090073317d4: C25 || CT.C25}), icon: new icon.Icon.new(icons.Icons.add, {$creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), new raised_button._RaisedButtonWithIcon.new({onPressed: dart.fn(() => this[_bloc].counterTypeSink.add(new counter_type.DecrementCounter.new()), VoidTovoid()), label: new text.Text.new("Decrement", {$creationLocationd_0dea112b090073317d4: C39 || CT.C39}), icon: new icon.Icon.new(icons.Icons.minimize, {$creationLocationd_0dea112b090073317d4: C42 || CT.C42}), $creationLocationd_0dea112b090073317d4: C45 || CT.C45})]), $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54});
    }
  };
  (bloc_main_Page._MyHomePageState.new = function() {
    this[_bloc] = new myBloc.MyCounterBloc.new();
    bloc_main_Page._MyHomePageState.__proto__.new.call(this);
    ;
  }).prototype = bloc_main_Page._MyHomePageState.prototype;
  dart.addTypeTests(bloc_main_Page._MyHomePageState);
  dart.setMethodSignature(bloc_main_Page._MyHomePageState, () => ({
    __proto__: dart.getMethods(bloc_main_Page._MyHomePageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bloc_main_Page._MyHomePageState, "package:bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart");
  dart.setFieldSignature(bloc_main_Page._MyHomePageState, () => ({
    __proto__: dart.getFields(bloc_main_Page._MyHomePageState.__proto__),
    [_bloc]: dart.finalFieldType(myBloc.MyCounterBloc)
  }));
  dart.trackLibraries("packages/bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page", {
    "package:bloc_app/features/IncreDecre/presentation/pages/bloc_main_Page.dart": bloc_main_Page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bloc_main_Page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQe;;;;;;;AAGqB;IAAkB;;;QALpC;QAAU;;;AAAU,6DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAYzB;AACxB,YAAO,oCACK,+BACC,kBAAK,AAAO,wIAEf,wCACI,AAAM,iCACD,YACJ,SAAc,SAAuB,aACrC,6BACE,yCACgC,yCACnB,sBAChB,kBACE,uGAEF,kBACoB,SAAf,AAAS,QAAD,gBACE,AAAY,AAAU,eAAnB,OAAO,yTAOb,sCACiB,yCACnB,sBACH,wDACA,cAAM,AAAM,AAAgB,gCAAI,gEACpC,kBAAK,6EAAoB,kBAAW,oIAE7C,+BACS,+DAEI,wDACA,cAAM,AAAM,AAAgB,gCAAI,gEACpC,kBAAK,6EAAoB,kBAAW;IAIvD;;;IA5CM,cAAQ;;;EA6ChB","file":"bloc_main_Page.ddc.js"}');
  // Exports:
  return {
    features__IncreDecre__presentation__pages__bloc_main_Page: bloc_main_Page
  };
});

//# sourceMappingURL=bloc_main_Page.ddc.js.map
