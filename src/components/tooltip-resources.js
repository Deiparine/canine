import React from "react"
import { Link } from "gatsby"

const TooltipResources = () => {
  return (
    <div className="tooltip-menu tooltiptext">
      <div id="triangle-up"></div>
      <div className="tooltip-nav">
        <ul>
          <li>
            <Link to="/appointments-directions">Appointments & Directions</Link>
            <Link to="/preparing-surgery">Preparing Surgery</Link>
            <Link to="/hospital-gallery">Hospital Gallery</Link>
            <Link to="/telemedicine">Telemedicine Consults</Link>
            <Link to="/payment-options">Payment Options</Link>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default TooltipResources
