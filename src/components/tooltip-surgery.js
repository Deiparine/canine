import React from "react"
import { Link } from "gatsby"

const Tooltip = () => {
  return (
    <div className="tooltip-menu tooltiptext">
      <div id="triangle-up"></div>
      <div className="tooltip-nav">
        <ul>
          <li>
            <Link to="/">ACL TEARS</Link>
            <Link to="/">TPLO</Link>
            <Link to="/">HIP DYSPLASIA</Link>
            <Link to="/">TOTAL HIP REPLACEMENT</Link>
            <Link to="/">PATELLA LUXATIONS</Link>
            <Link to="/">ELBOW DYSPLASIA</Link>
            <Link to="/">SHOULDER DISORDERS</Link>
            <Link to="/">FRACTURES</Link>
            <Link to="/">ARTHROSCOPY</Link>
            <Link to="/">INTERVERTEBRAL DISC DESEASE</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Tooltip
