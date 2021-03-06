exports.id = 253;
exports.ids = [253];
exports.modules = {

/***/ 9618:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AuthorLayout": 1322,
	"./AuthorLayout.tsx": 1322,
	"./ListLayout": 6834,
	"./ListLayout.tsx": 6834,
	"./PostLayout": 8628,
	"./PostLayout.tsx": 8628,
	"./PostSimple": 4255,
	"./PostSimple.tsx": 4255,
	"./SnippetsLayout": 4403,
	"./SnippetsLayout.tsx": 4403
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9618;

/***/ }),

/***/ 5988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const Image = ({ ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        ...rest
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ }),

/***/ 7253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ MDXLayoutRenderer)
});

// UNUSED EXPORTS: MDXComponents

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "mdx-bundler/client"
var client_ = __webpack_require__(1228);
// EXTERNAL MODULE: ./components/Image.tsx
var Image = __webpack_require__(5988);
// EXTERNAL MODULE: ./components/Link.tsx
var Link = __webpack_require__(7966);
;// CONCATENATED MODULE: ./components/TOCInline.tsx

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {TOCInlineProps} {
 *   toc,
 *   indentDepth = 3,
 *   fromHeading = 1,
 *   toHeading = 6,
 *   asDisclosure = false,
 *   exclude = '',
 * }
 *
 */ const TOCInline = ({ toc , indentDepth =3 , fromHeading =1 , toHeading =6 , asDisclosure =false , exclude =""  })=>{
    const re = Array.isArray(exclude) ? new RegExp("^(" + exclude.join("|") + ")$", "i") : new RegExp("^(" + exclude + ")$", "i");
    const filteredToc = toc.filter((heading)=>heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
    );
    const tocList = /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: filteredToc.map((heading)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: `${heading.depth >= indentDepth && "ml-6"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: heading.url,
                    children: heading.value
                })
            }, heading.value)
        )
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: asDisclosure ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("details", {
            open: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("summary", {
                    className: "ml-6 pt-2 pb-2 text-xl font-bold",
                    children: "Table of Contents"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "ml-6",
                    children: tocList
                })
            ]
        }) : tocList
    });
};
/* harmony default export */ const components_TOCInline = (TOCInline);

;// CONCATENATED MODULE: ./components/Pre.tsx


const Pre = ({ children  })=>{
    const textInput = (0,external_react_.useRef)(null);
    const { 0: hovered , 1: setHovered  } = (0,external_react_.useState)(false);
    const { 0: copied , 1: setCopied  } = (0,external_react_.useState)(false);
    const onEnter = ()=>{
        setHovered(true);
    };
    const onExit = ()=>{
        setHovered(false);
        setCopied(false);
    };
    const onCopy = ()=>{
        setCopied(true);
        navigator.clipboard.writeText(textInput.current.textContent);
        setTimeout(()=>{
            setCopied(false);
        }, 2000);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: textInput,
        onMouseEnter: onEnter,
        onMouseLeave: onExit,
        className: "relative",
        children: [
            hovered && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "Copy code",
                type: "button",
                className: `absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ${copied ? "border-green-400 focus:border-green-400 focus:outline-none" : "border-gray-300"}`,
                onClick: onCopy,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    fill: "none",
                    className: copied ? "text-green-400" : "text-gray-300",
                    children: copied ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                children: children
            })
        ]
    });
};
/* harmony default export */ const components_Pre = (Pre);

// EXTERNAL MODULE: ./components/NewsletterForm.tsx
var NewsletterForm = __webpack_require__(5769);
;// CONCATENATED MODULE: ./components/MDXComponents.tsx

/* eslint-disable react/display-name */ 






const Wrapper = ({ layout , ...rest })=>{
    const Layout = __webpack_require__(9618)(`./${layout}`).default;
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        ...rest
    });
};
const MDXComponents = {
    Image: Image/* default */.Z,
    //@ts-ignore
    TOCInline: components_TOCInline,
    a: Link/* default */.Z,
    pre: components_Pre,
    wrapper: Wrapper,
    //@ts-ignore
    BlogNewsletterForm: NewsletterForm/* BlogNewsletterForm */.w
};
const MDXLayoutRenderer = ({ layout , mdxSource , ...rest })=>{
    const MDXLayout = (0,external_react_.useMemo)(()=>(0,client_.getMDXComponent)(mdxSource)
    , [
        mdxSource
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(MDXLayout, {
        layout: layout,
        components: MDXComponents,
        ...rest
    });
};


/***/ }),

/***/ 2866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PageTitle({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",
        children: children
    });
};


/***/ }),

/***/ 7930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ScrollTopAndComment = ()=>{
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleWindowScroll = ()=>{
            if (window.scrollY > 50) setShow(true);
            else setShow(false);
        };
        window.addEventListener("scroll", handleWindowScroll);
        return ()=>window.removeEventListener("scroll", handleWindowScroll)
        ;
    }, []);
    const handleScrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const handleScrollToComment = ()=>{
        document.getElementById("comment").scrollIntoView();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `fixed right-8 bottom-8 hidden flex-col gap-3 ${show ? "md:flex" : "md:hidden"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                "aria-label": "Scroll To Comment",
                type: "button",
                onClick: handleScrollToComment,
                className: "rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    className: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                "aria-label": "Scroll To Top",
                type: "button",
                onClick: handleScrollTop,
                className: "rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    className: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
                        clipRule: "evenodd"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTopAndComment);


/***/ }),

/***/ 1322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthorLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_social_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7117);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5988);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9829);




function AuthorLayout({ children , frontMatter  }) {
    const { name , avatar , occupation , company , email , twitter , linkedin , github  } = frontMatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_3__/* .PageSEO */ .TQ, {
                title: `About - ${name}`,
                description: `About me - ${name}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-10 divide-y divide-gray-600",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col items-center pt-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    src: avatar,
                                    alt: "avatar",
                                    width: "192px",
                                    height: "192px",
                                    className: "h-48 w-48 rounded-full"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight",
                                    children: name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: company
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex space-x-3 pt-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            kind: "mail",
                                            href: `mailto:${email}`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            kind: "github",
                                            href: github
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            kind: "linkedin",
                                            href: linkedin
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            kind: "twitter",
                                            href: twitter
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "prose prose-lg max-w-none pt-8 pb-8 dark:prose-dark sm:prose-xl xl:col-span-2",
                            children: children
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 8628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PostLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Link.tsx
var Link = __webpack_require__(7966);
// EXTERNAL MODULE: ./components/PageTitle.tsx
var PageTitle = __webpack_require__(2866);
// EXTERNAL MODULE: ./components/SectionContainer.tsx
var SectionContainer = __webpack_require__(1536);
// EXTERNAL MODULE: ./components/SEO.tsx
var SEO = __webpack_require__(9829);
// EXTERNAL MODULE: ./components/Image.tsx
var Image = __webpack_require__(5988);
// EXTERNAL MODULE: ./components/Tag.tsx
var Tag = __webpack_require__(2065);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(1576);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/comments/index.tsx



const UtterancesComponent = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/comments/index.tsx -> " + "@/components/comments/Utterances"
        ]
    },
    ssr: false
});
const GiscusComponent = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/comments/index.tsx -> " + "@/components/comments/Giscus"
        ]
    },
    ssr: false
});
const DisqusComponent = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/comments/index.tsx -> " + "@/components/comments/Disqus"
        ]
    },
    ssr: false
});
const Comments = ({ frontMatter  })=>{
    let term;
    switch((siteMetadata_default()).comment.giscusConfig.mapping || (siteMetadata_default()).comment.utterancesConfig.issueTerm){
        case "pathname":
            term = frontMatter.slug;
            break;
        case "url":
            term = window.location.href;
            break;
        case "title":
            term = frontMatter.title;
            break;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "comment",
        children: [
            (siteMetadata_default()).comment && (siteMetadata_default()).comment.provider === "giscus" && /*#__PURE__*/ jsx_runtime_.jsx(GiscusComponent, {
                mapping: term
            }),
            (siteMetadata_default()).comment && (siteMetadata_default()).comment.provider === "utterances" && /*#__PURE__*/ jsx_runtime_.jsx(UtterancesComponent, {
                issueTerm: term
            }),
            (siteMetadata_default()).comment && (siteMetadata_default()).comment.provider === "disqus" && /*#__PURE__*/ jsx_runtime_.jsx(DisqusComponent, {
                frontMatter: frontMatter
            })
        ]
    });
};
/* harmony default export */ const comments = (Comments);

// EXTERNAL MODULE: ./components/ScrollTopAndComment.tsx
var ScrollTopAndComment = __webpack_require__(7930);
;// CONCATENATED MODULE: ./layouts/PostLayout.tsx










const editUrl = (fileName)=>`${(siteMetadata_default()).siteRepo}/blob/main/data/blog/${fileName}`
;
const discussUrl = (slug)=>`https://mobile.twitter.com/search?q=${encodeURIComponent(`${(siteMetadata_default()).siteUrl}/blog/${slug}`)}`
;
const postDateTemplate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};
function PostLayout({ frontMatter , authorDetails , next , prev , children  }) {
    const { slug , fileName , date , title , tags  } = frontMatter;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SectionContainer/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SEO/* BlogSEO */.Uy, {
                url: `${(siteMetadata_default()).siteUrl}/blog/${slug}`,
                authorDetails: authorDetails,
                ...frontMatter
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ScrollTopAndComment/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("article", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("header", {
                            className: "pt-6 xl:pb-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "space-y-1 text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("dl", {
                                        className: "space-y-10",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                    className: "sr-only",
                                                    children: "Published on"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                    className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                        dateTime: date,
                                                        children: new Date(date).toLocaleDateString((siteMetadata_default()).locale, postDateTemplate)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(PageTitle/* default */.Z, {
                                            children: title
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0",
                            style: {
                                gridTemplateRows: "auto 1fr"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                                    className: "pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                            className: "sr-only",
                                            children: "Authors"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8",
                                                children: authorDetails.map((author)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            author.avatar && /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                                                src: author.avatar,
                                                                width: "38px",
                                                                height: "38px",
                                                                alt: "avatar",
                                                                className: "h-10 w-10 rounded-full"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                                                                className: "whitespace-nowrap text-sm font-medium leading-5",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                                        className: "sr-only",
                                                                        children: "Name"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                                        className: "text-gray-900 dark:text-gray-100",
                                                                        children: author.name
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                                        className: "sr-only",
                                                                        children: "Twitter"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                                        children: author.twitter && /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                                            href: author.twitter,
                                                                            className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                            children: author.twitter.replace("https://twitter.com/", "@")
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, author.name)
                                                )
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "prose prose-lg max-w-none pt-10 pb-8 dark:prose-dark sm:prose-xl",
                                            children: children
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                    href: discussUrl(slug),
                                                    rel: "nofollow",
                                                    children: "Discuss on Twitter"
                                                }),
                                                ` ??? `,
                                                /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                    href: editUrl(fileName),
                                                    children: "View on GitHub"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(comments, {
                                            frontMatter: frontMatter
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y",
                                            children: [
                                                tags && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "py-4 xl:py-8",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",
                                                            children: "Tags"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flex flex-wrap",
                                                            children: tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx(Tag/* default */.Z, {
                                                                    text: tag
                                                                }, tag)
                                                            )
                                                        })
                                                    ]
                                                }),
                                                (next || prev) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",
                                                    children: [
                                                        prev && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                    className: "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",
                                                                    children: "Previous Article"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                                        href: `/blog/${prev.slug}`,
                                                                        children: prev.title
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        next && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                    className: "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",
                                                                    children: "Next Article"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                                        href: `/blog/${next.slug}`,
                                                                        children: next.title
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "pt-4 xl:pt-8",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                href: "/blog",
                                                className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                children: "\u2190 Back to the blog"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 4255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7966);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2866);
/* harmony import */ var _components_SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1536);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9829);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9870);
/* harmony import */ var _components_ScrollTopAndComment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7930);








function PostLayout({ frontMatter , next , prev , children  }) {
    const { slug , date , title , summary  } = frontMatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_4__/* .BlogSEO */ .Uy, {
                url: `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_5___default().siteUrl)}/snippets/${slug}`,
                ...frontMatter
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ScrollTopAndComment__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                className: "py-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "sr-only",
                                                    children: "Published on"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                        dateTime: date,
                                                        children: (0,_lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(date)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            children: title
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-lg text-gray-400 sm:text-xl",
                                        children: summary
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ",
                            style: {
                                gridTemplateRows: "auto 1fr"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "prose prose-lg max-w-none pt-10 pb-8 dark:prose-dark sm:prose-xl",
                                        children: children
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",
                                        children: [
                                            prev && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: `/snippets/${prev.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        "\u2190 ",
                                                        prev.title
                                                    ]
                                                })
                                            }),
                                            next && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: `/snippets/${next.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        next.title,
                                                        " \u2192"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};


/***/ })

};
;