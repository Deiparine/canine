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

const Arthroscopy = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="ARTHROSCOPY" />
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
              <h1>ARTHROSCOPY</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-wrapper py-5"> */}
      <Container className="acl-container my-5">
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4>Overview</h4>
            <p>
              Arthroscopy refers to a minimally invasive surgical procedure
              utilizing a small optical instrument (arthroscope) inserted into a
              joint, connected to a fiber-optic video cable and camera and
              transmitted to a high definition monitor (figure 1). Arthroscopy
              provides magnification and visualization of structures within
              canine joints through a very small “stab” incision versus open
              joint procedures. Advantages of arthroscopy versus open joint
              procedures are many. The most obvious is the minimally invasive
              nature of arthroscopy. Moreover, once the arthroscope is inserted,
              areas within the joint can be visualized that simply cannot easily
              be accessed via standard open surgical procedures. Additionally,
              the intra-articular (within the joint) structures can be examined
              while the joint can be held in normal anatomical position, as well
              as moved through various motions. In small animal orthopedic
              surgery, arthroscopy is frequently used as both a diagnostic, as
              well as a treatment modality. Specialized arthroscopic instruments
              include small hand-held probes, graspers, scissors, punches,
              cutting tools, etc. Electric shavers and burrs are used to debride
              bone, cartilage, ligaments, tendons and meniscal tissue in the
              stifle joint. Less frequently, radiofrequency (RF) probes can be
              used to both debride and “shrink” intraarticular tissues.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/arthroscopy-img.jpg"
                alt="Arthroscopy"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Arthroscopy for the canine stifle joint
            </h4>
            <p>
              Arthroscopic examination of the canine stifle joint in cases of
              ACL tears, prior to more invasive surgical procedures, is the gold
              standard in veterinary surgery. Arthroscopy allows magnified
              evaluation of the ACL, PCL, and medial and lateral menisci. In
              patients with early ACL degeneration, subtle changes within the
              ligament are virtually impossible to identify with the naked eye
              and an open joint. We now know this early degeneration always
              progresses and surgical intervention at this early phase yields
              better longterm results and minimizes progression of
              osteoarthritis. More importantly, suspect ACL pathology can be
              clearly ruled in or out, non-invasively.
            </p>
            <Link to="/acl-tears" class="btn mb-4">
              LEARN MORE ABOUT CANINE ACL TEARS
            </Link>
            <p>
              Meniscal tears are common in canine orthopedics. The meniscus is a
              fibrocartilaginous structure that acts as a shock absorber and
              helps provides joint stability and appropriate bone positioning
              within the canine stifle joint. In dogs with ACL tears, joint
              instability often leads to meniscal pathology and tearing. In
              fact, approximately 40% of dogs with ACL tears have concurrent
              meniscal pathology. All progressive small animal surgeons agree
              that the complete canine meniscus is virtually impossible to
              visualize via an open joint surgical approach. Not only does
              arthroscopy allow accurate visualization and diagnosis of meniscal
              tears, it also allows precise meniscectomy and debridement.
              Infrequently, meniscal pathology occurs without concurrent ACL
              tearing. Isolated meniscal tears manifest similar to partial ACL
              tears and misdiagnosis and inappropriate surgical procedures are
              possible mistakes that can occur without accurate joint
              visualization.
            </p>
            <p>
              Other canine stifle joint conditions that can be diagnosed and/or
              treated arthroscopically include OCD, generalized osteoarthritis
              and cartilage damage associated with patella luxations.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/arthroscopy-video.jpg"
                alt="Arthroscopy Video"
                className="img-fluid"
              />
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/arthroscopy-video-1.jpg"
                alt="Arthroscopy Video"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Arthroscopy for canine hip dysplasia
            </h4>
            <p>
              Arthroscopy can be useful when determining treatment options for
              young dogs with hip dysplasia. Young dogs (under 8 months of age)
              are potential candidates for the double pelvic osteotomy (DPO)
              procedure. One of the key criteria for long term success of the
              DPO procedure is the lack of cartilage erosion and cartilage
              damage. Arthroscopy can be used safely and accurately to evaluate
              the health of the hip cartilage in potential DPO cases.
            </p>
            <h4 className="border-top pt-4">
              Arthroscopy for the canine tarsal joint
            </h4>
            <p>
              Arthroscopy is beneficial in the diagnosis and treatment of canine
              osteochondritis dissecans (OCD) of the talus. The osteochondral
              fragment associated with this disorder can be identified and
              removed arthroscopically.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/arthroscopy-img-1.jpg"
                alt="Arthroscopy"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Arthroscopy for the canine shoulder joint
            </h4>
            <p>
              Arthroscopy is an important tool to diagnosis and treat canine
              shoulder disorders. Osteochondritis dissecans (OCD) can be
              accurately and noninvasively diagnosed and treated using an
              arthroscope and specialized arthroscopic instruments. Brachial
              biceps tendon pathology and tears, as well as glenohumeral
              tendinopathies can be diagnosed and, in some instances, treated
              via arthroscopy alone.
            </p>
            <img
              src="/assets/img/arthroscopy-img-2.jpg"
              alt="Arthroscopy"
              className="img-fluid"
            />
            <div className="mt-4" style={{ borderTop: `1px solid #dedede` }}>
              <h4 className="border-top pt-4">
                Arthroscopy for the canine elbow joint
              </h4>
              <p>
                Arthroscopy plays a key role in the diagnosis and treatment of
                canine elbow disorders. Elbow dysplasia, OCD, medial compartment
                syndrome, ununited anconeal process and fragmented medial
                coronoid process are examples of disorder diagnosed and treated
                arthroscopically. Visualization of intraarticular elbow anatomy
                is virtually impossible by an invasive open joint surgical
                approach. Arthroscopy allows noninvasive, complete and accurate
                evaluation of all critical canine elbow joint anatomy. Bone
                fragment removal and cartilage debridement is easily
                accomplished using an arthroscope and specialized arthroscopic
                instruments.
              </p>
            </div>
            <Link to="/elbow-dysplasia" class="btn mb-4">
              LEARN MORE ABOUT CANINE ELBOW DYSPLASIA
            </Link>
            <img
              src="/assets/img/arthroscopy-img-3.jpg"
              alt="Arthroscopy"
              className="img-fluid mb-4"
            />
          </Col>
          <Col md={5} className="d-flex flex-column">
            <div className="mb-4">
              <img
                src="/assets/img/arthroscopy-video-2.jpg"
                alt="Arthroscopy Video"
                className="img-fluid"
              />
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/arthroscopy-video-3.jpg"
                alt="Arthroscopy Video"
                className="img-fluid"
              />
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/arthroscopy-video-4.jpg"
                alt="Arthroscopy Video"
                className="img-fluid"
              />
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/arthroscopy-video-5.jpg"
                alt="Arthroscopy Video"
                className="img-fluid"
              />
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/arthroscopy-video-6.jpg"
                alt="Arthroscopy Video"
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

export default Arthroscopy
