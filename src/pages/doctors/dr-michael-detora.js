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

const MichaelDetora = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="Michael DeTora, DVM" />
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
                src="/assets/img/detora_250.jpg"
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
              <a href="/" className="mail-doc">
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
                Doctor <span className="doc-name">Michael DeTora, DVM</span>
              </h2>
              <h4 className="doctor-position">
                Diplomate, American College of Veterinary Surgeons
              </h4>
              <p>
                Dr. Michael DeTora is a native of Auburn, Massachusetts and the
                son of a veterinarian. He attended Virginia Tech and played
                soccer for the Hokies. His DVM was completed at Tufts Cummings
                School of Veterinary Medicine. Following graduation, a 1-year
                small animal rotating internship was completed at North Carolina
                State University. Dr. DeTora then returned to Tufts to complete
                a 3-year residency in small animal surgery. He became board
                certified by the American College of Veterinary Surgeons in
                2012.
              </p>
              <p>
                Michael has a passion for minimally invasive surgeries, cranial
                cruciate ligament injury, regenerative medicine, and total joint
                arthroplasty. He has spent time practicing in Florida, Maryland,
                and Massachusetts. In his spare time, he enjoys soccer,
                basketball, fishing, golf, winter sports, running with his wife
                and her athletic dog, Jehger, and spending time with daughter,
                Ava. Dr. DeTora is also an avid Boston Celtics fan. He is
                excited to experience all Colorado has to offer with his family.
              </p>
            </Col>
          </Row>
        </div>
        <div className="doctor-video">
          <Row className="border-none">
            <Col md={12}>
              {/*              <iframe
                width="100%"
                height="600"
                className="m-auto"
                src="https://www.youtube.com/embed/M6E4cMWGGGc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>*/}
            </Col>
          </Row>
        </div>
      </Container>
      <BackToTop />
      {/* </div> */}
    </Layout>
  )
}

export default MichaelDetora
