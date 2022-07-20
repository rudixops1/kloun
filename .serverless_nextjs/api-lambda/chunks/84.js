"use strict";
exports.id = 84;
exports.ids = [84];
exports.modules = {

/***/ 64084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATA_AGREGATE": () => (/* binding */ DATA_AGREGATE),
/* harmony export */   "DATA_QUERY": () => (/* binding */ DATA_QUERY),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91333);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27757);
/* harmony import */ var _components_Layouts_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86843);
/* harmony import */ var _components_Layouts_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99772);
/* harmony import */ var _components_NewsThumbnail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73069);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83740);

/* eslint-disable no-underscore-dangle */ // import { useRouter } from 'next/router';






const Index = ({ newsbg , newsbg_aggregate  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layouts_Main__WEBPACK_IMPORTED_MODULE_2__/* .Main */ .o, {
        hideFooter: true,
        meta: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layouts_Meta__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .h, {
            title: "\u041D\u043E\u0432\u0438\u043D\u0438",
            description: "\u041D\u043E\u0432\u0438\u043D\u0438",
            cat: "\u041D\u043E\u0432\u0438\u043D\u0438",
            url: "https://kloun.lol/news/"
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "my-10 flex w-full flex-col",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-wrap",
                children: [
                    newsbg.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NewsThumbnail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            ...item
                        }, item.uid)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_5__/* .Pagination */ .t, {
                        pages: newsbg_aggregate.aggregate.max.nid,
                        pagenum: 1,
                        cat: "/news",
                        hideStats: true
                    })
                ]
            })
        })
    });
};
const DATA_AGREGATE = _apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql`
  query MyQuery {
    newsbg_aggregate {
      aggregate {
        max {
          nid
        }
      }
    }
  }
`;
const DATA_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql`
  query MyQuery($end: Int!) {
    newsbg(limit: 30, where: { nid: { _lte: $end } }, order_by: { nid: desc }) {
      title
      image
      uid
      slug
    }
  }
`;
const getServerSideProps = async ()=>{
    const npagenum = 1;
    const agregate = await _data_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].query */ .Z.query({
        query: DATA_AGREGATE
    });
    const start = agregate.data.newsbg_aggregate.aggregate.max.nid - (Number(npagenum) - 1) * 30;
    const end = start;
    const { data  } = await _data_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].query */ .Z.query({
        query: DATA_QUERY,
        variables: {
            npagenum,
            start,
            end
        }
    });
    return {
        props: {
            newsbg: data.newsbg,
            newsbg_aggregate: agregate.data.newsbg_aggregate,
            npagenum
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


/***/ })

};
;