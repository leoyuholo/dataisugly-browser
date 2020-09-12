webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Browser */ \"./components/Browser.js\");\n/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Image */ \"./components/Image.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.js\");\n/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/config */ \"./src/config.js\");\n/* harmony import */ var _src_lib_tagHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/lib/tagHelper */ \"./src/lib/tagHelper.js\");\nvar _this = undefined,\n    _jsxFileName = \"/bad-vis-browser/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Index = function Index(props) {\n  _s();\n\n  var _router$query;\n\n  var imageList = props.imageList;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"])();\n  var hasImageInQuery = router.asPath.indexOf('image=') !== -1;\n  var imageId = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.image;\n  var labelTags = Object(_src_lib_tagHelper__WEBPACK_IMPORTED_MODULE_7__[\"makeCatelog\"])(props.labelTags);\n  console.log(imageList); // imageList.images = imageList?.images?.map?.(i => ({ imageId: i.i, thumbnailPath: i.t, labels: i.l }))\n\n  if (!_src_config__WEBPACK_IMPORTED_MODULE_6__[\"default\"].isServer) {\n    console.log('Index', labelTags); // console.log('Index', hasImageInQuery, imageId, image)\n  }\n\n  return !hasImageInQuery ? __jsx(_components_Browser__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    imageList: imageList,\n    labelTags: labelTags,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 8\n    }\n  }) : !imageId ? __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 10\n    }\n  }) : __jsx(_components_Image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    imageId: imageId,\n    labelTags: labelTags,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(Index, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"]];\n});\n\n_c = Index;\nIndex.propTypes = {\n  imageList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array\n  }).isRequired,\n  labelTags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiaW1hZ2VMaXN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFzSW1hZ2VJblF1ZXJ5IiwiYXNQYXRoIiwiaW5kZXhPZiIsImltYWdlSWQiLCJxdWVyeSIsImltYWdlIiwibGFiZWxUYWdzIiwibWFrZUNhdGVsb2ciLCJjb25zb2xlIiwibG9nIiwiY29uZmlnIiwiaXNTZXJ2ZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImltYWdlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQTs7QUFBQSxNQUNiQyxTQURhLEdBQ0NELEtBREQsQ0FDYkMsU0FEYTtBQUVyQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHRixNQUFNLENBQUNHLE1BQVAsQ0FBY0MsT0FBZCxDQUFzQixRQUF0QixNQUFvQyxDQUFDLENBQTdEO0FBQ0EsTUFBTUMsT0FBTyxvQkFBR0wsTUFBTSxDQUFDTSxLQUFWLGtEQUFHLGNBQWNDLEtBQTlCO0FBRUEsTUFBTUMsU0FBUyxHQUFHQyxzRUFBVyxDQUFDWCxLQUFLLENBQUNVLFNBQVAsQ0FBN0I7QUFFQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlaLFNBQVosRUFScUIsQ0FTckI7O0FBRUEsTUFBSSxDQUFDYSxtREFBTSxDQUFDQyxRQUFaLEVBQXNCO0FBQ3BCSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCSCxTQUFyQixFQURvQixDQUVwQjtBQUNEOztBQUVELFNBQU8sQ0FBQ04sZUFBRCxHQUNGLE1BQUMsMkRBQUQ7QUFBUyxhQUFTLEVBQUVILFNBQXBCO0FBQStCLGFBQVMsRUFBRVMsU0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURFLEdBRUgsQ0FBQ0gsT0FBRCxHQUNHLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURILEdBRUcsTUFBQyx5REFBRDtBQUFPLFdBQU8sRUFBRUEsT0FBaEI7QUFBeUIsYUFBUyxFQUFFRyxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSlA7QUFLRCxDQXJCRDs7R0FBTVgsSztVQUVXSSxxRDs7O0tBRlhKLEs7QUF1Qk5BLEtBQUssQ0FBQ2lCLFNBQU4sR0FBa0I7QUFDaEJmLFdBQVMsRUFBRWdCLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDekJDLFVBQU0sRUFBRUYsaURBQVMsQ0FBQ0c7QUFETyxHQUFoQixFQUVSQyxVQUhhO0FBSWhCWCxXQUFTLEVBQUVPLGlEQUFTLENBQUNLO0FBSkwsQ0FBbEI7O0FBT2V2QixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJyb3dzZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ccm93c2VyJ1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2UnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL3NyYy9jb25maWcnXG5pbXBvcnQgeyBtYWtlQ2F0ZWxvZyB9IGZyb20gJy4uL3NyYy9saWIvdGFnSGVscGVyJ1xuXG5jb25zdCBJbmRleCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBpbWFnZUxpc3QgfSA9IHByb3BzXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGhhc0ltYWdlSW5RdWVyeSA9IHJvdXRlci5hc1BhdGguaW5kZXhPZignaW1hZ2U9JykgIT09IC0xXG4gIGNvbnN0IGltYWdlSWQgPSByb3V0ZXIucXVlcnk/LmltYWdlXG5cbiAgY29uc3QgbGFiZWxUYWdzID0gbWFrZUNhdGVsb2cocHJvcHMubGFiZWxUYWdzKVxuXG4gIGNvbnNvbGUubG9nKGltYWdlTGlzdClcbiAgLy8gaW1hZ2VMaXN0LmltYWdlcyA9IGltYWdlTGlzdD8uaW1hZ2VzPy5tYXA/LihpID0+ICh7IGltYWdlSWQ6IGkuaSwgdGh1bWJuYWlsUGF0aDogaS50LCBsYWJlbHM6IGkubCB9KSlcblxuICBpZiAoIWNvbmZpZy5pc1NlcnZlcikge1xuICAgIGNvbnNvbGUubG9nKCdJbmRleCcsIGxhYmVsVGFncylcbiAgICAvLyBjb25zb2xlLmxvZygnSW5kZXgnLCBoYXNJbWFnZUluUXVlcnksIGltYWdlSWQsIGltYWdlKVxuICB9XG5cbiAgcmV0dXJuICFoYXNJbWFnZUluUXVlcnlcbiAgICA/ICg8QnJvd3NlciBpbWFnZUxpc3Q9e2ltYWdlTGlzdH0gbGFiZWxUYWdzPXtsYWJlbFRhZ3N9IC8+KVxuICAgIDogIWltYWdlSWRcbiAgICAgID8gKDxMb2FkaW5nIC8+KVxuICAgICAgOiAoPEltYWdlIGltYWdlSWQ9e2ltYWdlSWR9IGxhYmVsVGFncz17bGFiZWxUYWdzfSAvPilcbn1cblxuSW5kZXgucHJvcFR5cGVzID0ge1xuICBpbWFnZUxpc3Q6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlcbiAgfSkuaXNSZXF1aXJlZCxcbiAgbGFiZWxUYWdzOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBbaW1hZ2VMaXN0LCBsYWJlbFRhZ3NdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZmV0Y2goY29uZmlnLmltYWdlTGlzdHMuZGlyLnVybCkudGhlbihyID0+IHIuanNvbigpKSxcbiAgICAgIGZldGNoKGNvbmZpZy5sYWJlbFRhZ3MudXJsKVxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgIF0pXG5cbiAgICByZXR1cm4geyBwcm9wczogeyBpbWFnZUxpc3QsIGxhYmVsVGFncyB9IH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnZ2V0U3RhdGljUHJvcHMgZXJyb3I6JywgZXJyb3IpXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})