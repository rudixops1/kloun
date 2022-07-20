"use strict";
(() => {
var exports = {};
exports.id = 648;
exports.ids = [648];
exports.modules = {

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 39512:
/***/ ((module) => {

module.exports = require("timers");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 24264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7157);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92800);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_api_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6249);

        
      const { processEnv } = __webpack_require__(19936)
      processEnv([])
    
        
        const runtimeConfig = {}
        ;
        

        

        const rewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
          ? {
            afterFiles: private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
          }
          : private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg

        const apiHandler = (0,next_dist_build_webpack_loaders_next_serverless_loader_api_handler__WEBPACK_IMPORTED_MODULE_2__/* .getApiHandler */ .Y)({
          pageModule: __webpack_require__(37977),
          rewrites: rewrites,
          i18n: undefined,
          page: "/api/story/[id]",
          basePath: "",
          pageIsDynamic: true,
          encodedPreviewProps: {previewModeId:"00d273e2553e3f8d75e68002f9a01d21",previewModeSigningKey:"2f435b6d05c2e3417f1e2b1807f119177698bdcce3791ed721ca68d8728801f1",previewModeEncryptionKey:"97ce404b3a590c83a37b4175a2536bd6708eab4baa876cb89e836c2b12263d15"}
        })
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiHandler);
      

/***/ }),

/***/ 70315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export GRAPH_URL */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28522);
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


/***/ }),

/***/ 37977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28522);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jimp_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72976);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70315);



const DATA_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query MyQuery($id: String!) {
    jokes_by_pk(_id: $id) {
      _id
      cat
      joke
    }
  }
`;
async function handler(req, res) {
    const { id  } = req.query;
    const { data  } = await _data_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].query */ .Z.query({
        query: DATA_QUERY,
        variables: {
            id
        }
    });
    if (data.jokes_by_pk.joke) {
        const image = new jimp_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(200, 200, "#232427");
        // client.photos.curated({ per_page: 1 }).then((photos) => {
        jimp_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"].read */ .Z.read(`https://kloun.lol/logobottomsmall.png`).then((background)=>{
            // return background
            jimp_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"].loadFont */ .Z.loadFont(`https://kloun.lol/font.fnt`).then((font)=>{
                const splitted = data.jokes_by_pk.joke.split("\n");
                let h = 50;
                splitted.forEach((line)=>{
                    image.print(font, 10, h, line, 180);
                    h += jimp_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"].measureTextHeight */ .Z.measureTextHeight(font, line, 180);
                });
                // image.blit(background, 10, 320)
                return image.resize(458, 458).blit(background, 190, 12);
            }).then((image1)=>{
                image1.getBuffer(jimp_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"].MIME_PNG */ .Z.MIME_PNG, (_, buffer)=>{
                    res.setHeader("Content-Type", "image/png");
                    res.end(buffer);
                });
            });
        });
    // })
    } else {
        res.status(404).json({
            error: "Not found"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [930,522,976,800], () => (__webpack_exec__(24264)));
module.exports = __webpack_exports__;

})();