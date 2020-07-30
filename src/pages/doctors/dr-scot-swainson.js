import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"
import BackToTop from "../../components/back-to-top"

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

const ScotSwainson = ({ location }) => {
	console.log(location)
	return (
		<Layout>
			<SEO title="Doctor Scot Swainson, DVM" />
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
													src="/static/acl-vid-601f62f6769da8d3789e8dfd20802e2e.png"
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
							<h1>Doctor</h1>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="about-wrapper py-5"> */}
			<Container className="acl-container my-5">
				<div className="doctor-body">
					<Row className="border-none">
						<Col md={4}>
							<img
								src="/assets/img/dr-scot-swainson.jpg"
								alt="Doctor"
								className="img-fluid mb-4"
							/>
							<button className="print-doc mr-3" onclick="window.print()">
								<img
									src="/assets/img/print.png"
									alt="Print"
									className="mb-4 img-fluid"
								/>
							</button>
							<a href="/" className="mail-doc">
								<img
									src="/assets/img/mail.png"
									alt="Mail"
									className="mb-4 img-fluid"
								/>
							</a>
						</Col>
						<Col md={8}>
							<img
								src="/assets/img/doc-quote.png"
								alt="Quote"
								className="video-img img-fluid mb-3"
							/>
							<h2 className="doctor-name">
								Doctor <span className="doc-name">Scot Swainson, DVM</span>
							</h2>
							<h4 className="doctor-position">
								Diplomate, American College of Veterinary Surgeons
							</h4>
							<p>
								Dr. Swainson was born and raised in Cheyenne, Wyoming and
								completed pre-veterinary studies at the Univeristy of Wyoming.
								After receiving his DVM degree from Colorado State University in
								1994, Dr. Swainson completed a one-year general internship in
								Los Angeles, California followed by a one-year surgical
								internship in Winter Park, Florida. Dr. Swainson then completed
								a 3-year residency in small animal surgery at Iowa State
								University. Following his residency Dr. Swainson was a clinical
								instructor at the University of Wisconsin.
							</p>
							<p>
								Dr. Swainson became board certified as a Diplomate of the
								American College of Veterinary Surgeons in 2000.
							</p>
							<p>
								Dr. Swainson then entered private practice and has worked in
								Boston, MA, Loveland CO, and Albuquerque, NM. He joined Colorado
								Canine Orthopedics in the summer of 2008 and has settled himself
								and family here in Colorado Springs, CO.
							</p>
						</Col>
					</Row>
				</div>
				<div className="doctor-video">
					<Row className="border-none">
						<Col md={12}>
							<iframe
								width="100%"
								height="600"
								className="m-auto"
								src="https://www.youtube.com/embed/0esVtfY2Utk"
								frameborder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
								title="youtube"
							></iframe>
						</Col>
					</Row>
				</div>
			</Container>
			<BackToTop />
			{/* </div> */}
		</Layout>
	)
}

export default ScotSwainson
