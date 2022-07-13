import React from "react"
import AppFrame from "../components/AppFrame"
import BlackNavBar from "../components/BlackNavBar"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import facepaint from "facepaint"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

export default () => {
  const data = useStaticQuery(graphql`
    query nicknamedSvea {
      sveabig: file(relativePath: { eq: "svea_big.png" }) {
        childImageSharp {
          fluid(maxWidth: 4177) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <AppFrame>
      <BlackNavBar />
      <div
        css={{
          width: "100%",
          backgroundColor: "#1caecc",
          height: 500,
          position: "relative",
        }}
      >
        <div
          css={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1
            css={{ margin: "0 auto 30px", textAlign: "center", color: "#fff" }}
          >
            Svea ekonomi
          </h1>
        </div>
      </div>
      <div
        css={mq({
          padding: ["0 20px 0 20px", "0 20px 0 20px", "0 40px 0 40px"],
          margin: "0 auto",
          maxWidth: "1200px",
        })}
      >
        <div
          css={mq({
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr"],
            gridGap: "30px",
            padding: ["40px 0 52px 0", "40px 0 52px 0", "80px 0 52px 0"],
          })}
        >
          <div>
            <h2>My responsibilities during the project</h2>
          </div>
          <div>
            <ul>
              <li>Make hi-fi and lo-fi sketches</li>
              <li>Idea generation</li>
              <li>Market research of similar services</li>
              <li>Make design solutions</li>
              <li>Usability testing on the application</li>
              <li>User interviews</li>
              <li>Analyze data</li>
            </ul>
          </div>
        </div>
        <hr />
        <div
          css={mq({
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr"],
            gridGap: "30px",
            padding: ["40px 0 52px 0", "40px 0 52px 0", "80px 0 52px 0"],
          })}
        >
          <div>
            <h2>Project overview</h2>
          </div>
          <div>
            <p>
              Svea Ekonomi is a group within financial operations in a number of
              European countries, with the headquarters in Stockholm. In the
              project I worked with solutions within fintech where the end user
              and the user journey were the main focus. During the project I
              worked in cross-functional teams and worked closely with
              developers and stakeholders. In the project, apps were created,
              where the user could manage his personal finances, which meant,
              among other things, being able to make transfers, payments and
              have an overview of his loans.
            </p>
            <p css={{ color: "#1caecc" }}>
              Tools: Sketch, Adobe photoshop, Adobe Indesign, Adobe illustrator,
              TFS, Invision, UXpin, Zeplin, Abstract, Lucidchart
            </p>
          </div>
        </div>
        <hr />
        <div
          css={mq({
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr", "1fr"],
            gridGap: "30px",
            padding: ["40px 0 52px 0", "40px 0 52px 0", "80px 0 52px 0"],
          })}
        >
          <div
            css={{
              borderLeft: "10px solid #000",
              height: "auto",
              display: "flex",
              alignItems: "center",
              paddingLeft: 30,
            }}
          >
            <h1
              css={mq({
                fontSize: [16, 30, 40],
                lineHeight: ["20px", "30px", "44px"],
              })}
            >
              Project challenges: To create an application where the user can
              make transfers, payments and have an overview of their loans.
            </h1>
          </div>
        </div>
        <div
          css={mq({
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr", "1fr"],
            gridGap: "30px",
            padding: ["40px 0 52px 0", "40px 0 52px 0", "80px 0 52px 0"],
          })}
        >
          <div>
            <Img
              fluid={data.sveabig.childImageSharp.fluid}
              alt="sveabig"
              css={{
                display: "block",
                margin: "0 auto",
                width: "80%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <hr />
        <div
          css={mq({
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr"],
            gridGap: "30px",
            padding: ["40px 0 52px 0", "40px 0 52px 0", "80px 0 52px 0"],
          })}
        >
          <div>
            <h2>Role description</h2>
          </div>
          <div>
            <p>
              The project included understanding the requirements, designing and
              delivering a high quality experience. I worked on analyzing the
              product requirements that existed and designed the user interface
              from scratch, creating prototypes that conveyed design solutions
              and interactions to other teams and product owners. I iterated on
              the user interface to improve the usability.
            </p>
            <h3>UX/usertesting</h3>
            <p>
              I was responsible for conducting several usability tests to
              evaluate the design solutions that were developed, but also to
              identify and address design problems. These tests were done in
              smaller groups but also during larger workshops. I also worked on
              analyzing the results of the usability tests, to be able to
              iterate in the interface and move the process forward.
            </p>
          </div>
        </div>
      </div>
    </AppFrame>
  )
}
