import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import Hero from "../components/hero/hero"

// import MySwiper from "../components/swiper/swiper"
import AboutImg from "../../static/assets/girl-with-her-dog.png"
import AboutTwoImg from "../../static/assets/3r5n6BJ4.jpeg"
import welcome from "../images/welcome.svg"
import welcomeMobile from "../images/welcome-mobile.svg"
import video from "../images/dr-bauer-vid.png"

// Reactstrap
import { Container, Row, Col } from "reactstrap"

// adjusted hero
import Hero from "../components/hero-adjusted/hero"

// images
// import aboutImg from "../images/about-img.png"
// import pawSvg from "../images/dog.svg"
// import curved from "../images/curved.svg"
// import syringes from "../images/syringes.svg"
// import reviewPp from "../images/review-pp-1.jpg"

const IndexPage = ({ location }) => (
  <Layout>
    <SEO title="Home" />
    <Hero videoImg={video} location={location}>
      <img src={welcome} alt="Welcome" className="welcome-img" />
      <img
        src={welcomeMobile}
        alt="Welcome"
        className="welcome-mobile"
        style={{ marginTop: "-100px" }}
      />
    </Hero>
    {/* <div className="about-wrapper py-5"> */}
    <Container>
      <Row className="about-section">
        <Col md={7} sm={12} className="about-first-wrapper">
          <div className="about-first-section">
            <h4 className="mt-0">ABOUT US</h4>
            <p>
              Colorado Canine Orthopedics (CCO) was established in 1996 by Dr.
              Michael Bauer and has become one of the only, and most well
              established, veterinary orthopedic specialty hospitals in the
              United States with six, experienced board-certified surgeons. We
              are located in Colorado Springs, Colorado but the majority of our
              clients and patients travel from all areas Colorado, New Mexico,
              Kansas and Wyoming for small animal orthopedic surgery. We offer
              same day consultations and surgery so clients (and pets) traveling
              from out of town can have a consultation and surgery in the same
              day.
            </p>
            <h4>EXPERIENCE MATTERS</h4>
            <p>
              Colorado Canine Orthopedics excels in, and is renowned for canine
              joint disorders, fracture repair and small breed disc herniations.
              As a group we perform more ACL repairs (primarily TPLOs) than any
              other practice in this region of the country. The same is true for
              total hip replacements, arthroscopic procedures and fracture
              repairs. The surgeons at CCO have performed tens of thousands of
              orthopedic surgical procedures. In fact, the surgeons at CCO offer
              more collective expertise and experience than virtually any
              specialty hospital. As pet lovers, we understand that no one wants
              their pet to have surgery. However, if surgery is needed having an
              experienced surgeon becomes critically important. Our technician
              and staff are equally well trained, experienced and compassionate.
            </p>
            <h4>EXCELLENCE IN CUSTOMER SERVICE</h4>
            <p>
              If excellence in surgery is a given, then customer service truly
              sets us apart from other practices. From the moment you call or
              walk into our hospital, it becomes apparent that we care about
              pets and their owners. We understand and share how much pet owners
              love their animals, and we understand what a critically important
              roll they in our lives. Because of this understanding we treat you
              and your pet as though they were our own. As an example, we use
              state of the art pain management including nerve blocks and
              epidurals so most pets can return to the comfort of their own home
              the day of surgery.
            </p>
            <h4>FACILITY</h4>
            <p>
              Colorado Canine Orthopedics has a new, state of the art hospital.
              We designed out hospital around a stress-free patient and client
              concept. Our treatment areas, imaging and operating rooms rival
              human practices. We realize it’s the doctors, staff and customer
              service that makes us special, but if you’re interested please
              take a moment and have a look at our hospital photo gallery.
            </p>
          </div>
        </Col>
        <Col md={5} sm={12} className="d-flex about-second-wrapper">
          <div className="about-second-section d-flex flex-column justify-content-between">
            <div>
              <img
                src={AboutImg}
                alt="girl-with-her-dog"
                className="img-fluid mb-5"
                style={{ width: "100%" }}
              />
              <img
                src={AboutTwoImg}
                alt="girl-with-her-dog"
                className="img-fluid mt-5"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    {/* </div> */}
  </Layout>
)

export default IndexPage
