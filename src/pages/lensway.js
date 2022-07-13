import React from "react"
import AppFrame from "../components/AppFrame"
import BlackNavBar from "../components/BlackNavBar"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import facepaint from "facepaint"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

export default () => {
  const data = useStaticQuery(graphql`
    query lensway {
      lenswaybig: file(relativePath: { eq: "lensway_big.png" }) {
        childImageSharp {
          fluid(maxWidth: 804) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lensway1: file(relativePath: { eq: "lensway-grid1.png" }) {
        childImageSharp {
          fluid(maxWidth: 574) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lensway2: file(relativePath: { eq: "lensway-grid2.png" }) {
        childImageSharp {
          fluid(maxWidth: 574) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lensway3: file(relativePath: { eq: "lensway-grid3.png" }) {
        childImageSharp {
          fluid(maxWidth: 574) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lensway4: file(relativePath: { eq: "lensway-grid4.png" }) {
        childImageSharp {
          fluid(maxWidth: 574) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lensway5: file(relativePath: { eq: "lensway-grid5.png" }) {
        childImageSharp {
          fluid(maxWidth: 574) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lensway6: file(relativePath: { eq: "lensway-grid6.png" }) {
        childImageSharp {
          fluid(maxWidth: 574) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lenswaygrid21: file(relativePath: { eq: "lensway-grid2-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 574) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lenswaygrid22: file(relativePath: { eq: "lensway-grid2-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 574) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lenswaygrid23: file(relativePath: { eq: "lensway-grid2-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 574) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lenswaygrid24: file(relativePath: { eq: "lensway-grid2-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 574) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lenswaygrid25: file(relativePath: { eq: "lensway-grid2-5.png" }) {
        childImageSharp {
          fluid(maxWidth: 574) {
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
          backgroundColor: "#e92430",
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
            Lensway
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
              <li>Make design solutions</li>
              <li>Analyze data</li>
              <li>Make interactive prototypes</li>
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
              Lensway is one of Europe's largest online stores for contact lenses,
              glasses and sunglasses.
            </p>
            <p>
              I worked as a consultant, with both ux and ui for the company's online store. 
              I did everything from paper sketches to more detailed user flows 
              and prototypes on a daily basis.
            </p>
            <p>
             I also, with the help of the analysis tool Hotjar, analyzed the usage patterns 
             and user behavior on the website. This was done to be able to understand the companys users, 
             find any bottlenecks, but also to help design for a better user experience.
            </p>
            <p css={{ color: "#e92430" }}>
              Tools: Sketch, Jira, Invision, Zeplin, Hotjar, Adobe photoshop, Trello, Miro
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
              Project challenges: To create solutions that reduces the return rate 
              on glasses and also reduce the work with logistics.
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
              fluid={data.lenswaybig.childImageSharp.fluid}
              alt="lensway"
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
            <h2>Size guide - User flow 1</h2>
          </div>
          <div>
            <p>
           One of the user flows i worked with was a size guide 
           where the user could create a personalized filter, 
           by typing in their measurements on a pair
           of glasses / sunglasses that they owned and thought fits well. 
           In this way, products that suited them could be displayed.
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
              fluid={data.lensway1.childImageSharp.fluid}
              alt="lensway1"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>
              The user can test if the glasses fits by measuring.
            </h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.lensway2.childImageSharp.fluid}
              alt="lensway2"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>The user fills in their dimensions here.</h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.lensway3.childImageSharp.fluid}
              alt="lensway3"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>The user receives positive feedback.</h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.lensway4.childImageSharp.fluid}
              alt="lensway4"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>The user receives a error message.</h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.lensway5.childImageSharp.fluid}
              alt="lensway5"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>The user can filter based on their own dimensions.</h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.lensway6.childImageSharp.fluid}
              alt="lensway6"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>The user fills in their dimensions here.</h4>
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
            <h2>Home trial - User flow 2</h2>
          </div>
          <div>
            <p>
            Another user flow that was of great importance was a Home trial flow, 
            where the user was given the opportunity to tryout four pairs of glasses at home.
            It was about creating a flow that would help users to order home products to test. 
            This flow was created mainly because the return rate on glasses was far too high. 
            They are usually returned because of the wrong size or fit. 
            And this leads to a lot of work around the administrative work and logistics.
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
              fluid={data.lenswaygrid21.childImageSharp.fluid}
              alt="lenswaygrid21"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>This is the product page, where the user can choose a pair of glasses to try at home.</h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.lenswaygrid22.childImageSharp.fluid}
              alt="lenswaygrid22"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>
             This is the product page, 
             where the user can choose a pair of glasses to try at home.
            </h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.lenswaygrid23.childImageSharp.fluid}
              alt="lenswaygrid23"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>
              This is the quick-cart when the user add two pairs of glasses!
            </h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.lenswaygrid24.childImageSharp.fluid}
              alt="lenswaygrid24"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>
              Here is the "checkout" for the hometrial. 
              It’s a bit different from the usual purchase flow.
            </h4>
          </div>
          <div css={{ width: "100%", margin: "0 auto" }}>
            <Img
              fluid={data.lenswaygrid25.childImageSharp.fluid}
              alt="lenswaygrid25"
              css={mq({
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
                paddingBottom: [10, 10, 20],
                height: "auto",
              })}
            />
            <h4>
              This is the thank you page when the user has placed an order.
            </h4>
          </div>
        </div>
      </div>
    </AppFrame>
  )
}
