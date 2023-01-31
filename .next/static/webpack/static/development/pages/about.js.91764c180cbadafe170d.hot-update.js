webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/adji/Documents/portofolio/profile/components/Navbar.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Navbar(_ref) {\n  var _this = this;\n\n  var router = _ref.router;\n  var navs = [{\n    text: 'Home',\n    href: '/'\n  }, {\n    text: 'About',\n    href: '/about'\n  }, {\n    text: 'Portfolio',\n    href: '/portfolio'\n  }, {\n    text: 'Contact',\n    href: '/contact'\n  } // { text: '', href: '' },\n  ];\n  return __jsx(\"nav\", {\n    className: \"navbar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, \"Djie\")), __jsx(\"ul\", {\n    className: \"nav-links\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, navs.map(function (nav) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 13\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: nav.href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      className: \"nav-item \".concat(router.pathname == nav.href ? 'active' : ''),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 39\n      }\n    }, nav.text)));\n  }))));\n}\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Navbar));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Navbar\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci5qc3g/NjM0ZCJdLCJuYW1lcyI6WyJOYXZiYXIiLCJyb3V0ZXIiLCJuYXZzIiwidGV4dCIsImhyZWYiLCJtYXAiLCJuYXYiLCJwYXRobmFtZSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDMUIsTUFBTUMsSUFBSSxHQUFHLENBQ1g7QUFBRUMsUUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFFBQUksRUFBRTtBQUF0QixHQURXLEVBRVg7QUFBRUQsUUFBSSxFQUFFLE9BQVI7QUFBaUJDLFFBQUksRUFBRTtBQUF2QixHQUZXLEVBR1g7QUFBRUQsUUFBSSxFQUFFLFdBQVI7QUFBcUJDLFFBQUksRUFBRTtBQUEzQixHQUhXLEVBSVg7QUFBRUQsUUFBSSxFQUFFLFNBQVI7QUFBbUJDLFFBQUksRUFBRTtBQUF6QixHQUpXLENBS1g7QUFMVyxHQUFiO0FBUUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLENBREYsRUFJRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUYsSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQUMsR0FBRztBQUFBLFdBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVBLEdBQUcsQ0FBQ0YsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFzQjtBQUFHLGVBQVMscUJBQWVILE1BQU0sQ0FBQ00sUUFBUCxJQUFtQkQsR0FBRyxDQUFDRixJQUF2QixHQUE4QixRQUE5QixHQUF5QyxFQUF4RCxDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNEVFLEdBQUcsQ0FBQ0gsSUFBaEYsQ0FBdEIsQ0FBSixDQURZO0FBQUEsR0FBWixDQURKLENBSkYsQ0FERixDQURGO0FBY0Q7O0tBdkJRSCxNO0FBeUJNLHFFQUFBUSw4REFBVSxDQUFDUixNQUFELENBQXpCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZiYXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcih7IHJvdXRlciB9KSB7XHJcbiAgY29uc3QgbmF2cyA9IFtcclxuICAgIHsgdGV4dDogJ0hvbWUnLCBocmVmOiAnLycgfSxcclxuICAgIHsgdGV4dDogJ0Fib3V0JywgaHJlZjogJy9hYm91dCcgfSxcclxuICAgIHsgdGV4dDogJ1BvcnRmb2xpbycsIGhyZWY6ICcvcG9ydGZvbGlvJyB9LFxyXG4gICAgeyB0ZXh0OiAnQ29udGFjdCcsIGhyZWY6ICcvY29udGFjdCcgfSxcclxuICAgIC8vIHsgdGV4dDogJycsIGhyZWY6ICcnIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvXCI+RGppZTwvYT48L0xpbms+XHJcblxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cclxuICAgICAgICAgIHsgbmF2cy5tYXAobmF2ID0+IChcclxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e25hdi5ocmVmfT48YSBjbGFzc05hbWU9e2BuYXYtaXRlbSAkeyByb3V0ZXIucGF0aG5hbWUgPT0gbmF2LmhyZWYgPyAnYWN0aXZlJyA6ICcnIH1gfT57bmF2LnRleHR9PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgKSkgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihOYXZiYXIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n");

/***/ })

})