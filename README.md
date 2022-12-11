## Based on [codeAdrian/gatsby-omni-font-loader](https://github.com/codeAdrian/gatsby-omni-font-loader), fix Google fonts block rendering issue

I found [codeAdrian/gatsby-omni-font-loader](https://github.com/codeAdrian/gatsby-omni-font-loader) v2.0.2 caused PageSpeed complains that Google Fonts blocked rendering.

According to [this article](https://pagespeedchecklist.com/asynchronous-google-fonts) and [this article (@codeAdrian's)](https://blog.prototyp.digital/improving-website-performance-by-eliminating-render-blocking-css-and-javascript/), I fixed `generators/getFontConfig.tsx`, `components/AsyncFonts.tsx`. The problem is gone.

So I decide to publish this package for my personal use.

In case you encountered the same issue, use my package this way:

```bash
    npm i @nathanpate/gatsby-omni-font-loader react-helmet
```

The configuration in `gatsby-config.js`:
```javascript
{
  /* Include plugin */
  resolve: "@nathanpate/gatsby-omni-font-loader",

  /* Plugin options */
  options: {

    /* Font loading mode */
    mode: "async",

    /* Enable font loading listener to handle FOUT */
    enableListener: true,

    /* Preconnect URL-s. This example is for Google Fonts */
    preconnect: ["https://fonts.gstatic.com"],

    /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
    custom: [
      {
        /* Exact name of the font as defied in @font-face CSS rule */
        name: ["Font Awesome 5 Brands", "Font Awesome 5 Free"],
        /* Path to the font CSS file inside the "static" folder with @font-face definition */
        file: "/fonts/fontAwesome/css/all.min.css",
      },
    ],

    /* Web fonts. File link should point to font CSS file. */
    web: [{
        /* Exact name of the font as defied in @font-face CSS rule */
        name: "Staatliches",
        /* URL to the font CSS file with @font-face definition */
        file: "https://fonts.googleapis.com/css2?family=Staatliches",
      },
    ],
  },
}
```

# Credits
Original repo: [codeAdrian/gatsby-omni-font-loader](https://github.com/codeAdrian/gatsby-omni-font-loader)