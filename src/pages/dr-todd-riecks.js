import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import BackToTop from "../components/back-to-top"

// images
import Telemed from "../images/acl-tears/telemed.jpg"
import aclVideo1 from "../images/acl-tears/man-carry-puppy.jpg"
import aclVid from "../images/hip-video.jpg"
import tplodog from "../images/tplo-dog.jpg"
import Doghead from "../images/doghead.png"
import welcomeMobile from "../images/welcome-mobile.svg"

// import MySwiper from "../components/swiper/swiper

// Reactstrap
import { Container, Row, Col } from "reactstrap"

// images
// import aboutImg from "../images/about-img.png"
// import pawSvg from "../images/dog.svg"
// import curved from "../images/curved.svg"
// import syringes from "../images/syringes.svg"
// import reviewPp from "../images/review-pp-1.jpg"

const ToddRiecks = ({ location }) => {
	console.log(location)
	return (
		<Layout>
			<SEO title="Doctor Todd Riecks, DVM" />
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
								src="/assets/img/dr-todd-riecks.jpg"
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
							<a className="mail-doc">
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
								Doctor <span className="doc-name">Todd Riecks, DVM</span>
							</h2>
							<h4 className="doctor-position">
								Diplomate, American College of Veterinary Surgeons
							</h4>
							<p>
								Dr. Riecks who was born and raised in Ohio, received his DVM
								from The Ohio State University. He went on to complete his
								internship and residency at Med Vet Associates, Ltd. in
								Columbus, Ohio, a nationally recognized advanced muti-specialty,
								emergency, and cancer center.
							</p>
							<p>
								His passion for canine orthopedic and neurosurgery allows him
								the privilege to "...care for and interact with so many
								wonderful pets and their people. It is awesome to witness
								surgical success and see these dogs and cats return to their
								fun, active CO lifestyles! Positive owner accounts and
								compliments continue to humble my practice." He’s thrilled to be
								living in Colorful Colorado where he enjoys snowboarding, Alpine
								Touring, camping, backpacking, and photography. Todd is a
								registered yoga teacher and enjoys a committed daily yoga
								practice of his own. He is a dedicated participant in the Tiny
								House Movement and strives for a minimal earth impact.
							</p>
							<p>
								He is delighted with his daughters, Jesse and Jaime. He shares
								his tiny space with his partner Heather and a Border Terrier,
								'Manitou.'
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
								src="https://www.youtube.com/embed/JAs8EZuWVaI"
								frameborder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
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

export default ToddRiecks
