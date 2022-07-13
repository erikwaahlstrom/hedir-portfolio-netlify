import React from "react"
import Logotype from "../assets/logotype.svg"
import { Link } from "gatsby"

class LogotypeComponent extends React.Component {
  render() {
    return (
      <span {...this.props}>
        <Link to={"/"}>
          <Logotype />
        </Link>
      </span>
    )
  }
}

export default LogotypeComponent
