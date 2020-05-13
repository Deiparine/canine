import React from "react"
import HeroSvg from "../images/heroSvg.svg"
import Doghead from "../images/doghead.png"

const Hero = ({ location }) => (
  <div className="hero-wrap">
    {location.pathname === "/" ? (
      <img
        src={HeroSvg}
        alt="Logo"
        className="img-fluid"
        style={{ marginTop: "-100px" }}
      />
    ) : (
      <img
        src={Doghead}
        alt="Logo"
        className="img-fluid"
        style={{ marginTop: "-100px" }}
      />
    )}
  </div>
)

export default Hero
