webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FilterMenuWidgets/SimpleTagTray.js":
/*!*******************************************************!*\
  !*** ./components/FilterMenuWidgets/SimpleTagTray.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Chip */ \"./node_modules/@material-ui/core/esm/Chip/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Info */ \"./node_modules/@material-ui/icons/Info.js\");\n/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ \"./node_modules/lodash/noop.js\");\n/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/sortBy */ \"./node_modules/lodash/sortBy.js\");\n/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/bad-vis-browser/components/FilterMenuWidgets/SimpleTagTray.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      display: 'flex',\n      // justifyContent: 'center',\n      flexWrap: 'wrap',\n      '& > *': {\n        margin: theme.spacing(0.4)\n      }\n    }\n  };\n});\n\nvar SimpleTagTray = function SimpleTagTray(props) {\n  _s();\n\n  var tags = props.tags,\n      sorted = props.sorted,\n      tagsState = props.tagsState,\n      filteredImageCounts = props.filteredImageCounts,\n      onClick = props.onClick,\n      onTagMouseEnter = props.onTagMouseEnter,\n      onTagMouseLeave = props.onTagMouseLeave;\n  var classes = useStyles();\n\n  var handleClick = function handleClick(tag) {\n    return function (event) {\n      onClick && onClick(tag);\n    };\n  };\n\n  var handleTagMouseEnter = function handleTagMouseEnter(tag) {\n    return function (event) {\n      onTagMouseEnter && onTagMouseEnter(event, tag);\n    };\n  };\n\n  var handleTagMouseLeave = function handleTagMouseLeave(tag) {\n    return function (event) {\n      onTagMouseLeave && onTagMouseLeave(event, tag);\n    };\n  };\n\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, (sorted ? tags : lodash_sortBy__WEBPACK_IMPORTED_MODULE_4___default()(tags.filter(function (t) {\n    return filteredImageCounts[t.tag] !== 0;\n  }), 'count').reverse()).map(function (tag) {\n    return (// {(sorted ? tags : sortBy(tags, 'count').reverse()).map(tag => (\n      __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        key: tag.tag,\n        disabled: filteredImageCounts[tag.tag] === 0,\n        variant: tagsState[tag.tag] ? undefined : 'outlined',\n        size: \"small\",\n        label: \"\".concat(tag.name, \" (\").concat(filteredImageCounts[tag.tag], \")\"),\n        onDelete: !tag.description ? undefined : lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a // use deleteIcon as infoIcon\n        ,\n        deleteIcon: !tag.description ? undefined : __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          fontSize: \"small\",\n          onMouseEnter: handleTagMouseEnter(tag),\n          onMouseLeave: handleTagMouseLeave(tag),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }\n        }),\n        onClick: handleClick(tag),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 9\n        }\n      })\n    );\n  }));\n};\n\n_s(SimpleTagTray, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = SimpleTagTray;\nSimpleTagTray.propTypes = {\n  tags: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].shape({\n    tag: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].string,\n    name: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].string,\n    description: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].string,\n    count: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].number\n  })),\n  sorted: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].bool,\n  tagsState: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].object,\n  filteredImageCounts: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].objectOf(prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].number),\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].func,\n  onTagMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].func,\n  onTagMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleTagTray);\n\nvar _c;\n\n$RefreshReg$(_c, \"SimpleTagTray\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJNZW51V2lkZ2V0cy9TaW1wbGVUYWdUcmF5LmpzP2RiMjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcmdpbiIsInNwYWNpbmciLCJTaW1wbGVUYWdUcmF5IiwicHJvcHMiLCJ0YWdzIiwic29ydGVkIiwidGFnc1N0YXRlIiwiZmlsdGVyZWRJbWFnZUNvdW50cyIsIm9uQ2xpY2siLCJvblRhZ01vdXNlRW50ZXIiLCJvblRhZ01vdXNlTGVhdmUiLCJjbGFzc2VzIiwiaGFuZGxlQ2xpY2siLCJ0YWciLCJldmVudCIsImhhbmRsZVRhZ01vdXNlRW50ZXIiLCJoYW5kbGVUYWdNb3VzZUxlYXZlIiwic29ydEJ5IiwiZmlsdGVyIiwidCIsInJldmVyc2UiLCJtYXAiLCJ1bmRlZmluZWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJub29wIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwiY291bnQiLCJudW1iZXIiLCJib29sIiwib2JqZWN0Iiwib2JqZWN0T2YiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNyQ0MsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUo7QUFDQUMsY0FBUSxFQUFFLE1BSE47QUFJSixlQUFTO0FBQ1BDLGNBQU0sRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsR0FBZDtBQUREO0FBSkw7QUFEK0IsR0FBTDtBQUFBLENBQU4sQ0FBNUI7O0FBV0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFB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QUFkLEdBQTBCO0FBQ3hCdEIsTUFBSSxFQUFFdUIsb0RBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsb0RBQVMsQ0FBQ0UsS0FBVixDQUFnQjtBQUN0Q2hCLE9BQUcsRUFBRWMsb0RBQVMsQ0FBQ0csTUFEdUI7QUFFdENQLFFBQUksRUFBRUksb0RBQVMsQ0FBQ0csTUFGc0I7QUFHdENOLGVBQVcsRUFBRUcsb0RBQVMsQ0FBQ0csTUFIZTtBQUl0Q0MsU0FBSyxFQUFFSixvREFBUyxDQUFDSztBQUpxQixHQUFoQixDQUFsQixDQURrQjtBQU94QjNCLFFBQU0sRUFBRXNCLG9EQUFTLENBQUNNLElBUE07QUFReEIzQixXQUFTLEVBQUVxQixvREFBUyxDQUFDTyxNQVJHO0FBU3hCM0IscUJBQW1CLEVBQUVvQixvREFBUyxDQUFDUSxRQUFWLENBQW1CUixvREFBUyxDQUFDSyxNQUE3QixDQVRHO0FBVXhCeEIsU0FBTyxFQUFFbUIsb0RBQVMsQ0FBQ1MsSUFWSztBQVd4QjNCLGlCQUFlLEVBQUVrQixvREFBUyxDQUFDUyxJQVhIO0FBWXhCMUIsaUJBQWUsRUFBRWlCLG9EQUFTLENBQUNTO0FBWkgsQ0FBMUI7QUFlZWxDLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaWx0ZXJNZW51V2lkZ2V0cy9TaW1wbGVUYWdUcmF5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCdcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luZm8nXG5pbXBvcnQgbm9vcCBmcm9tICdsb2Rhc2gvbm9vcCdcbmltcG9ydCBzb3J0QnkgZnJvbSAnbG9kYXNoL3NvcnRCeSdcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAvLyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAnJiA+IConOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMC40KVxuICAgIH1cbiAgfVxufSkpXG5cbmNvbnN0IFNpbXBsZVRhZ1RyYXkgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0YWdzLCBzb3J0ZWQsIHRhZ3NTdGF0ZSwgZmlsdGVyZWRJbWFnZUNvdW50cywgb25DbGljaywgb25UYWdNb3VzZUVudGVyLCBvblRhZ01vdXNlTGVhdmUgfSA9IHByb3BzXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHRhZykgPT4gKGV2ZW50KSA9PiB7XG4gICAgb25DbGljayAmJiBvbkNsaWNrKHRhZylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVRhZ01vdXNlRW50ZXIgPSAodGFnKSA9PiAoZXZlbnQpID0+IHtcbiAgICBvblRhZ01vdXNlRW50ZXIgJiYgb25UYWdNb3VzZUVudGVyKGV2ZW50LCB0YWcpXG4gIH1cblxuICBjb25zdCBoYW5kbGVUYWdNb3VzZUxlYXZlID0gKHRhZykgPT4gKGV2ZW50KSA9PiB7XG4gICAgb25UYWdNb3VzZUxlYXZlICYmIG9uVGFnTW91c2VMZWF2ZShldmVudCwgdGFnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIHsoc29ydGVkID8gdGFncyA6IHNvcnRCeSh0YWdzLmZpbHRlcih0ID0+IGZpbHRlcmVkSW1hZ2VDb3VudHNbdC50YWddICE9PSAwKSwgJ2NvdW50JykucmV2ZXJzZSgpKS5tYXAodGFnID0+IChcbiAgICAgICAgLy8geyhzb3J0ZWQgPyB0YWdzIDogc29ydEJ5KHRhZ3MsICdjb3VudCcpLnJldmVyc2UoKSkubWFwKHRhZyA9PiAoXG4gICAgICAgIDxDaGlwXG4gICAgICAgICAga2V5PXt0YWcudGFnfVxuICAgICAgICAgIGRpc2FibGVkPXtmaWx0ZXJlZEltYWdlQ291bnRzW3RhZy50YWddID09PSAwfVxuICAgICAgICAgIHZhcmlhbnQ9e3RhZ3NTdGF0ZVt0YWcudGFnXSA/IHVuZGVmaW5lZCA6ICdvdXRsaW5lZCd9XG4gICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgbGFiZWw9e2Ake3RhZy5uYW1lfSAoJHtmaWx0ZXJlZEltYWdlQ291bnRzW3RhZy50YWddfSlgfVxuICAgICAgICAgIG9uRGVsZXRlPXshdGFnLmRlc2NyaXB0aW9uID8gdW5kZWZpbmVkIDogbm9vcH0gLy8gdXNlIGRlbGV0ZUljb24gYXMgaW5mb0ljb25cbiAgICAgICAgICBkZWxldGVJY29uPXshdGFnLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgIDxJbmZvSWNvblxuICAgICAgICAgICAgICAgIGZvbnRTaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZVRhZ01vdXNlRW50ZXIodGFnKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZVRhZ01vdXNlTGVhdmUodGFnKX1cbiAgICAgICAgICAgICAgLz4pfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrKHRhZyl9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5TaW1wbGVUYWdUcmF5LnByb3BUeXBlcyA9IHtcbiAgdGFnczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0YWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb3VudDogUHJvcFR5cGVzLm51bWJlclxuICB9KSksXG4gIHNvcnRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHRhZ3NTdGF0ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZmlsdGVyZWRJbWFnZUNvdW50czogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5udW1iZXIpLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25UYWdNb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25UYWdNb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVUYWdUcmF5XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FilterMenuWidgets/SimpleTagTray.js\n");

/***/ })

})