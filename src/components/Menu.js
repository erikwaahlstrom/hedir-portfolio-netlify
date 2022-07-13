import React from "react"
import { Spring } from "react-spring/renderprops"

export default ({ children, toggle }) => (
  <Spring
    hold={!toggle}
    from={{
      zIndex: "-100",
      display: "none",
    }}
    to={{
      zIndex: "100",
      display: toggle ? "block" : "none",
    }}
  >
    {props => (
      <div
        css={{
          position: "fixed",
          zIndex: "100",
          height: "100%",
          width: "100%",
          top: "0",
          left: "0",
          backgroundColor: "#F3F2F0",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          overflowY: "scroll",
          ...props,
        }}
      >
        {children}
      </div>
    )}
  </Spring>
)
