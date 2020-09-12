webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FilterMenuWidgets/SimpleTagTray.js":
/*!*******************************************************!*\
  !*** ./components/FilterMenuWidgets/SimpleTagTray.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Chip */ \"./node_modules/@material-ui/core/esm/Chip/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Info */ \"./node_modules/@material-ui/icons/Info.js\");\n/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ \"./node_modules/lodash/noop.js\");\n/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/sortBy */ \"./node_modules/lodash/sortBy.js\");\n/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/bad-vis-browser/components/FilterMenuWidgets/SimpleTagTray.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      display: 'flex',\n      // justifyContent: 'center',\n      flexWrap: 'wrap',\n      '& > *': {\n        margin: theme.spacing(0.4)\n      }\n    }\n  };\n});\n\nvar SimpleTagTray = function SimpleTagTray(props) {\n  _s();\n\n  var tags = props.tags,\n      sorted = props.sorted,\n      tagsState = props.tagsState,\n      filteredImageCounts = props.filteredImageCounts,\n      onClick = props.onClick,\n      onTagMouseEnter = props.onTagMouseEnter,\n      onTagMouseLeave = props.onTagMouseLeave;\n  var classes = useStyles();\n\n  var handleClick = function handleClick(tag) {\n    return function (event) {\n      onClick && onClick(tag);\n    };\n  };\n\n  var handleTagMouseEnter = function handleTagMouseEnter(tag) {\n    return function (event) {\n      onTagMouseEnter && onTagMouseEnter(event, tag);\n    };\n  };\n\n  var handleTagMouseLeave = function handleTagMouseLeave(tag) {\n    return function (event) {\n      onTagMouseLeave && onTagMouseLeave(event, tag);\n    };\n  };\n\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, (sorted ? tags : lodash_sortBy__WEBPACK_IMPORTED_MODULE_4___default()(tags, 'count').reverse()).map(function (tag) {\n    return (// {(sorted ? tags : sortBy(tags.filter(t => filteredImageCounts[t.tag]), 'count').reverse()).map(tag => (\n      __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        key: tag.tag,\n        disabled: filteredImageCounts[tag.tag] === 0,\n        variant: tagsState[tag.tag] ? undefined : 'outlined',\n        size: \"small\",\n        label: \"\".concat(tag.name, \" (\").concat(filteredImageCounts[tag.tag], \")\"),\n        onDelete: !tag.description ? undefined : lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a // use deleteIcon as infoIcon\n        ,\n        deleteIcon: !tag.description ? undefined : __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          fontSize: \"small\",\n          onMouseEnter: handleTagMouseEnter(tag),\n          onMouseLeave: handleTagMouseLeave(tag),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }\n        }),\n        onClick: handleClick(tag),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 9\n        }\n      })\n    );\n  }));\n};\n\n_s(SimpleTagTray, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = SimpleTagTray;\nSimpleTagTray.propTypes = {\n  tags: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].shape({\n    tag: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].string,\n    name: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].string,\n    description: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].string,\n    count: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].number\n  })),\n  sorted: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].bool,\n  tagsState: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].object,\n  filteredImageCounts: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].objectOf(prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].number),\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].func,\n  onTagMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].func,\n  onTagMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"PropTypes\"].func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleTagTray);\n\nvar _c;\n\n$RefreshReg$(_c, \"SimpleTagTray\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJNZW51V2lkZ2V0cy9TaW1wbGVUYWdUcmF5LmpzP2RiMjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcmdpbiIsInNwYWNpbmciLCJTaW1wbGVUYWdUcmF5IiwicHJvcHMiLCJ0YWdzIiwic29ydGVkIiwidGFnc1N0YXRlIiwiZmlsdGVyZWRJbWFnZUNvdW50cyIsIm9uQ2xpY2siLCJvblRhZ01vdXNlRW50ZXIiLCJvblRhZ01vdXNlTGVhdmUiLCJjbGFzc2VzIiwiaGFuZGxlQ2xpY2siLCJ0YWciLCJldmVudCIsImhhbmRsZVRhZ01vdXNlRW50ZXIiLCJoYW5kbGVUYWdNb3VzZUxlYXZlIiwic29ydEJ5IiwicmV2ZXJzZSIsIm1hcCIsInVuZGVmaW5lZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm5vb3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJjb3VudCIsIm51bWJlciIsImJvb2wiLCJvYmplY3QiLCJvYmplY3RPZiIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSjtBQUNBQyxjQUFRLEVBQUUsTUFITjtBQUlKLGVBQVM7QUFDUEMsY0FBTSxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxHQUFkO0FBREQ7QUFKTDtBQUQrQixHQUFMO0FBQUEsQ0FBTixDQUE1Qjs7QUFXQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQ3ZCQyxJQUR1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dENQLFFBQUksRUFBRUksb0RBQVMsQ0FBQ0csTUFGc0I7QUFHdENOLGVBQVcsRUFBRUcsb0RBQVMsQ0FBQ0csTUFIZTtBQUl0Q0MsU0FBSyxFQUFFSixvREFBUyxDQUFDSztBQUpxQixHQUFoQixDQUFsQixDQURrQjtBQU94QnpCLFFBQU0sRUFBRW9CLG9EQUFTLENBQUNNLElBUE07QUFReEJ6QixXQUFTLEVBQUVtQixvREFBUyxDQUFDTyxNQVJHO0FBU3hCekIscUJBQW1CLEVBQUVrQixvREFBUyxDQUFDUSxRQUFWLENBQW1CUixvREFBUyxDQUFDSyxNQUE3QixDQVRHO0FBVXhCdEIsU0FBTyxFQUFFaUIsb0RBQVMsQ0FBQ1MsSUFWSztBQVd4QnpCLGlCQUFlLEVBQUVnQixvREFBUyxDQUFDUyxJQVhIO0FBWXhCeEIsaUJBQWUsRUFBRWUsb0RBQVMsQ0FBQ1M7QUFaSCxDQUExQjtBQWVlaEMsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbHRlck1lbnVXaWRnZXRzL1NpbXBsZVRhZ1RyYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJ1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcbmltcG9ydCBJbmZvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mbydcbmltcG9ydCBub29wIGZyb20gJ2xvZGFzaC9ub29wJ1xuaW1wb3J0IHNvcnRCeSBmcm9tICdsb2Rhc2gvc29ydEJ5J1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIC8vIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgICcmID4gKic6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLjQpXG4gICAgfVxuICB9XG59KSlcblxuY29uc3QgU2ltcGxlVGFnVHJheSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRhZ3MsIHNvcnRlZCwgdGFnc1N0YXRlLCBmaWx0ZXJlZEltYWdlQ291bnRzLCBvbkNsaWNrLCBvblRhZ01vdXNlRW50ZXIsIG9uVGFnTW91c2VMZWF2ZSB9ID0gcHJvcHNcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAodGFnKSA9PiAoZXZlbnQpID0+IHtcbiAgICBvbkNsaWNrICYmIG9uQ2xpY2sodGFnKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVGFnTW91c2VFbnRlciA9ICh0YWcpID0+IChldmVudCkgPT4ge1xuICAgIG9uVGFnTW91c2VFbnRlciAmJiBvblRhZ01vdXNlRW50ZXIoZXZlbnQsIHRhZylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVRhZ01vdXNlTGVhdmUgPSAodGFnKSA9PiAoZXZlbnQpID0+IHtcbiAgICBvblRhZ01vdXNlTGVhdmUgJiYgb25UYWdNb3VzZUxlYXZlKGV2ZW50LCB0YWcpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgeyhzb3J0ZWQgPyB0YWdzIDogc29ydEJ5KHRhZ3MsICdjb3VudCcpLnJldmVyc2UoKSkubWFwKHRhZyA9PiAoXG4gICAgICAgIC8vIHsoc29ydGVkID8gdGFncyA6IHNvcnRCeSh0YWdzLmZpbHRlcih0ID0+IGZpbHRlcmVkSW1hZ2VDb3VudHNbdC50YWddKSwgJ2NvdW50JykucmV2ZXJzZSgpKS5tYXAodGFnID0+IChcbiAgICAgICAgPENoaXBcbiAgICAgICAgICBrZXk9e3RhZy50YWd9XG4gICAgICAgICAgZGlzYWJsZWQ9e2ZpbHRlcmVkSW1hZ2VDb3VudHNbdGFnLnRhZ10gPT09IDB9XG4gICAgICAgICAgdmFyaWFudD17dGFnc1N0YXRlW3RhZy50YWddID8gdW5kZWZpbmVkIDogJ291dGxpbmVkJ31cbiAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICBsYWJlbD17YCR7dGFnLm5hbWV9ICgke2ZpbHRlcmVkSW1hZ2VDb3VudHNbdGFnLnRhZ119KWB9XG4gICAgICAgICAgb25EZWxldGU9eyF0YWcuZGVzY3JpcHRpb24gPyB1bmRlZmluZWQgOiBub29wfSAvLyB1c2UgZGVsZXRlSWNvbiBhcyBpbmZvSWNvblxuICAgICAgICAgIGRlbGV0ZUljb249eyF0YWcuZGVzY3JpcHRpb25cbiAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgPEluZm9JY29uXG4gICAgICAgICAgICAgICAgZm9udFNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlVGFnTW91c2VFbnRlcih0YWcpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlVGFnTW91c2VMZWF2ZSh0YWcpfVxuICAgICAgICAgICAgICAvPil9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2sodGFnKX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cblNpbXBsZVRhZ1RyYXkucHJvcFR5cGVzID0ge1xuICB0YWdzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHRhZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pKSxcbiAgc29ydGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGFnc1N0YXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBmaWx0ZXJlZEltYWdlQ291bnRzOiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLm51bWJlciksXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvblRhZ01vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblRhZ01vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZVRhZ1RyYXlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FilterMenuWidgets/SimpleTagTray.js\n");

/***/ })

})