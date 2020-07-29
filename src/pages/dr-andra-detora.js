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

const AndraDetora = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="Doctor Andra DeTora, DVM, CCRT, cVMA" />
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
                src="/assets/img/dr-andra-detora.jpg"
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
                Doctor{" "}
                <span className="doc-name">Andra DeTora, DVM, CCRT, cVMA</span>
              </h2>
              {/*<h4 className="doctor-position">
                Diplomate, American College of Veterinary Surgeons
              </h4>*/}
              <p>
                Dr. Andra DeTora grew up in central New York and received her BS
                from St. Lawrence University in 2008. She then attended Ross
                University and received her DVM in 2012. She spent a few years
                in general practice in New York and Florida and then went on to
                complete a 1-year internship in Sports Medicine and
                Rehabilitation at Veterinary Orthopedic and Sports Medicine
                group in Maryland. She received her Certified Canine
                Rehabilitation Therapist certificate from the Canine
                Rehabilitation Institute in 2014. She is currently engaged in
                Acupuncture training.
              </p>
              <p>
                Andra has spent time working with her husband in Maryland, and
                Massachusetts as a surgery/rehab team to provide complete care
                for four-legged loved ones. She enjoys running, yoga, reading,
                winter sports, cooking, and spending time with her husband, Mike
                and daughter, Ava.
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

export default AndraDetora
