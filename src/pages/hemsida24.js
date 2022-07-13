import React from "react"
import AppFrame from "../components/AppFrame"
import BlackNavBar from "../components/BlackNavBar"
import Report from "../pdf/projektrapport_hemsida24.pdf"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import facepaint from "facepaint"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

export default () => {
  const data = useStaticQuery(graphql`
    query Images {
      hemsida24: file(relativePath: { eq: "hemsida24_big.png" }) {
        childImageSharp {
          fluid(maxWidth: 4177) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cv: file(relativePath: { eq: "cv.png" }) {
        childImageSharp {
          fluid(maxWidth: 6099) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      instructions1: file(relativePath: { eq: "instructions1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2990) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      instructions2: file(relativePath: { eq: "instructions2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3005) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      instructions3: file(relativePath: { eq: "instructions3.png" }) {
        childImageSharp {
          fluid(maxWidth: 3010) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      instructions4: file(relativePath: { eq: "instructions4.png" }) {
        childImageSharp {
          fluid(maxWidth: 2969) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      instructions5: file(relativePath: { eq: "instructions5.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      instructions6: file(relativePath: { eq: "instructions6.png" }) {
        childImageSharp {
          fluid(maxWidth: 2974) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      instructions7: file(relativePath: { eq: "instructions7.png" }) {
        childImageSharp {
          fluid(maxWidth: 3005) {
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
          backgroundColor: "#2dbe6e",
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
            Hemsida24
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
              <li>Conduct user testing on the prototype</li>
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
            <h3>Designstudio web - 7HP</h3>
            <p>
              The brief was intended to understand the users of the company Hemsida24. 
              Usability tests were conducted and resulted in two prototypes that solved problems 
              that we found during the analysis of Hemsida24's tools.
            </p>
            <p>
              The brief was including ten usability tests with people who had never used the tool before, 
              preferably people close to their primary target group. Hemsida24's target group was people between 
              the ages of 26 and 51 who owned or worked at a smaller company. During the tests, users were observed 
              in the construction of the website and how they reacted to specific features of the tool. 
              The tests were also recorded so that the group could go through and analyze them to identify critical elements. 
              The brief also contained in-depth interviews with at least ten users, 
              to find out what their thoughts were and how they experienced the tool.
            </p>
          </div>
        </div>
        <hr />
        <div
          css={mq({
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr", "1fr"],
            gridGap: "30px",
            padding: ["20px 0 20px 0", "20px 0 20px 0", "80px 0 52px 0"],
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
              Brief challenge: Make it even easier and more user- friendly for new customers to build a website.
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
              fluid={data.hemsida24.childImageSharp.fluid}
              alt="hemsida24"
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
            <h2>Sketching</h2>
          </div>
          <div>
            <p>
              The sketching process began when the group made the decision that there
              was enough data to start from. Everyone in the group sketched on their own. 
              The group decided that everyone would sketch individually so as not to be affected by each other. 
              In this way of working we could contribute to more unique sketches. We had a lot of sketches, 
              which made it easier to work on the prototype later. The first sketches were made on paper 
              to quickly and easily get the ideas out. 
            </p>
            <p>
              When the first sketches were made, the group met for an internal critique session,
              were the various sketches were shown and explained. 
              The sketches were discussed in the group 
              and each one got feedback on their sketches. 
              The most interesting sketches were used as a basis for further work. 
              The group was constantly aiming to provide internal criticism early in the process. 
              It was considered a good approach and was done to reduce the iteration process on the prototype.
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
            <h2>Personas</h2>
          </div>
          <div>
            <p>
              With the support of the critical elements identified and a heuristic evaluation, 
             a primary persona could be created. After discussions and research, the group made the decision
             that a secondary persona should also be created, with similar goals as the primary but with different wishes. 
             The primary persona that the group worked with is a less experienced computer 
             user who wants a website for their company.
            <p>
              Unlike the primary person, the secondary person is a professional user
              who will help his friend to get started with a website. 
              Two personas with different experience simplified the work as it
              made it possible to look at the service from different users perspectives.
            </p>
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
              fluid={data.cv.childImageSharp.fluid}
              alt="hemsida24"
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
              After an internal critique session, the group could see which problems the solution proposals would focus on.
              Using the protocols from the usability tests, the group was able to identify the most critical and recurring problems.
              These were lifted out and analyzed and some iterations were created and were good enough to work further on.
            </p>
            <p>
              Initially, simple mockups were created in the tool Sketch. After completing another internal critique session and iteration,
              they were uploaded to the online prototype tool InVision, to create links to put them together into a prototype. 
              As the work went on, more graphics and colors were added to the prototype. The first prototype, created in InVision,
              was simple and it only tested a small part of the functionality we wanted to test, but could be used as inspiration at a later stage.
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
              fluid={data.instructions1.childImageSharp.fluid}
              alt="instructions1"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>Landing page for the prototype.</h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.instructions2.childImageSharp.fluid}
              alt="instructions2"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>
              The users can choose the type of website they want to create here.
            </h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.instructions3.childImageSharp.fluid}
              alt="instructions3"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>
             The user chooses a structure here, which the website should continuously follow.
            </h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.instructions4.childImageSharp.fluid}
              alt="instructions4"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>The users can choose a primary color and a color scheme here.</h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.instructions5.childImageSharp.fluid}
              alt="instructions5"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>
             This is were the user builds their own structure for the website.
            </h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.instructions6.childImageSharp.fluid}
              alt="instructions6"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>The users can do some colour changes on the website here.</h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.instructions7.childImageSharp.fluid}
              alt="instructions7"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>
              This is a history page where users can see the changes made.
            </h4>
          </div>
        </div>
      </div>
    </AppFrame>
  )
}
