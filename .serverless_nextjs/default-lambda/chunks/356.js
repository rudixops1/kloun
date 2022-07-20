"use strict";
exports.id = 356;
exports.ids = [356];
exports.modules = {

/***/ 76754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ dialogAtom)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94715);

const dialogAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    key: new Date().toString(),
    default: {}
});


/***/ }),

/***/ 14693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ FormatJoke)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


const FormatJoke = ({ joke , short  })=>{
    if (short) {
        const substr = joke.substring(0, 150);
        const jlen = joke.length <= 150;
        const lines = substr.split("\n").slice(0, 3);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                lines.map((line, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: i === 2 && !jlen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: `${line}...`
                        }) : line
                    }, i)),
                substr.length >= 149 && lines.length <= 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: "..."
                })
            ]
        });
    }
    let i1 = 0;
    const remapped = joke.split("\n").map((line, i)=>{
        const num = line.startsWith("-") || line.startsWith(" -") || line.startsWith("\u2013") || line.startsWith("  -") ? (i1 += 1) % 2 === 0 ? "even" : "odd" : false;
        return {
            key: i,
            line: num === "odd" || num === "even" ? line.replace("-", "").replace("\u2013", "") : line,
            ...num && {
                oddness: num
            }
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: remapped.map(({ oddness , line , key  })=>oddness ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `flex flex-wrap pb-4 ${oddness === "even" ? "flex-row-reverse" : ""}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `relative whitespace-pre-wrap rounded-lg p-2 font-sans font-medium shadow-2xl ${oddness === "even" ? "bg-violet-900 text-right" : "bg-indigo-700 text-left"}`,
                    children: [
                        oddness === "odd" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute -left-4 top-3 inline-block w-4 overflow-hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-16 origin-top-right -rotate-45 bg-indigo-700"
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute -right-4 top-3 inline-block w-4 overflow-hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " h-16 origin-top-left rotate-45 bg-violet-900"
                            })
                        }),
                        line
                    ]
                })
            }, key) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "block pb-4 text-lg",
                children: line
            }, key))
    });
};


/***/ }),

/***/ 82356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ JokeThumbnail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94715);
/* harmony import */ var _components_JokeText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14693);
/* harmony import */ var _atoms_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76754);

/* eslint-disable no-underscore-dangle */ 




const FacebookShare = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/JokeThumbnail.tsx -> " + "@/components/FacebookShare"
        ]
    },
    ssr: false
});
const JokeThumbnail = ({ item , showcats , short , hideReadMore ,  })=>{
    const { joke , cat  } = item;
    const jlen = joke.length <= 150;
    const setDialog = (0,recoil__WEBPACK_IMPORTED_MODULE_3__/* .useSetRecoilState */ .Zl)(_atoms_dialog__WEBPACK_IMPORTED_MODULE_5__/* .dialogAtom */ .p);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "joke",
        children: [
            showcats && item.cat !== "\u0420\u0430\u0437\u043D\u0438" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "joketop",
                href: `/cat/${cat.replace(/ /g, "%20")}/`,
                children: cat
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jokewrap",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "py-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_JokeText__WEBPACK_IMPORTED_MODULE_4__/* .FormatJoke */ .H, {
                        joke: joke,
                        short: short
                    })
                })
            }),
            !hideReadMore && (!jlen ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                onClick: (e)=>{
                    e.preventDefault();
                    document.body.style.overflow = "hidden";
                    setDialog(()=>{
                        return {
                            id: item._id
                        };
                    });
                },
                className: "jokebottom",
                href: `/joke/${item._id}`,
                children: [
                    "\u041F\u0440\u043E\u0447\u0435\u0442\u0438",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/images/arrow.svg",
                        className: "ml-2 h-4 w-4",
                        alt: ""
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " absolute right-5 -mt-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FacebookShare, {
                    id: item._id,
                    noText: true,
                    noWrapper: true
                })
            }))
        ]
    });
};


/***/ })

};
;