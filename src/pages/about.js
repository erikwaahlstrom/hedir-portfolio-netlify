import React from "react"
import AppFrame from "../components/AppFrame"
import BlackNavBar from "../components/BlackNavBar"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import facepaint from "facepaint"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

export default () => {
  const data = useStaticQuery(graphql`
    query aboutImages {
      hedir: file(relativePath: { eq: "hedir.png" }) {
        childImageSharp {
          fluid(maxWidth: 1383) {
            ...GatsbyImageSharpFluid_tracedSVG
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
        }}
      >
        <div
          css={mq({
            padding: [
              "100px 20px 0 20px",
              "100px 20px 0 20px",
              "0 40px 0 40px",
            ],
            margin: "0 auto",
            maxWidth: "1200px",
          })}
        >
          <div
            css={mq({
              display: "grid",
              gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr 1fr"],
              gridGap: "30px",
              padding: ["40px 0 0 0", "40px 0 0 0", "80px 0 0 0"],
            })}
          >
            <div
              css={{
                gridColumnStart: "1",
                gridColumnEnd: "3",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h2
                css={{
                  fontSize: "20px",
                  wordSpacing: "0.12em",
                  lineHeight: "1.3em",
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                My name is Hedir Saad Khazaal. I am a UX designer who lives and
                works in Stockholm. I have always had an interest in design and
                technology but mainly to be able to help people in everyday
                life.
              </h2>
            </div>
            <div>
              <Img
                fluid={data.hedir.childImageSharp.fluid}
                alt="hedir"
                css={mq({
                  width: "100%",
                })}
              />
            </div>
          </div>
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
            <h2>About me</h2>
          </div>
          <div>
            <p>
              I am a skilful ux designer who has an interest in creating
              solutions that help people in everyday life. My primary interest
              in my work is simplicity and focusing on what the end user needs.
            </p>
            <p>
              I work with ux, user flows, customer journeys, flow charts, user
              research and usability tests, to requirements management and ui. I
              am used to conducting user interviews, creating scenarios for A /
              B testing, speaking in front of people and conducting workshops.
            </p>
            <p>
              I understand how technology, ux and business requirements interact
              to create a sustainable and longterm design solutions. I am used
              to working agile and in cross-functional teams.
            </p>
            <p>
              I have a great deal of knowledge in both qualitative (Focus
              groups, in-depth interviews and observation) and quantitative
              information gathering (through A / B tests and user interviews)
              and how to build prototypes based on results.
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
            <h2>Employments</h2>
          </div>

          <div>
            <h3>UX/UI designer, Consid - 2020 (November-Now)</h3>
            <div css={{ paddingLeft: "20px" }}>
              <h3>
                UX designer, Ida infront (Consultant) - 2020 (November-Now)
              </h3>
              <p>
                I'm producing a new user interface and a design system for ida
                infront's product iipax. iipax is used by a number of
                authorities in Sweden for case management, secure communication
                and archiving. iipax is web-based and has high demands on
                accessibility and usability.
              </p>
              <p>
                The main focus of the work is therefore on accessibility and
                usability. The idea is to create a graphical framework for a
                solution that is responsive, scalable and device independent.
              </p>
            </div>
            <h3>UX designer, Nuway - 2019-2020 (September-October)</h3>
            <div css={{ paddingLeft: "20px" }}>
              <h3>UX designer, Lensway (c) - 2019 (October-April)</h3>
              <p>
                My first project at Nuway was as a consultant at Lensway. I
                worked with both ux and ui for the company's online store. I did
                everything from paper sketches to more detailed user flows and
                prototypes.
              </p>
              <p>
                I also analyzed usage patterns and user behaviors on the
                website, with the help of the analysis tool Hotjar. I did this
                to be able to understand the company's users, find any
                bottlenecks but also to design for a better user experience.
              </p>
            </div>
            <h3>UX designer, Svea Ekonomi - 2017-2019 (October-July)</h3>
            <p>
              In the project I worked with solutions within fintech where the
              end user and the user journey were the main focus. I worked agile,
              in cross-functional teams and worked closely with developers and
              stakeholders. The project included understanding the requirements,
              designing and delivering a high quality experience. I also
              analyzed the product requirements that existed, designed the ui
              from scratch and created prototypes that presented the design
              solutions and interactions to developers and product owners.
            </p>
            <p>
              I was responsible for conducting several usability tests to
              evaluate the design solutions that were developed, but also to
              identify and address design problems. These tests were done in
              smaller groups but also duringlarger workshops. I also worked on
              analyzing the results of the usability tests, to be able to
              iterate in the interface and move the process forward.
            </p>
            <p>
              In the project, apps were created, where the user could manage his
              personal finances, which meant, among other things, being able to
              make transfers, payments and have an overview of his loans.
            </p>
            <h3>Graphic designer, Praktikertjänst – 2017 (June-October)</h3>
            <p>
              I worked as a graphic designer and i did everything from logos,
              brochures and newsletters to business cards and invitations. I
              also helped new hospitals within the company, to create and edit
              websites, In Episerver CMS, which is a web publishing system.
            </p>
            <h3>Webeditor, Praktikertjänst – 2016 (May-August)</h3>
            <p>
              During my summer job as web editor, I worked on migrating
              information from an old CMS to a new one. It was about
              transferring information from hundreds of old websites to new
              ones. I also worked on creating new websites for new hospitals
              within the company. This was done in Episerver CMS, which is a web
              publishing system, where you can edit and create new websites
              using already existing templates.
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
            <h2>Education</h2>
          </div>
          <div>
            <h3>Bachelor in Informatics - 2014-2017</h3>
            <p>
              Halmstad university <br />
              Digital design and innovation 180 hp
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
            <h2>Contact me</h2>
          </div>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr"],
              gridGap: "30px",
            }}
          >
            <div>
              <a
                href="tel:+4673- 970 12 46"
                css={mq({
                  textDecoration: "none",
                  marginRight: [0, 24],
                  ":hover": {
                    color: "rgba(0, 0, 0)",
                  },
                })}
              >
                073- 970 12 46
              </a>
              <a
                href="mailto:hedirkhazaal@gmail.com"
                css={mq({
                  display: "block",
                  textDecoration: "none",
                  marginRight: [0, 24],
                  ":hover": {
                    color: "rgba(0, 0, 0)",
                  },
                })}
              >
                hedirkhazaal@gmail.com
              </a>
            </div>
            <div>
              <a
                href="https://dribbble.com/hedirkhaazal"
                css={mq({
                  display: "block",
                  textDecoration: "none",
                  marginRight: [0, 24],
                  ":hover": {
                    color: "rgba(0, 0, 0)",
                  },
                })}
              >
                Dribble
              </a>

              <a
                href="https://www.linkedin.com/in/hedirkhazaal/"
                css={mq({
                  display: "block",
                  textDecoration: "none",
                  marginRight: [0, 24],
                  ":hover": {
                    color: "rgba(0, 0, 0)",
                  },
                })}
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/hedirkhazaal/"
                css={mq({
                  textDecoration: "none",
                  marginRight: [0, 24],
                  ":hover": {
                    color: "rgba(0, 0, 0)",
                  },
                })}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </AppFrame>
  )
}
