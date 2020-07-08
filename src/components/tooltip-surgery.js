import React from "react"
import { Link } from "gatsby"

const TooltipSurgery = () => {
  return (
    <div className="tooltip-menu tooltiptext">
      <div id="triangle-up"></div>
      <div className="tooltip-nav">
        <ul>
          <li>
            <Link to="/acl-tears">ACL TEARS</Link>
            <Link to="/tplo">TPLO</Link>
            <Link to="/hip-dysplasia">HIP DYSPLASIA</Link>
            <Link to="/total-hip-replacement">TOTAL HIP REPLACEMENT</Link>
            <Link to="/medical-patella-luxation">PATELLA LUXATIONS</Link>
            <Link to="/elbow-dysplasia">ELBOW DYSPLASIA</Link>
            <Link to="/canine-shoulder-disorders">SHOULDER DISORDERS</Link>
            <Link to="/">FRACTURES</Link>
            <Link to="/arthroscopy">ARTHROSCOPY</Link>
            <Link to="/disc">INTERVERTEBRAL DISC DESEASE</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default TooltipSurgery
