import React from "react"
import { Link } from "gatsby"

const TooltipDoctors = () => {
  return (
    <div className="tooltip-menu tooltiptext">
      <div id="triangle-up"></div>
      <div className="tooltip-nav">
        <ul>
          <li>
            <Link to="/">MIKE BAUER</Link>
            <Link to="/">TODD RIEKS</Link>
            <Link to="/">SCOT SWAINSON</Link>
            <Link to="/">NATE MILLER</Link>
            <Link to="/">DR. DETORA</Link>
            <Link to="/">SAM FRANKLIN</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default TooltipDoctors
