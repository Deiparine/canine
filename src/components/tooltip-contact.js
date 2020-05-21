import React from "react"
import { Link } from "gatsby"

const TooltipContact = () => {
  return (
    <div className="tooltip-menu tooltiptext">
      <div id="triangle-up"></div>
      <div className="tooltip-nav">
        <ul>
          <li>
            <Link to="/">More Submenus to Come</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default TooltipContact
