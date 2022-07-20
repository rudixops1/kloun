"use strict";
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 86843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ Main)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/data/cats.ts
var cats = __webpack_require__(90158);
;// CONCATENATED MODULE: ./src/components/MenuNavBar.tsx



const MenuNavBar = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
        tabIndex: 0,
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        children: "\u041D\u0430\u0447\u0430\u043B\u043E"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        children: "\u0412\u0438\u0446\u043E\u0432\u0435"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: "rounded bg-base-100 p-2",
                        children: [
                            cats/* default.slice */.Z.slice(0, 10).map((item)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: `/cat/${item.cat}/`,
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            children: item.cat
                                        })
                                    })
                                }, item.cat)),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/?type=Jokes",
                                    children: "\u0412\u0441\u0438\u0447\u043A\u0438 "
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/news/",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        children: "\u041D\u043E\u0432\u0438\u043D\u0438"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_MenuNavBar = (MenuNavBar);

;// CONCATENATED MODULE: ./src/components/Layouts/Main.tsx



const Logo = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/Layouts/Main.tsx -> " + "@/components/Layouts/Header"
        ]
    },
    ssr: false
});
const Footer = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/Layouts/Main.tsx -> " + "@/components/Layouts/Footer"
        ]
    },
    ssr: false
});
const Main = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            props.meta,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "navbar absolute z-20",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "navbar-start",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "xs:visible dropdown visible sm:invisible md:invisible",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    tabIndex: 0,
                                    className: "btn btn-ghost btn-circle",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M4 6h16M4 12h16M4 18h7"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(components_MenuNavBar, {
                                    className: "dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "navbar-center"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: " navbar-end ",
                        children: /*#__PURE__*/ jsx_runtime.jsx(components_MenuNavBar, {
                            className: "xs:block xs:invisible menu rounded-box menu-horizontal invisible sm:visible md:visible"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex min-h-screen flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Logo, {
                        title: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container mx-auto flex grow flex-col justify-center px-2 pb-20 sm:px-4 md:px-8",
                        children: props.children
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Footer, {
                        hide: props.hideFooter
                    })
                ]
            })
        ]
    });
};



/***/ }),

/***/ 99772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Meta)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/next-seo/lib/next-seo.js
var next_seo = __webpack_require__(16847);
;// CONCATENATED MODULE: ./src/utils/AppConfig.ts
const AppConfig = {
    site_name: "\uD83E\uDD21 kloun.lol",
    title: "\uD83E\uDD21 \u041D\u0430\u0439-\u044F\u043A\u0438\u0442\u0435 \u0432\u0438\u0446\u043E\u0432\u0435 \u0438 \u043C\u0435\u043C\u0435\u0442\u0430\u043B\u0438\u043A\u0438 \u0437\u0430 \u043A\u043B\u043E\u0443\u043D\u0438",
    description: "\uD83E\uDD21 \u041D\u0430\u0439-\u044F\u043A\u0438\u0442\u0435 \u0432\u0438\u0446\u043E\u0432\u0435 \u0438 \u043C\u0435\u043C\u0435\u0442\u0430\u043B\u0438\u043A\u0438 \u0437\u0430 \u043A\u043B\u043E\u0443\u043D\u0438",
    locale: "bg_BG",
    localehtml: "bg",
    prefix: "https://kloun.lol"
};

;// CONCATENATED MODULE: ./src/components/Layouts/Meta.tsx

/* eslint-disable @next/next/no-script-component-in-head */ /* eslint-disable @next/next/no-before-interactive-script-outside-document */ 


const Meta = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        charSet: "UTF-8"
                    }, "charset"),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width,initial-scale=1"
                    }, "viewport"),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: `${AppConfig.prefix}/favicon.ico`
                    }, "favicon")
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(next_seo/* NextSeo */.PB, {
                title: props.title,
                description: props.description,
                canonical: props.canonical,
                facebook: {
                    appId: "281985576166744"
                },
                openGraph: {
                    title: props.title,
                    description: props.description,
                    url: props.url ? props.url : AppConfig.prefix,
                    locale: AppConfig.locale,
                    site_name: AppConfig.site_name,
                    type: "article",
                    article: {
                        publishedTime: "2022-06-30T00:00:00+00:00",
                        modifiedTime: "2022-06-30T00:00:00+00:00",
                        section: props.cat ? props.cat : "\u0420\u0430\u0437\u043D\u0438",
                        tags: [
                            "\u0412\u0438\u0446",
                            props.cat ? props.cat : "\u0420\u0430\u0437\u043D\u0438"
                        ]
                    },
                    images: [
                        {
                            width: 2136,
                            height: 1097,
                            type: props.imgtype ? props.imgtype : "image/png",
                            alt: "\u0412\u0438\u0446",
                            url: props.image ? props.image : `${AppConfig.prefix}/images/default.png`
                        }, 
                    ]
                }
            })
        ]
    });
};



/***/ }),

/***/ 90158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const catsdata = [
    {
        cat: "\u0420\u0430\u0437\u043D\u0438",
        count: 16276
    },
    {
        cat: "\u0416\u0435\u043D\u0438",
        count: 11697
    },
    {
        cat: "\u0421\u0435\u043C\u0435\u0439\u043D\u0438",
        count: 8741
    },
    {
        cat: "\u0411\u0438\u0441\u0435\u0440\u0438",
        count: 8392
    },
    {
        cat: "\u041C\u0440\u044A\u0441\u043D\u0438",
        count: 3409
    },
    {
        cat: "\u0411\u043B\u043E\u043D\u0434\u0438\u043D\u043A\u0438",
        count: 3355
    },
    {
        cat: "\u041F\u0440\u043E\u0444\u0435\u0441\u0438\u043E\u043D\u0430\u043B\u043D\u0438",
        count: 3098
    },
    {
        cat: "\u0416\u0438\u0432\u043E\u0442\u043D\u0438",
        count: 2949
    },
    {
        cat: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u0438\u0441\u0442\u0438",
        count: 2653
    },
    {
        cat: "\u041B\u044E\u0431\u0438\u043C\u0438 \u0413\u0435\u0440\u043E\u0438",
        count: 2586
    },
    {
        cat: "\u0427\u0435\u0440\u0435\u043D \u0445\u0443\u043C\u043E\u0440",
        count: 2138
    },
    {
        cat: "\u041F\u043E\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438",
        count: 2083
    },
    {
        cat: "\u041F\u043E\u043B\u0438\u0446\u0430\u0438",
        count: 1734
    },
    {
        cat: "\u0411\u043E\u0440\u0446\u0438",
        count: 1562
    },
    {
        cat: "\u0418\u0432\u0430\u043D\u0447\u043E \u0438 \u041C\u0430\u0440\u0438\u0439\u043A\u0430",
        count: 1538
    },
    {
        cat: "\u0414\u0435\u0446\u0430",
        count: 1521
    },
    {
        cat: "\u041F\u0438\u044F\u043D\u0441\u043A\u0438",
        count: 1512
    },
    {
        cat: "\u041C\u043B\u0430\u0434\u043E\u0436\u0435\u043D\u0446\u0438",
        count: 1303
    },
    {
        cat: "\u041F\u0440\u043E\u0441\u0442\u0438\u0442\u0443\u0442\u043A\u0438",
        count: 1268
    },
    {
        cat: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430",
        count: 1213
    },
    {
        cat: "\u041B\u0435\u043A\u0430\u0440\u0438",
        count: 1202
    },
    {
        cat: "\u0413\u0440\u0430\u0434\u043E\u0432\u0435",
        count: 1197
    },
    {
        cat: "\u0426\u0438\u0433\u0430\u043D\u0438",
        count: 1186
    },
    {
        cat: "\u0414\u044F\u0434\u043E\u0432\u0446\u0438",
        count: 1183
    },
    {
        cat: "\u0413\u043B\u0443\u043F\u0430\u0432\u0438",
        count: 1100
    },
    {
        cat: "\u041D\u0430\u0434\u043F\u0438\u0441\u0438",
        count: 1088
    },
    {
        cat: "\u0424\u0430\u0440\u043C\u0430\u0446\u0435\u0432\u0442\u0438",
        count: 1077
    },
    {
        cat: "\u041F\u043E\u0434\u0430\u0440\u044A\u0446\u0438",
        count: 1063
    },
    {
        cat: "\u041E\u0431\u0440\u0430\u0442\u043D\u0438",
        count: 1020
    },
    {
        cat: "\u0429\u0435\u0440\u043A\u0438",
        count: 1012
    },
    {
        cat: "\u041A\u0430\u043A\u0432\u0430 \u0435 \u0440\u0430\u0437\u043B\u0438\u043A\u0430\u0442\u0430",
        count: 1010
    },
    {
        cat: "\u041C\u043E\u043D\u0430\u0441\u0438",
        count: 1003
    },
    {
        cat: "\u0418\u0432\u0430\u043D\u0447\u043E",
        count: 990
    },
    {
        cat: "\u041A\u0430\u0442\u0430\u0434\u0436\u0438\u0438",
        count: 986
    },
    {
        cat: "\u041A\u043E\u043C\u0430\u043D\u0434\u0438\u0440\u043E\u0432\u043A\u0438",
        count: 984
    },
    {
        cat: "\u0415\u0432\u0440\u0435\u0438",
        count: 982
    },
    {
        cat: "\u0418\u0437\u043F\u0438\u0442\u0438",
        count: 972
    },
    {
        cat: "\u0426\u0438\u0433\u0430\u0440\u0438",
        count: 960
    },
    {
        cat: "\u0412\u0438\u043D\u043E",
        count: 959
    },
    {
        cat: "\u0410\u0434\u0432\u043E\u043A\u0430\u0442\u0438",
        count: 958
    },
    {
        cat: "\u0413\u0438\u043D\u0435\u043A\u043E\u043B\u043E\u0437\u0438",
        count: 956
    },
    {
        cat: "\u041C\u043B\u0430\u0434\u0435\u0436\u0438",
        count: 952
    },
    {
        cat: "\u0412\u043B\u0430\u043A\u043E\u0432\u0435",
        count: 950
    },
    {
        cat: "\u041F\u043B\u0430\u0436\u043E\u0432\u0435",
        count: 945
    },
    {
        cat: "\u041F\u0440\u043E\u0444\u0435\u0441\u043E\u0440\u0438",
        count: 940
    },
    {
        cat: "\u0428\u043E\u0444\u044C\u043E\u0440\u0438",
        count: 937
    },
    {
        cat: "\u041C\u0443\u0442\u0440\u0438",
        count: 909
    },
    {
        cat: "\u041F\u0440\u0430\u0441\u0435\u0442\u0430",
        count: 908
    },
    {
        cat: "\u0421\u044A\u0441\u0435\u0434\u0438",
        count: 895
    },
    {
        cat: "\u0420\u043E\u0436\u0434\u0435\u043D\u0438\u0446\u0438",
        count: 891
    },
    {
        cat: "\u0413\u0435\u0439\u043E\u0432\u0435",
        count: 887
    },
    {
        cat: "\u0424\u0435\u0439\u0441\u0431\u0443\u043A",
        count: 887
    },
    {
        cat: "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438",
        count: 886
    },
    {
        cat: "\u0421\u043E\u0444\u0438\u044F",
        count: 876
    },
    {
        cat: "\u041B\u044E\u0431\u043E\u0432\u043D\u0438\u043A",
        count: 869
    },
    {
        cat: "\u041F\u0440\u0430\u0437\u043D\u0438\u0447\u043D\u0438",
        count: 862
    },
    {
        cat: "\u0414\u0440\u0443\u0433\u0438",
        count: 860
    },
    {
        cat: "\u041A\u0435\u043B\u043D\u0435\u0440\u0438",
        count: 850
    },
    {
        cat: "\u0422\u043E\u0430\u043B\u0435\u0442\u043D\u0430",
        count: 840
    },
    {
        cat: "\u0423\u043C\u0440\u0435\u043B\u0438",
        count: 839
    },
    {
        cat: "\u0421\u043F\u043E\u0440\u0442\u043D\u0438",
        count: 838
    },
    {
        cat: "\u0421\u0435\u043A\u0440\u0435\u0442\u0430\u0440\u043A\u0438",
        count: 830
    },
    {
        cat: "\u0421\u0442\u0443\u0434\u0435\u043D\u0442\u0441\u043A\u0438",
        count: 829
    },
    {
        cat: "\u041E\u0433\u043B\u0435\u0434\u0430\u043B\u043E",
        count: 821
    },
    {
        cat: "\u0417\u0430\u0442\u0432\u043E\u0440\u043D\u0438\u0446\u0438",
        count: 804
    },
    {
        cat: "\u0414\u0435\u0431\u0435\u043B\u0438",
        count: 787
    },
    {
        cat: "\u0411\u0435\u0431\u0435\u0442\u0430",
        count: 779
    },
    {
        cat: "\u0420\u0430\u0434\u0438\u043E \u0435\u0440\u0435\u0432\u0430\u043D",
        count: 773
    },
    {
        cat: "\u041B\u044F\u0442\u043E",
        count: 757
    },
    {
        cat: "\u041A\u0440\u0430\u0432\u0438",
        count: 753
    },
    {
        cat: "\u041C\u0430\u0441\u0430",
        count: 751
    },
    {
        cat: "\u0427\u044A\u043A \u041D\u043E\u0440\u0438\u0441",
        count: 733
    },
    {
        cat: "\u0417\u0438\u043C\u0430",
        count: 730
    },
    {
        cat: "\u0422\u044A\u0449\u0438",
        count: 729
    },
    {
        cat: "\u0420\u0430\u043A\u0438\u044F",
        count: 727
    },
    {
        cat: "\u041F\u0441\u0438\u0445\u0438\u0430\u0442\u0440\u0438\u044F",
        count: 712
    },
    {
        cat: "\u0420\u0443\u0441\u0438\u044F",
        count: 708
    },
    {
        cat: "\u0413\u0440\u043E\u0437\u043D\u0438",
        count: 696
    },
    {
        cat: "\u041A\u0440\u044A\u0447\u043C\u0438",
        count: 690
    },
    {
        cat: "\u0425\u0440\u0430\u043D\u0430",
        count: 689
    },
    {
        cat: "\u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u0438",
        count: 689
    },
    {
        cat: "\u041B\u044E\u0431\u043E\u0432\u043D\u0438\u0446\u0430",
        count: 689
    },
    {
        cat: "\u041A\u0443\u043F\u043E\u043D\u0438",
        count: 669
    },
    {
        cat: "\u0423\u0438\u0441\u043A\u0438",
        count: 666
    },
    {
        cat: "\u041F\u0440\u0438\u043D\u0446\u043E\u0432\u0435 \u0438 \u043F\u0440\u0438\u043D\u0446\u0435\u0441\u0438",
        count: 664
    },
    {
        cat: "\u041D\u0430\u0440\u043A\u043E\u043C\u0430\u043D\u0441\u043A\u0438",
        count: 661
    },
    {
        cat: "\u0414\u043E\u043A\u0442\u043E\u0440\u0438",
        count: 660
    },
    {
        cat: "\u041F\u0435\u0440\u043D\u0438\u0447\u0430\u043D\u0438",
        count: 649
    },
    {
        cat: "\u0425\u043E\u0442\u0435\u043B\u0438",
        count: 643
    },
    {
        cat: "\u0411\u0430\u043D\u043A\u0438",
        count: 641
    },
    {
        cat: "\u0414\u0438\u0441\u043A\u043E\u0442\u0435\u043A\u0438",
        count: 640
    },
    {
        cat: "\u041F\u043B\u0443\u0432\u0430\u043D\u0435",
        count: 635
    },
    {
        cat: "\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0442\u0438",
        count: 632
    },
    {
        cat: "\u0423\u0441\u043C\u0438\u0432\u043A\u0438",
        count: 631
    },
    {
        cat: "\u0414\u044F\u0434\u043E \u041C\u0440\u0430\u0437",
        count: 625
    },
    {
        cat: "\u041D\u043E\u0432\u0430 \u0433\u043E\u0434\u0438\u043D\u0430",
        count: 624
    },
    {
        cat: "\u041A\u0438\u0442\u0430\u0439",
        count: 620
    },
    {
        cat: "\u041C\u044A\u0436\u0435",
        count: 617
    },
    {
        cat: "\u041C\u0430\u0440\u0438\u0439\u043A\u0430",
        count: 612
    },
    {
        cat: "\u041E\u0431\u0443\u0432\u043A\u0438",
        count: 612
    },
    {
        cat: "\u0413\u043E\u0442\u0432\u0430\u0447\u0438",
        count: 605
    },
    {
        cat: "\u041E\u0442\u0441\u043B\u0430\u0431\u0432\u0430\u043D\u0435",
        count: 603
    },
    {
        cat: "\u0424\u0440\u0430\u043D\u0446\u0438\u044F",
        count: 601
    },
    {
        cat: "\u041A\u043E\u043A\u043E\u0448\u043A\u0438",
        count: 598
    },
    {
        cat: "\u0422\u0430\u043A\u0441\u0438",
        count: 596
    },
    {
        cat: "\u0421\u043B\u043E\u043D\u043E\u0432\u0435",
        count: 595
    },
    {
        cat: "Mercedes",
        count: 592
    },
    {
        cat: "\u041F\u0435\u0442\u044A\u043A",
        count: 589
    },
    {
        cat: "\u0425\u043B\u044F\u0431",
        count: 584
    },
    {
        cat: "\u041E\u0432\u0447\u0430\u0440\u0438",
        count: 584
    },
    {
        cat: "SMS",
        count: 584
    },
    {
        cat: "\u0425\u0430\u0441\u0430\u043D \u0438 \u0410\u0439\u0448\u0435\u0442\u043E",
        count: 580
    },
    {
        cat: "\u0424\u0438\u043B\u043C\u0438",
        count: 575
    },
    {
        cat: "\u0421\u0443\u0442\u0438\u0435\u043D\u0438",
        count: 574
    },
    {
        cat: "\u041C\u0430\u0439\u043C\u0443\u043D\u0438",
        count: 573
    },
    {
        cat: "\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430",
        count: 570
    },
    {
        cat: "\u041F\u043B\u0430\u043D\u0438\u043D\u0430",
        count: 570
    },
    {
        cat: "\u0411\u043E\u0439\u043A\u043E \u0411\u043E\u0440\u0438\u0441\u043E\u0432",
        count: 567
    },
    {
        cat: "\u041E\u0431\u044F\u0434",
        count: 566
    },
    {
        cat: "\u041F\u0440\u043E\u0444\u0435\u0441\u0438\u0438",
        count: 556
    },
    {
        cat: "\u0421\u0432\u0430\u043B\u043A\u0438",
        count: 555
    },
    {
        cat: "\u0412\u043E\u0434\u043A\u0430",
        count: 554
    },
    {
        cat: "\u0423\u0447\u0435\u043D\u0438\u0447\u0435\u0441\u043A\u0438",
        count: 548
    },
    {
        cat: "\u0428\u043E\u043A\u043E\u043B\u0430\u0434",
        count: 537
    },
    {
        cat: "\u0420\u043E\u0434\u0438\u0442\u0435\u043B\u0438",
        count: 526
    },
    {
        cat: "\u0421\u0435\u0440\u0432\u0438\u0442\u044C\u043E\u0440\u0438",
        count: 526
    },
    {
        cat: "\u041A\u0440\u0435\u0434\u0438\u0442\u0438",
        count: 522
    },
    {
        cat: "\u0421\u0443\u043F\u0438",
        count: 518
    },
    {
        cat: "\u0421\u0432\u0430\u0442\u0431\u0430",
        count: 508
    },
    {
        cat: "\u041A\u0430\u043F\u0438\u0442\u0430\u043D\u0438",
        count: 502
    },
    {
        cat: "\u0421\u044A\u0434\u0438\u0438",
        count: 500
    },
    {
        cat: "\u041C\u043E\u0440\u0435\u0442\u043E",
        count: 493
    },
    {
        cat: "\u042F\u0434\u0435\u043D\u0435",
        count: 492
    },
    {
        cat: "\u041A\u043E\u0442\u043A\u0438",
        count: 491
    },
    {
        cat: "\u0423\u043C\u043D\u0438",
        count: 477
    },
    {
        cat: "\u042F\u043F\u043E\u043D\u0446\u0438",
        count: 465
    },
    {
        cat: "\u0421*\u043A\u0441",
        count: 450
    },
    {
        cat: "\u041D\u0430\u0447\u0430\u043B\u043D\u0438\u0446\u0438",
        count: 442
    },
    {
        cat: "\u0420\u0430\u0434\u0438\u043E \u0415\u0440\u0435\u0432\u0430\u043D",
        count: 440
    },
    {
        cat: "\u0424\u0443\u0442\u0431\u043E\u043B",
        count: 422
    },
    {
        cat: "\u0428\u0435\u0444\u043E\u0432\u0435",
        count: 419
    },
    {
        cat: "\u0421\u0443\u0442\u0440\u0438\u043D",
        count: 395
    },
    {
        cat: "\u0422\u0430\u0442\u043A\u043E\u0432\u0446\u0438",
        count: 330
    },
    {
        cat: "\u0422\u044A\u043F\u0438\u0437\u043C\u0438",
        count: 330
    },
    {
        cat: "\u0412\u043E\u0435\u043D\u043D\u0438",
        count: 326
    },
    {
        cat: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u0438",
        count: 322
    },
    {
        cat: "\u0422\u0435\u043B\u0435\u0432\u0438\u0437\u0438\u044F",
        count: 291
    },
    {
        cat: "\u041A\u0443\u0445\u043D\u044F",
        count: 282
    },
    {
        cat: "\u0413\u0430\u0434\u043E\u0440\u0438\u0438",
        count: 274
    },
    {
        cat: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442",
        count: 270
    },
    {
        cat: "\u0411\u0430\u0439 \u0413\u0430\u043D\u044C\u043E",
        count: 268
    },
    {
        cat: "\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F",
        count: 261
    },
    {
        cat: "\u041A\u0443\u0447\u0435\u0442\u0430",
        count: 257
    },
    {
        cat: "\u0417\u0430\u043F\u043B\u0430\u0442\u0438",
        count: 255
    },
    {
        cat: "\u0410\u0432\u0442\u043E",
        count: 247
    },
    {
        cat: "\u0418\u0437\u043D\u0435\u0432\u0435\u0440\u0438",
        count: 228
    },
    {
        cat: "\u0411\u0438\u0440\u0430",
        count: 225
    },
    {
        cat: "\u0411\u0440\u044E\u043D\u0435\u0442\u043A\u0438",
        count: 201
    },
    {
        cat: "\u0411\u0430\u0431\u0438",
        count: 191
    },
    {
        cat: "\u041F\u043E\u0434\u0441\u044A\u0434\u0438\u043C\u0438",
        count: 189
    },
    {
        cat: "\u041B\u0443\u0434\u0438",
        count: 189
    },
    {
        cat: "\u0427\u0443\u043A\u0447\u0438",
        count: 188
    },
    {
        cat: "\u0412 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0442\u0430",
        count: 173
    },
    {
        cat: "\u0413\u0435\u0440\u043E\u0438",
        count: 164
    },
    {
        cat: "\u0414\u0436\u0438\u043F\u043E\u0432\u0435",
        count: 143
    },
    {
        cat: "\u041F\u043E\u0440\u0443\u0447\u0438\u043A \u0420\u0436\u0435\u0432\u0441\u043A\u0438",
        count: 131
    },
    {
        cat: "\u0413\u0435\u043D\u043A\u043E",
        count: 130
    },
    {
        cat: "\u0427\u0435\u0440\u0432\u0435\u043D\u0430\u0442\u0430 \u0448\u0430\u043F\u0447\u0438\u0446\u0430",
        count: 130
    },
    {
        cat: "\u0429\u0438\u0440\u043B\u0438\u0446",
        count: 127
    },
    {
        cat: "\u041F\u0430\u0440\u0438",
        count: 126
    },
    {
        cat: "\u041A\u043E\u043C\u0443\u043D\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438",
        count: 120
    },
    {
        cat: "\u041A\u0430\u0444\u0435",
        count: 119
    },
    {
        cat: "\u041B\u043E\u0432\u0446\u0438",
        count: 119
    },
    {
        cat: "\u0421\u043B\u0443\u0436\u0438\u0442\u0435\u043B\u0438",
        count: 116
    },
    {
        cat: "\u0416\u0430\u0431\u0438",
        count: 113
    },
    {
        cat: "\u041D\u0430\u043D\u0435 \u0438 \u0412\u0443\u0442\u0435",
        count: 111
    },
    {
        cat: "\u0414\u044A\u0449\u0435\u0440\u0438",
        count: 106
    },
    {
        cat: "\u041F\u0440\u0438\u044F\u0442\u0435\u043B\u0438",
        count: 105
    },
    {
        cat: "\u0427\u0430\u043F\u0430\u0439 \u0438 \u041F\u0435\u0442\u043A\u0430",
        count: 102
    },
    {
        cat: "\u041A\u043E\u043C\u0430\u0440",
        count: 101
    },
    {
        cat: "\u0410\u0444\u0440\u0438\u043A\u0430",
        count: 96
    },
    {
        cat: "\u041F\u0435\u0442\u043A\u0430 \u0438 \u0427\u0430\u043F\u0430\u0435\u0432",
        count: 93
    },
    {
        cat: "\u0412\u0430\u0440\u043D\u0430",
        count: 92
    },
    {
        cat: "\u041F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F",
        count: 89
    },
    {
        cat: "\u0413\u043E\u0434\u0435\u043D\u0438\u0446\u0438",
        count: 89
    },
    {
        cat: "\u0417\u043B\u0430\u0442\u043D\u0430\u0442\u0430 \u0440\u0438\u0431\u043A\u0430",
        count: 88
    },
    {
        cat: "\u0417\u044A\u0431\u043E\u043B\u0435\u043A\u0430\u0440\u0438",
        count: 85
    },
    {
        cat: "\u0420\u0430\u0441\u0438\u0441\u0442\u043A\u0438",
        count: 84
    },
    {
        cat: "\u041C\u0435\u0447\u043E \u041F\u0443\u0445",
        count: 84
    },
    {
        cat: "\u041F\u044A\u0442\u0443\u0432\u0430\u043D\u0435",
        count: 82
    },
    {
        cat: "\u0413\u0430\u0431\u0440\u043E\u0432\u0441\u043A\u0438",
        count: 80
    },
    {
        cat: "\u041C\u0438\u0442\u043D\u0438\u0447\u0430\u0440\u0438",
        count: 77
    },
    {
        cat: "\u0411\u044A\u0440\u0437\u0430 \u043F\u043E\u043C\u043E\u0449",
        count: 76
    },
    {
        cat: "\u041C\u0430\u0439\u043A\u0438",
        count: 75
    },
    {
        cat: "\u0417\u043D\u0430\u0435\u0442\u0435 \u043B\u0438 \u0447\u0435",
        count: 72
    },
    {
        cat: "\u0417\u0435\u0442\u044C\u043E\u0432\u0435",
        count: 72
    },
    {
        cat: "\u0410\u043D\u0433\u043B\u0438\u044F",
        count: 72
    },
    {
        cat: "\u041A\u0430\u043D\u0438\u0431\u0430\u043B\u0438",
        count: 71
    },
    {
        cat: "\u0416\u0443\u0440\u043D\u0430\u043B\u0438\u0441\u0442\u0438",
        count: 70
    },
    {
        cat: "\u0414\u0435\u043F\u0443\u0442\u0430\u0442\u0438",
        count: 68
    },
    {
        cat: "\u0421\u0438\u043D\u043E\u0432\u0435",
        count: 66
    },
    {
        cat: "\u0414\u0430\u043D\u044A\u0447\u043D\u0438",
        count: 66
    },
    {
        cat: "\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F",
        count: 63
    },
    {
        cat: "\u0418\u0437\u0432\u044A\u043D\u0437\u0435\u043C\u043D\u0438",
        count: 63
    },
    {
        cat: "\u0418\u043D\u0434\u0438\u0430\u043D\u0446\u0438 \u0438 \u041A\u0430\u0443\u0431\u043E\u0438",
        count: 61
    },
    {
        cat: "\u0418\u0441\u0442\u043E\u0440\u0438\u0438",
        count: 61
    },
    {
        cat: "\u0418\u043C\u043F\u043E\u0442\u0435\u043D\u0442\u043D\u0438",
        count: 60
    },
    {
        cat: "\u041A\u0440\u043E\u043A\u043E\u0434\u0438\u043B\u0438",
        count: 59
    },
    {
        cat: "\u041A\u043E\u043B\u0435\u0433\u0438",
        count: 58
    },
    {
        cat: "\u041A\u0438\u043D\u043E",
        count: 57
    },
    {
        cat: "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u0442\u043E",
        count: 53
    },
    {
        cat: "\u0420\u0438\u0431\u0430\u0440\u0438",
        count: 51
    },
    {
        cat: "\u0418\u0437\u0431\u043E\u0440\u0438",
        count: 51
    },
    {
        cat: "\u0417\u043E\u043E\u043F\u0430\u0440\u043A",
        count: 50
    },
    {
        cat: "\u0421\u0432\u0435\u043A\u044A\u0440 \u0438 \u0441\u0432\u0435\u043A\u044A\u0440\u0432\u0430",
        count: 50
    },
    {
        cat: "\u041A\u044E\u0444\u0442\u0435\u0442\u0430",
        count: 49
    },
    {
        cat: "\u041A\u043B\u0438\u0435\u043D\u0442\u0438",
        count: 48
    },
    {
        cat: "\u041C\u0440\u0430\u0432\u043A\u0438",
        count: 47
    },
    {
        cat: "\u041D\u0435\u0433\u0440\u0438",
        count: 46
    },
    {
        cat: "\u0429\u0430\u0441\u0442\u0438\u0435",
        count: 46
    },
    {
        cat: "\u0426\u044A\u0440\u043A\u0432\u0430\u0442\u0430",
        count: 46
    },
    {
        cat: "\u0413\u044A\u0431\u0430\u0440\u0438",
        count: 45
    },
    {
        cat: "\u0417\u043C\u0438\u0438",
        count: 45
    },
    {
        cat: "\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438 \u0441\u0435\u0441\u0442\u0440\u0438",
        count: 45
    },
    {
        cat: "\u041C\u0430\u0433\u0430\u0440\u0435\u0442\u0430",
        count: 43
    },
    {
        cat: "\u041A\u043E\u043B\u0435\u0434\u0430 \u0438 \u041D\u043E\u0432\u0430 \u0433\u043E\u0434\u0438\u043D\u0430",
        count: 42
    },
    {
        cat: "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A",
        count: 42
    },
    {
        cat: "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0438",
        count: 41
    },
    {
        cat: "\u0425\u0438\u0440\u0443\u0440\u0437\u0438",
        count: 40
    },
    {
        cat: "\u0414\u0436\u0435\u043D\u0442\u044A\u043B\u043C\u0435\u043D\u0438",
        count: 40
    },
    {
        cat: "\u041A\u0430\u0437\u0430\u0440\u043C\u0430",
        count: 37
    },
    {
        cat: "\u0421\u043C\u044A\u0440\u0442\u0430",
        count: 37
    },
    {
        cat: "\u041F\u044A\u0440\u0432\u0430\u0442\u0430 \u0431\u0440\u0430\u0447\u043D\u0430 \u043D\u043E\u0449",
        count: 37
    },
    {
        cat: "\u0415\u0432\u0440\u043E\u043F\u0430",
        count: 36
    },
    {
        cat: "\u0429\u044A\u0440\u043A\u0435\u043B\u0438",
        count: 35
    },
    {
        cat: "\u0415\u0440\u0433\u0435\u043D\u0438",
        count: 35
    },
    {
        cat: "\u0421\u0442\u044E\u0430\u0440\u0434\u0435\u0441\u0438",
        count: 34
    },
    {
        cat: "\u041B\u0443\u043D\u0430\u0442\u0430",
        count: 34
    },
    {
        cat: "\u041A\u0440\u0430\u0441\u0438\u0432\u0438",
        count: 34
    },
    {
        cat: "\u041C\u043E\u0442\u043E\u0440\u0438",
        count: 34
    },
    {
        cat: "\u0422\u043E\u043A\u0430",
        count: 33
    },
    {
        cat: "\u041F\u0440\u043E\u043B\u0435\u0442",
        count: 33
    },
    {
        cat: "\u0420\u0438\u0431\u043E\u043B\u043E\u0432",
        count: 32
    },
    {
        cat: "\u041E\u043F\u0442\u0438\u043C\u0438\u0441\u0442\u0438",
        count: 32
    },
    {
        cat: "\u041F\u0440\u043E\u0434\u0430\u0432\u0430\u0447\u0438",
        count: 32
    },
    {
        cat: "\u041A\u0430\u0441\u0438\u0435\u0440\u0438",
        count: 32
    },
    {
        cat: "\u041F\u0430\u0442\u043A\u0438",
        count: 32
    },
    {
        cat: "\u0417\u0430\u0439\u043E \u0411\u0430\u0439\u043E",
        count: 32
    },
    {
        cat: "\u0421\u043F\u0438\u043D",
        count: 31
    },
    {
        cat: "\u041A\u0430\u043C\u0438\u043E\u043D\u0438",
        count: 30
    },
    {
        cat: "\u041F\u0430\u0440\u043B\u0430\u043C\u0435\u043D\u0442",
        count: 30
    },
    {
        cat: "\u0423\u0438\u043A\u0435\u043D\u0434",
        count: 30
    },
    {
        cat: "\u0421\u044A\u0431\u043E\u0442\u0430",
        count: 29
    },
    {
        cat: "\u041F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442\u0441\u043A\u0438",
        count: 28
    },
    {
        cat: "\u041F\u0435\u0448\u043E",
        count: 28
    },
    {
        cat: "\u041F\u0443\u0441\u0442\u0438\u043D\u044F",
        count: 28
    },
    {
        cat: "\u0428\u0435\u0440\u043B\u043E\u043A \u0425\u043E\u0443\u043C\u0441",
        count: 27
    },
    {
        cat: "\u0420\u0430\u044F \u0438 \u0410\u0434\u0430",
        count: 27
    },
    {
        cat: "\u0426\u0430\u0440\u0435",
        count: 27
    },
    {
        cat: "\u041C\u0438\u043D\u0438\u0441\u0442\u0440\u0438",
        count: 27
    },
    {
        cat: "\u0418\u043D\u0442\u0435\u043B\u0438\u0433\u0435\u043D\u0442\u043D\u0438",
        count: 27
    },
    {
        cat: "\u0421\u043B\u0430\u0431\u043E\u0442\u0435\u043B\u0435\u0441\u043D\u0438",
        count: 26
    },
    {
        cat: "\u041E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u0438",
        count: 26
    },
    {
        cat: "\u041E\u0442\u043F\u0443\u0441\u043A\u0430\u0440\u0438",
        count: 25
    },
    {
        cat: "\u041C\u0430\u0439\u0441\u0442\u043E\u0440\u0438",
        count: 25
    },
    {
        cat: "\u0422\u0443\u0440\u0438\u0441\u0442\u0438",
        count: 25
    },
    {
        cat: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0438",
        count: 25
    },
    {
        cat: "\u0424\u0438\u0442\u043D\u0435\u0441",
        count: 24
    },
    {
        cat: "\u041D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435",
        count: 24
    },
    {
        cat: "\u041E\u0431\u0438\u0440\u0438",
        count: 24
    },
    {
        cat: "\u0411\u0438\u0437\u043D\u0435\u0441\u043C\u0435\u043D\u0438",
        count: 24
    },
    {
        cat: "\u041F\u0430\u043F\u0430\u0433\u0430\u043B\u0438",
        count: 24
    },
    {
        cat: "\u041A\u0438\u0440\u043A\u043E\u0440 \u0438 \u0413\u0430\u0440\u0430\u0431\u0435\u0434",
        count: 23
    },
    {
        cat: "\u0420\u0430\u0431\u043E\u0442\u043D\u0438\u0446\u0438",
        count: 23
    },
    {
        cat: "\u0421\u0435\u043B\u044F\u043D\u0438",
        count: 22
    },
    {
        cat: "\u041B\u0438\u0441\u0438\u0446\u0438",
        count: 22
    },
    {
        cat: "\u0422\u0440\u0435\u0432\u0430",
        count: 21
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catsdata);


/***/ })

};
;