import { css, Global } from "@emotion/core"
import "normalize.css"
import React from "react"
import { Helmet } from "react-helmet"

const title = "Hedir Saad Khazaal"

export default class AppFrame extends React.Component {
  render() {
    return (
      <>
        <Global
          styles={css({
            "@font-face": {
              fontFamily: "'Futura', sans-serif",
              src: 'url("../fonts/Futura.ttc")',
            },
            html: {
              boxSizing: "border-box",
              fontFamily: "'Futura', sans-serif",
              WebkitFontSmoothing: "antialiased",
              height: "100%",
            },
            "*, *::before, *::after": {
              boxSizing: "inherit",
              "-webkit-tap-highlight-color": "transparent",
            },
            body: {
              background: "#f3f2f0",
              height: "100%",
            },
            "#___gatsby": {
              height: "100%",
            },
            p: {
              margin: "0 0 26px 0",
              fontSize: "16px",
              fontWeight: 500,
              wordSpacing: 2,
              color: "#9b9b9b",
              lineHeight: "24px",
            },
            a: {
              margin: 0,
              fontSize: "16px",
              fontWeight: 500,
              wordSpacing: 2,
              color: "#9b9b9b",
              lineHeight: "24px",
            },
            ul: {
              fontSize: "16px",
              fontWeight: 500,
              wordSpacing: 2,
              color: "#9b9b9b",
              lineHeight: "24px",
            },
            button: {
              border: "none",
              fontFamily: "inherit",
              fontSize: "inherit",
              color: "inherit",
              textTransform: "inherit",
              letterSpacing: "inherit",
              background: "none",
              cursor: "pointer",
              padding: "2px 5px",
              outline: "none",
              position: "relative",
              transition: "all 0.3s",
            },
            h1: {
              margin: 0,
              padding: 0,
              fontSize: "40px",
              wordSpacing: "0.2em",
              "@media (max-width: 668px)": {
                fontSize: "30px",
              },
              fontWeight: 700,
              color: "#000",
              lineHeight: "44px",
            },
            h2: {
              margin: 0,
              padding: 0,
              fontSize: "24px",
              fontWeight: 700,
              color: "#000",
            },
            h3: {
              margin: "0 0 18px 0",
              padding: 0,
              fontSize: "18px",
              fontWeight: 500,
              color: "#000",
            },
            h4: {
              margin: "0 0 18px 0",
              padding: 0,
              fontSize: "16",
              fontWeight: 500,
              color: "#000",
            },
            hr: {
              border: "1px solid #dadad8",
            },
          })}
        />
        <Helmet
          {...{ title }}
          htmlAttributes={{ lang: "sv" }}
          meta={[
            { charset: "UTF-8" },
            { name: "description", content: "Personal portfolio" },
            { name: "keywords", content: "HTML,CSS,UX,JavaScript" },
            { name: "author", content: "Hedir Saad Khazaal" },
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1, shrink-to-fit=no",
            },
          ]}
        />
        {this.props.children}
      </>
    )
  }
}
