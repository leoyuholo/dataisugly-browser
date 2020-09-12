webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Browser */ \"./components/Browser.js\");\n/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Image */ \"./components/Image.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.js\");\n/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/config */ \"./src/config.js\");\n/* harmony import */ var _src_lib_tagHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/lib/tagHelper */ \"./src/lib/tagHelper.js\");\nvar _this = undefined,\n    _jsxFileName = \"/bad-vis-browser/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Index = function Index(props) {\n  _s();\n\n  var _router$query;\n\n  var imageList = props.imageList;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"])();\n  var hasImageInQuery = router.asPath.indexOf('image=') !== -1;\n  var imageId = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.image;\n  var labelTags = Object(_src_lib_tagHelper__WEBPACK_IMPORTED_MODULE_7__[\"makeCatelog\"])(props.labelTags);\n  console.log(imageList);\n  imageList.images = imageList.images.map(function (image) {\n    return {\n      imageId: image.i,\n      thumbnailPath: image.t,\n      labels: image.l\n    };\n  });\n\n  if (!_src_config__WEBPACK_IMPORTED_MODULE_6__[\"default\"].isServer) {\n    console.log('Index', labelTags); // console.log('Index', hasImageInQuery, imageId, image)\n  }\n\n  return !hasImageInQuery ? __jsx(_components_Browser__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    imageList: imageList,\n    labelTags: labelTags,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 8\n    }\n  }) : !imageId ? __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 10\n    }\n  }) : __jsx(_components_Image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    imageId: imageId,\n    labelTags: labelTags,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(Index, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"]];\n});\n\n_c = Index;\nIndex.propTypes = {\n  imageList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array\n  }).isRequired,\n  labelTags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiaW1hZ2VMaXN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFzSW1hZ2VJblF1ZXJ5IiwiYXNQYXRoIiwiaW5kZXhPZiIsImltYWdlSWQiLCJxdWVyeSIsImltYWdlIiwibGFiZWxUYWdzIiwibWFrZUNhdGVsb2ciLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VzIiwibWFwIiwiaSIsInRodW1ibmFpbFBhdGgiLCJ0IiwibGFiZWxzIiwibCIsImNvbmZpZyIsImlzU2VydmVyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQUE7O0FBQUEsTUFDYkMsU0FEYSxHQUNDRCxLQURELENBQ2JDLFNBRGE7QUFFckIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBR0YsTUFBTSxDQUFDRyxNQUFQLENBQWNDLE9BQWQsQ0FBc0IsUUFBdEIsTUFBb0MsQ0FBQyxDQUE3RDtBQUNBLE1BQU1DLE9BQU8sb0JBQUdMLE1BQU0sQ0FBQ00sS0FBVixrREFBRyxjQUFjQyxLQUE5QjtBQUVBLE1BQU1DLFNBQVMsR0FBR0Msc0VBQVcsQ0FBQ1gsS0FBSyxDQUFDVSxTQUFQLENBQTdCO0FBRUFFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWixTQUFaO0FBQ0FBLFdBQVMsQ0FBQ2EsTUFBVixHQUFtQmIsU0FBUyxDQUFDYSxNQUFWLENBQWlCQyxHQUFqQixDQUFxQixVQUFBTixLQUFLO0FBQUEsV0FBSztBQUFFRixhQUFPLEVBQUVFLEtBQUssQ0FBQ08sQ0FBakI7QUFBb0JDLG1CQUFhLEVBQUVSLEtBQUssQ0FBQ1MsQ0FBekM7QUFBNENDLFlBQU0sRUFBRVYsS0FBSyxDQUFDVztBQUExRCxLQUFMO0FBQUEsR0FBMUIsQ0FBbkI7O0FBRUEsTUFBSSxDQUFDQyxtREFBTSxDQUFDQyxRQUFaLEVBQXNCO0FBQ3BCVixXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCSCxTQUFyQixFQURvQixDQUVwQjtBQUNEOztBQUVELFNBQU8sQ0FBQ04sZUFBRCxHQUNGLE1BQUMsMkRBQUQ7QUFBUyxhQUFTLEVBQUVILFNBQXBCO0FBQStCLGFBQVMsRUFBRVMsU0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURFLEdBRUgsQ0FBQ0gsT0FBRCxHQUNHLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURILEdBRUcsTUFBQyx5REFBRDtBQUFPLFdBQU8sRUFBRUEsT0FBaEI7QUFBeUIsYUFBUyxFQUFFRyxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSlA7QUFLRCxDQXJCRDs7R0FBTVgsSztVQUVXSSxxRDs7O0tBRlhKLEs7QUF1Qk5BLEtBQUssQ0FBQ3dCLFNBQU4sR0FBa0I7QUFDaEJ0QixXQUFTLEVBQUV1QixpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ3pCWCxVQUFNLEVBQUVVLGlEQUFTLENBQUNFO0FBRE8sR0FBaEIsRUFFUkMsVUFIYTtBQUloQmpCLFdBQVMsRUFBRWMsaURBQVMsQ0FBQ0k7QUFKTCxDQUFsQjs7QUFPZTdCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQnJvd3NlciBmcm9tICcuLi9jb21wb25lbnRzL0Jyb3dzZXInXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9JbWFnZSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZydcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vc3JjL2NvbmZpZydcbmltcG9ydCB7IG1ha2VDYXRlbG9nIH0gZnJvbSAnLi4vc3JjL2xpYi90YWdIZWxwZXInXG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGltYWdlTGlzdCB9ID0gcHJvcHNcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgaGFzSW1hZ2VJblF1ZXJ5ID0gcm91dGVyLmFzUGF0aC5pbmRleE9mKCdpbWFnZT0nKSAhPT0gLTFcbiAgY29uc3QgaW1hZ2VJZCA9IHJvdXRlci5xdWVyeT8uaW1hZ2VcblxuICBjb25zdCBsYWJlbFRhZ3MgPSBtYWtlQ2F0ZWxvZyhwcm9wcy5sYWJlbFRhZ3MpXG5cbiAgY29uc29sZS5sb2coaW1hZ2VMaXN0KVxuICBpbWFnZUxpc3QuaW1hZ2VzID0gaW1hZ2VMaXN0LmltYWdlcy5tYXAoaW1hZ2UgPT4gKHsgaW1hZ2VJZDogaW1hZ2UuaSwgdGh1bWJuYWlsUGF0aDogaW1hZ2UudCwgbGFiZWxzOiBpbWFnZS5sIH0pKVxuXG4gIGlmICghY29uZmlnLmlzU2VydmVyKSB7XG4gICAgY29uc29sZS5sb2coJ0luZGV4JywgbGFiZWxUYWdzKVxuICAgIC8vIGNvbnNvbGUubG9nKCdJbmRleCcsIGhhc0ltYWdlSW5RdWVyeSwgaW1hZ2VJZCwgaW1hZ2UpXG4gIH1cblxuICByZXR1cm4gIWhhc0ltYWdlSW5RdWVyeVxuICAgID8gKDxCcm93c2VyIGltYWdlTGlzdD17aW1hZ2VMaXN0fSBsYWJlbFRhZ3M9e2xhYmVsVGFnc30gLz4pXG4gICAgOiAhaW1hZ2VJZFxuICAgICAgPyAoPExvYWRpbmcgLz4pXG4gICAgICA6ICg8SW1hZ2UgaW1hZ2VJZD17aW1hZ2VJZH0gbGFiZWxUYWdzPXtsYWJlbFRhZ3N9IC8+KVxufVxuXG5JbmRleC5wcm9wVHlwZXMgPSB7XG4gIGltYWdlTGlzdDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheVxuICB9KS5pc1JlcXVpcmVkLFxuICBsYWJlbFRhZ3M6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IFtpbWFnZUxpc3QsIGxhYmVsVGFnc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBmZXRjaChjb25maWcuaW1hZ2VMaXN0cy5kaXIudXJsKS50aGVuKHIgPT4gci5qc29uKCkpLFxuICAgICAgZmV0Y2goY29uZmlnLmxhYmVsVGFncy51cmwpXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgXSlcblxuICAgIHJldHVybiB7IHByb3BzOiB7IGltYWdlTGlzdCwgbGFiZWxUYWdzIH0gfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdnZXRTdGF0aWNQcm9wcyBlcnJvcjonLCBlcnJvcilcbiAgICByZXR1cm4geyBwcm9wczogeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9IH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})