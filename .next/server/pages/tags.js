"use strict";
(() => {
var exports = {};
exports.id = 165;
exports.ids = [165,195];
exports.modules = {

/***/ 2065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(195);



const Tag = ({ text  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/tags/${(0,_lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(text)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: "m-1 rounded-lg border border-primary-500 py-1 px-3 text-sm font-medium uppercase text-primary-500 transition duration-500 ease-in-out hover:bg-primary-500 hover:text-gray-100 group-hover:bg-primary-500 group-hover:text-gray-100 dark:group-hover:text-gray-900",
            children: text.split(" ").join("-")
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);


/***/ }),

/***/ 5957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ getAllTags)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4503);
/* harmony import */ var _utils_kebabCase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(195);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx__WEBPACK_IMPORTED_MODULE_3__]);
_mdx__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const root = process.cwd();
async function getAllTags(type) {
    const files = (0,_mdx__WEBPACK_IMPORTED_MODULE_3__/* .getFiles */ .bE)(type);
    const tagCount = {};
    // Iterate through each post, putting all found tags into `tags`
    files.forEach((file)=>{
        const source = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(root, "data", type, file), "utf8");
        const matterFile = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(source);
        const data = matterFile.data;
        if (data.tags && data.draft !== true) {
            data.tags.forEach((tag)=>{
                const formattedTag = (0,_utils_kebabCase__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(tag);
                if (formattedTag in tagCount) {
                    tagCount[formattedTag] += 1;
                } else {
                    tagCount[formattedTag] = 1;
                }
            });
        }
    });
    return tagCount;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8904);
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(github_slugger__WEBPACK_IMPORTED_MODULE_0__);

const kebabCase = (str)=>(0,github_slugger__WEBPACK_IMPORTED_MODULE_0__.slug)(str)
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (kebabCase);


/***/ }),

/***/ 5978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tags),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7966);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9829);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2065);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5957);
/* harmony import */ var _lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(195);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_tags__WEBPACK_IMPORTED_MODULE_5__]);
_lib_tags__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const getStaticProps = async ()=>{
    const tags = await (0,_lib_tags__WEBPACK_IMPORTED_MODULE_5__/* .getAllTags */ .Y)("blog");
    return {
        props: {
            tags
        }
    };
};
function Tags({ tags  }) {
    const sortedTags = Object.keys(tags).sort((a, b)=>tags[b] - tags[a]
    );
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_2__/* .PageSEO */ .TQ, {
                title: `Tags - ${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().author)}`,
                description: "Things I blog about"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "space-x-2 pt-6 pb-8 md:space-y-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14",
                            children: "Tags"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex max-w-lg flex-wrap py-8",
                        children: [
                            Object.keys(tags).length === 0 && "No tags found.",
                            sortedTags.map((t)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 mb-2 mr-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            text: t
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            href: `/tags/${(0,_lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(t)}`,
                                            className: "-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300",
                                            children: ` (${tags[t]})`
                                        })
                                    ]
                                }, t);
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8904:
/***/ ((module) => {

module.exports = require("github-slugger");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 7219:
/***/ ((module) => {

module.exports = require("image-size");

/***/ }),

/***/ 9793:
/***/ ((module) => {

module.exports = require("js-yaml");

/***/ }),

/***/ 8214:
/***/ ((module) => {

module.exports = require("mdx-bundler");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 3614:
/***/ ((module) => {

module.exports = import("mdast-util-to-string");;

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = import("rehype-autolink-headings");;

/***/ }),

/***/ 1380:
/***/ ((module) => {

module.exports = import("rehype-citation");;

/***/ }),

/***/ 9521:
/***/ ((module) => {

module.exports = import("rehype-katex");;

/***/ }),

/***/ 6370:
/***/ ((module) => {

module.exports = import("rehype-preset-minify");;

/***/ }),

/***/ 483:
/***/ ((module) => {

module.exports = import("rehype-prism-plus");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = import("rehype-slug");;

/***/ }),

/***/ 1083:
/***/ ((module) => {

module.exports = import("remark-footnotes");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 9832:
/***/ ((module) => {

module.exports = import("remark-math");;

/***/ }),

/***/ 6016:
/***/ ((module) => {

module.exports = import("unist-util-visit");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664,966,576,503,829], () => (__webpack_exec__(5978)));
module.exports = __webpack_exports__;

})();