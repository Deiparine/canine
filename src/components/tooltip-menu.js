import React from "react"
import { Link } from "gatsby"
import ReviewStar from "../images/reviewstar-white.png"
import Facebook from "../images/facebook-white.png"
import Google from "../images/google-white.png"
import Yelp from "../images/yelp-white.png"
import Angies from "../images/angies-white.png"
import BBB from "../images/bbb-white.png"

const Tooltip = () => {
  return (
    <div className="tooltip-menu tooltiptext">
      <div id="triangle-up"></div>
      <div className="tooltip-nav">
        <ul>
          <li>
            <Link to="/">TPLO</Link>
            <Link to="/">TOTAL HIP REPLACEMENT</Link>
            <Link to="/">FRACRTURE REPAIR</Link>
            <Link to="/">PATELLAR LUXATION REPAIR</Link>
            <Link to="/">ELBOW ARTHROSCOPY</Link>
            <Link to="/">SHOULDER ARTHROSCOPY</Link>
            <Link to="/">ARTHROSCOPY</Link>
            <Link to="/">SPINAL SURGERY</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Tooltip
