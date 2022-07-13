import React from "react"
import { Link } from "gatsby"
import Menu from "./Menu"
import facepaint from "facepaint"
import Svg from "../assets/svg.svg"
import "../index.css"
const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

class MenuWrapper extends React.Component {
  state = {
    condition: false,
    show: false,
  }

  toggle = () => {
    this.setState({ show: !this.state.show })
  }

  toggleMenu = () => {
    this.setState({
      condition: !this.state.condition,
    })
  }

  closeMenu() {
    this.setState({ show: false, isActive: false })
  }

  render() {
    return (
      <>
        <div css={{ zIndex: "101" }} onClick={this.toggle}>
          <Svg
            condition={this.state.condition}
            toggleMenu={this.toggleMenu}
            className={
              this.state.condition
                ? "ham hamRotate ham1 active"
                : "ham hamRotate ham1"
            }
            onClick={() => this.toggleMenu()}
          />
        </div>
        <Menu toggle={this.state.show}>
          <ul
            css={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              padding: 0,
            }}
          >
            <Link
              to={"/projects/"}
              css={mq({
                marginBottom: 30,
                listStyle: "none",
                textDecoration: "none",
                fontSize: [20, 24, 30],
                fontWeight: 500,
                display: "block",
                ":hover": {
                  color: "#000",
                },
              })}
              onClick={() => this.closeMenu()}
            >
              My projects
            </Link>
            <Link
              to={"/about/"}
              css={mq({
                listStyle: "none",
                textDecoration: "none",
                fontSize: [20, 24, 30],
                fontWeight: 500,
                ":hover": {
                  color: "#000",
                },
              })}
              onClick={() => this.closeMenu()}
            >
              About me
            </Link>
          </ul>
        </Menu>
      </>
    )
  }
}

export default MenuWrapper
