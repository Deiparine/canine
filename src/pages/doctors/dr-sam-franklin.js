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

const SamFranklin = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="Doctor Sam Franklin, MS, DVM, PhD" />
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
                src="/assets/img/dr-sam-franklin.jpg"
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
                Doctor{" "}
                <span className="doc-name">Sam Franklin, MS, DVM, PhD</span>
              </h2>
              <h4 className="doctor-position mb-2">
                Diplomate, American College of Veterinary Surgeons
              </h4>
              <h4 className="doctor-position mb-2">
                Diplomate, American College of Veterinary Sports Medicine and
                Rehabilitation
              </h4>
              <h4 className="doctor-position">
                ACVS Founding Fellow, Minimally Invasive Surgery, Small Animal
                Orthopedics
              </h4>
              <p>
                Dr. Franklin is originally from Arlington, Virginia and obtained
                a bachelor’s degree from the University of Virginia and a Master
                of Science from the University of Maryland in ecology before
                moving to Colorado to pursue veterinary studies. He earned his
                DVM cum laude from Colorado State University in 2007 followed by
                an internship at the University of Pennsylvania. He then moved
                to the University of Missouri to complete a small animal
                surgical residency and a PhD investigating the use of stem cells
                and bioabsorbable materials for replacing arthritic canine hips.
                Following the residency and PhD he spent one year in private
                practice in upstate New York before becoming an assistant
                professor of orthopedics and sports medicine at the University
                of Georgia. At the University of Georgia he pursued his
                interests in minimally invasive orthopedic surgery, regenerative
                medicine, use of orthobiologics such as platelet-rich plasma and
                stem cells, and musculoskeletal diagnostic imaging. He has
                published over 30 peer-reviewed journal articles, seven book
                chapters, and provided over 60 presentations at national and
                international veterinary meetings. He is a board-certified
                diplomate of both the American College of Veterinary Surgeons
                and the American College of Veterinary Sports Medicine and
                Rehabilitation and he is an ACVS Founding Fellow in the field of
                Minimally Invasive Orthopedic Surgery.
              </p>
              <p>
                Dr. Franklin is very excited to move back to Colorado with his
                wife, two daughters, and two dogs. Outside of veterinary
                medicine he enjoys spending time with his family and is a sports
                enthusiast. His most common pastime is running outdoors with his
                dogs although he also likes cycling, snowboarding, swimming, and
                tennis. He also used to play soccer avidly including in college
                and professionally and is eager to teach his daughters to play
                both soccer and tennis, although they seem to prefer ballet and
                tap dancing instead!
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

export default SamFranklin
