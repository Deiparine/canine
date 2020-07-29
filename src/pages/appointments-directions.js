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

const AppointmentDirection = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="Contact Colorado Canine Orthopedics" />
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
              <h1>Contact Colorado Canine Orthopedics</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-wrapper py-5"> */}
      <Container className="acl-container my-5">
        <Row className="border-none">
          <Col md={12}>
            <img
              src="/assets/img/Colorado-Canine-Orthopedics-&-Rehab.jpg"
              alt="Colorado Canine Orthopedics & Rehab"
              className="img-fluid mb-4"
            />
          </Col>
          <Col md={12}>
            <h4 className="doctor-position">
              Diplomate, American College of Veterinary Surgeons
            </h4>
            <p>
              <span className="text-blue">
                <strong>
                  Colorado Canine Orthopedics is located in the Veterinary
                  Specialty Center at:
                </strong>
              </span>
              &nbsp; 5528 N. Nevada Ave. Colorado Springs, CO 80918
            </p>
            <p>
              <span className="text-blue">
                <strong>Phone:</strong>
              </span>
              &nbsp;
              <a href="tel:7192646666" className="tel-cta">
                (719) 264-6666
              </a>
            </p>
            <p>
              <span className="text-blue">
                <strong>Hours:</strong>
              </span>
              &nbsp; Monday - Friday, 7:30 a.m to 5:30 p.m. Saturday, 7:30 a.m.
              - 3 p.m.
            </p>
            <h3 className="mb-5">
              <span class="btt-btn">
                <a href="/">Request an appointment online!</a>
              </span>
            </h3>
            <p>
              Colorado Canine Orthopedics is located 0.4 mile south of 1-25 &
              Nevada Ave. and 0.7 mile north of Garden of the Gods & Nevada Ave.
            </p>
          </Col>
          <Col md={6}>
            <p>
              <strong>Directions from Northern Colorado Springs/ Denver</strong>
            </p>
            <ul>
              <li>From southbound I-25, take the Nevada exit 148.</li>
              <li>Turn left (north) on Nevada Ave.</li>
              <li>Travel south for 0.4 mile.</li>
              <li>
                Turn right (west) at the Veterinary Specialty Center sign.
              </li>
            </ul>
            <p>*The driveway is shared with Sunset Creek Apartments.</p>
            <p>
              <strong>Directions from Southern Colorado Springs/Pueblo</strong>
            </p>
            <ul>
              <li>From northbound I-25, take exit 148.</li>
              <li>Turn right at the second stoplight on North Nevada Ave.</li>
              <li>Travel south for 0.4 mile.</li>
              <li>
                Turn right (west) at the Veterinary Specialty Center sign.
              </li>
            </ul>
            <p>*The driveway is shared with Sunset Creek Apartment.</p>
          </Col>
          <Col md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6209.374909040308!2d-104.81756!3d38.908262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d2883801ce87f7f!2sColorado%20Canine%20Orthopedics%20%26%20Rehab!5e0!3m2!1sen!2sus!4v1596017962095!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Col>
        </Row>
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

export default AppointmentDirection
