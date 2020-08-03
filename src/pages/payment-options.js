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

// import MySwiper from "../components/swiper/swiper

// Reactstrap
import { Container, Row, Col } from "reactstrap"

// images
// import aboutImg from "../images/about-img.png"
// import pawSvg from "../images/dog.svg"
// import curved from "../images/curved.svg"
// import syringes from "../images/syringes.svg"
// import reviewPp from "../images/review-pp-1.jpg"

const PaymentOptions = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="Payment Options" />
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
              <h1>Payment Options</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-wrapper py-5"> */}
      <Container className="acl-container my-5">
        <Row className="border-none">
          <Col md={12}>
            <p>
              Colorado Canine Orthopedics and Rehab accepts Visa, MasterCard and
              Discover credit cards as well as cash and personal checks.
            </p>
            <h3>Financing Options</h3>
            <p>
              <strong>
                Wells Fargo Health Advantage® Credit Card - No interest if paid
                in full within 12 months. Interest will be charged to your
                account from the purchase date if the purchase balance is not
                paid infull within the promotional period.*
              </strong>
            </p>
            <p>
              *The Wells Fargo Health Advantage® credit card is issued by Wells
              Fargo Bank, N.A. Special terms apply to qualifying purchases with
              approved credit. Minimum monthly payments are required during the
              promotional (special terms) period. Interest will be charged to
              your account from the purchase date at the APR for Purchases if
              the purchase balance is not paid in full within the promotional
              (special terms) period. Paying only the minimum monthly payment
              will not pay off the purchase balance before the end of the
              promotional period. For new accounts, the APR for Purchases is
              12.99%. If you are charged interest in any billing cycle, the
              minimum interest charge will be $1.00. This information is
              accurate as of 10/01/2019 and is subject to change. For current
              information, call us at{" "}
              <a href="tel:18004315921" className="tel-cta">
                1-800-431-5921
              </a>
              .
            </p>
            <a
              href="https://retailservices.wellsfargo.com/ahapp/init-app?m=2169179884&l=en_US"
              target="_blank"
              className="tel-cta"
            >
              <img
                src="/assets/img/WFHA_180x150.png"
                alt="WFHA"
                className="img-fluid mb-4"
              />
            </a>
            <p>
              If payment at the time of surgery causes undue financial hardship
              additional payment plans may be available on a case-by-case basis.
            </p>
          </Col>
        </Row>
      </Container>
      <BackToTop />
      {/* </div> */}
    </Layout>
  )
}

export default PaymentOptions
