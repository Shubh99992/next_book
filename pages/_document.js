import Document, { Html, Head, Main, NextScript } from 'next/document'
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: IBM Plex Sans Condensed;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: uppercase;\n    letter-spacing: normal;\n    line-height: 1.5;\n    color: var(--dl-color-scheme-darkblue);\n    background-color: var(--dl-color-scheme-lightgrey);\n    \n    fill: var(--dl-color-scheme-darkblue);\n  }\n\n  \n\n  ',
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="stylesheet"
            href="https://unpkg.com/animate.css@4.1.1/animate.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<script defer src=\'https://unpkg.com/@teleporthq/teleport-custom-scripts\'></script>\n<script defer>\n      window.onload = () => {\n        const runAllScripts = () => {\n          initializeAllSliders();\n        };\n\n        const listenForUrlChanges = () => {\n          let url = location.href;\n          document.body.addEventListener(\n            "click",\n            () => {\n              requestAnimationFrame(() => {\n                if (url !== location.href) {\n                  runAllScripts();\n                  url = location.href;\n                }\n              });\n            },\n            true\n          );\n        };\n\n        const initializeAllSliders = () => {\n          const allSliders = document.querySelectorAll(\'[data-type="slider"]\');\n          allSliders.forEach((slider) => {\n            initializeSlider(slider);\n          });\n        };\n\n        const initializeSlider = (slider) => {\n          const slides = slider.querySelectorAll(\'[data-type="slide"]\');\n          const middle = Math.ceil(slides.length / 2);\n          let currentSlide = middle;\n\n          const nextSlideBtns = document.querySelectorAll(\n            \'[data-action="nextSlide"]\'\n          );\n          const previousSlideBtns = document.querySelectorAll(\n            \'[data-action="previousSlide"]\'\n          );\n\n          const changeSlide = (slideIndex, action) => {\n            currentSlide = slideIndex;\n\n            switch (action) {\n              case "next":\n                slideIndex === slides.length\n                  ? (currentSlide = 1)\n                  : currentSlide++;\n                break;\n              case "previous":\n                slideIndex === 1\n                  ? (currentSlide = slides.length)\n                  : currentSlide--;\n            }\n\n            const slide = slides[0];\n            if (!slide) {\n              console.error("No slides present");\n              return;\n            }\n            const style = window.getComputedStyle(slide);\n            slideWidth =\n              parseInt(style.width) +\n              parseInt(style.marginLeft) +\n              parseInt(style.marginRight);\n            const transformValue = -slideWidth * (currentSlide - middle);\n\n            slider.style.transform = `translateX(${transformValue}px)`;\n          };\n\n          previousSlideBtns.forEach((btn) => {\n            btn.addEventListener("click", () =>\n              changeSlide(currentSlide, "previous")\n            );\n          });\n\n          nextSlideBtns.forEach((btn) => {\n            btn.addEventListener("click", () =>\n              changeSlide(currentSlide, "next")\n            );\n          });\n        };\n\n        runAllScripts();\n      };\n</script>',
            }}
          ></div>
        </body>
      </Html>
    )
  }
}
export default CustomDocument
