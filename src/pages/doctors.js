import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackToTop from "../components/back-to-top"

import { Container, Row, Col } from "reactstrap"

// images
import DrBauer from '../../static/assets/img/doctor-bauer-min.jpg'
import DrDetora from '../../static/assets/img/doctor-detora-min.jpg'
import DrFranklin from '../../static/assets/img/doctor-franklin-min.jpg'
import DrMiller from '../../static/assets/img/doctor-miller-min.jpg'
import DrReicks from '../../static/assets/img/doctor-reicks-min.jpg'
import DrSwainson from '../../static/assets/img/doctor-swainson-min.jpg'
import DrAndra from '../../static/assets/img/doctor-andra-min.jpg'

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
                      src={DrBauer}
                      alt="Doctor Bauer"
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
                      src={DrDetora}
                      alt="Doctor"
                      class="img-fluid mb-4"
                    />{" "}
                  </div>
                  <div className="doctor-info">
                    <h3>Dr. Michael DeTora</h3>
                    <h4 className="doctor-rank mb-4">DVM</h4>
                    <p className="doctor-p mb-4">
                      DVM and Diplomate, American College of Veterinary Surgeons
                    </p>
                    <h3>
                      <span class="btt-btn">
                        <Link to="/doctors/dr-michael-detora">
                          View Profile
                        </Link>
                      </span>
                    </h3>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="doctor-list">
                  <div className="doctor-image">
                    <img
                      src={DrFranklin}
                      alt="Doctor"
                      class="img-fluid mb-4"
                    />{" "}
                  </div>
                  <div className="doctor-info">
                    <h3>Dr. Sam Franklin</h3>
                    <h4 className="doctor-rank mb-4">DVM</h4>
                    <p className="doctor-p mb-4">
                      DVM and Diplomate, American College of Veterinary Surgeons
                    </p>
                    <h3>
                      <span class="btt-btn">
                        <Link to="/doctors/dr-sam-franklin">View Profile</Link>
                      </span>
                    </h3>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="doctor-list">
                  <div className="doctor-image">
                    <img
                      src={DrMiller}
                      alt="Doctor"
                      class="img-fluid mb-4"
                    />{" "}
                  </div>
                  <div className="doctor-info">
                    <h3>Dr. Nate Miller</h3>
                    <h4 className="doctor-rank mb-4">DVM</h4>
                    <p className="doctor-p mb-4">
                      DVM and Diplomate, American College of Veterinary Surgeons
                    </p>
                    <h3>
                      <span class="btt-btn">
                        <Link to="/doctors/dr-nate-miller">View Profile</Link>
                      </span>
                    </h3>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="doctor-list">
                  <div className="doctor-image">
                    <img
                      src={DrReicks}
                      alt="Doctor"
                      class="img-fluid mb-4"
                    />{" "}
                  </div>
                  <div className="doctor-info">
                    <h3>Dr. Todd Riecks</h3>
                    <h4 className="doctor-rank mb-4">DVM</h4>
                    <p className="doctor-p mb-4">
                      DVM and Diplomate, American College of Veterinary Surgeons
                    </p>
                    <h3>
                      <span class="btt-btn">
                        <Link to="/doctors/dr-todd-riecks">View Profile</Link>
                      </span>
                    </h3>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="doctor-list">
                  <div className="doctor-image">
                    <img
                      src={DrSwainson}
                      alt="Doctor"
                      class="img-fluid mb-4"
                    />{" "}
                  </div>
                  <div className="doctor-info">
                    <h3>Dr. Scot Swainson</h3>
                    <h4 className="doctor-rank mb-4">DVM</h4>
                    <p className="doctor-p mb-4">
                      DVM and Diplomate, American College of Veterinary Surgeons
                    </p>
                    <h3>
                      <span class="btt-btn">
                        <Link to="/doctors/dr-scot-swainson">View Profile</Link>
                      </span>
                    </h3>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="doctor-list">
                  <div className="doctor-image">
                    <img
                      src={DrAndra}
                      alt="Doctor"
                      class="img-fluid mb-4"
                    />{" "}
                  </div>
                  <div className="doctor-info">
                    <h3>Dr. Andra DeTora</h3>
                    <h4 className="doctor-rank mb-4">DVM</h4>
                    <p className="doctor-p mb-4">
                      DVM and Certified Canine Rehabilitation Therapist.
                    </p>
                    <h3>
                      <span class="btt-btn">
                        <Link to="/doctors/dr-andra-detora">View Profile</Link>
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
