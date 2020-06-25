import React from "react"
import Doghead from "../../images/doghead.png"
import welcomeMobile from "../../images/welcome-mobile.svg"
import elbowvideo from "../../images/elbow-video-header.png"
import VideoModal from "../video-modal"

const ElbowHero = ({ children, videoImg }) => {
  return (
    <div className="hero-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 p-0">
            <img
              src={Doghead}
              alt="Logo"
              className="dog-head-img"
              style={{ marginTop: "-100px" }}
            />
            {children}
          </div>
          <div className="col-md-4 w-100 p-relative">
            <VideoModal videoImg={elbowvideo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElbowHero
