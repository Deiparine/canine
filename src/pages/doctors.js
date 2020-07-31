import React from "react"
import { Link } from "gatsby"

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

// import MySwiper from "../components/swiper/swiper

// Reactstrap
import { Container, Row, Col } from "reactstrap"

// images
// import aboutImg from "../images/about-img.png"
// import pawSvg from "../images/dog.svg"
// import curved from "../images/curved.svg"
// import syringes from "../images/syringes.svg"
// import reviewPp from "../images/review-pp-1.jpg"

const Doctors = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="Doctors" />
      <div class="doctors-hero text-center">
        <div class="container-fluid p-0">
          <div class="hero-content-wrapper">
            <div class="row no-gutters">
              <div class="col-12">
                <div class="inner-page-subtitle">
                  <h4 className="mb-4">OUR DOCTORS</h4>
                  <h1>
                    Meet the Veterinary Specialists at Colorado Canine
                    Orthopedics and Rehab
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-wrapper py-5"> */}
      <Container className="acl-container text-center my-5">
        <Row className="border-none">
          <Col>
            <p>
              Our orthopedic veterinary specialty surgeons consists entirely of
              board certified veterinary surgeons as well as a board certified
              veterinary anesthesiologist with over 50 years of combined
              experience. Our care team also includes certified veterinary
              technicians as well as a dedicated, pet loving support staff. At
              Colorado Canine Orthopedics, we each believe pets enrich our lives
              in many ways and constantly strive to make your pets healthy,
              happy and ready to greet you when you walk in the door.
            </p>
            <p>
              At Colorado Canine Orthopedics, we are committed to providing your
              pet with the best healthcare available. From state of the art
              treatments for any of your pet's orthopedic disease or injury, we
              work with you and your veterinarian to ensure your pet is
              comfortable and cared for in every situation.
            </p>
            <h4>
              We invite you to learn more about each of our specialists below.
            </h4>
            <Row>
              <Col md="4">
                <div className="doctor-list">
                  <div className="doctor-image">
                    <img
                      src="/assets/img/bauer_2015.jpg"
                      alt="Doctor"
                      class="img-fluid mb-4"
                    />{" "}
                  </div>
                  <div className="doctor-info">
                    <h3>Dr. Michael Bauer</h3>
                    <h4 className="doctor-rank mb-4">DVM DACVS</h4>
                    <p className="doctor-p mb-4">
                      DVM and Diplomate, American College of Veterinary Surgeons
                    </p>
                    <h3>
                      <span class="btt-btn">
                        <Link to="/doctors/bauer-dvm">View Profile</Link>
                      </span>
                    </h3>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="doctor-list">
                  <div className="doctor-image">
                    <img
                      src="/assets/img/bauer_2015.jpg"
                      alt="Doctor"
                      class="img-fluid mb-4"
                    />{" "}
                  </div>
                  <div className="doctor-info">
                    <h3>Dr. Michael Bauer</h3>
                    <h4 className="doctor-rank mb-4">DVM DACVS</h4>
                    <p className="doctor-p mb-4">
                      DVM and Diplomate, American College of Veterinary Surgeons
                    </p>
                    <h3>
                      <span class="btt-btn">
                        <Link to="/doctors/bauer-dvm">View Profile</Link>
                      </span>
                    </h3>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="doctor-list">
                  <div className="doctor-image">
                    <img
                      src="/assets/img/bauer_2015.jpg"
                      alt="Doctor"
                      class="img-fluid mb-4"
                    />{" "}
                  </div>
                  <div className="doctor-info">
                    <h3>Dr. Michael Bauer</h3>
                    <h4 className="doctor-rank mb-4">DVM DACVS</h4>
                    <p className="doctor-p mb-4">
                      DVM and Diplomate, American College of Veterinary Surgeons
                    </p>
                    <h3>
                      <span class="btt-btn">
                        <Link to="/doctors/bauer-dvm">View Profile</Link>
                      </span>
                    </h3>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <BackToTop />
      {/* </div> */}
    </Layout>
  )
}

export default Doctors
