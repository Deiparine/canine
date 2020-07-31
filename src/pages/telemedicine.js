import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import BackToTop from "../components/back-to-top"

// images
// import Telemed from "../images/acl-tears/telemed.jpg"
// import aclVideo1 from "../images/acl-tears/man-carry-puppy.jpg"
// import aclVid from "../images/hip-video.jpg"
// import tplodog from "../images/tplo-dog.jpg"
// import Doghead from "../images/doghead.png"
// import welcomeMobile from "../images/welcome-mobile.svg"
import telemed from "../images/telemed.jpeg"

// import MySwiper from "../components/swiper/swiper

// Reactstrap
import { Container, Row, Col } from "reactstrap"

// images
// import aboutImg from "../images/about-img.png"
// import pawSvg from "../images/dog.svg"
// import curved from "../images/curved.svg"
// import syringes from "../images/syringes.svg"
// import reviewPp from "../images/review-pp-1.jpg"

const Telemedicine = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="Telemedicine" />
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
              <h1>Colorado Canine Orthopedics Telemedicine</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-wrapper py-5"> */}
      <Container className="acl-container my-5">
        <Row>
          <Col>
            <p>
              Colorado Canine Orthopedics Telemedicine provides the perfect
              opportunity to discuss your pets orthopedic condition with one of
              our experienced board-certified surgeons, from the comfort and
              safety of your home. During the appointment your pet's lameness
              and gait will be evaluated, x-rays will be reviewed (if available)
              and the most likely diagnosis will be determined.
            </p>
            <p>
              Colorado Canine Orthopedics Telemedicine service is best suited
              for dogs with surgical orthopedic problems and allows us to answer
              your questions about the underlying problem and discuss surgical
              options, costs, recovery and prognosis. It's easier than you might
              think, and we'll walk you through the entire process.{" "}
              <strong>
                Please call us at 719-264-6666 to find out if telemedicine is
                right for you and your pet
              </strong>
              .
            </p>
            <p>
              <strong>What do I need to do to setup the appointment?</strong>{" "}
              Just give us a call at 719-264-6666 and we will setup the
              appointment and help with everything necessary to prepare your
              computer, tablet or phone. We'll also call just prior to the
              appointment to be sure everything is working properly. If you have
              x-rays, we'll contact your veterinarian and request copies. A
              short cell phone video displaying your pet's lameness can also be
              helpful and we'll give you instructions on how to send the video
              prior to your appointment.
            </p>
            <p>
              <strong>What is the cost of a telemedicine appointment?</strong>{" "}
              The appointment is free for clients and their pets with surgical
              orthopedic problems in our region of the country.
            </p>
            <p>
              <strong>
                How does CCO telemedicine work if my pet needs surgery?
              </strong>{" "}
              For problems such as ACL tears, hip dysplasia, elbow dysplasia,
              etc. the telemedicine appointment is a great option. If surgery is
              recommended, we'll set up the surgery date and do a hands-on
              evaluation to confirm the diagnosis and answer any questions.
              Thanks to nerve block and epidural analgesia the majority of our
              patients are able to safely go home the day of surgery. For more
              emergent problems such as fractures, we may recommend that you
              come directly to our hospital. However, in appropriate situations,
              we are also available to discuss fracture repair options, costs,
              etc.
            </p>
            <p>
              <strong>
                {" "}
                possible, please review our website for common orthopedic
                conditions such as ACL tears, hip dysplasia, elbow dysplasia,
                etc. prior to your appointment to help formulate questions and
                facilitate your discussion with our surgeons.
              </strong>
            </p>
            <div className="text-center">
              <img src={telemed} className="img-fluid" alt="X-ray" />
            </div>
          </Col>
        </Row>
      </Container>
      <BackToTop />
    </Layout>
  )
}

export default Telemedicine
