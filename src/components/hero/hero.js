import React from "react"
import Doghead from "../../images/doghead.png"
import welcomeMobile from "../../images/welcome-mobile.svg"
import VideoModal from "../video-modal"

const Hero = ({ heroTextImage, location, styles }) => {
  const path = ["acl-tears"]
  console.log(location)

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
            {heroTextImage ? (
              <img
                src={heroTextImage}
                alt="Welcome"
                className="welcome-img"
                style={styles || { marginTop: "-100px" }}
              />
            ) : null}
            {path.includes(location.pathname.replace(/\//g, "")) ? (
              <img
                src={heroTextImage}
                alt="Welcome"
                className="welcome-mobile"
                style={{ marginTop: "-100px" }}
              />
            ) : (
              <img
                src={welcomeMobile}
                alt="Welcome"
                className="welcome-mobile"
                style={{ marginTop: "-100px" }}
              />
            )}
          </div>
          <div className="col-md-4 w-100 p-relative">
            <VideoModal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
