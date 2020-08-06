import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import BackToTop from "../components/back-to-top"
import Contact from "../components/form/contact-form.js"

// images
// import Telemed from "../images/acl-tears/telemed.jpg"
// import aclVideo1 from "../images/acl-tears/man-carry-puppy.jpg"
// import aclVid from "../images/hip-video.jpg"
// import tplodog from "../images/tplo-dog.jpg"
// import Doghead from "../images/doghead.png"
// import welcomeMobile from "../images/welcome-mobile.svg"

// import MySwiper from "../components/swiper/swiper

// Reactstrap
import { Container, Row, Col } from "reactstrap"

// images
// import aboutImg from "../images/about-img.png"
// import pawSvg from "../images/dog.svg"
// import curved from "../images/curved.svg"
// import syringes from "../images/syringes.svg"
// import reviewPp from "../images/review-pp-1.jpg"

const AppointmentConsultation = ({ location }) => {
	console.log(location)
	return (
		<Layout>
			<SEO title="Request a Colorado Canine Orthopedics Consultation" />
			<div class="hero-adjustment">
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
										<div>
											<div class="video-modal-btn no-video">
												<img
													src="/assets/img/tplo-video.jpg"
													alt="video"
													class="video-img img-fluid v-h"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="inner-page-title text-right arthroscopy-hero">
							<h1>Request a Colorado Canine Orthopedics Consultation</h1>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="about-wrapper py-5"> */}
			<Container className="acl-container my-5">
				<Row className="border-none">
					<Col md={12}>
						<p>
							Do you have a concern your pet may have an orthopedic condition or
							injury. Complete the following form to request a call back from
							our staff to discuss scheduling an appointment with one of our
							orthopedic specialists.
						</p>
						<p>
							<strong>
								*Please note, we make every effort to contact you as soon as
								possible, however, if your matter is urgent we suggest calling
								us at 719-264-6666.
							</strong>
						</p>
					</Col>
					<Col md={12}>
						<Contact />
					</Col>
				</Row>
			</Container>
			<BackToTop />
			{/* </div> */}
		</Layout>
	)
}

export default AppointmentConsultation
