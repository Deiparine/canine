import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Reactstrap
import { Container, Row, Col } from "reactstrap"

const ThankYou = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="Thank You" />
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
              <h1>ThANK YOU FOR SENDING US A MESSAGE!</h1>
            </div>
          </div>
        </div>
      </div>
      <Container className="acl-container my-5">
        <Row className="border-none">
          <Col md={12}>
            <h1>We will be in touch with you soon!</h1>
            <h3>
              <span className="btt-btn">
                <Link to="/">Back to Home</Link>
              </span>
            </h3>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ThankYou
