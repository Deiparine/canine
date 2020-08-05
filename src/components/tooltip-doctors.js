import React from "react"
import { Link } from "gatsby"

const TooltipDoctors = () => {
  return (
    <div className="tooltip-menu tooltiptext">
      <div id="triangle-up"></div>
      <div className="tooltip-nav">
        <ul>
          <li>
            <Link to="/doctors/bauer-dvm" style={{ textTransform: "none" }}>Dr. Michael Bauer DVM DACVS</Link>
            <Link to="/doctors/dr-michael-detora" style={{ textTransform: "none" }}>
              ​​Dr. Michael Detora DVM DACVS
            </Link>
            <Link to="/doctors/dr-todd-riecks" style={{ textTransform: "none" }}>
              ​​Dr. Todd Riecks DVM DACVS
            </Link>
            <Link to="/doctors/dr-scot-swainson" style={{ textTransform: "none" }}>
              ​​Dr. Scot Swainson DVM DACVS
            </Link>
            <Link to="/doctors/dr-nate-miller" style={{ textTransform: "none" }}>Dr. Nate Miller DVM DACVS</Link>
            <Link to="/doctors/dr-sam-franklin" style={{ textTransform: "none" }}>
              ​​Dr. Sam Franklin DVM PhD DACVS DACVSMR
            </Link>
            <Link to="/doctors/dr-andra-detora" style={{ textTransform: "none" }}>
              ​​Dr. Andra DeTora DVM CCRT cVMA
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default TooltipDoctors
