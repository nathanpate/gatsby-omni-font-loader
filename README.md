## Based on [codeAdrian/gatsby-omni-font-loader](https://github.com/codeAdrian/gatsby-omni-font-loader), fix Google fonts block rendering issue

I found [codeAdrian/gatsby-omni-font-loader](https://github.com/codeAdrian/gatsby-omni-font-loader) v2.0.2 caused PageSpeed complains that Google Fonts blocked rendering.

According to [this article](https://pagespeedchecklist.com/asynchronous-google-fonts) and [this article (@codeAdrian's)](https://blog.prototyp.digital/improving-website-performance-by-eliminating-render-blocking-css-and-javascript/), I fixed `generators/getFontConfig.tsx`, `components/AsyncFonts.tsx`. The problem is gone.

So I decide to publish this package for my personal use.
