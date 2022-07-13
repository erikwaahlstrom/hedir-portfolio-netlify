import React from "react"
import AppFrame from "../components/AppFrame"
import BlackNavBar from "../components/BlackNavBar"
import Report from "../pdf/projektrapport_rodakorset.pdf"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import facepaint from "facepaint"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

export default () => {
  const data = useStaticQuery(graphql`
    query rodakorsetImages {
      rodakorsetbig: file(relativePath: { eq: "rodakorset_big.png" }) {
        childImageSharp {
          fluid(maxWidth: 4177) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rodakorset1: file(relativePath: { eq: "rodakorset_1.png" }) {
        childImageSharp {
          fluid(maxWidth: 6099) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rodakorset2: file(relativePath: { eq: "rodakorset_2.png" }) {
        childImageSharp {
          fluid(maxWidth: 6099) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rodakorset3: file(relativePath: { eq: "rodakorset_3.png" }) {
        childImageSharp {
          fluid(maxWidth: 6099) {
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
          backgroundColor: "#c03720",
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
            Red cross - Sweden
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
            <h3>Designstudio with focus on Health - 7HP</h3>
            <p>
              My group got a brief from the Red Cross organization, 
              which is an international humanitarian movement that exists throughout the world. 
              They worked with a friendship project where a match between a newly arrived 
              and a established Swede were created.
            </p>
            <p>
              To streamline the project and work agile during the process, we used parts of the scrum method.
              During the morning meetings, we made an agenda for the day and at the end of the day the group gathered again, 
              to reconcile that all goals of the day had been achieved. During the days that were more intense, 
              we also had a reconciliation meeting before lunch. Each week, sub-goals were set for the project, 
              and sprints and deadlines were planned.
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
              Brief challenge: Move away from traditional paper applications and create a digitalisation
              of the applications, aswell as develop a matching program to streamline, 
              organize and save time for the person working with the matching process.
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
              fluid={data.rodakorsetbig.childImageSharp.fluid}
              alt="rodakorsetbig"
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
            <h2>Market research</h2>
          </div>
          <div>
            <p>
              An market research gave the group good insight into other projects
              that have similar working methods and purposes and how they work with matching people. 
              By analyzing the data collected from conducted interviews, 
              the group was able to establish that an automation of the matching process would be created, 
              to streamline and reduce the administrative work.

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
            <h2>Prototype</h2>
          </div>
          <div>
            <p>
              The stakeholder for the project worked as a project manager 
              and was the person that worked with the matching aswell. 
              I thought it was important to work with good translations so that all users, 
              especially the newly arrived, would understand and be able to carry out the survey 
              themselves without any major difficulties. Since there were clear wishes in the brief,
              we were able to relate to them when we developed the prototype. 
            </p>
            <p>
              In my opinion, it will be easier to create a sharp and innovative solution 
              if there are clear requirements from the stakeholder. 
              The group worked individually with idea generation to bring in more perspectives 
              that would then come and be independent of each other. 
              This meant that we could more easily discuss a common concept, 
              iterate on it and start working on a prototype.
            </p>
          </div>
        </div>
        <div
          css={mq({
            display: "grid",
            gridTemplateColumns: [
              "repeat(auto-fit, minmax('100%', 1fr))",
              "repeat(auto-fit, minmax('100%', 1fr))",
              "repeat(auto-fit, minmax('100%', 1fr))",
            ],
            gridGap: "30px",
            padding: ["40px 0 52px 0", "40px 0 52px 0", "80px 0 52px 0"],
          })}
        >
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.rodakorset1.childImageSharp.fluid}
              alt="rodakorset1"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>
              Landing page where you as a user choose a questionnaire that fits.
            </h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.rodakorset2.childImageSharp.fluid}
              alt="rodakorset2"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>Examples of what the survey for a newcomer might look like.</h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.rodakorset3.childImageSharp.fluid}
              alt="rodakorset3"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>
              Error-page to inform the user that something is wrong.
            </h4>
          </div>
        </div>
      </div>
    </AppFrame>
  )
}
