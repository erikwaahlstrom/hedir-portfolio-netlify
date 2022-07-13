import React from "react"
import AppFrame from "../components/AppFrame"
import BlackNavBar from "../components/BlackNavBar"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import facepaint from "facepaint"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

export default () => {
  const data = useStaticQuery(graphql`
    query projectImages {
      lw: file(relativePath: { eq: "group1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2484) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sn: file(relativePath: { eq: "group2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2484) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rk: file(relativePath: { eq: "group3.png" }) {
        childImageSharp {
          fluid(maxWidth: 2484) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      h24: file(relativePath: { eq: "group4.png" }) {
        childImageSharp {
          fluid(maxWidth: 2484) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mla: file(relativePath: { eq: "group5.png" }) {
        childImageSharp {
          fluid(maxWidth: 2484) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <AppFrame>
      <BlackNavBar />
      <>
        <div
          css={{
            width: "100%",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            css={mq({
              margin: "0 auto",
              width: ["auto", "auto", "70%"],
            })}
          >
            <div
              css={mq({
                display: "grid",
                gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr 1fr"],
                gridGap: ["10px", "30px", "30px"],
                padding: ["0 10px 0 10px", "0 20px 0 20px", "0 20px 0 20px"],
                height: ["1px", "1px", "auto"],
                marginTop: ["-200px", "-250px", "0px"],
              })}
            >
              <div>
                <Link to={"/lensway/"}>
                  <Img
                    fluid={data.lw.childImageSharp.fluid}
                    alt="lensway"
                    css={{
                      maxWidth: "100%",
                      display: "block",
                      margin: "0 auto",
                      transition: "transform .2s",
                      ":hover": {
                        transform: "scale(1.12)",
                      },
                    }}
                  />
                </Link>
              </div>
              <div>
                <Link to={"/nicknamed-svea/"}>
                  <Img
                    fluid={data.sn.childImageSharp.fluid}
                    alt="svea"
                    css={{
                      maxWidth: "100%",
                      display: "block",
                      margin: "0 auto",
                      transition: "transform .2s",
                      ":hover": {
                        transform: "scale(1.12)",
                      },
                    }}
                  />
                </Link>
              </div>
              <div>
                <Link to={"/rodakorset/"}>
                  <Img
                    fluid={data.rk.childImageSharp.fluid}
                    alt="rodakorset"
                    css={{
                      maxWidth: "100%",
                      display: "block",
                      margin: "0 auto",
                      transition: "transform .2s",
                      ":hover": {
                        transform: "scale(1.12)",
                      },
                    }}
                  />
                </Link>
              </div>
              <div>
                <Link to={"/hemsida24/"}>
                  <Img
                    fluid={data.h24.childImageSharp.fluid}
                    alt="hemsida24"
                    css={{
                      maxWidth: "100%",
                      display: "block",
                      margin: "0 auto",
                      transition: "transform .2s",
                      ":hover": {
                        transform: "scale(1.12)",
                      },
                    }}
                  />
                </Link>
              </div>
              <div>
                <Link to={"/mylifeapp/"}>
                  <Img
                    fluid={data.mla.childImageSharp.fluid}
                    alt="mylifeapp"
                    css={{
                      maxWidth: "100%",
                      display: "block",
                      margin: "0 auto",
                      transition: "transform .2s",
                      ":hover": {
                        transform: "scale(1.12)",
                      },
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </AppFrame>
  )
}
