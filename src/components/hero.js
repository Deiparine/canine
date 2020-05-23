import React from "react"
import HeroSvg from "../images/heroSvg.svg"
import Doghead from "../images/doghead.png"
import video from "../images/dr-bauer-vid.png"
import welcome from "../images/welcome.png"
import welcomeMobile from "../images/welcome-mobile.png"
import VideoModal from "../components/video-modal"

const Hero = ({ location }) => (
  <div className="hero-wrap">
    {/* {location.pathname === "/" ? (
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
    )} */}

    <div className="container">
      <div className="row">
        <div className="col-md-8 p-0">
          <img
            src={Doghead}
            alt="Logo"
            className="w-100 dog-head-img"
            style={{ marginTop: "-100px" }}
          />
          <img
            src={welcome}
            alt="Welcome"
            className="welcome-img"
            style={{ marginTop: "-100px" }}
          />{" "}
          <img
            src={welcomeMobile}
            alt="Welcome"
            className="welcome-mobile"
            style={{ marginTop: "-100px" }}
          />{" "}
        </div>
        <div className="col-md-4 w-100 p-relative">
          {" "}
          <div>
            <VideoModal />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
