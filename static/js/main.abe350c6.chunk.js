(this.webpackJsonpjavascript_calculator=this.webpackJsonpjavascript_calculator||[]).push([[0],[,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Documents_WebDev_freecodecamp_3_FrontEndLibraries_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),D_Documents_WebDev_freecodecamp_3_FrontEndLibraries_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),D_Documents_WebDev_freecodecamp_3_FrontEndLibraries_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),D_Documents_WebDev_freecodecamp_3_FrontEndLibraries_javascript_calculator_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),D_Documents_WebDev_freecodecamp_3_FrontEndLibraries_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_shared_touchpadNumbers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),_shared_touchpadOperations__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8),Calculator=function(_Component){Object(D_Documents_WebDev_freecodecamp_3_FrontEndLibraries_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_Component);var _super=Object(D_Documents_WebDev_freecodecamp_3_FrontEndLibraries_javascript_calculator_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator);function Calculator(e){var _;return Object(D_Documents_WebDev_freecodecamp_3_FrontEndLibraries_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),(_=_super.call(this,e)).state={input:"",output:0,reset:!1},_.handleAddNumber=_.handleAddNumber.bind(Object(D_Documents_WebDev_freecodecamp_3_FrontEndLibraries_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleClear=_.handleClear.bind(Object(D_Documents_WebDev_freecodecamp_3_FrontEndLibraries_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleDecimal=_.handleDecimal.bind(Object(D_Documents_WebDev_freecodecamp_3_FrontEndLibraries_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleOperator=_.handleOperator.bind(Object(D_Documents_WebDev_freecodecamp_3_FrontEndLibraries_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.evaluate=_.evaluate.bind(Object(D_Documents_WebDev_freecodecamp_3_FrontEndLibraries_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_}return Object(D_Documents_WebDev_freecodecamp_3_FrontEndLibraries_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"handleClear",value:function(){this.setState({input:"",output:0,reset:!1})}},{key:"handleAddNumber",value:function(e){var _=e.target.innerText;this.state.reset&&"0"!==_?this.setState({input:_,output:0,reset:!1}):"0"===_&&""===this.state.input||this.setState({input:this.state.input+_,reset:!1})}},{key:"handleDecimal",value:function(e){/\.[0-9]*$/.test(this.state.input)||this.setState({input:this.state.input+".",reset:!1})}},{key:"handleOperator",value:function(e){var _=this.state.input,t=e.target.innerText;this.state.reset&&this.setState({reset:!1}),"x"===t&&(t="*"),""===_?this.setState({input:this.state.output.toString()+t}):/[0-9.-{1}]$/.test(_)?this.setState({input:this.state.input+t}):"-"!==t||/-$/.test(_)?this.setState({input:this.state.input.replace(/[*+-/]*$/,"")+t}):this.setState({input:this.state.input+t})}},{key:"evaluate",value:function evaluate(){var final=eval(this.state.input.replace(/[*+-/]*$/,""),"{0:F2}");this.setState({output:final,input:final,reset:!0})}},{key:"render",value:function(){var e=this,_=_shared_touchpadNumbers__WEBPACK_IMPORTED_MODULE_6__.a.map((function(_){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:_.id,className:"number key",key:_.value,onClick:e.handleAddNumber},_.value)})),t=_shared_touchpadOperations__WEBPACK_IMPORTED_MODULE_7__.a.map((function(_){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:_.id,className:"operation key",key:_.value,onClick:e.handleOperator},_.value)}));return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"displayBlock"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{id:"display"},""===this.state.input?0:this.state.input),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{id:"output"},this.state.output)),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"touchpad"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"inputElementsMain"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"clear",className:"key",onClick:this.handleClear},"AC"),_,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"decimal",className:"key",onClick:this.handleDecimal},".")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"inputElementsOps"},t,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"equals",className:"key",onClick:this.evaluate},"="))))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=Calculator},,,function(e,_,t){"use strict";t.d(_,"a",(function(){return a}));var a=[{id:"seven",value:7},{id:"eight",value:8},{id:"nine",value:9},{id:"four",value:4},{id:"five",value:5},{id:"six",value:6},{id:"one",value:1},{id:"two",value:2},{id:"three",value:3},{id:"zero",value:0}]},function(e,_,t){"use strict";t.d(_,"a",(function(){return a}));var a=[{id:"divide",value:"/"},{id:"multiply",value:"x"},{id:"subtract",value:"-"},{id:"add",value:"+"}]},,,function(e,_,t){e.exports=t(18)},,,,,function(e,_,t){},function(e,_,t){},function(e,_,t){"use strict";t.r(_);var a=t(0),r=t.n(a),i=t(3),n=t.n(i),s=(t(16),t(17),t(4));var l=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.abe350c6.chunk.js.map