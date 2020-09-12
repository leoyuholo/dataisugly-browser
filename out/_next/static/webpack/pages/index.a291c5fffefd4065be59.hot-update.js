webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Gallery.js":
/*!*******************************!*\
  !*** ./components/Gallery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/config */ \"./src/config.js\");\n/* harmony import */ var _ImageCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageCard */ \"./components/ImageCard.js\");\n/* harmony import */ var _ImageDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImageDetail */ \"./components/ImageDetail.js\");\nvar _this = undefined,\n    _jsxFileName = \"/bad-vis-browser/components/Gallery.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      flexGrow: 1\n    },\n    container: {\n      justifyContent: 'center'\n    }\n  };\n});\n\nvar Gallery = function Gallery(props) {\n  _s();\n\n  var imageList = props.imageList,\n      labelTags = props.labelTags;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(-1),\n      imageIdx = _useState2[0],\n      setImageIdx = _useState2[1];\n\n  var handleClickOpen = function handleClickOpen(index) {\n    return function (event) {\n      var image = imageList[index];\n      var href = \"\".concat(_src_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].rootPath, \"/?image=\").concat(image.image_name);\n      window.history.pushState(null, '', href);\n      setImageIdx(index);\n      setOpen(true);\n    };\n  };\n\n  var handleClose = function handleClose() {\n    setOpen(false);\n    setImageIdx(-1);\n    var href = \"\".concat(_src_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].rootPath, \"/\");\n    window.history.pushState(null, '', href);\n  };\n\n  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    className: classes.root,\n    container: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    className: classes.container,\n    item: true,\n    container: true,\n    xs: 12,\n    spacing: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, imageList.map(function (image, index) {\n    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      key: image.imageId,\n      item: true,\n      onClick: handleClickOpen(index),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }\n    }, __jsx(_ImageCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      image: image,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }\n    }));\n  }), __jsx(_ImageDetail__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    open: open,\n    labelTags: labelTags,\n    image: imageList[imageIdx],\n    handleClose: handleClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Gallery, \"dR7fDnY9kLXvv5B6jJJaW+2mpeE=\", false, function () {\n  return [useStyles];\n});\n\n_c = Gallery;\nGallery.propTypes = {\n  imageList: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,\n  labelTags: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\n\nvar _c;\n\n$RefreshReg$(_c, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYWxsZXJ5LmpzP2Y0MjMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiY29udGFpbmVyIiwianVzdGlmeUNvbnRlbnQiLCJHYWxsZXJ5IiwicHJvcHMiLCJpbWFnZUxpc3QiLCJsYWJlbFRhZ3MiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImltYWdlSWR4Iiwic2V0SW1hZ2VJZHgiLCJoYW5kbGVDbGlja09wZW4iLCJpbmRleCIsImV2ZW50IiwiaW1hZ2UiLCJocmVmIiwiY29uZmlnIiwicm9vdFBhdGgiLCJpbWFnZV9uYW1lIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImhhbmRsZUNsb3NlIiwibWFwIiwiaW1hZ2VJZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUU7QUFETixLQUQrQjtBQUlyQ0MsYUFBUyxFQUFFO0FBQ1RDLG9CQUFjLEVBQUU7QUFEUDtBQUowQixHQUFMO0FBQUEsQ0FBTixDQUE1Qjs7QUFTQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQSxNQUNmQyxTQURlLEdBQ1VELEtBRFYsQ0FDZkMsU0FEZTtBQUFBLE1BQ0pDLFNBREksR0FDVUYsS0FEVixDQUNKRSxTQURJO0FBRXZCLE1BQU1DLE9BQU8sR0FBR1gsU0FBUyxFQUF6Qjs7QUFGdUIsa0JBSUNZLHNEQUFRLENBQUMsS0FBRCxDQUpUO0FBQUEsTUFJaEJDLElBSmdCO0FBQUEsTUFJVkMsT0FKVTs7QUFBQSxtQkFLU0Ysc0RBQVEsQ0FBQyxDQUFDLENBQUYsQ0FMakI7QUFBQSxNQUtoQkcsUUFMZ0I7QUFBQSxNQUtOQyxXQUxNOztBQU12QixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxXQUFXLFVBQUNDLEtBQUQsRUFBVztBQUM1QyxVQUFNQyxLQUFLLEdBQUdYLFNBQVMsQ0FBQ1MsS0FBRCxDQUF2QjtBQUNBLFVBQU1HLElBQUksYUFBTUMsbURBQU0sQ0FBQ0MsUUFBYixxQkFBZ0NILEtBQUssQ0FBQ0ksVUFBdEMsQ0FBVjtBQUNBQyxZQUFNLENBQUNDLE9BQVAsQ0FBZUMsU0FBZixDQUF5QixJQUF6QixFQUErQixFQUEvQixFQUFtQ04sSUFBbkM7QUFDQUwsaUJBQVcsQ0FBQ0UsS0FBRCxDQUFYO0FBQ0FKLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxLQU51QjtBQUFBLEdBQXhCOztBQU9BLE1BQU1jLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJkLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQUUsZUFBVyxDQUFDLENBQUMsQ0FBRixDQUFYO0FBQ0EsUUFBTUssSUFBSSxhQUFNQyxtREFBTSxDQUFDQyxRQUFiLE1BQVY7QUFDQUUsVUFBTSxDQUFDQyxPQUFQLENBQWVDLFNBQWYsQ0FBeUIsSUFBekIsRUFBK0IsRUFBL0IsRUFBbUNOLElBQW5DO0FBQ0QsR0FMRDs7QUFPQSxTQUNFLE1BQUMsOERBQUQ7QUFBTSxhQUFTLEVBQUVWLE9BQU8sQ0FBQ1IsSUFBekI7QUFBK0IsYUFBUyxNQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFNLGFBQVMsRUFBRVEsT0FBTyxDQUFDTixTQUF6QjtBQUFvQyxRQUFJLE1BQXhDO0FBQXlDLGFBQVMsTUFBbEQ7QUFBbUQsTUFBRSxFQUFFLEVBQXZEO0FBQTJELFdBQU8sRUFBRSxDQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dJLFNBQVMsQ0FBQ29CLEdBQVYsQ0FBYyxVQUFDVCxLQUFELEVBQVFGLEtBQVI7QUFBQSxXQUNiLE1BQUMsOERBQUQ7QUFBTSxTQUFHLEVBQUVFLEtBQUssQ0FBQ1UsT0FBakI7QUFBMEIsVUFBSSxNQUE5QjtBQUErQixhQUFPLEVBQUViLGVBQWUsQ0FBQ0MsS0FBRCxDQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrREFBRDtBQUFXLFdBQUssRUFBRUUsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRGE7QUFBQSxHQUFkLENBREgsRUFNRSxNQUFDLG9EQUFEO0FBQWEsUUFBSSxFQUFFUCxJQUFuQjtBQUF5QixhQUFTLEVBQUVILFNBQXBDO0FBQStDLFNBQUssRUFBRUQsU0FBUyxDQUFDTSxRQUFELENBQS9EO0FBQTJFLGVBQVcsRUFBRWEsV0FBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsQ0FERjtBQVlELENBaENEOztHQUFNckIsTztVQUVZUCxTOzs7S0FGWk8sTztBQWtDTkEsT0FBTyxDQUFDd0IsU0FBUixHQUFvQjtBQUNsQnRCLFdBQVMsRUFBRXVCLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0JDLFVBRFQ7QUFFbEJ4QixXQUFTLEVBQUVzQixpREFBUyxDQUFDRztBQUZILENBQXBCO0FBS2U1QixzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvR2FsbGVyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL3NyYy9jb25maWcnXG5pbXBvcnQgSW1hZ2VDYXJkIGZyb20gJy4vSW1hZ2VDYXJkJ1xuaW1wb3J0IEltYWdlRGV0YWlsIGZyb20gJy4vSW1hZ2VEZXRhaWwnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICB9XG59KSlcblxuY29uc3QgR2FsbGVyeSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBpbWFnZUxpc3QsIGxhYmVsVGFncyB9ID0gcHJvcHNcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbWFnZUlkeCwgc2V0SW1hZ2VJZHhdID0gdXNlU3RhdGUoLTEpXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9IChpbmRleCkgPT4gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBpbWFnZUxpc3RbaW5kZXhdXG4gICAgY29uc3QgaHJlZiA9IGAke2NvbmZpZy5yb290UGF0aH0vP2ltYWdlPSR7aW1hZ2UuaW1hZ2VfbmFtZX1gXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCBocmVmKVxuICAgIHNldEltYWdlSWR4KGluZGV4KVxuICAgIHNldE9wZW4odHJ1ZSlcbiAgfVxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKVxuICAgIHNldEltYWdlSWR4KC0xKVxuICAgIGNvbnN0IGhyZWYgPSBgJHtjb25maWcucm9vdFBhdGh9L2BcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIGhyZWYpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBjb250YWluZXI+XG4gICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBpdGVtIGNvbnRhaW5lciB4cz17MTJ9IHNwYWNpbmc9ezF9PlxuICAgICAgICB7aW1hZ2VMaXN0Lm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEdyaWQga2V5PXtpbWFnZS5pbWFnZUlkfSBpdGVtIG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3BlbihpbmRleCl9PlxuICAgICAgICAgICAgPEltYWdlQ2FyZCBpbWFnZT17aW1hZ2V9IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgICAgPEltYWdlRGV0YWlsIG9wZW49e29wZW59IGxhYmVsVGFncz17bGFiZWxUYWdzfSBpbWFnZT17aW1hZ2VMaXN0W2ltYWdlSWR4XX0gaGFuZGxlQ2xvc2U9e2hhbmRsZUNsb3NlfSAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKVxufVxuXG5HYWxsZXJ5LnByb3BUeXBlcyA9IHtcbiAgaW1hZ2VMaXN0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgbGFiZWxUYWdzOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Gallery.js\n");

/***/ })

})