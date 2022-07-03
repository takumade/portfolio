"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Experience)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./data/experienceData.ts
const experience = [
    {
        title: "Software Developer",
        company: "Corporate Advisors Canada",
        year: "2022 -> Present",
        companyLink: "https://www.corporateadvisors.ca/",
        desc: "Taking on code assignments as appropriate.Help troubleshoot issues and proactively suggest and develop fixes on separate development branches."
    },
    {
        title: "Web Developer",
        company: "Mutenga Bamboo",
        year: "2021 -> 2022",
        companyLink: "https://mutengabamboo.co.zw",
        desc: "Design, develop, test, deploy and maintain Mutenga Bamboo website"
    },
    {
        title: "Web Developer",
        company: "Bitssolutions",
        year: "2021 -> Present",
        companyLink: "https://bitssolutions.co.zw",
        desc: "Design, develop, test, deploy and maintain Bitssolutions website."
    },
    {
        title: "Software Developer",
        company: "263 Africa Media",
        year: "2020 -> 2022",
        companyLink: "https://playafrika.tv",
        desc: "Design, develop, test, deploy and maintain web apps, mobile apps and APIs."
    },
    {
        title: "Frontend Engineer",
        company: "Omni Learning",
        year: "2020 -> 2021",
        companyLink: "https://www.linkedin.com/company/omni-learning",
        desc: "Transform designs into frontent code. Worked closely with designers, marketing and management team to develop, document, and manage an Omni Project"
    },
    {
        title: "Software Development Intern",
        company: "263Africa TV.",
        year: "2019 -> 2019",
        companyLink: "https://www.linkedin.com/company/263africatv",
        desc: "Design, develop, test, deploy and mantain web projects."
    }, 
];
/* harmony default export */ const experienceData = (experience);

;// CONCATENATED MODULE: ./components/Experience.tsx


function Experience() {
    return /*#__PURE__*/ jsx_runtime_.jsx("ol", {
        className: "relative border-l border-gray-200 dark:border-gray-700",
        children: experienceData.map((exp, i)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "mb-10 ml-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-500 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-400",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "w-3 h-3 text-white dark:text-gray-900",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                strokeWidth: "2",
                                d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white",
                        children: exp.company
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("time", {
                        className: "block mb-2 font-mono font-bold text-sm leading-none text-gray-400 dark:text-gray-500",
                        children: [
                            exp.title,
                            "  - ",
                            exp.year
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400",
                        children: exp.desc
                    })
                ]
            });
        })
    });
}
/* harmony default export */ const components_Experience = (Experience);


/***/ }),

/***/ 2275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P$": () => (/* binding */ MessageIcon),
/* harmony export */   "Zm": () => (/* binding */ TwitterIcon),
/* harmony export */   "nI": () => (/* binding */ LinkedInIcon),
/* harmony export */   "q_": () => (/* binding */ GiHubIcon),
/* harmony export */   "yB": () => (/* binding */ WhatsAppIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const WhatsAppIcon = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: "fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"
        })
    });
};
const TwitterIcon = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: "fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"
        })
    });
};
function LinkedInIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        className: "fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        })
    });
}
function GiHubIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        className: "fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        })
    });
}
function MessageIcon() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        className: "fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"
            })
        ]
    });
}


/***/ }),

/***/ 4535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ aboutStyles)
/* harmony export */ });
const aboutStyles = {
    spanFirst: {
        "boxSizing": "border-box",
        "display": "inline-block",
        "overflow": "hidden",
        "width": "initial",
        "height": "initial",
        "background": "none",
        "opacity": "1",
        "border": "0px",
        "margin": "0px",
        "padding": "0px",
        "position": "relative",
        "maxWidth": "100%"
    },
    spanSecond: {
        "boxSizing": "border-box",
        "display": "block",
        "width": "initial",
        "height": "initial",
        "background": "none",
        "opacity": "1",
        "border": "0px",
        "margin": "0px",
        "padding": "0px",
        "maxWidth": "100%"
    },
    mainAvatar: {
        "position": "absolute",
        "inset": "0px",
        "boxSizing": "border-box",
        "padding": "0px",
        "border": "none",
        "margin": "auto",
        "display": "block",
        "width": "0px",
        "height": "0px",
        "minWidth": "100%",
        "maxWidth": "100%",
        "minHeight": "100%",
        "maxHeight": "100%"
    }
};


/***/ }),

/***/ 1473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(920);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2275);
/* harmony import */ var _css_customStyles_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4535);
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4503);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_mdx__WEBPACK_IMPORTED_MODULE_4__]);
_lib_mdx__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// @ts-ignore
const getStaticProps = async ()=>{
    const authorDetails = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_4__/* .getFileBySlug */ .x7)("authors", [
        "default"
    ]);
    const { mdxSource , frontMatter  } = authorDetails;
    return {
        props: {
            authorDetails: {
                mdxSource,
                frontMatter
            }
        }
    };
};
function About({ authorDetails  }) {
    const { mdxSource , frontMatter  } = authorDetails;
    console.log("authorDetails", authorDetails);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mb-auto",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-10 divide-y divide-gray-600",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col items-center pt-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: _css_customStyles_about__WEBPACK_IMPORTED_MODULE_3__/* .aboutStyles.spanFirst */ .c.spanFirst,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: _css_customStyles_about__WEBPACK_IMPORTED_MODULE_3__/* .aboutStyles.spanSecond */ .c.spanSecond,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    alt: "",
                                                    "aria-hidden": "true",
                                                    src: "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27192%27%20height=%27192%27/%3e",
                                                    style: {
                                                        display: "block",
                                                        maxWidth: "100%",
                                                        width: "initial",
                                                        height: "initial",
                                                        background: "none",
                                                        opacity: "1",
                                                        border: "0px",
                                                        margin: "0px",
                                                        padding: "0px"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                title: "avatar",
                                                layout: "fill",
                                                src: frontMatter.avatar,
                                                className: "h-48 w-48 rounded-full",
                                                style: _css_customStyles_about__WEBPACK_IMPORTED_MODULE_3__/* .aboutStyles.mainAvatar */ .c.mainAvatar
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("noscript", {})
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight",
                                        children: frontMatter.name
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: [
                                            frontMatter.company,
                                            " - \uD83D\uDC68\u200D\uD83D\uDCBB"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex space-x-3 pt-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "text-sm text-gray-500 transition hover:text-gray-600",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: frontMatter.email,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "sr-only",
                                                        children: "mail"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* .MessageIcon */ .P$, {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "text-sm text-gray-500 transition hover:text-gray-600",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: frontMatter.github,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "sr-only",
                                                        children: "github"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* .GiHubIcon */ .q_, {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "text-sm text-gray-500 transition hover:text-gray-600",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: frontMatter.linkedin,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "sr-only",
                                                        children: "linkedin"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* .LinkedInIcon */ .nI, {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "text-sm text-gray-500 transition hover:text-gray-600",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: frontMatter.twitter,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "sr-only",
                                                        children: "twitter"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* .TwitterIcon */ .Zm, {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "text-sm text-gray-500 transition hover:text-gray-600",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: frontMatter.whatsapp,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "sr-only",
                                                        children: "twitter"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* .WhatsAppIcon */ .yB, {})
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "pt-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "font-mono",
                                                    children: "Backend Development"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "font-mono",
                                                    children: "Frontend Development"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "font-mono",
                                                    children: "API Design & Development"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "font-mono",
                                                    children: "Database Design"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "font-mono",
                                                    children: "Desktop Development"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "font-mono",
                                                    children: "Mobile Development"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "font-mono",
                                                    children: "DevOps"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    paddingLeft: "1rem",
                                    paddingRight: "1rem"
                                },
                                className: "prose prose-lg max-w-none pt-8 pb-8 dark:prose-dark sm:prose-xl xl:col-span-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: " text-2xl font-bold leading-8 tracking-tight",
                                        children: "About Me"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "My interest in development started back in 2017 when I decided to self-teach myself Python \u2014 I was fascinated with how a person could create great things while sitting on his computer. ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "Little did I know that a lot of bugs were involved \uD83D\uDE02 ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "Its like i'm a detective \uD83D\uDD75\uFE0F\u200D\u2642\uFE0F who is trying to find the culprit in a crime scene, yet unknown to him, he is the culprit.\uD83D\uDE02\uD83D\uDE02\uD83D\uDE02 ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-2xl font-bold leading-8 tracking-tight",
                                        children: "Experience"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Experience__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                                ]
                            })
                        ]
                    })
                })
            })
        })
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

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [686,397,675,503], () => (__webpack_exec__(1473)));
module.exports = __webpack_exports__;

})();