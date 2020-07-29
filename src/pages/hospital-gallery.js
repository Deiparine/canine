import React from "react"
// import { Link } from "gatsby"
import Gallery from "react-grid-gallery"

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

const PreparingSurgery = ({ location }) => {
  const IMAGES = [
    {
      src: "/assets/img/Colorado-Canine-Orthopedics-&-Rehab.jpg",
      thumbnail: "/assets/img/Colorado-Canine-Orthopedics-&-Rehab.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "/assets/img/Colorado-Canine-Orthopedics-&-Rehab.jpg",
      thumbnail: "/assets/img/Colorado-Canine-Orthopedics-&-Rehab.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      caption: "Boats (Jeshu John - designerspics.com)",
    },

    {
      src: "/assets/img/Colorado-Canine-Orthopedics-&-Rehab.jpg",
      thumbnail: "/assets/img/Colorado-Canine-Orthopedics-&-Rehab.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
  ]
  console.log(location)
  return (
    <Layout>
      <SEO title="Hospital Gallery" />
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
              <h1>Hospital Gallery</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-wrapper py-5"> */}
      <Container className="acl-container my-5">
        <Row className="border-none">
          <Col md={12}>
            <Gallery images={IMAGES} />
          </Col>
        </Row>
      </Container>
      <BackToTop />
      {/* </div> */}
    </Layout>
  )
}

export default PreparingSurgery
