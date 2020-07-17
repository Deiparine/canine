import React from "react"
import Doghead from "../../images/doghead.png"
import VideoModal from "../video-modal"
import welcomeMobile from "../../images/welcome-mobile.svg"
import welcome from "../../images/welcome.svg"

import "./hero-adjusted.scss"

const Hero = ({ children, videoImg, pageTitle }) => {
    console.log(pageTitle)

    return (
        <div className="hero-adjustment">
			<div class="container">
				<div class="hero-content-wrapper">
					<div class="row no-gutters">
						<div class="col-12 col-md-7">
							<div class="hero-dog-bg">
								<div class="dog-bg"></div>
							</div>
						</div>
						<div class="col-12 col-md-5">
							<div class="hero-video">
								<div>
									<VideoModal videoImg={videoImg} />
								</div>
							</div>
						</div>
					</div>
					{pageTitle !== undefined ? (
						<div className="inner-page-title total-hip-hero">
							<h1>{pageTitle}</h1>
						</div>
					) : (
						<div>
							<div class="welcome-img d-none d-md-block">
								<img src={welcome} />
							</div>
							<div class="welcome-mobile-img d-block d-md-none">
								<img src={welcomeMobile} />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
    )
}

export default Hero