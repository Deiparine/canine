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

const Michael = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="Doctor Michael Bauer, DVM" />
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
                src="/assets/img/bauer_2015.jpg"
                alt="Doctor"
                class="img-fluid mb-4"
              />
              <button className="print-doc mr-3" onclick="window.print()">
                <img
                  src="/assets/img/print.png"
                  alt="Print"
                  class="mb-4 img-fluid"
                />
              </button>
              <a className="mail-doc">
                <img
                  src="/assets/img/mail.png"
                  alt="Mail"
                  class="mb-4 img-fluid"
                />
              </a>
            </Col>
            <Col md={8}>
              <img
                src="/assets/img/doc-quote.png"
                alt="Quote"
                class="video-img img-fluid mb-3"
              />
              <h2 className="doctor-name">
                Doctor <span className="doc-name">Michael Bauer, DVM</span>
              </h2>
              <h4 className="doctor-position">
                Diplomate, American College of Veterinary Surgeons
              </h4>
              <p>
                Dr. Michael Bauer is a native Kentuckian but has called Colorado
                home for the past 25 years. He received his Veterinary degree
                from Auburn University in 1982 and completed a surgical
                residency program at the University of Tennessee in 1986. He
                taught veterinary surgery for 10 years at the University of
                Saskatchewan, Purdue University and Colorado State University.
              </p>
              <p>
                In 1996 Dr. Bauer moved to Colorado Springs and started a small
                animal surgical practice that gradually evolved into Colorado
                Canine Orthopedics and Rehab. Dr. Bauer is passionate about
                helping animals and helping people that love their animals the
                way he loves his. He takes prides in treating people the way he
                would like to be treated if his pets were in need.
              </p>
              <p>
                His family includes his wonderful wife Kimberly, and his other
                four legged family members: Sweat Pea, Noodle, Daisy and Piggy.
                Aside from spending time with his family, Dr. Bauer enjoys
                cycling, skiing, yoga, fly-fishing and playing guitar.
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
                src="https://www.youtube.com/embed/M6E4cMWGGGc"
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

export default Michael
