self.__SSG_MANIFEST = new Set([
  '\u002Ftags',
  '\u002F',
  '\u002Fabout',
  '\u002Fblog',
  '\u002Fsnippets',
  '\u002Ftags\u002F[tag]',
  '\u002Fblog\u002Fpage\u002F[page]',
  '\u002Fblog\u002F[...slug]',
  '\u002Fsnippets\u002F[...slug]',
])
self.__SSG_MANIFEST_CB && self.__SSG_MANIFEST_CB()
