"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/IncrementCounter.js":
/*!********************************************!*\
  !*** ./src/components/IncrementCounter.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_counterSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/counterSlice */ \"./src/store/counterSlice.js\");\n/* harmony import */ var _store_counterSlice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_store_counterSlice__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar IncrementCounter = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var counter = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.counter.count;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Counter: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: counter\n                    }, void 0, false, {\n                        fileName: \"/home/cos/Desktop/News_Ad_website/backend/news_all/src/components/IncrementCounter.js\",\n                        lineNumber: 11,\n                        columnNumber: 18\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cos/Desktop/News_Ad_website/backend/news_all/src/components/IncrementCounter.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return dispatch((0,_store_counterSlice__WEBPACK_IMPORTED_MODULE_3__.increment)());\n                },\n                children: \"Add To Count\"\n            }, void 0, false, {\n                fileName: \"/home/cos/Desktop/News_Ad_website/backend/news_all/src/components/IncrementCounter.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cos/Desktop/News_Ad_website/backend/news_all/src/components/IncrementCounter.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_s(IncrementCounter, \"gthwM6sqboLtlTmr2wLRFX51eJQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = IncrementCounter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IncrementCounter);\nvar _c;\n$RefreshReg$(_c, \"IncrementCounter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbmNyZW1lbnRDb3VudGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXlCO0FBQzZCO0FBQ047O0FBRWhELElBQU1JLGdCQUFnQixHQUFHLFdBQU07O0lBQzdCLElBQU1DLFFBQVEsR0FBR0gsd0RBQVcsRUFBRTtJQUM5QixJQUFNSSxPQUFPLEdBQUdMLHdEQUFXLENBQUMsU0FBQ00sS0FBSztlQUFLQSxLQUFLLENBQUNELE9BQU8sQ0FBQ0UsS0FBSztLQUFBLENBQUM7SUFDM0QscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOztvQkFBQyxXQUNPO2tDQUFBLDhEQUFDQyxNQUFJO2tDQUFFTCxPQUFPOzs7Ozs2QkFBUTs7Ozs7O3FCQUM1QjswQkFDTCw4REFBQ00sUUFBTTtnQkFBQ0MsT0FBTyxFQUFFOzJCQUFNUixRQUFRLENBQUNGLDhEQUFTLEVBQUUsQ0FBQztpQkFBQTswQkFBRSxjQUFZOzs7OztxQkFBUzs7Ozs7O2FBQy9ELENBQ1A7Q0FDRjtHQVhLQyxnQkFBZ0I7O1FBQ0hGLG9EQUFXO1FBQ1pELG9EQUFXOzs7QUFGdkJHLEtBQUFBLGdCQUFnQjtBQWN0QiwrREFBZUEsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0luY3JlbWVudENvdW50ZXIuanM/NTczNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7aW5jcmVtZW50IH0gZnJvbSBcIi4uL3N0b3JlL2NvdW50ZXJTbGljZVwiXG5cbmNvbnN0IEluY3JlbWVudENvdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICBjb25zdCBjb3VudGVyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLmNvdW50KVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+XG4gICAgICAgIENvdW50ZXI6IDxzcGFuPntjb3VudGVyfTwvc3Bhbj5cbiAgICAgIDwvaDE+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGluY3JlbWVudCgpKX0+QWRkIFRvIENvdW50PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJbmNyZW1lbnRDb3VudGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImluY3JlbWVudCIsIkluY3JlbWVudENvdW50ZXIiLCJkaXNwYXRjaCIsImNvdW50ZXIiLCJzdGF0ZSIsImNvdW50IiwiZGl2IiwiaDEiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/IncrementCounter.js\n"));

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Page */ \"./src/components/Page.js\");\n/* harmony import */ var _store_counterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/counterSlice */ \"./src/store/counterSlice.js\");\n/* harmony import */ var _store_counterSlice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_store_counterSlice__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_usersSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/usersSlice */ \"./src/store/usersSlice.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.js\");\nvar _this = undefined;\n\n\n\n\n\n// import React, { useEffect } from \"react\";\n// import { useSelector, useDispatch } from \"react-redux\";\n// import ScreenLayout from \"../components/ScreenLayout\";\n// import FooterLayout from \"../components/FooterLayout\";\n// import Banners from \"../components/Banners\";\n// import Categories from \"../components/Categories\";\n// import Link from \"next/link\";\n// import Test from \"./test\";\n// import Head from \"next/head\";\n// // import { localListAction } from \"../actions/advertiseActions\";\n// import { localListAction } from \"../redux/actions/advertiseActions\";\n// import { advertiseListAction } from \"../redux/actions/advertiseActions\";\n// export default function HomePage() {\n//   const dispatch = useDispatch();\n// return (\n//   <div>\n//     <Head>\n//       <meta\n//         name=\"viewport\"\n//         content=\"width=device-width, initial-scale=1\"\n//       ></meta>\n//       <meta name=\"description\" content=\"Home page of inmatown\"></meta>\n//       <meta charSet=\"utf-8\"></meta>\n//       <link rel=\"icon\" href=\"/favicon.ico\"></link>\n//       <title>Inmatown</title>\n//     </Head>\n{\n/* <Banners /> */ }{\n/* <Categories /> */ }{\n/* <ScreenLayout header1='News' header2=\"Advertise\" datas={listLocal} datas2={listAdvertise} /> */ }{\n/* <FooterLayout /> */ }{\n/* </div>\n  );\n} */ }var Index = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"/home/cos/Desktop/News_Ad_website/backend/news_all/src/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"Index Page\",\n                linkTo: \"/others\"\n            }, void 0, false, {\n                fileName: \"/home/cos/Desktop/News_Ad_website/backend/news_all/src/pages/index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            \")\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cos/Desktop/News_Ad_website/backend/news_all/src/pages/index.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this);\n};\n_c = Index;\n// export const getStaticProps = wrapper.getStaticProps((store) => () => {\n//   store.dispatch(incrementCounter())\n// })\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index); // export const getServerSideProps = wrapper.getServerSideProps(\n //   (store) => async () => {\n //       store.dispatch(addUser(`${data.first_name} ${data.last_name}`))\n //       store.dispatch(increment())\n //     }\n // );\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUE2QkE7O0FBbUJzQztBQUNtQjtBQUNYO0FBQ0w7QUFuRHpDLDRDQUE0QztBQUM1QywwREFBMEQ7QUFDMUQseURBQXlEO0FBQ3pELHlEQUF5RDtBQUN6RCwrQ0FBK0M7QUFDL0MscURBQXFEO0FBQ3JELGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsZ0NBQWdDO0FBQ2hDLG9FQUFvRTtBQUNwRSx1RUFBdUU7QUFDdkUsMkVBQTJFO0FBRTNFLHVDQUF1QztBQUN2QyxvQ0FBb0M7QUFFcEMsV0FBVztBQUNYLFVBQVU7QUFDVixhQUFhO0FBQ2IsY0FBYztBQUNkLDBCQUEwQjtBQUMxQix3REFBd0Q7QUFDeEQsaUJBQWlCO0FBQ2pCLHlFQUF5RTtBQUN6RSxzQ0FBc0M7QUFDdEMscURBQXFEO0FBQ3JELGdDQUFnQztBQUNoQyxjQUFjO0FBRWQ7QUFDRSxpQkFBaUIsRUFDbEI7QUFFQyxvQkFBb0IsRUFDckI7QUFHQyxrR0FBa0csRUFDbkc7QUFFQyxzQkFBc0IsRUFDdkI7QUFFQzs7SUFFRSxFQUNILElBT0tJLEtBQUssR0FBRyxTQUFDQyxLQUFLLEVBQUs7SUFDdkIscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLE1BQUk7Ozs7O3FCQUFLOzBCQUNiLDhEQUFDUCx3REFBSTtnQkFBQ1EsS0FBSyxFQUFDLFlBQVk7Z0JBQUNDLE1BQU0sRUFBQyxTQUFTOzs7OztxQkFBRztZQUFBLEdBQzlDOzs7Ozs7YUFBTSxDQUNOO0NBQ0g7QUFQS0wsS0FBQUEsS0FBSztBQVNYLDBFQUEwRTtBQUMxRSx1Q0FBdUM7QUFDdkMsS0FBSztBQUVMLCtEQUFlQSxLQUFLLEVBQUMsQ0FFckIsZ0VBQWdFO0NBQ2hFLDZCQUE2QjtDQUM3Qix3RUFBd0U7Q0FDeEUsb0NBQW9DO0NBQ3BDLFFBQVE7Q0FFUixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuLy8gaW1wb3J0IFNjcmVlbkxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9TY3JlZW5MYXlvdXRcIjtcbi8vIGltcG9ydCBGb290ZXJMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyTGF5b3V0XCI7XG4vLyBpbXBvcnQgQmFubmVycyBmcm9tIFwiLi4vY29tcG9uZW50cy9CYW5uZXJzXCI7XG4vLyBpbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXRlZ29yaWVzXCI7XG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBpbXBvcnQgVGVzdCBmcm9tIFwiLi90ZXN0XCI7XG4vLyBpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG4vLyAvLyBpbXBvcnQgeyBsb2NhbExpc3RBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9hZHZlcnRpc2VBY3Rpb25zXCI7XG4vLyBpbXBvcnQgeyBsb2NhbExpc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9hZHZlcnRpc2VBY3Rpb25zXCI7XG4vLyBpbXBvcnQgeyBhZHZlcnRpc2VMaXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvYWR2ZXJ0aXNlQWN0aW9uc1wiO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbi8vICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4vLyByZXR1cm4gKFxuLy8gICA8ZGl2PlxuLy8gICAgIDxIZWFkPlxuLy8gICAgICAgPG1ldGFcbi8vICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbi8vICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcbi8vICAgICAgID48L21ldGE+XG4vLyAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSG9tZSBwYWdlIG9mIGlubWF0b3duXCI+PC9tZXRhPlxuLy8gICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCI+PC9tZXRhPlxuLy8gICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIj48L2xpbms+XG4vLyAgICAgICA8dGl0bGU+SW5tYXRvd248L3RpdGxlPlxuLy8gICAgIDwvSGVhZD5cblxue1xuICAvKiA8QmFubmVycyAvPiAqL1xufVxue1xuICAvKiA8Q2F0ZWdvcmllcyAvPiAqL1xufVxuXG57XG4gIC8qIDxTY3JlZW5MYXlvdXQgaGVhZGVyMT0nTmV3cycgaGVhZGVyMj1cIkFkdmVydGlzZVwiIGRhdGFzPXtsaXN0TG9jYWx9IGRhdGFzMj17bGlzdEFkdmVydGlzZX0gLz4gKi9cbn1cbntcbiAgLyogPEZvb3RlckxheW91dCAvPiAqL1xufVxue1xuICAvKiA8L2Rpdj5cbiAgKTtcbn0gKi9cbn1cblxuaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IHsgaW5jcmVtZW50Q291bnRlciB9IGZyb20gXCIuLi9zdG9yZS9jb3VudGVyU2xpY2VcIjtcbmltcG9ydCB7IGFkZFVzZXIgfSBmcm9tIFwiLi4vc3RvcmUvdXNlcnNTbGljZVwiO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+dGVzdDwvaDI+XG4gICAgICA8UGFnZSB0aXRsZT1cIkluZGV4IFBhZ2VcIiBsaW5rVG89XCIvb3RoZXJzXCIgLz4pXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSB3cmFwcGVyLmdldFN0YXRpY1Byb3BzKChzdG9yZSkgPT4gKCkgPT4ge1xuLy8gICBzdG9yZS5kaXNwYXRjaChpbmNyZW1lbnRDb3VudGVyKCkpXG4vLyB9KVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKFxuLy8gICAoc3RvcmUpID0+IGFzeW5jICgpID0+IHtcbi8vICAgICAgIHN0b3JlLmRpc3BhdGNoKGFkZFVzZXIoYCR7ZGF0YS5maXJzdF9uYW1lfSAke2RhdGEubGFzdF9uYW1lfWApKVxuLy8gICAgICAgc3RvcmUuZGlzcGF0Y2goaW5jcmVtZW50KCkpXG4vLyAgICAgfVxuXG4vLyApO1xuIl0sIm5hbWVzIjpbIlBhZ2UiLCJpbmNyZW1lbnRDb3VudGVyIiwiYWRkVXNlciIsIndyYXBwZXIiLCJJbmRleCIsInByb3BzIiwiZGl2IiwiaDIiLCJ0aXRsZSIsImxpbmtUbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});