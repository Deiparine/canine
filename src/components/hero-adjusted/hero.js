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
			<div className="container">
				<div className="hero-content-wrapper">
					<div className="row no-gutters elbow-dysplasia-video-row">
						<div className="col-12 col-md-7">
							<div className="hero-dog-bg">
								<div className="dog-bg"></div>
							</div>
						</div>
						<div className="col-12 col-md-5">
							<div className="hero-video elbow-dysplasia-video">
								<div>
									<VideoModal videoImg={videoImg} />
								</div>
							</div>
						</div>
					</div>
					{pageTitle !== undefined ? (
						<div className="inner-page-title total-hip-hero medial-patella-hero elbow-dysplasia-hero">
							<h1>{pageTitle}</h1>
						</div>
					) : (
						<div>
							<div className="welcome-img d-none d-md-block">
								<img src={welcome} />
							</div>
							<div className="welcome-mobile-img d-block d-md-none">
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
