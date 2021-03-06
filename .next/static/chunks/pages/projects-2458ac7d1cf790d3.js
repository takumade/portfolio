;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [327],
  {
    7670: function (t, e, a) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/projects',
        function () {
          return a(2643)
        },
      ])
    },
    5988: function (t, e, a) {
      'use strict'
      var i = a(7320),
        r = a(5675),
        n = a.n(r)
      function o(t, e, a) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        )
      }
      function s() {
        return (
          (s =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var a = arguments[e]
                for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i])
              }
              return t
            }),
          s.apply(this, arguments)
        )
      }
      e.Z = function (t) {
        var e = s({}, t)
        return (0, i.tZ)(
          n(),
          (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var a = null != arguments[e] ? arguments[e] : {},
                i = Object.keys(a)
              'function' === typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(a).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(a, t).enumerable
                  })
                )),
                i.forEach(function (e) {
                  o(t, e, a[e])
                })
            }
            return t
          })({}, e)
        )
      }
    },
    9829: function (t, e, a) {
      'use strict'
      a.d(e, {
        $t: function () {
          return m
        },
        TQ: function () {
          return p
        },
        Uy: function () {
          return d
        },
      })
      var i = a(7320),
        r = a(9008),
        n = a.n(r),
        o = a(1163),
        s = a(1576),
        c = a.n(s),
        l = function (t) {
          var e = t.title,
            a = t.description,
            r = t.ogType,
            s = t.ogImage,
            l = t.twImage,
            p = t.canonicalUrl,
            m = (0, o.useRouter)()
          return (0, i.BX)(n(), {
            children: [
              (0, i.tZ)('title', { children: e }),
              (0, i.tZ)('meta', { name: 'robots', content: 'follow, index' }),
              (0, i.tZ)('meta', { name: 'description', content: a }),
              (0, i.tZ)('meta', {
                property: 'og:url',
                content: ''.concat(c().siteUrl).concat(m.asPath),
              }),
              (0, i.tZ)('meta', { property: 'og:type', content: r }),
              (0, i.tZ)('meta', { property: 'og:site_name', content: c().title }),
              (0, i.tZ)('meta', { property: 'og:description', content: a }),
              (0, i.tZ)('meta', { property: 'og:title', content: e }),
              Array.isArray(s)
                ? s.map(function (t) {
                    var e = t.url
                    return (0, i.tZ)('meta', { property: 'og:image', content: e }, e)
                  })
                : (0, i.tZ)('meta', { property: 'og:image', content: s }, s),
              (0, i.tZ)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
              (0, i.tZ)('meta', { name: 'twitter:site', content: c().twitter }),
              (0, i.tZ)('meta', { name: 'twitter:title', content: e }),
              (0, i.tZ)('meta', { name: 'twitter:description', content: a }),
              (0, i.tZ)('meta', { name: 'twitter:image', content: l }),
              (0, i.tZ)('link', {
                rel: 'canonical',
                href: p || ''.concat(c().siteUrl).concat(m.asPath),
              }),
            ],
          })
        },
        p = function (t) {
          var e = t.title,
            a = t.description,
            r = c().siteUrl + c().socialBanner,
            n = c().siteUrl + c().socialBanner
          return (0, i.tZ)(l, {
            title: e,
            description: a,
            ogType: 'website',
            ogImage: r,
            twImage: n,
          })
        },
        m = function (t) {
          var e = t.title,
            a = t.description,
            r = c().siteUrl + c().socialBanner,
            s = c().siteUrl + c().socialBanner,
            p = (0, o.useRouter)()
          return (0, i.BX)(i.HY, {
            children: [
              (0, i.tZ)(l, { title: e, description: a, ogType: 'website', ogImage: r, twImage: s }),
              (0, i.tZ)(n(), {
                children: (0, i.tZ)('link', {
                  rel: 'alternate',
                  type: 'application/rss+xml',
                  title: ''.concat(a, ' - RSS feed'),
                  href: ''.concat(c().siteUrl).concat(p.asPath, '/feed.xml'),
                }),
              }),
            ],
          })
        },
        d = function (t) {
          var e = t.authorDetails,
            a = t.title,
            r = t.summary,
            o = t.date,
            s = t.lastmod,
            p = t.url,
            m = t.images,
            d = void 0 === m ? [] : m,
            u = t.canonicalUrl,
            g = new Date(o).toISOString(),
            h = new Date(s || o).toISOString(),
            f = (0 === d.length ? [c().socialBanner] : 'string' === typeof d ? [d] : d).map(
              function (t) {
                return { '@type': 'ImageObject', url: ''.concat(c().siteUrl).concat(t) }
              }
            ),
            b = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': p },
              headline: a,
              image: f,
              datePublished: g,
              dateModified: h,
              author: e
                ? e.map(function (t) {
                    return { '@type': 'Person', name: t.name }
                  })
                : { '@type': 'Person', name: c().author },
              publisher: {
                '@type': 'Organization',
                name: c().author,
                logo: { '@type': 'ImageObject', url: ''.concat(c().siteUrl).concat(c().siteLogo) },
              },
              description: r,
            },
            y = f[0].url
          return (0, i.BX)(i.HY, {
            children: [
              (0, i.tZ)(l, {
                title: a,
                description: r,
                ogType: 'article',
                ogImage: f,
                twImage: y,
                canonicalUrl: u,
              }),
              (0, i.BX)(n(), {
                children: [
                  o && (0, i.tZ)('meta', { property: 'article:published_time', content: g }),
                  s && (0, i.tZ)('meta', { property: 'article:modified_time', content: h }),
                  (0, i.tZ)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(b, null, 2) },
                  }),
                ],
              }),
            ],
          })
        }
    },
    2643: function (t, e, a) {
      'use strict'
      a.r(e),
        a.d(e, {
          default: function () {
            return m
          },
        })
      var i = a(7320),
        r = a(1576),
        n = a.n(r),
        o = [
          {
            title: 'Hackathon Board',
            link: 'https://github.com/JS-Hub-ZW/hackathon-board',
            imgUrl: '/static/images/projects/hackathon-board.jpeg',
            stack: ['ReactJS', 'Chakra UI', 'Payload CMS'],
            description:
              'Is a hackathon listing site. It lists past, upcoming and current hackathons.',
            platform: 'Web',
            status: 'Done',
            feature: !1,
          },
          {
            title: 'Papapi',
            link: 'https://github.com/takumade/papapi',
            imgUrl: '/static/images/projects/papapi.png',
            stack: ['Feathers JS', 'Typescript', 'MariaDB'],
            description: 'Papapi is a payment microservice for Paynow, Paypal and Stripe.',
            platform: 'Web',
            status: 'Done',
            feature: !1,
          },
          {
            title: 'Heyooh',
            link: 'https://github.com/JS-Hub-ZW/heyooh',
            imgUrl: '/static/images/projects/heyooh.jpeg',
            stack: ['Typescript'],
            description: 'Is a Whatsapp Cloud API wrapper written in Typescript.',
            platform: 'Web',
            status: 'Done',
            feature: !1,
          },
          {
            title: 'Bits Solutions',
            link: 'https://bitssolutions.co.zw',
            imgUrl: '/static/images/projects/bits.webp',
            stack: ['React', 'NextJS', 'TailwindCSS'],
            description:
              'Bitssolutions is a software company that provides solutions to businesses.',
            platform: 'Web',
            status: 'Done',
            feature: !1,
          },
          {
            title: 'Quality Maids',
            link: 'https://qualitymaids.co.zw',
            imgUrl: '/static/images/projects/qm.webp',
            stack: ['React', 'TailwindCSS', 'Laravel'],
            description:
              'Quality Maids International is a company that offer maid and cleaning services.',
            platform: 'Web',
            status: 'Done',
            feature: !0,
          },
          {
            title: 'Mutenga Bamboo',
            link: 'https://mutengabamboo.co.zw',
            imgUrl: '/static/images/projects/bamboo.webp',
            stack: ['React', 'NextJS', 'TailwindCSS'],
            description: 'Mutenga Bamboo is a company involved in bamboo and its products.',
            platform: 'Web',
            status: 'Done',
            feature: !0,
          },
          {
            title: 'Trinity',
            link: 'https://mutengabamboo.co.zw',
            imgUrl: '/static/images/projects/vimeo.webp',
            stack: ['Flutter', 'Dart'],
            description:
              'Vimeo Player Trinity is a Flutter package for playing any videos from Vimeo by id.',
            platform: 'Mobile',
            status: 'Done',
            feature: !0,
          },
          {
            title: 'Laratron',
            link: 'https://github.com/takumade/laratron',
            imgUrl: '/static/images/projects/laratron.webp',
            stack: ['Electron', 'Laravel'],
            description: 'Making Laravel desktop application using Electron Js(For MAC OS).',
            platform: 'Desktop',
            status: 'Done',
            feature: !1,
          },
          {
            title: 'Taskmaster',
            link: 'https://github.com/takumade/taskmaster',
            imgUrl: '/static/images/projects/taskmaster.webp',
            stack: ['Electron', 'React', 'TailwindCSS', 'Recoil'],
            description:
              'Offline first kanban app. It allows creation and grouping of boards and tasks.',
            platform: 'Desktop',
            status: 'Development',
            feature: !0,
          },
          {
            title: 'Chazos',
            link: 'https://github.com/Chazos/chazos',
            imgUrl: '/static/images/projects/chazos.webp',
            stack: ['Laravel', 'TailwindCSS', 'AlpineJS'],
            description: 'Is Headless CMS for Laravel. It eases content creation and saves time.',
            platform: 'Web',
            status: 'Development',
            feature: !0,
          },
          {
            title: 'Omni Learning',
            link: 'https://omni-learning.com/',
            imgUrl: '/static/images/projects/omni.webp',
            stack: ['Laravel', 'Bootstrap', 'Livewire', 'JQuery'],
            description: 'Is an online learning platform that allows you to learn from anywhere.',
            platform: 'Web',
            status: 'Done',
            feature: !0,
          },
          {
            title: 'Exercise Tracker',
            link: 'https://exercisetracker.madechangu.repl.co/',
            imgUrl: '/static/images/projects/etracker.webp',
            stack: ['NodeJS', 'Express', 'MongoDB', 'Mongoose'],
            description: 'Is an exercise tracker that is build on Nodejs, Express, MongoDB.',
            platform: 'Web',
            status: 'Done',
            feature: !0,
          },
          {
            title: 'File Metadata',
            link: 'https://filemetadata.madechangu.repl.co',
            imgUrl: '/static/images/projects/metadata.webp',
            stack: ['NodeJS', 'Express'],
            description: 'Is a microservice that can detect metadata of an uploaded file.',
            platform: 'Web',
            status: 'Done',
            feature: !1,
          },
          {
            title: 'URL Shortener',
            link: 'https://filemetadata.madechangu.repl.co',
            imgUrl: '/static/images/projects/shortener.webp',
            stack: ['NodeJS', 'Express', 'MongoDB', 'Mongoose'],
            description: 'Is a microservice that can shorten a given URL.',
            platform: 'Web',
            status: 'Done',
            feature: !1,
          },
          {
            title: 'Timestamp',
            link: 'https://timestamp.madechangu.repl.co',
            imgUrl: '/static/images/projects/timestamp.webp',
            stack: ['NodeJS', 'Express'],
            description: 'Is a microservice that shows you timestamps \ud83d\ude02',
            platform: 'Web',
            status: 'Done',
            feature: !1,
          },
        ],
        s = a(5988),
        c = a(7966),
        l = function (t) {
          var e = t.title,
            a = t.description,
            r = t.imgSrc,
            n = t.href,
            o = t.stack
          return (0, i.tZ)('div', {
            className: 'md p-4 md:w-1/3',
            style: { maxWidth: '544px' },
            children: (0, i.BX)('div', {
              className: ''.concat(
                r && 'h-full',
                '  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700'
              ),
              children: [
                r &&
                  (n
                    ? (0, i.tZ)(c.Z, {
                        href: n,
                        'aria-label': 'Link to '.concat(e),
                        children: (0, i.tZ)(s.Z, {
                          alt: e,
                          src: r,
                          className: 'object-cover object-center md:h-36 lg:h-48',
                          width: 544,
                          height: 306,
                        }),
                      })
                    : (0, i.tZ)(s.Z, {
                        alt: e,
                        src: r,
                        className: 'object-cover object-center md:h-36 lg:h-48',
                        width: 544,
                        height: 306,
                      })),
                (0, i.BX)('div', {
                  className: 'p-6',
                  children: [
                    (0, i.tZ)('h2', {
                      className: ' text-2xl font-bold leading-8 tracking-tight',
                      children: n
                        ? (0, i.tZ)(c.Z, {
                            href: n,
                            'aria-label': 'Link to '.concat(e),
                            children: e,
                          })
                        : e,
                    }),
                    (0, i.tZ)('div', {
                      className: 'text-xs font-bold font-mono mb-3',
                      children: o.join(', '),
                    }),
                    (0, i.tZ)('p', {
                      className:
                        'prose prose-sm mb-3 max-w-none text-gray-500 dark:text-gray-400 sm:prose-sm',
                      children: a,
                    }),
                    n &&
                      (0, i.tZ)(c.Z, {
                        href: n,
                        className:
                          'text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                        'aria-label': 'Link to '.concat(e),
                        children: 'Learn more \u2192',
                      }),
                  ],
                }),
              ],
            }),
          })
        },
        p = a(9829)
      function m() {
        return (0, i.BX)(i.HY, {
          children: [
            (0, i.tZ)(p.TQ, {
              title: 'Projects - '.concat(n().author),
              description: n().description,
            }),
            (0, i.BX)('div', {
              className: 'divide-y divide-gray-200 dark:divide-gray-700',
              children: [
                (0, i.BX)('div', {
                  className: 'space-y-2 pt-6 pb-8 md:space-y-5',
                  children: [
                    (0, i.tZ)('h1', {
                      className:
                        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                      children: 'Projects',
                    }),
                    (0, i.tZ)('p', {
                      className: 'text-lg leading-7 text-gray-500 dark:text-gray-400',
                      children: "Here is a collection of projects I've worked on.",
                    }),
                  ],
                }),
                (0, i.tZ)('div', {
                  className: 'container py-12',
                  children: (0, i.tZ)('div', {
                    className: '-m-4 flex flex-wrap',
                    children: o.map(function (t) {
                      return (0,
                      i.tZ)(l, { title: t.title, description: t.description, imgSrc: t.imgUrl, href: t.link, stack: t.stack }, t.title)
                    }),
                  }),
                }),
              ],
            }),
          ],
        })
      }
    },
  },
  function (t) {
    t.O(0, [675, 888, 179], function () {
      return (e = 7670), t((t.s = e))
      var e
    })
    var e = t.O()
    _N_E = e
  },
])
