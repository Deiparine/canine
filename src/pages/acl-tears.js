import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"

// images
import aclTears from "../images/acl-tears/acl-tears.svg"
import aclVid from "../images/acl-tears/acl-vid.png"
import BrownDog from "../images/acl-tears/brown-hairy-dog.png"
import Telemed from "../images/acl-tears/telemed.jpg"
import tibialSloped from "../images/acl-tears/tibial-sloped.jpg"
import slidingRad from "../images/acl-tears/sliding-rad.gif"
import aclVideo1 from "../images/acl-tears/man-carry-puppy.jpg"
import aclVideo2 from "../images/acl-tears/acl-figure-3.jpg"
import aclVideo3 from "../images/acl-tears/acl-figure-4.jpg"
import aclVideo4 from "../images/acl-tears/acl-clinical-signs.jpg"
import aclVideo5 from "../images/acl-tears/acl-sit-test.jpg"
import aclVideo6 from "../images/acl-tears/acl-arthroscopy.jpg"
import aclVideo7 from "../images/acl-tears/acl-tears-treatment.jpg"
import arrowDownCurve from "../images/acl-tears/arrow-down-curve.svg"
import brownDogSitting from "../images/acl-tears/brown-dog-sitting.jpg"
import Arthroscopy from "../images/acl-tears/arthrscopy-set-up.jpg"
import dogWithLeash from "../images/acl-tears/dog-with-leash.jpg"

// import MySwiper from "../components/swiper/swiper

// Reactstrap
import { Container, Row, Col } from "reactstrap"

// images
// import aboutImg from "../images/about-img.png"
// import pawSvg from "../images/dog.svg"
// import curved from "../images/curved.svg"
// import syringes from "../images/syringes.svg"
// import reviewPp from "../images/review-pp-1.jpg"

const Acl = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="ACL Tears" />
      <Hero videoImg={aclVid}>
        <img
          src={aclTears}
          alt="Welcome"
          className="welcome-img "
          styles={{ marginTop: "-5rem", right: "-24em", width: "30em" }}
        />
        <img
          src={aclTears}
          alt="Welcome"
          className="welcome-mobile acl-tears"
        />
      </Hero>
      {/* <div className="about-wrapper py-5"> */}
      <Container className="acl-container my-5">
        <Row className="mb-3 pb-5">
          <Col md={7}>
            <h3 className="mb-5">
              ACL Tears represent the most common orthopedic condition seen in
              dogs.
            </h3>
            <h4>Overview</h4>
            <p>
              Cranial cruciate ligament tears, also known as anterior cruciate
              ligament (ACL) tears, are the most prevalent orthopedic condition
              seen in dogs. The cause of this ever-increasing problem remains
              elusive, although chronic biomechanical wear associated with the
              canine tibial plateau slope seems to be the common denominator.
              Unlike humans, canine ACL tears are typically a chronic
              degenerative process rather than acute traumatic injury. Left
              untreated, canine ACL tears often lead to a high incidence
              opposite side tearing, meniscal pathology and osteoarthritis.
            </p>
            <p>
              All dog breeds develop ACL tears. Limping and sitting to the side
              are the main clinical signs. Tentative diagnosis is based on
              palpation and radiographs. Definitive diagnosis should always be
              confirmed by an arthroscopic examination.
            </p>
          </Col>
          <Col md={5}>
            <img
              src={BrownDog}
              alt="Brown Hairy Dog"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <Row className="my-3 py-5">
          <Col md={7}>
            <h4>Telemedicine appointments for canine ACL tears and TPLO</h4>
            <p>
              Colorado Canine Orthopedics is offering telemedicine appointments
              to discuss ACL tears, the TPLO surgery, aftercare and prognosis. A
              short cell phone video is helpful during the appointment as are
              X-rays, if available. We’ll set-up a computer virtual meeting and
              walk you through each step. It’s easier than you think! One of our
              experienced board-certified surgeons will evaluate the
              information, suggest the likely diagnosis and answer any questions
              you might have regarding canine ACL tears and optimal treatment
              options. Please call us at 719-264-6666 to schedule your
              appointment.
            </p>
          </Col>
          <Col md={5}>
            <img src={Telemed} alt="Telemed" style={{ width: "100%" }} />
          </Col>
        </Row>
        <Row className="my-3 py-5">
          <Col md={7}>
            <h4>How Canine ACL Tears Occur</h4>
            <p>
              Canine ACL tears are the result of chronic biomechanical wear
              rather than acute trauma. Unlike humans, dogs have a sloping
              tibial plateau (figure 1). Because of the canine sloping tibial
              plateau, the femur slides down and back the sloping tibial plateau
              during weight bearing resulting in biomechanical stress and
              ultimately degeneration and tearing of the ACL (figures 2 and 3).
              In dogs, the ACL almost always tears or degenerates gradually over
              time due to this chronic biomechanical stress. This degenerative
              process is well documented via arthroscopy (figure 4).
            </p>
            <div className="d-flex justify-content-between mb-5">
              <img
                src={tibialSloped}
                alt="Tibial Sloped"
                style={{ width: "45%" }}
                className="tibial-sloped"
              />
              <img
                src={slidingRad}
                alt="Sliding Rad"
                style={{ width: "45%" }}
                className="tibial-sloped"
              />
            </div>
          </Col>
          <Col md={5} className="d-flex flex-column justify-content-between">
            <div className="mb-5">
              <img src={aclVideo1} alt="Acl vid 1" style={{ width: "100%" }} />
            </div>
            <div>
              <img src={aclVideo2} alt="Acl vid 2" style={{ width: "100%" }} />
              <p
                className="text-right mt-3"
                style={{ fontFamily: "Caveat", fontSize: 29 }}
              >
                Figure 3
              </p>
            </div>
            <div>
              <img src={aclVideo3} alt="Acl vid 2" style={{ width: "100%" }} />
              <p
                className="text-right mt-3"
                style={{ fontFamily: "Caveat", fontSize: 29 }}
              >
                Figure 4
              </p>
            </div>
          </Col>
        </Row>
        <Row className="my-3 py-5">
          <Col md={7}>
            <h4>Clinical Signs & Diagnosis</h4>
            <p>
              The clinical signs seen in dogs with ACL tears are quite variable,
              from subtle lameness to complete non-weight bearing. Subtle
              lameness and “off-weighting” the leg are often seen early in the
              degenerative, tearing process. However, many dogs have persistent,
              moderate to severe lameness. The degree of lameness is influenced
              by the progressive osteoarthritis seen with ACL pathology, degree
              of tearing and concurrent meniscal tears.
            </p>
            <p>
              Almost all dogs with ACL problems sit to the side, even when
              sitting for a treat. Sometimes the lameness comes on quickly but
              often it’s a gradual progressive problem. It is not uncommon for
              the problem to wax and wane for weeks or even months.
            </p>
            <div className="d-flex">
              <div className="d-flex flex-column justify-content-around">
                <img
                  src={arrowDownCurve}
                  alt="Curved down arrow"
                  style={{ width: "inherit" }}
                />
                <p style={{ fontFamily: "Caveat", fontSize: 29 }}>
                  Almost all dogs with ACL problems sit to the side
                </p>
              </div>
              <div style={{ width: "100%" }}>
                <img
                  src={brownDogSitting}
                  alt="Sitting brown dog"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <p>
              Palpation is accurate in diagnosing canine ACL tears in dogs with
              acute complete tears. However, palpation alone is inaccurate in
              nearly half of all dogs with ACL problems due to gradual,
              incomplete tearing and the ensuing scar tissue that develops as
              the ligament degenerates. The formation of scar tissue is also
              termed “joint fibrosis” and while this tissue does help stabilize
              the joint, it also decreases range of motion an is a source of
              chronic pain.
            </p>
            <p>
              Radiographs (X-Rays) are helpful in ACL tear diagnosis. In some
              cases, the side view x-ray will actually show the displaced femur.
              Other radiographic signs commonly seen in dogs with ACL tears
              include joint effusion and bone spur (osteophyte) formation.
            </p>
            <p>
              Definitive diagnosis of canine ACL tears should be made via an
              arthroscopic examination at the onset of surgery. Arthroscopy is
              extremely accurate and minimally invasive. In our opinion no open
              surgical procedure should be performed prior to obtaining an
              accurate, non-invasive arthroscopic diagnosis.{" "}
            </p>
          </Col>
          <Col md={5} className="d-flex flex-column justify-content-between">
            <div>
              <img src={aclVideo4} alt="Acl vid 1" style={{ width: "100%" }} />
            </div>
            <div className="mt-5">
              <img src={aclVideo5} alt="Acl vid 2" style={{ width: "100%" }} />
            </div>
            <div className="mt-5">
              <img src={aclVideo6} alt="Acl vid 2" style={{ width: "100%" }} />
            </div>
            <div className="mt-5">
              <img
                src={Arthroscopy}
                alt="Arthroscopy"
                style={{ width: "100%" }}
              />
            </div>
          </Col>
        </Row>
        <Row className="my-3 pt-5">
          <Col md={7}>
            <h4>What are the treatment options for dogs with ACL tears?</h4>
            <div>
              <p>
                <b>Tibial Plateau Leveling Osteotomy (TPLO)</b> is by far, the
                technique that the majority of veterinary surgeons agree yields
                the most consistent, long-term positive results in dogs with ACL
                tears. Colorado Canine Orthopedics has performed tens of
                thousands of TPLO surgeries over the past 20 years.
              </p>
              <button type="button" class="btn">
                LEARN MORE ABOUT TPLO
              </button>
            </div>
            <div className="mt-5">
              <p>
                <b>Non-surgical treatments</b> are usually unsuccessful in
                canine ACL tears due to chronic biomechanical stress related to
                the canine stifle (knee) anatomy; specifically, the sloping
                tibial plateau. Custom splinting has been advocated by folks
                that make and market these devises, however, in our opinion (and
                experiences from seeing these patients), this option is
                expensive, frustrating, and ineffective. Furthermore, the
                inability of splinting to provide stability often results in
                subsequent meniscal tearing. Regenerative medicine specifically
                stem cell therapy and platelet rich plasma (PRP) have also been
                used unsuccessfully to treat ACL tears. Colorado Canine
                Orthopedics is a nationally known authority in veterinary
                regenerative medicine and in our opinion the use of these
                treatments are ineffective and lack of scientific supportive
                evidence.
              </p>
            </div>
            <div className="mt-5">
              <p>
                <b>Surgical options</b> are broken down into replacement
                techniques and biomechanical repairs. Fishing line and like
                materials, have been used to replace torn ACLs for decades.
                Newer, more sophisticated materials are currently available but
                consistent long-term security is still questionable. All
                surgeons at CCOR have performed replacement techniques, for one
                reason or another, and in our experience replacement techniques
                often fail. Recent studies have shown replacement techniques do
                not provide adequate joint stability and are the least effective
                surgical method in restoration of normal joint biomechanics.
              </p>
            </div>
            <div className="mt-5 mb-4">
              <p>
                Biomechanical repairs address the underlying biomechanical cause
                of canine ACL tears and the TPLO procedure is the most widely
                performed and accepted. Sophisticated fluoroscopic (video x-ray)
                studies have examined dogs with normal stifle joints, dogs with
                ACL tears and dogs that have undergone current surgical
                techniques and found the TPLO is the best procedure in restoring
                normal joint biomechanics.
              </p>
              <button type="button" class="btn">
                LEARN MORE ABOUT TPLO
              </button>
            </div>
          </Col>
          <Col md={5} className="d-flex flex-column justify-content-between">
            <img src={aclVideo7} alt="Acl vid 1" style={{ width: "100%" }} />
            <img src={dogWithLeash} alt="Acl vid 1" style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
      {/* </div> */}
    </Layout>
  )
}

export default Acl
