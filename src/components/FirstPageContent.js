import React from "react"
import facepaint from "facepaint"
import { Link } from "gatsby"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

class FirstPageContent extends React.Component {
  render() {
    return (
      <div
        css={mq({
          position: "absolute",
          left: "50%",
          top: "50%",
          width: ["80%", "80%", "70%"],
          transform: "translate(-50%, -50%)",
        })}
      >
        <h1
          css={mq({
            fontSize: [18, 30, 40],
            fontWeight: 500,
            margin: "0 auto 30px",
            textAlign: ["left", "center", "center"],
            lineHeight: ["30px", "44px", "48px"],
          })}
        >
           Hi, my name is Hedir Saad Khazaal,
          <br />a UX designer with an interest in creating solutions<br />
          that make it easier for people in everyday life.
        </h1>
        {/* <h1
          css={mq({
            fontSize: [18, 30, 40],
            fontWeight: 500,
            margin: "0 auto 30px",
            textAlign: ["left", "center", "center"],
            lineHeight: ["30px", "44px", "48px"],
          })}
        >
          Hi there! My portfolio is currently beeing updated, <br />
          Please check in later!
        </h1> */}
        <Link to={"/projects/"} css={{ color: "#000", textDecoration: "none" }}>
          <button
            css={mq({
              fontSize: [12, 14, 16],
              display: "block",
              margin: ["0", "0 auto", "0 auto"],
              width: "auto",
              padding: ["15px 25px", "20px 50px", "20px 50px"],
              border: "1px solid #231F20",
              borderRadius: 8,
              ":hover": { color: "#fff", background: "#231F20" },
              ":active": { color: "#fff", background: "#231F20" },
            })}
          >
            See my projects
          </button>
        </Link>
      </div>
    )
  }
}

export default FirstPageContent
