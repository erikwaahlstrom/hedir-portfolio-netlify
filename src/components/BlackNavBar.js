import React from "react"
import facepaint from "facepaint"

import LogotypeComponent from "../components/LogotypeComponent"
import MenuWrapper from "../components/MenuWrapper"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

class BlackNavBar extends React.Component {
  state = {
    checkColor: false,
  }

  render() {
    return (
      <div
        css={mq({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: ["20px", "20px", "20px"],
          position: "absolute",
          width: "100%",
        })}
      >
        <LogotypeComponent css={{ zIndex: "101" }} />

        <MenuWrapper css={{ zIndex: "101" }} />
      </div>
    )
  }
}

export default BlackNavBar
