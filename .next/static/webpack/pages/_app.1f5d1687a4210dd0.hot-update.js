"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Search.jsx":
/*!***********************************!*\
  !*** ./src/components/Search.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Search\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _docsearch_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @docsearch/react */ \"./node_modules/@docsearch/react/dist/esm/index.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar docSearchConfig = {\n    appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,\n    apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,\n    indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME\n};\nvar DocSearchTranslations = {\n    button: {\n        buttonText: \"Search\",\n        buttonAriaLabel: \"Search\"\n    },\n    modal: {\n        searchBox: {\n            resetButtonTitle: \"Clear the query\",\n            resetButtonAriaLabel: \"Clear the query\",\n            cancelButtonText: \"Glem det\",\n            cancelButtonAriaLabel: \"Glem det\"\n        },\n        startScreen: {\n            recentSearchesTitle: \"Recent\",\n            noRecentSearchesText: \"No recent searches\",\n            saveRecentSearchButtonTitle: \"Save this search\",\n            removeRecentSearchButtonTitle: \"Remove this search from history\",\n            favoriteSearchesTitle: \"Favorite\",\n            removeFavoriteSearchButtonTitle: \"Remove this search from favorites\"\n        },\n        errorScreen: {\n            titleText: \"Unable to fetch results\",\n            helpText: \"You might want to check your network connection.\"\n        },\n        footer: {\n            selectText: \"for at v\\xe6lge\",\n            selectKeyAriaLabel: \"Enter key\",\n            navigateText: \"to navigate\",\n            navigateUpKeyAriaLabel: \"Arrow up\",\n            navigateDownKeyAriaLabel: \"Arrow down\",\n            closeText: \"to close\",\n            closeKeyAriaLabel: \"Escape key\",\n            searchByText: \"Search by\"\n        },\n        noResultsScreen: {\n            noResultsText: \"No results for\",\n            suggestedQueryText: \"Try searching for\",\n            reportMissingResultsText: \"Believe this query should return results?\",\n            reportMissingResultsLinkText: \"Let us know.\"\n        }\n    }\n};\nfunction Hit(param) {\n    var hit = param.hit, children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: hit.url,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n        lineNumber: 59,\n        columnNumber: 10\n    }, this);\n}\n_c = Hit;\nfunction SearchIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n        \"aria-hidden\": \"true\",\n        viewBox: \"0 0 20 20\"\n    }, props), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z\"\n        }, void 0, false, {\n            fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }), void 0, false, {\n        fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_c1 = SearchIcon;\nfunction Search() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), modifierKey = ref1[0], setModifierKey = ref1[1];\n    var onOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setIsOpen(true);\n    }, [\n        setIsOpen\n    ]);\n    var onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setIsOpen(false);\n    }, [\n        setIsOpen\n    ]);\n    (0,_docsearch_react__WEBPACK_IMPORTED_MODULE_7__.useDocSearchKeyboardEvents)({\n        isOpen: isOpen,\n        onOpen: onOpen,\n        onClose: onClose\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? \"⌘\" : \"Ctrl \");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 dark:md:bg-slate-800/75 dark:md:ring-inset dark:md:ring-white/5 dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500 lg:w-96\",\n                onClick: onOpen,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchIcon, {\n                        className: \"h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 dark:fill-slate-500 md:group-hover:fill-slate-400\"\n                    }, void 0, false, {\n                        fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"sr-only md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400\",\n                        children: \"S\\xf8g i rapporten\"\n                    }, void 0, false, {\n                        fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    modifierKey && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"kbd\", {\n                        className: \"ml-auto hidden font-medium text-slate-400 dark:text-slate-500 md:block\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"kbd\", {\n                                className: \"font-sans\",\n                                children: modifierKey\n                            }, void 0, false, {\n                                fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"kbd\", {\n                                className: \"font-sans\",\n                                children: \"K\"\n                            }, void 0, false, {\n                                fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_docsearch_react__WEBPACK_IMPORTED_MODULE_7__.DocSearchModal, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, docSearchConfig), {\n                initialScrollY: window.scrollY,\n                onClose: onClose,\n                hitComponent: Hit,\n                navigator: {\n                    navigate: function navigate(param) {\n                        var itemUrl = param.itemUrl;\n                        next_router__WEBPACK_IMPORTED_MODULE_4___default().push(itemUrl);\n                    }\n                }\n            }), void 0, false, {\n                fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n                lineNumber: 112,\n                columnNumber: 11\n            }, this), document.body)\n        ]\n    }, void 0, true);\n}\n_s(Search, \"hjyyadXjTPspwjZz4Kg1AwpN8tw=\", false, function() {\n    return [\n        _docsearch_react__WEBPACK_IMPORTED_MODULE_7__.useDocSearchKeyboardEvents\n    ];\n});\n_c2 = Search;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Hit\");\n$RefreshReg$(_c1, \"SearchIcon\");\n$RefreshReg$(_c2, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2guanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQXdEO0FBQ2hCO0FBQ1o7QUFDSTtBQUM2QztBQUU3RSxJQUFNUSxlQUFlLEdBQUc7SUFDdEJDLEtBQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLDRCQUE0QjtJQUMvQ0MsTUFBTSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csNkJBQTZCO0lBQ2pEQyxTQUFTLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxnQ0FBZ0M7Q0FDeEQ7QUFHRCxJQUFNQyxxQkFBcUIsR0FBRztJQUM1QkMsTUFBTSxFQUFFO1FBQ05DLFVBQVUsRUFBRSxRQUFRO1FBQ3BCQyxlQUFlLEVBQUUsUUFBUTtLQUMxQjtJQUNEQyxLQUFLLEVBQUU7UUFDTEMsU0FBUyxFQUFFO1lBQ1RDLGdCQUFnQixFQUFFLGlCQUFpQjtZQUNuQ0Msb0JBQW9CLEVBQUUsaUJBQWlCO1lBQ3ZDQyxnQkFBZ0IsRUFBRSxVQUFVO1lBQzVCQyxxQkFBcUIsRUFBRSxVQUFVO1NBQ2xDO1FBQ0RDLFdBQVcsRUFBRTtZQUNYQyxtQkFBbUIsRUFBRSxRQUFRO1lBQzdCQyxvQkFBb0IsRUFBRSxvQkFBb0I7WUFDMUNDLDJCQUEyQixFQUFFLGtCQUFrQjtZQUMvQ0MsNkJBQTZCLEVBQUUsaUNBQWlDO1lBQ2hFQyxxQkFBcUIsRUFBRSxVQUFVO1lBQ2pDQywrQkFBK0IsRUFBRSxtQ0FBbUM7U0FDckU7UUFDREMsV0FBVyxFQUFFO1lBQ1hDLFNBQVMsRUFBRSx5QkFBeUI7WUFDcENDLFFBQVEsRUFBRSxrREFBa0Q7U0FDN0Q7UUFDREMsTUFBTSxFQUFFO1lBQ05DLFVBQVUsRUFBRSxpQkFBYztZQUMxQkMsa0JBQWtCLEVBQUUsV0FBVztZQUMvQkMsWUFBWSxFQUFFLGFBQWE7WUFDM0JDLHNCQUFzQixFQUFFLFVBQVU7WUFDbENDLHdCQUF3QixFQUFFLFlBQVk7WUFDdENDLFNBQVMsRUFBRSxVQUFVO1lBQ3JCQyxpQkFBaUIsRUFBRSxZQUFZO1lBQy9CQyxZQUFZLEVBQUUsV0FBVztTQUMxQjtRQUNEQyxlQUFlLEVBQUU7WUFDZkMsYUFBYSxFQUFFLGdCQUFnQjtZQUMvQkMsa0JBQWtCLEVBQUUsbUJBQW1CO1lBQ3ZDQyx3QkFBd0IsRUFBRSwyQ0FBMkM7WUFDckVDLDRCQUE0QixFQUFFLGNBQWM7U0FDN0M7S0FDRjtDQUNGO0FBR0QsU0FBU0MsR0FBRyxDQUFDLEtBQWlCLEVBQUU7UUFBakJDLEdBQUcsR0FBTCxLQUFpQixDQUFmQSxHQUFHLEVBQUVDLFFBQVEsR0FBZixLQUFpQixDQUFWQSxRQUFRO0lBQzFCLHFCQUFPLDhEQUFDakQsa0RBQUk7UUFBQ2tELElBQUksRUFBRUYsR0FBRyxDQUFDRyxHQUFHO2tCQUFHRixRQUFROzs7OztZQUFRO0FBQy9DLENBQUM7QUFGUUYsS0FBQUEsR0FBRztBQUlaLFNBQVNLLFVBQVUsQ0FBQ0MsS0FBSyxFQUFFO0lBQ3pCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLGFBQVcsRUFBQyxNQUFNO1FBQUNDLE9BQU8sRUFBQyxXQUFXO09BQUtILEtBQUs7a0JBQ25ELDRFQUFDSSxNQUFJO1lBQUNDLENBQUMsRUFBQyxxWEFBcVg7Ozs7O2dCQUFHOzs7OztZQUM1WCxDQUNQO0FBQ0gsQ0FBQztBQU5RTixNQUFBQSxVQUFVO0FBUVosU0FBU08sTUFBTSxHQUFHOztJQUN2QixJQUEwQjdELEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcEM4RCxNQUFNLEdBQWU5RCxHQUFlLEdBQTlCLEVBQUUrRCxTQUFTLEdBQUkvRCxHQUFlLEdBQW5CO0lBQ3RCLElBQW9DQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBekNnRSxXQUFXLEdBQW9CaEUsSUFBVSxHQUE5QixFQUFFaUUsY0FBYyxHQUFJakUsSUFBVSxHQUFkO0lBRWhDLElBQU1rRSxNQUFNLEdBQUdwRSxrREFBVyxDQUFDLFdBQU07UUFDL0JpRSxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ2pCLENBQUMsRUFBRTtRQUFDQSxTQUFTO0tBQUMsQ0FBQztJQUVmLElBQU1JLE9BQU8sR0FBR3JFLGtEQUFXLENBQUMsV0FBTTtRQUNoQ2lFLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDbEIsQ0FBQyxFQUFFO1FBQUNBLFNBQVM7S0FBQyxDQUFDO0lBSWYxRCw0RUFBMEIsQ0FBQztRQUFFeUQsTUFBTSxFQUFOQSxNQUFNO1FBQUVJLE1BQU0sRUFBTkEsTUFBTTtRQUFFQyxPQUFPLEVBQVBBLE9BQU87S0FBRSxDQUFDO0lBRXZEcEUsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RrRSxjQUFjLENBQ1osMEJBQTBCRyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FDbkU7SUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0U7OzBCQUNFLDhEQUFDdEQsUUFBTTtnQkFDTHVELElBQUksRUFBQyxRQUFRO2dCQUNiQyxTQUFTLEVBQUMsNFVBQTRVO2dCQUN0VkMsT0FBTyxFQUFFUCxNQUFNOztrQ0FFZiw4REFBQ1osVUFBVTt3QkFBQ2tCLFNBQVMsRUFBQywrR0FBK0c7Ozs7OzRCQUFHO2tDQUN4SSw4REFBQ0UsTUFBSTt3QkFBQ0YsU0FBUyxFQUFDLHlFQUF5RTtrQ0FBQyxvQkFFMUY7Ozs7OzRCQUFPO29CQUNOUixXQUFXLGtCQUNWLDhEQUFDVyxLQUFHO3dCQUFDSCxTQUFTLEVBQUMsd0VBQXdFOzswQ0FDckYsOERBQUNHLEtBQUc7Z0NBQUNILFNBQVMsRUFBQyxXQUFXOzBDQUFFUixXQUFXOzs7OztvQ0FBTzswQ0FDOUMsOERBQUNXLEtBQUc7Z0NBQUNILFNBQVMsRUFBQyxXQUFXOzBDQUFDLEdBQUM7Ozs7O29DQUFNOzs7Ozs7NEJBQzlCOzs7Ozs7b0JBRUQ7WUFDUlYsTUFBTSxrQkFDTDdELHVEQUFZLGVBQ1YsOERBQUNHLDREQUFjLDBLQUNURSxlQUFlO2dCQUNuQnNFLGNBQWMsRUFBRUMsTUFBTSxDQUFDQyxPQUFPO2dCQUM5QlgsT0FBTyxFQUFFQSxPQUFPO2dCQUNoQlksWUFBWSxFQUFFOUIsR0FBRztnQkFDakJvQixTQUFTLEVBQUU7b0JBQ1RXLFFBQVEsRUFBUkEsU0FBQUEsUUFBUSxDQUFDLEtBQVcsRUFBRTs0QkFBYixPQUFTLEdBQVQsS0FBVyxDQUFUQyxPQUFPO3dCQUNoQjlFLHVEQUFXLENBQUM4RSxPQUFPLENBQUM7b0JBQ3RCLENBQUM7aUJBQ0Y7Ozs7O29CQUNELEVBQ0ZFLFFBQVEsQ0FBQ0MsSUFBSSxDQUNkOztvQkFDRixDQUNKO0FBQ0gsQ0FBQztHQXpEZXZCLE1BQU07O1FBY3BCeEQsd0VBQTBCOzs7QUFkWndELE1BQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoLmpzeD9hYWY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgRG9jU2VhcmNoTW9kYWwsIHVzZURvY1NlYXJjaEtleWJvYXJkRXZlbnRzIH0gZnJvbSAnQGRvY3NlYXJjaC9yZWFjdCdcblxuY29uc3QgZG9jU2VhcmNoQ29uZmlnID0ge1xuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRE9DU0VBUkNIX0FQUF9JRCxcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ET0NTRUFSQ0hfQVBJX0tFWSxcbiAgaW5kZXhOYW1lOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ET0NTRUFSQ0hfSU5ERVhfTkFNRSxcbn1cblxuXG5jb25zdCBEb2NTZWFyY2hUcmFuc2xhdGlvbnMgPSB7XG4gIGJ1dHRvbjoge1xuICAgIGJ1dHRvblRleHQ6ICdTZWFyY2gnLFxuICAgIGJ1dHRvbkFyaWFMYWJlbDogJ1NlYXJjaCcsXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgc2VhcmNoQm94OiB7XG4gICAgICByZXNldEJ1dHRvblRpdGxlOiAnQ2xlYXIgdGhlIHF1ZXJ5JyxcbiAgICAgIHJlc2V0QnV0dG9uQXJpYUxhYmVsOiAnQ2xlYXIgdGhlIHF1ZXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdHbGVtIGRldCcsXG4gICAgICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICdHbGVtIGRldCcsXG4gICAgfSxcbiAgICBzdGFydFNjcmVlbjoge1xuICAgICAgcmVjZW50U2VhcmNoZXNUaXRsZTogJ1JlY2VudCcsXG4gICAgICBub1JlY2VudFNlYXJjaGVzVGV4dDogJ05vIHJlY2VudCBzZWFyY2hlcycsXG4gICAgICBzYXZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6ICdTYXZlIHRoaXMgc2VhcmNoJyxcbiAgICAgIHJlbW92ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiAnUmVtb3ZlIHRoaXMgc2VhcmNoIGZyb20gaGlzdG9yeScsXG4gICAgICBmYXZvcml0ZVNlYXJjaGVzVGl0bGU6ICdGYXZvcml0ZScsXG4gICAgICByZW1vdmVGYXZvcml0ZVNlYXJjaEJ1dHRvblRpdGxlOiAnUmVtb3ZlIHRoaXMgc2VhcmNoIGZyb20gZmF2b3JpdGVzJyxcbiAgICB9LFxuICAgIGVycm9yU2NyZWVuOiB7XG4gICAgICB0aXRsZVRleHQ6ICdVbmFibGUgdG8gZmV0Y2ggcmVzdWx0cycsXG4gICAgICBoZWxwVGV4dDogJ1lvdSBtaWdodCB3YW50IHRvIGNoZWNrIHlvdXIgbmV0d29yayBjb25uZWN0aW9uLicsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHNlbGVjdFRleHQ6ICdmb3IgYXQgdsOmbGdlJyxcbiAgICAgIHNlbGVjdEtleUFyaWFMYWJlbDogJ0VudGVyIGtleScsXG4gICAgICBuYXZpZ2F0ZVRleHQ6ICd0byBuYXZpZ2F0ZScsXG4gICAgICBuYXZpZ2F0ZVVwS2V5QXJpYUxhYmVsOiAnQXJyb3cgdXAnLFxuICAgICAgbmF2aWdhdGVEb3duS2V5QXJpYUxhYmVsOiAnQXJyb3cgZG93bicsXG4gICAgICBjbG9zZVRleHQ6ICd0byBjbG9zZScsXG4gICAgICBjbG9zZUtleUFyaWFMYWJlbDogJ0VzY2FwZSBrZXknLFxuICAgICAgc2VhcmNoQnlUZXh0OiAnU2VhcmNoIGJ5JyxcbiAgICB9LFxuICAgIG5vUmVzdWx0c1NjcmVlbjoge1xuICAgICAgbm9SZXN1bHRzVGV4dDogJ05vIHJlc3VsdHMgZm9yJyxcbiAgICAgIHN1Z2dlc3RlZFF1ZXJ5VGV4dDogJ1RyeSBzZWFyY2hpbmcgZm9yJyxcbiAgICAgIHJlcG9ydE1pc3NpbmdSZXN1bHRzVGV4dDogJ0JlbGlldmUgdGhpcyBxdWVyeSBzaG91bGQgcmV0dXJuIHJlc3VsdHM/JyxcbiAgICAgIHJlcG9ydE1pc3NpbmdSZXN1bHRzTGlua1RleHQ6ICdMZXQgdXMga25vdy4nLFxuICAgIH0sXG4gIH0sXG59XG5cblxuZnVuY3Rpb24gSGl0KHsgaGl0LCBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiA8TGluayBocmVmPXtoaXQudXJsfT57Y2hpbGRyZW59PC9MaW5rPlxufVxuXG5mdW5jdGlvbiBTZWFyY2hJY29uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgey4uLnByb3BzfT5cbiAgICAgIDxwYXRoIGQ9XCJNMTYuMjkzIDE3LjcwN2ExIDEgMCAwIDAgMS40MTQtMS40MTRsLTEuNDE0IDEuNDE0Wk05IDE0YTUgNSAwIDAgMS01LTVIMmE3IDcgMCAwIDAgNyA3di0yWk00IDlhNSA1IDAgMCAxIDUtNVYyYTcgNyAwIDAgMC03IDdoMlptNS01YTUgNSAwIDAgMSA1IDVoMmE3IDcgMCAwIDAtNy03djJabTguNzA3IDEyLjI5My0zLjc1Ny0zLjc1Ny0xLjQxNCAxLjQxNCAzLjc1NyAzLjc1NyAxLjQxNC0xLjQxNFpNMTQgOWE0Ljk4IDQuOTggMCAwIDEtMS40NjQgMy41MzZsMS40MTQgMS40MTRBNi45OCA2Ljk4IDAgMCAwIDE2IDloLTJabS0xLjQ2NCAzLjUzNkE0Ljk4IDQuOTggMCAwIDEgOSAxNHYyYTYuOTggNi45OCAwIDAgMCA0Ljk1LTIuMDVsLTEuNDE0LTEuNDE0WlwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcbiAgbGV0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgbGV0IFttb2RpZmllcktleSwgc2V0TW9kaWZpZXJLZXldID0gdXNlU3RhdGUoKVxuXG4gIGNvbnN0IG9uT3BlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc09wZW4odHJ1ZSlcbiAgfSwgW3NldElzT3Blbl0pXG5cbiAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc09wZW4oZmFsc2UpXG4gIH0sIFtzZXRJc09wZW5dKVxuXG5cblxuICB1c2VEb2NTZWFyY2hLZXlib2FyZEV2ZW50cyh7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNb2RpZmllcktleShcbiAgICAgIC8oTWFjfGlQaG9uZXxpUG9kfGlQYWQpL2kudGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pID8gJ+KMmCcgOiAnQ3RybCAnXG4gICAgKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9XCJncm91cCBmbGV4IGgtNiB3LTYgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNtOmp1c3RpZnktc3RhcnQgbWQ6aC1hdXRvIG1kOnctODAgbWQ6ZmxleC1ub25lIG1kOnJvdW5kZWQtbGcgbWQ6cHktMi41IG1kOnBsLTQgbWQ6cHItMy41IG1kOnRleHQtc20gbWQ6cmluZy0xIG1kOnJpbmctc2xhdGUtMjAwIG1kOmhvdmVyOnJpbmctc2xhdGUtMzAwIGRhcms6bWQ6Ymctc2xhdGUtODAwLzc1IGRhcms6bWQ6cmluZy1pbnNldCBkYXJrOm1kOnJpbmctd2hpdGUvNSBkYXJrOm1kOmhvdmVyOmJnLXNsYXRlLTcwMC80MCBkYXJrOm1kOmhvdmVyOnJpbmctc2xhdGUtNTAwIGxnOnctOTZcIlxuICAgICAgICBvbkNsaWNrPXtvbk9wZW59XG4gICAgICA+XG4gICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgZmxleC1ub25lIGZpbGwtc2xhdGUtNDAwIGdyb3VwLWhvdmVyOmZpbGwtc2xhdGUtNTAwIGRhcms6ZmlsbC1zbGF0ZS01MDAgbWQ6Z3JvdXAtaG92ZXI6ZmlsbC1zbGF0ZS00MDBcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5IG1kOm5vdC1zci1vbmx5IG1kOm1sLTIgbWQ6dGV4dC1zbGF0ZS01MDAgbWQ6ZGFyazp0ZXh0LXNsYXRlLTQwMFwiPlxuICAgICAgICAgIFPDuGcgaSByYXBwb3J0ZW5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7bW9kaWZpZXJLZXkgJiYgKFxuICAgICAgICAgIDxrYmQgY2xhc3NOYW1lPVwibWwtYXV0byBoaWRkZW4gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS00MDAgZGFyazp0ZXh0LXNsYXRlLTUwMCBtZDpibG9ja1wiPlxuICAgICAgICAgICAgPGtiZCBjbGFzc05hbWU9XCJmb250LXNhbnNcIj57bW9kaWZpZXJLZXl9PC9rYmQ+XG4gICAgICAgICAgICA8a2JkIGNsYXNzTmFtZT1cImZvbnQtc2Fuc1wiPks8L2tiZD5cbiAgICAgICAgICA8L2tiZD5cbiAgICAgICAgKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge2lzT3BlbiAmJlxuICAgICAgICBjcmVhdGVQb3J0YWwoXG4gICAgICAgICAgPERvY1NlYXJjaE1vZGFsXG4gICAgICAgICAgICB7Li4uZG9jU2VhcmNoQ29uZmlnfVxuICAgICAgICAgICAgaW5pdGlhbFNjcm9sbFk9e3dpbmRvdy5zY3JvbGxZfVxuICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgICAgIGhpdENvbXBvbmVudD17SGl0fVxuICAgICAgICAgICAgbmF2aWdhdG9yPXt7XG4gICAgICAgICAgICAgIG5hdmlnYXRlKHsgaXRlbVVybCB9KSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goaXRlbVVybClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz4sXG4gICAgICAgICAgZG9jdW1lbnQuYm9keVxuICAgICAgICApfVxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVBvcnRhbCIsIkxpbmsiLCJSb3V0ZXIiLCJEb2NTZWFyY2hNb2RhbCIsInVzZURvY1NlYXJjaEtleWJvYXJkRXZlbnRzIiwiZG9jU2VhcmNoQ29uZmlnIiwiYXBwSWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRE9DU0VBUkNIX0FQUF9JRCIsImFwaUtleSIsIk5FWFRfUFVCTElDX0RPQ1NFQVJDSF9BUElfS0VZIiwiaW5kZXhOYW1lIiwiTkVYVF9QVUJMSUNfRE9DU0VBUkNIX0lOREVYX05BTUUiLCJEb2NTZWFyY2hUcmFuc2xhdGlvbnMiLCJidXR0b24iLCJidXR0b25UZXh0IiwiYnV0dG9uQXJpYUxhYmVsIiwibW9kYWwiLCJzZWFyY2hCb3giLCJyZXNldEJ1dHRvblRpdGxlIiwicmVzZXRCdXR0b25BcmlhTGFiZWwiLCJjYW5jZWxCdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uQXJpYUxhYmVsIiwic3RhcnRTY3JlZW4iLCJyZWNlbnRTZWFyY2hlc1RpdGxlIiwibm9SZWNlbnRTZWFyY2hlc1RleHQiLCJzYXZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGUiLCJyZW1vdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZSIsImZhdm9yaXRlU2VhcmNoZXNUaXRsZSIsInJlbW92ZUZhdm9yaXRlU2VhcmNoQnV0dG9uVGl0bGUiLCJlcnJvclNjcmVlbiIsInRpdGxlVGV4dCIsImhlbHBUZXh0IiwiZm9vdGVyIiwic2VsZWN0VGV4dCIsInNlbGVjdEtleUFyaWFMYWJlbCIsIm5hdmlnYXRlVGV4dCIsIm5hdmlnYXRlVXBLZXlBcmlhTGFiZWwiLCJuYXZpZ2F0ZURvd25LZXlBcmlhTGFiZWwiLCJjbG9zZVRleHQiLCJjbG9zZUtleUFyaWFMYWJlbCIsInNlYXJjaEJ5VGV4dCIsIm5vUmVzdWx0c1NjcmVlbiIsIm5vUmVzdWx0c1RleHQiLCJzdWdnZXN0ZWRRdWVyeVRleHQiLCJyZXBvcnRNaXNzaW5nUmVzdWx0c1RleHQiLCJyZXBvcnRNaXNzaW5nUmVzdWx0c0xpbmtUZXh0IiwiSGl0IiwiaGl0IiwiY2hpbGRyZW4iLCJocmVmIiwidXJsIiwiU2VhcmNoSWNvbiIsInByb3BzIiwic3ZnIiwiYXJpYS1oaWRkZW4iLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJTZWFyY2giLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtb2RpZmllcktleSIsInNldE1vZGlmaWVyS2V5Iiwib25PcGVuIiwib25DbG9zZSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsInR5cGUiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3BhbiIsImtiZCIsImluaXRpYWxTY3JvbGxZIiwid2luZG93Iiwic2Nyb2xsWSIsImhpdENvbXBvbmVudCIsIm5hdmlnYXRlIiwiaXRlbVVybCIsInB1c2giLCJkb2N1bWVudCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Search.jsx\n"));

/***/ })

});