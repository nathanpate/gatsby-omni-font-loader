import React from "react"
import { Helmet } from "react-helmet"

export const AsyncFonts: React.FC<{ hrefs: string[] }> = ({ hrefs }) => {
  const links = []

  hrefs.forEach(href => {
    const noScript = (
      <noscript
        key={`noscript-${href}`}
      >{`<link rel="stylesheet" href="${href}" />`}</noscript>
    )
    
    // // APPROACH I
    // // According to https://pagespeedchecklist.com/asynchronous-google-fonts
    // const link = (
    //   <link
    //     key={`stylesheet-${href}`}
    //     rel="stylesheet"
    //     media="print"
    //     onLoad={`this.onload=null;this.removeAttribute('media');`}
    //     href={href}
    //   />
    // );

    // APPROACH II
    // According to https://blog.prototyp.digital/improving-website-performance-by-eliminating-render-blocking-css-and-javascript/
    const link = (
      <link
        key={`stylesheet-${href}`}
        crossOrigin="true"
        as="style"
        rel="preload"
        onLoad={`this.onload=null;this.rel='stylesheet'`}
        href={href}
      />
    );

  return <Helmet>{links}</Helmet>
}
