"use strict";
exports.id = 965;
exports.ids = [965];
exports.modules = {

/***/ 87965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATA_QUERY_CAT": () => (/* binding */ DATA_QUERY_CAT),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91333);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27757);
/* harmony import */ var _components_JokeThumbnail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82356);
/* harmony import */ var _components_Layouts_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86843);
/* harmony import */ var _components_Layouts_Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99772);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83740);

/* eslint-disable no-underscore-dangle */ 






const CatPage = ({ jokes , pages , pagenum , cat  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layouts_Main__WEBPACK_IMPORTED_MODULE_4__/* .Main */ .o, {
        meta: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layouts_Meta__WEBPACK_IMPORTED_MODULE_5__/* .Meta */ .h, {
            title: `Вицове от ${cat} на страница ${pagenum}`,
            description: `Вицове от ${cat}${jokes[0].joke.replace(/\n/gi, " ").substring(0, 100)}`
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "breadcrumbs text-sm",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/?type=Jokes",
                                children: "\u0412\u0438\u0446\u043E\u0432\u0435"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `/cat/${cat}`,
                                children: cat
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: pagenum
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_6__/* .Pagination */ .t, {
                pages: pages,
                pagenum: pagenum,
                cat: `/cat/${cat}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-wrap",
                children: jokes.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_JokeThumbnail__WEBPACK_IMPORTED_MODULE_3__/* .JokeThumbnail */ .W, {
                        item: item,
                        showcats: false,
                        short: true
                    }, item._id))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed bottom-0 left-0 z-10 flex w-full justify-center bg-black/30 backdrop-blur-sm",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_6__/* .Pagination */ .t, {
                    pages: pages,
                    pagenum: pagenum,
                    cat: `/cat/${cat}`,
                    hideStats: true
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatPage);
const DATA_QUERY_CAT = _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
  query MyQuery($cat: String!, $offset: Int!) {
    jokes_aggregate(where: { cat: { _eq: $cat } }) {
      aggregate {
        count(columns: _id)
      }
    }
    jokes(
      where: { cat: { _eq: $cat } }
      order_by: { nid: desc }
      limit: 30
      offset: $offset
    ) {
      _id
      joke
    }
  }
`;
const getServerSideProps = async (context)=>{
    const { cat  } = context.query;
    const { data  } = await _data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].query */ .Z.query({
        query: DATA_QUERY_CAT,
        variables: {
            pagenum: 1,
            offset: 0,
            cat
        }
    });
    return {
        props: {
            jokes: data.jokes,
            pagenum: 1,
            cat,
            pages: data.jokes_aggregate.aggregate.count
        }
    };
};


/***/ })

};
;