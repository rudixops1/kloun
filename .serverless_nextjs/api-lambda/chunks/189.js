"use strict";
exports.id = 189;
exports.ids = [189];
exports.modules = {

/***/ 83740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Pagination = ({ pages , pagenum , cat ,  })=>{
    const max = Math.ceil(pages / 30);
    const curpage = Number(pagenum);
    const pagemap = new Array(max).fill(0).map((_, i)=>{
        const p = i + 1;
        return {
            page: p,
            active: p === curpage
        };
    }).map((x)=>{
        return x;
    }).filter(({ page  })=>{
        let start = curpage - 4;
        let end = curpage + 4;
        if (start < 1) start = 1;
        end = start + 8;
        return page >= start && page <= end;
    });
    const prev = curpage - 1 > 0 ? curpage - 1 : 1;
    const next = curpage + 1 < max ? curpage + 1 : max;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: "btn-group block sm:hidden",
                "aria-label": "Pagination",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `${cat}/${prev === 1 ? "" : prev}`,
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "btn",
                            children: "\u041D\u0430\u0437\u0430\u0434"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `${cat}/${next === 1 ? "" : next}`,
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "btn",
                            children: "\u041D\u0430\u043F\u0440\u0435\u0434"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: "btn-group hidden sm:block",
                "aria-label": "Pagination",
                children: [
                    pagemap[0].page !== 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `${cat}/`,
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "btn",
                                    children: "1"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "btn btn-disabled",
                                children: "..."
                            })
                        ]
                    }),
                    pagemap.map(({ page , active  })=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: `${cat}/${page === 1 ? "" : page}`,
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: `btn ${active ? "btn-active" : ""}`,
                                children: page
                            })
                        }, page);
                    }),
                    max - pagemap[0].page > 10 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "btn btn-disabled",
                                children: "..."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `${cat}/${max}`,
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "btn",
                                    children: max
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 27757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export GRAPH_URL */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91333);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GRAPH_URL = "http://34.242.41.16";
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    ssrMode: true,
    uri: `${GRAPH_URL}/v1/graphql`,
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
});
// const client2 = new ApolloClient({
//   ssrMode: true,
//   link: new HttpLink({
//     uri: `${GRAPH_URL}/v1/graphql`,
//     fetch,
//   }),
//   cache: new InMemoryCache(),
//   defaultOptions,
// })
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ })

};
;