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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Search\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _docsearch_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @docsearch/react */ \"./node_modules/@docsearch/react/dist/esm/index.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar docSearchConfig = {\n    appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,\n    apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,\n    indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME\n};\nvar DocSearchTranslations = {\n    button: {\n        buttonText: \"Search\",\n        buttonAriaLabel: \"Search\"\n    },\n    modal: {\n        searchBox: {\n            resetButtonTitle: \"Clear the query\",\n            resetButtonAriaLabel: \"Clear the query\",\n            cancelButtonText: \"Glem det\",\n            cancelButtonAriaLabel: \"Glem det\"\n        },\n        startScreen: {\n            recentSearchesTitle: \"Recent\",\n            noRecentSearchesText: \"No recent searches\",\n            saveRecentSearchButtonTitle: \"Save this search\",\n            removeRecentSearchButtonTitle: \"Remove this search from history\",\n            favoriteSearchesTitle: \"Favorite\",\n            removeFavoriteSearchButtonTitle: \"Remove this search from favorites\"\n        },\n        errorScreen: {\n            titleText: \"Unable to fetch results\",\n            helpText: \"You might want to check your network connection.\"\n        },\n        footer: {\n            selectText: \"for at v\\xe6lge\",\n            selectKeyAriaLabel: \"Enter key\",\n            navigateText: \"to navigate\",\n            navigateUpKeyAriaLabel: \"Arrow up\",\n            navigateDownKeyAriaLabel: \"Arrow down\",\n            closeText: \"to close\",\n            closeKeyAriaLabel: \"Escape key\",\n            searchByText: \"Search by\"\n        },\n        noResultsScreen: {\n            noResultsText: \"No results for\",\n            suggestedQueryText: \"Try searching for\",\n            reportMissingResultsText: \"Believe this query should return results?\",\n            reportMissingResultsLinkText: \"Let us know.\"\n        }\n    }\n};\nfunction Hit(param) {\n    var hit = param.hit, children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: hit.url,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n        lineNumber: 60,\n        columnNumber: 10\n    }, this);\n}\n_c = Hit;\nfunction SearchIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n        \"aria-hidden\": \"true\",\n        viewBox: \"0 0 20 20\"\n    }, props), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z\"\n        }, void 0, false, {\n            fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, this)\n    }), void 0, false, {\n        fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_c1 = SearchIcon;\nfunction Search() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), modifierKey = ref1[0], setModifierKey = ref1[1];\n    var onOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setIsOpen(true);\n    }, [\n        setIsOpen\n    ]);\n    var onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setIsOpen(false);\n    }, [\n        setIsOpen\n    ]);\n    (0,_docsearch_react__WEBPACK_IMPORTED_MODULE_7__.useDocSearchKeyboardEvents)({\n        isOpen: isOpen,\n        onOpen: onOpen,\n        onClose: onClose\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? \"⌘\" : \"Ctrl \");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 dark:md:bg-slate-800/75 dark:md:ring-inset dark:md:ring-white/5 dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500 lg:w-96\",\n                onClick: onOpen,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchIcon, {\n                        className: \"h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 dark:fill-slate-500 md:group-hover:fill-slate-400\"\n                    }, void 0, false, {\n                        fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"sr-only md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400\",\n                        children: \"S\\xf8g i rapporten\"\n                    }, void 0, false, {\n                        fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    modifierKey && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"kbd\", {\n                        className: \"ml-auto hidden font-medium text-slate-400 dark:text-slate-500 md:block\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"kbd\", {\n                                className: \"font-sans\",\n                                children: modifierKey\n                            }, void 0, false, {\n                                fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"kbd\", {\n                                className: \"font-sans\",\n                                children: \"K\"\n                            }, void 0, false, {\n                                fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_docsearch_react__WEBPACK_IMPORTED_MODULE_7__.DocSearchModal, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, docSearchConfig), {\n                initialScrollY: window.scrollY,\n                onClose: onClose,\n                hitComponent: Hit,\n                navigator: {\n                    navigate: function navigate(param) {\n                        var itemUrl = param.itemUrl;\n                        next_router__WEBPACK_IMPORTED_MODULE_4___default().push(itemUrl);\n                    }\n                }\n            }), void 0, false, {\n                fileName: \"/Users/boetter/Documents/GitHub/data-spaces-rapport/src/components/Search.jsx\",\n                lineNumber: 113,\n                columnNumber: 11\n            }, this), document.body)\n        ]\n    }, void 0, true);\n}\n_s(Search, \"hjyyadXjTPspwjZz4Kg1AwpN8tw=\", false, function() {\n    return [\n        _docsearch_react__WEBPACK_IMPORTED_MODULE_7__.useDocSearchKeyboardEvents\n    ];\n});\n_c2 = Search;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Hit\");\n$RefreshReg$(_c1, \"SearchIcon\");\n$RefreshReg$(_c2, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQUFPO2dCQUNoQlksWUFBWSxFQUFFOUIsR0FBRztnQkFDakJvQixTQUFTLEVBQUU7b0JBQ1RXLFFBQVEsRUFBUkEsU0FBQUEsUUFBUSxDQUFDLEtBQVcsRUFBRTs0QkFBYixPQUFTLEdBQVQsS0FBVyxDQUFUQyxPQUFPO3dCQUNoQjlFLHVEQUFXLENBQUM4RSxPQUFPLENBQUM7b0JBQ3RCLENBQUM7aUJBQ0Y7Ozs7O29CQUNELEVBQ0ZFLFFBQVEsQ0FBQ0MsSUFBSSxDQUNkOztvQkFDRixDQUNKO0FBQ0gsQ0FBQztHQXpEZXZCLE1BQU07O1FBY3BCeEQsd0VBQTBCOzs7QUFkWndELE1BQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoLmpzeD9hYWY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgRG9jU2VhcmNoTW9kYWwsIHVzZURvY1NlYXJjaEtleWJvYXJkRXZlbnRzIH0gZnJvbSAnQGRvY3NlYXJjaC9yZWFjdCdcblxuY29uc3QgZG9jU2VhcmNoQ29uZmlnID0ge1xuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRE9DU0VBUkNIX0FQUF9JRCxcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ET0NTRUFSQ0hfQVBJX0tFWSxcbiAgaW5kZXhOYW1lOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ET0NTRUFSQ0hfSU5ERVhfTkFNRSxcbn1cblxuXG5jb25zdCBEb2NTZWFyY2hUcmFuc2xhdGlvbnMgPSB7XG5cbiAgYnV0dG9uOiB7XG4gICAgYnV0dG9uVGV4dDogJ1NlYXJjaCcsXG4gICAgYnV0dG9uQXJpYUxhYmVsOiAnU2VhcmNoJyxcbiAgfSxcbiAgbW9kYWw6IHtcbiAgICBzZWFyY2hCb3g6IHtcbiAgICAgIHJlc2V0QnV0dG9uVGl0bGU6ICdDbGVhciB0aGUgcXVlcnknLFxuICAgICAgcmVzZXRCdXR0b25BcmlhTGFiZWw6ICdDbGVhciB0aGUgcXVlcnknLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0dsZW0gZGV0JyxcbiAgICAgIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJ0dsZW0gZGV0JyxcbiAgICB9LFxuICAgIHN0YXJ0U2NyZWVuOiB7XG4gICAgICByZWNlbnRTZWFyY2hlc1RpdGxlOiAnUmVjZW50JyxcbiAgICAgIG5vUmVjZW50U2VhcmNoZXNUZXh0OiAnTm8gcmVjZW50IHNlYXJjaGVzJyxcbiAgICAgIHNhdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZTogJ1NhdmUgdGhpcyBzZWFyY2gnLFxuICAgICAgcmVtb3ZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6ICdSZW1vdmUgdGhpcyBzZWFyY2ggZnJvbSBoaXN0b3J5JyxcbiAgICAgIGZhdm9yaXRlU2VhcmNoZXNUaXRsZTogJ0Zhdm9yaXRlJyxcbiAgICAgIHJlbW92ZUZhdm9yaXRlU2VhcmNoQnV0dG9uVGl0bGU6ICdSZW1vdmUgdGhpcyBzZWFyY2ggZnJvbSBmYXZvcml0ZXMnLFxuICAgIH0sXG4gICAgZXJyb3JTY3JlZW46IHtcbiAgICAgIHRpdGxlVGV4dDogJ1VuYWJsZSB0byBmZXRjaCByZXN1bHRzJyxcbiAgICAgIGhlbHBUZXh0OiAnWW91IG1pZ2h0IHdhbnQgdG8gY2hlY2sgeW91ciBuZXR3b3JrIGNvbm5lY3Rpb24uJyxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgc2VsZWN0VGV4dDogJ2ZvciBhdCB2w6ZsZ2UnLFxuICAgICAgc2VsZWN0S2V5QXJpYUxhYmVsOiAnRW50ZXIga2V5JyxcbiAgICAgIG5hdmlnYXRlVGV4dDogJ3RvIG5hdmlnYXRlJyxcbiAgICAgIG5hdmlnYXRlVXBLZXlBcmlhTGFiZWw6ICdBcnJvdyB1cCcsXG4gICAgICBuYXZpZ2F0ZURvd25LZXlBcmlhTGFiZWw6ICdBcnJvdyBkb3duJyxcbiAgICAgIGNsb3NlVGV4dDogJ3RvIGNsb3NlJyxcbiAgICAgIGNsb3NlS2V5QXJpYUxhYmVsOiAnRXNjYXBlIGtleScsXG4gICAgICBzZWFyY2hCeVRleHQ6ICdTZWFyY2ggYnknLFxuICAgIH0sXG4gICAgbm9SZXN1bHRzU2NyZWVuOiB7XG4gICAgICBub1Jlc3VsdHNUZXh0OiAnTm8gcmVzdWx0cyBmb3InLFxuICAgICAgc3VnZ2VzdGVkUXVlcnlUZXh0OiAnVHJ5IHNlYXJjaGluZyBmb3InLFxuICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNUZXh0OiAnQmVsaWV2ZSB0aGlzIHF1ZXJ5IHNob3VsZCByZXR1cm4gcmVzdWx0cz8nLFxuICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dDogJ0xldCB1cyBrbm93LicsXG4gICAgfSxcbiAgfSxcbn1cblxuXG5mdW5jdGlvbiBIaXQoeyBoaXQsIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxMaW5rIGhyZWY9e2hpdC51cmx9PntjaGlsZHJlbn08L0xpbms+XG59XG5cbmZ1bmN0aW9uIFNlYXJjaEljb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB7Li4ucHJvcHN9PlxuICAgICAgPHBhdGggZD1cIk0xNi4yOTMgMTcuNzA3YTEgMSAwIDAgMCAxLjQxNC0xLjQxNGwtMS40MTQgMS40MTRaTTkgMTRhNSA1IDAgMCAxLTUtNUgyYTcgNyAwIDAgMCA3IDd2LTJaTTQgOWE1IDUgMCAwIDEgNS01VjJhNyA3IDAgMCAwLTcgN2gyWm01LTVhNSA1IDAgMCAxIDUgNWgyYTcgNyAwIDAgMC03LTd2MlptOC43MDcgMTIuMjkzLTMuNzU3LTMuNzU3LTEuNDE0IDEuNDE0IDMuNzU3IDMuNzU3IDEuNDE0LTEuNDE0Wk0xNCA5YTQuOTggNC45OCAwIDAgMS0xLjQ2NCAzLjUzNmwxLjQxNCAxLjQxNEE2Ljk4IDYuOTggMCAwIDAgMTYgOWgtMlptLTEuNDY0IDMuNTM2QTQuOTggNC45OCAwIDAgMSA5IDE0djJhNi45OCA2Ljk4IDAgMCAwIDQuOTUtMi4wNWwtMS40MTQtMS40MTRaXCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoKCkge1xuICBsZXQgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBsZXQgW21vZGlmaWVyS2V5LCBzZXRNb2RpZmllcktleV0gPSB1c2VTdGF0ZSgpXG5cbiAgY29uc3Qgb25PcGVuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzT3Blbih0cnVlKVxuICB9LCBbc2V0SXNPcGVuXSlcblxuICBjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzT3BlbihmYWxzZSlcbiAgfSwgW3NldElzT3Blbl0pXG5cblxuXG4gIHVzZURvY1NlYXJjaEtleWJvYXJkRXZlbnRzKHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vZGlmaWVyS2V5KFxuICAgICAgLyhNYWN8aVBob25lfGlQb2R8aVBhZCkvaS50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkgPyAn4oyYJyA6ICdDdHJsICdcbiAgICApXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggaC02IHctNiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc206anVzdGlmeS1zdGFydCBtZDpoLWF1dG8gbWQ6dy04MCBtZDpmbGV4LW5vbmUgbWQ6cm91bmRlZC1sZyBtZDpweS0yLjUgbWQ6cGwtNCBtZDpwci0zLjUgbWQ6dGV4dC1zbSBtZDpyaW5nLTEgbWQ6cmluZy1zbGF0ZS0yMDAgbWQ6aG92ZXI6cmluZy1zbGF0ZS0zMDAgZGFyazptZDpiZy1zbGF0ZS04MDAvNzUgZGFyazptZDpyaW5nLWluc2V0IGRhcms6bWQ6cmluZy13aGl0ZS81IGRhcms6bWQ6aG92ZXI6Ymctc2xhdGUtNzAwLzQwIGRhcms6bWQ6aG92ZXI6cmluZy1zbGF0ZS01MDAgbGc6dy05NlwiXG4gICAgICAgIG9uQ2xpY2s9e29uT3Blbn1cbiAgICAgID5cbiAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaC01IHctNSBmbGV4LW5vbmUgZmlsbC1zbGF0ZS00MDAgZ3JvdXAtaG92ZXI6ZmlsbC1zbGF0ZS01MDAgZGFyazpmaWxsLXNsYXRlLTUwMCBtZDpncm91cC1ob3ZlcjpmaWxsLXNsYXRlLTQwMFwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHkgbWQ6bm90LXNyLW9ubHkgbWQ6bWwtMiBtZDp0ZXh0LXNsYXRlLTUwMCBtZDpkYXJrOnRleHQtc2xhdGUtNDAwXCI+XG4gICAgICAgICAgU8O4ZyBpIHJhcHBvcnRlblxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHttb2RpZmllcktleSAmJiAoXG4gICAgICAgICAgPGtiZCBjbGFzc05hbWU9XCJtbC1hdXRvIGhpZGRlbiBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTQwMCBkYXJrOnRleHQtc2xhdGUtNTAwIG1kOmJsb2NrXCI+XG4gICAgICAgICAgICA8a2JkIGNsYXNzTmFtZT1cImZvbnQtc2Fuc1wiPnttb2RpZmllcktleX08L2tiZD5cbiAgICAgICAgICAgIDxrYmQgY2xhc3NOYW1lPVwiZm9udC1zYW5zXCI+Szwva2JkPlxuICAgICAgICAgIDwva2JkPlxuICAgICAgICApfVxuICAgICAgPC9idXR0b24+XG4gICAgICB7aXNPcGVuICYmXG4gICAgICAgIGNyZWF0ZVBvcnRhbChcbiAgICAgICAgICA8RG9jU2VhcmNoTW9kYWxcbiAgICAgICAgICAgIHsuLi5kb2NTZWFyY2hDb25maWd9XG4gICAgICAgICAgICBpbml0aWFsU2Nyb2xsWT17d2luZG93LnNjcm9sbFl9XG4gICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgICAgaGl0Q29tcG9uZW50PXtIaXR9XG4gICAgICAgICAgICBuYXZpZ2F0b3I9e3tcbiAgICAgICAgICAgICAgbmF2aWdhdGUoeyBpdGVtVXJsIH0pIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChpdGVtVXJsKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPixcbiAgICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlUG9ydGFsIiwiTGluayIsIlJvdXRlciIsIkRvY1NlYXJjaE1vZGFsIiwidXNlRG9jU2VhcmNoS2V5Ym9hcmRFdmVudHMiLCJkb2NTZWFyY2hDb25maWciLCJhcHBJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19ET0NTRUFSQ0hfQVBQX0lEIiwiYXBpS2V5IiwiTkVYVF9QVUJMSUNfRE9DU0VBUkNIX0FQSV9LRVkiLCJpbmRleE5hbWUiLCJORVhUX1BVQkxJQ19ET0NTRUFSQ0hfSU5ERVhfTkFNRSIsIkRvY1NlYXJjaFRyYW5zbGF0aW9ucyIsImJ1dHRvbiIsImJ1dHRvblRleHQiLCJidXR0b25BcmlhTGFiZWwiLCJtb2RhbCIsInNlYXJjaEJveCIsInJlc2V0QnV0dG9uVGl0bGUiLCJyZXNldEJ1dHRvbkFyaWFMYWJlbCIsImNhbmNlbEJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25BcmlhTGFiZWwiLCJzdGFydFNjcmVlbiIsInJlY2VudFNlYXJjaGVzVGl0bGUiLCJub1JlY2VudFNlYXJjaGVzVGV4dCIsInNhdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZSIsInJlbW92ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlIiwiZmF2b3JpdGVTZWFyY2hlc1RpdGxlIiwicmVtb3ZlRmF2b3JpdGVTZWFyY2hCdXR0b25UaXRsZSIsImVycm9yU2NyZWVuIiwidGl0bGVUZXh0IiwiaGVscFRleHQiLCJmb290ZXIiLCJzZWxlY3RUZXh0Iiwic2VsZWN0S2V5QXJpYUxhYmVsIiwibmF2aWdhdGVUZXh0IiwibmF2aWdhdGVVcEtleUFyaWFMYWJlbCIsIm5hdmlnYXRlRG93bktleUFyaWFMYWJlbCIsImNsb3NlVGV4dCIsImNsb3NlS2V5QXJpYUxhYmVsIiwic2VhcmNoQnlUZXh0Iiwibm9SZXN1bHRzU2NyZWVuIiwibm9SZXN1bHRzVGV4dCIsInN1Z2dlc3RlZFF1ZXJ5VGV4dCIsInJlcG9ydE1pc3NpbmdSZXN1bHRzVGV4dCIsInJlcG9ydE1pc3NpbmdSZXN1bHRzTGlua1RleHQiLCJIaXQiLCJoaXQiLCJjaGlsZHJlbiIsImhyZWYiLCJ1cmwiLCJTZWFyY2hJY29uIiwicHJvcHMiLCJzdmciLCJhcmlhLWhpZGRlbiIsInZpZXdCb3giLCJwYXRoIiwiZCIsIlNlYXJjaCIsImlzT3BlbiIsInNldElzT3BlbiIsIm1vZGlmaWVyS2V5Iiwic2V0TW9kaWZpZXJLZXkiLCJvbk9wZW4iLCJvbkNsb3NlIiwidGVzdCIsIm5hdmlnYXRvciIsInBsYXRmb3JtIiwidHlwZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcGFuIiwia2JkIiwiaW5pdGlhbFNjcm9sbFkiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaGl0Q29tcG9uZW50IiwibmF2aWdhdGUiLCJpdGVtVXJsIiwicHVzaCIsImRvY3VtZW50IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Search.jsx\n"));

/***/ })

});