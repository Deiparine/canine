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

const CanineShoulder = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="CANINE SHOULDER DISORDERS" />
      <div className="hero-adjustment">
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="row no-gutters">
              <div className="col-12 col-md-7">
                <div className="hero-dog-bg">
                  <div className="dog-bg"></div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="hero-video">
                  <div>
                    <div>
                      <div className="video-modal-btn no-video">
                        <img
                          src="/assets/img/tplo-video.jpg"
                          alt="video"
                          className="video-img img-fluid v-h"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-page-title text-right canine-shoulder-hero">
              <h1>CANINE SHOULDER DISORDERS</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-wrapper py-5"> */}
      <Container className="acl-container my-5">
        <Row className="mb-3 border-none">
          <Col md={7}>
            <h4>Overview</h4>
            <p>
              Canine shoulder disorders vary from juvenile bone disorders such
              as OCD, to athletic traumatic injuries, to tendinopathies seen
              most commonly in middle aged to older sporting breed dogs.
              Arthroscopy and musculoskeletal ultrasound are valuable diagnostic
              tools.
            </p>
          </Col>
          <Col md={5}></Col>
        </Row>
        <Row className="mb-3 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">Osteochondritis dissecans (OCD)</h4>
            <p>
              Osteochondritis dissecans is a common juvenile joint disorder seen
              in young, large and giant breed dogs. The disorder involves a
              congenital problem associated with bone and cartilage development
              which results in intraarticular cartilage/bony flaps.
            </p>
            <p>
              The problem starts with a syndrome called osteochondrosis which is
              a failure of endochondral ossification; the process by which most
              bones grow and articular cartilage is formed. This failure of
              cartilage becoming bone results in overly thick joint cartilage
              adjacent to the joint. The deepest layer of this thickened
              cartilage is inadequately nourished resulting in cell death.
              Eventually, the deep detachment fissures and propagates to the
              joint surface and a “flap” develops. Cartilage debris and
              inflammatory mediators are released into the joint fluid and
              inflammation ensues. With time, arthritis/ degenerative joint
              disease occurs.
            </p>
            <p>
              Osteochondritis dissecans most commonly affects the shoulder
              joint, but also occurs in the elbow, stifle (knee) and tarsal
              (ankle) joints in young dogs.
            </p>
            <p>
              Canine shoulder OCD usually causes significant front limb
              lameness. The diagnosis of OCD is based on physical examination
              and radiographs. CT scanning is helpful, but in most cases is
              unnecessary. The definitive diagnosis is made via arthroscopy.
            </p>
            <p>
              Treatment of shoulder OCD involves removal of the cartilage flap.
              In all cases, arthroscopic removal is considered the state of the
              art and least invasive method. Following flap removal,
              micro-fracturing the remaining defect may be performed, depending
              on the heath of the underlying bone. Micro-fracturing involves
              making small holes in the remaining defect in an attempt to reach
              a local blood supply, which may aid in healing. In general, dogs
              with shoulder OCD have an excellent prognosis following
              arthroscopic flap removal.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/canine-shoulder-video.jpg"
                alt="Canine Shoulder Video"
                className="img-fluid"
              />
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/canine-shoulder-img.jpg"
                alt="Canine Shoulder"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">Supraspinatus Tendinopathy</h4>
            <p>
              Supraspinatus tendinopathy is typically seen in mid-aged, athletic
              dogs. The disorder involves tendon fiber tearing and inflammation
              thought to be induced by over-zealous activity. Overtime,
              mineralization of the tendon may occur. Dogs with supraspinatus
              tendinopathy have varying degrees of lameness ranging from mild
              and intermittent to severe and persistent. The diagnosis of
              supraspinatus tendinopathy is based on physical examination,
              radiographs and musculoskeletal ultrasound. Treatments range from
              rest alone to intra-tendon, platelet rich plasma injections to
              surgical resection of the mineralized tendon. The specific
              treatment(s), and prognosis, depends on the severity of the
              problem.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/canine-shoulder-img-1.jpg"
                alt="Canine Shoulder"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">Medial Shoulder Instability</h4>
            <p>
              Medial shoulder instability is a relatively uncommon condition
              seen in midaged, sporting and large breed dogs. The problem is
              typically related to tearing of the glenohumeral ligament on the
              medial side of the shoulder joint. The clinical signs range from
              mild to severe front limb lameness. The tentative diagnosis of
              medial shoulder instability is made based on physical examination
              and musculoskeletal ultrasound. Arthroscopy is used for definitive
              diagnosis. Treatment depends on severity of the problem and ranges
              from debridement and external support to platelet rich plasma
              injections to surgical stabilization.
            </p>
          </Col>
          <Col md={5} className="d-flex flex-column">
            <div className="mb-4">
              <img
                src="/assets/img/canine-shoulder-video-1.jpg"
                alt="Canine Shoulder Video"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Bicipital Tendonitis (Tenosynovitis) and Biceps Tendon Tearing
            </h4>
            <p>
              Bicipital tendon tearing and inflammation is a relatively uncommon
              shoulder problem seen in mid-aged, sporting and large breed dogs.
              The clinical signs are variable and range from mild to severe
              lameness. The diagnosis is based on physical examination,
              radiography, musculoskeletal ultrasound and arthroscopy.
              Treatments vary on the degree of tearing. Subtle tears can be
              treated with external support and plasma rich plasma injections.
              Near complete tears are typically treated via arthroscopic
              resection of the torn portion of the tendon. Overall the prognosis
              is good following treatment.
            </p>
          </Col>
          <Col md={5} className="d-flex flex-column">
            <div className="mb-4">
              <img
                src="/assets/img/canine-shoulder-img-2.jpg"
                alt="Canine Shoulder"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">Costs for shoulder arthroscopy</h4>
            <p>
              The average cost of shoulder arthroscopy at Colorado Canine
              Orthopedics and Rehab is $2,280 - $3,280 depending on whether the
              treatment is for one or both shoulders. Fees include anesthesia
              and monitoring, and routine go home medications.
            </p>
            <p>
              At Colorado Canine Orthopedics we are committed to providing only
              state of the art, non-compromised pet healthcare. We realize some
              pet owners may find this level of care relatively costly. However,
              despite the inherently expensive nature of our work, we are
              dedicated to providing the highest level of care at the most
              affordable price possible. We believe if you compare our fees to
              other specialty practices you will find this true.
            </p>
          </Col>
          <Col md={5} className="d-flex flex-column">
            <div className="mb-4">
              <img
                src="/assets/img/canine-shoulder-img-3.jpg"
                alt="Canine Shoulder"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <BackToTop />
      {/* </div> */}
    </Layout>
  )
}

export default CanineShoulder
