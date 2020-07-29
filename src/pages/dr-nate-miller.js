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

const NateMiller = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="Doctor Nate Miller, DVM" />
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
                src="/assets/img/dr-nate-miller.jpg"
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
                Doctor <span className="doc-name">Nate Miller, DVM</span>
              </h2>
              <h4 className="doctor-position">
                Diplomate, American College of Veterinary Surgeons
              </h4>
              <p>
                Dr. Miller grew up in Evergreen, Colorado. He received his
                undergraduate degree from Harvard University and returned to
                Colorado, graduating from Colorado State University Veterinary
                School. He was intern of the year at North Carolina State
                University and completed his surgical residency at the
                University of Georgia in 2002. He became board certified by the
                American College of Veterinary Surgeons in 2004.
              </p>
              <p>
                Dr. Miller has practiced in Denver, CO and Santa Cruz, CA. He
                returned to Colorado in 2012 and joined the team at Colorado
                Canine Orthopedics and couldn’t be happier.
              </p>
              <p>
                Dr. Miller has extensive experience in arthroscopy and has been
                an instructor in courses nationally. Other professional
                interests include joint replacement and correction of limb
                deformities
              </p>
              <p>
                Dr. Miller’s family consists of his wife Christine, his two
                daughters Jessie and Charlotte, and Fred the corgi. He enjoys
                cycling, fishing, and spending time with his family.
              </p>
            </Col>
          </Row>
        </div>
        {/*<div className="doctor-video">
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
                     ></iframe>
                  </Col>
               </Row>
            </div>*/}
      </Container>
      <BackToTop />
      {/* </div> */}
    </Layout>
  )
}

export default NateMiller
