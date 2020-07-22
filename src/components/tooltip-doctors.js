import React from "react"
import { Link } from "gatsby"

const TooltipDoctors = () => {
  return (
    <div className="tooltip-menu tooltiptext">
      <div id="triangle-up"></div>
      <div className="tooltip-nav">
        <ul>
          <li>
            <Link to="/">Dr. Michael Bauer DVM DACVS</Link>
            <Link to="/">​​Dr. Michael Detora DVM DACVS</Link>
            <Link to="/">​​Dr. Todd Riecks DVM DACVS</Link>
            <Link to="/">​​Dr. Scot Swainson DVM DACVS</Link>
            <Link to="/">Dr. Nate Miller DVM DACVS</Link>
            <Link to="/">​​Dr. Sam Franklin DVM PhD DACVS DACVSMR</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default TooltipDoctors
