import React from "react"
import AppFrame from "../components/AppFrame"
import BlackNavBar from "../components/BlackNavBar"
import Report from "../pdf/projektrapport_mylifeapp.pdf"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import facepaint from "facepaint"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

export default () => {
  const data = useStaticQuery(graphql`
    query myLifeAppImages {
      mylifeapp: file(relativePath: { eq: "mylifeapp_big.png" }) {
        childImageSharp {
          fluid(maxWidth: 1813) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mylifeappgrid: file(relativePath: { eq: "mylifeapp_grid.png" }) {
        childImageSharp {
          fluid(maxWidth: 5974) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mlas1: file(relativePath: { eq: "mylifeapp_small1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2990) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mlas2: file(relativePath: { eq: "mylifeapp_small2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2990) {
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
          backgroundColor: "#c9c5bb",
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
            Mylife-APP
          </h1>
          <a css={{ textDecoration: "none" }} href={Report}>
            <button
              css={mq({
                fontSize: [12, 14, 16],
                color: "#fff",
                display: "block",
                margin: "0 auto",
                width: "auto",
                padding: ["15px 25px", "20px 50px", "20px 50px"],
                border: "1px solid #fff",
                borderRadius: 8,
                ":hover": { color: "#231F20", background: "#fff" },
                ":active": { color: "#231F20", background: "#fff" },
              })}
            >
              Read more
            </button>
          </a>
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
              <li>Market research of similar services</li>
              <li>Make hi-fi and lo-fi sketches</li>
              <li>Idea generation</li>
              <li>Make design solutions</li>
              <li>Usability tests on the prototype</li>
              <li>User interviews</li>
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
              The basic idea for MyLife was to create an artifact that lies
              outside the concept of a regular travel application.
              Our ambitions was to create an artifact that was
              different from the ordinary travel tools that were
              live on the market.
            </p>
            <p>
              MyLife-APP was a smart life partner that would support users to
              plan their everyday travel. By connecting calendars, work
              schedules and travel apps to the service, users could get smart
              suggestions on how travel could be performed to avoid traffic
              problems, but also how to save time.
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
                fontSize: [18, 30, 40],
                lineHeight: ["20px", "30px", "44px"],
              })}
            >
              The Challenge of the Brief: Create an Artifact that was different
              from the regular travel apps that were on the market.
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
              fluid={data.mylifeapp.childImageSharp.fluid}
              alt="mylifeapp"
              css={mq({
                display: "block",
                margin: "0 auto",
                width: ["80%", "30%", "30%"],
                height: "auto",
              })}
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
            <h2>UX statement</h2>
          </div>
          <div>
            <p>
              By analyzing the material collected through observations, surveys,
              deeper surveys and interviews, the group found that there was a
              clear common denominator. It showed that the information about
              travel was deficient and that It was a recurring problem identified by the group.
            The main goal with the analysis of the collected material was to identify and
              find recurring problems. To be able to connect problems with the user's age,
              work / studies, place of residence, and travel distance. The group created charts that
              gave a good overview of the data that was collected.
            </p>
            <p>
              The raw data together with the qualitative data collected
              gave us an overview of recurring problems. In the
              survey and our interviews the group also tried to
              find out what the goals were with the daily travel.
              As expected, most of the travelers goal was not the
              journey itsels. The goal was to get to the destination on time, 
              without encountering problems along the way.The The common goal 
              of the majority was to travel quick and painless and arrive at the destination,
              without any delays.
            </p>
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
            <h2>Sketching</h2>
          </div>
          <div>
            <p>
              Since the artifact was not linked to any specific stakeholder so
              we had no requirements to relate to. we had nothing that could
              stop the sketching process, so it went smoothly.
            </p>
            <p>
              Our ideas varied widely, ranging from travel planners to
              entertainment during the trip, etc. After a first
              idea generation the group gathered to discuss the
              sketches that we had produced. We thus created requirements that
              we would jointly relate to during the process.
            </p>
            <p>
              It was done with the help of an easier critique session where we
              held a open discussion. We thought it was a good method to discuss
              the sketches in order to generate new ideas, iterate and carry on
              the process.
            </p>
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
              fluid={data.mylifeappgrid.childImageSharp.fluid}
              alt="mylifeappgrid"
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
            <h2>Prototype</h2>
          </div>
          <div>
            <p>
              The group used a design principle in which focused on the the
              users goals. During the analysis process of collected data and at
              the problem formulation, the group could point out that the
              artifact would be individualized. The user would therefore have
              the opportunity to adapt it to their own needs and goals.
            </p>
            <p>
              That was one of the reasons why we chose to create one
              home page of widget modules (see pictures below)
              where the user can adjust what themselves prioritize
              most, in relation to their travel habits and their
              everyday life. We used the Goal directed design method,
              that penetrated the entire process and helped us
              design towards our goal, which was to create a
              customizable prototype.
            </p>
          </div>
        </div>
        <div
          css={mq({
            display: "grid",
            gridTemplateColumns: [
              "repeat(auto-fit, minmax(300px, 1fr))",
              "repeat(auto-fit, minmax(300px, 1fr))",
              "repeat(auto-fit, minmax(450px, 1fr))",
            ],
            gridGap: "30px",
            padding: ["40px 0 52px 0", "40px 0 52px 0", "80px 0 52px 0"],
          })}
        >
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.mlas1.childImageSharp.fluid}
              alt="mla"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>Screenshots from the user flow.</h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.mlas2.childImageSharp.fluid}
              alt="mla"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
          </div>
        </div>
      </div>
    </AppFrame>
  )
}
