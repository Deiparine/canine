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

const Fractures = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="FRACTUERS & DISLOCATIONS" />
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
              <h1>
                FRACTUERS &<br />
                DISLOCATIONS
              </h1>
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
              The word fracture as used in orthopedic surgery, essentially means
              “broken bone”. The word fracture does not imply the severity or
              lack of severity of the break. The most common cause of fractures
              in small animals involves some form of trauma such as being hit by
              an automobile. Virtually all bones are susceptible to fracture,
              but fractures of the long, weight bearing bones (humerus, radius,
              femur and tibia) and pelvis are most common. Simple non-displaced
              fractures can be repaired by external coaptation (splints and
              casts). Complicated and displaced fractures usually require some
              form of internal fixation such as plates, rods, nails, pins,
              wires, and screws for stabilization.
            </p>
            <p>
              The most important aspect of fracture management is to be certain
              no life threatening problems exist. Fractures, in and of
              themselves, are almost never life threatening but concurrent
              thoracic and abdominal trauma may be. Animals that have sustained
              major trauma should be taken to a general veterinarian or an
              emergency clinic immediately following trauma. Once the patient is
              stable and internal injuries have been ruled out or addressed,
              fracture repair options should be considered.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/fracture-img.jpg"
                alt="Arthroscopy"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">Fracture classification</h4>
            <p>
              Fractures are classified by what bone is involved (example:
              femur), location of fracture (example: mid-shaft), morphology or
              configuration (example: spiral), multi-fragments (example:
              comminuted), if the skin has been penetrated (example: open) and
              joint involvement (intra-articular). An additional classification
              system is present for juvenile fractures involving the growth
              plates (physes). Moreover, complex classification systems exist
              for specific joint involvement and for open fractures. Fracture
              classification is useful in communication, fracture planning and
              prognosis.
            </p>
            <h4
              className="border-top pt-4"
              style={{ borderTop: `1px solid #dedede` }}
            >
              Diagnosis of fractures
            </h4>
            <p>
              The diagnoses of fractures are based on physical examination
              followed by radiographs (X-Rays). In some instances, a CT scan is
              indicated to identify all fracture fragments. CT scans are
              especially helpful in complicated pelvic fractures and fractures
              involving joints.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/fracture-img-2.jpg"
                alt="Arthroscopy Video"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Treatment options for fracture repair
            </h4>
            <p>
              Of course, the first question regarding fracture repair is does
              the patient require surgery or can the case be well managed with
              splints, casts and confinement. Non-displaced fractures,
              especially in young animals are often amendable to external
              support, also known as external coaptation (splints and casts).
              External coaptation has pros and cons like any treatment option.
              The pros are the patient avoids surgery and the initial cost is
              much less. The cons are splint management, fracture displacement
              and non-unions. Splints and cast are virtually always problematic
              in one way or another. Slippage, cast sores, vascular compromise
              and soiling are the most common problems. Splints and casts must
              be kept clean and dry and should be changed weekly or every-other
              week. Animals wearing splints or casts require confinement and
              Elizabethan collars should be used for the duration of healing
              (2-3 months on average). That said, there are situation where
              external coaptation is the best option, but it should not be
              looked at as an “easy fix”.
            </p>
            <p>
              Displaced fractures and those involving joints usually require
              internal fixation. Long bone fractures involving the weight
              bearing bones of the front or hind limbs, are typically repaired
              using bone plates, intramedullary nails, pins and wires and/or
              external fixators.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/fracture-img-3.jpg"
                alt="Arthroscopy"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5">
          <Col md={7}>
            <h4 className="pt-4">Plate and screw fixation for title</h4>
            <p>
              Plate and screw fixation are arguably the most common form of
              fracture repair utilized in small animal orthopedics. Plates used
              for stabilizing fractures are made of surgical stainless steel or
              titanium and are fixated internally and held in place with bone
              screws. Newer plate technology involves locking screws that thread
              into both the bone and plates resulting in greater stability and
              shorter healing times. Plates come in a plethora of sizes both in
              thickness and length (figure 1). Figures 2-4 are examples of plate
              fixation. It is not uncommon to utilize individual bone screws in
              conjunction with plates.
            </p>
            <img
              src="/assets/img/fracture-img-4.jpg"
              alt="Arthroscopy"
              className="img-fluid"
            />
          </Col>
          <Col md={5} className="d-flex flex-column">
            <div className="mb-4">
              <img
                src="/assets/img/fracture-img-6.jpg"
                alt="Arthroscopy Video"
                className="img-fluid"
              />
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/fracture-img-7.jpg"
                alt="Arthroscopy Video"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="pt-4">
              Interlocking, intramedullary (IM) nail fixation
            </h4>
            <p>
              Interlocking, intramedullary (IM) nailing is another established
              method used to align and stabilize canine fractures (figure 1).
              Unlike old style IM pins, threaded bolts are placed through holes
              in the ends of nails to provide rotational stability. This level
              of strength and stability are not possible with IM pins alone.
              Nails are inserted into the central canal of long bones of the
              extremities (e.g. femur, humerus, tibia).
            </p>
            <p>
              This system offers superior stability for highly comminuted (many
              pieces) long bone fractures as well as enabling the practice of
              biological repair (preserving fracture hematoma).{" "}
            </p>
            <img
              src="/assets/img/fracture-img-8.jpg"
              alt="Arthroscopy"
              className="img-fluid"
            />
          </Col>
          <Col md={5} className="d-flex flex-column">
            <div className="mb-4">
              <img
                src="/assets/img/fracture-img-9.jpg"
                alt="Arthroscopy Video"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5">
          <Col md={7}>
            <h4 className="border-top pt-4">External skeletal fixation</h4>
            <p>
              External skeletal fixation has been available to veterinarians for
              many years (figure 1). There has been a recent resurgence in the
              use of these devices, as surgeons are finding that minimally
              invasive reduction of bone fragments combined with rigid fixation
              provides a more biologic method of fixation for many fractures.
              External skeletal fixation is also used in conjunction with other
              repair methods such as IM pinning.
            </p>
            <img
              src="/assets/img/fracture-img-10.jpg"
              alt="Arthroscopy"
              className="img-fluid mb-4"
            />
            <p>
              External skeletal fixation involves pins placed percutaneously
              (through the skin), proximal and distal (above and below) to the
              fracture fragments and connected to an external frame. External
              skeletal fixation can be use for various types of fractures and is
              often used for complex procedures such as angular limb deformity
              and elbow incongruency correction and distraction osteosynthesis
              (figures 2 and 3).
            </p>
            <img
              src="/assets/img/fracture-img-12.jpg"
              alt="Arthroscopy"
              className="img-fluid"
            />
          </Col>
          <Col md={5} className="d-flex flex-column">
            <div className="mb-4">
              <img
                src="/assets/img/fracture-img-11.jpg"
                alt="Arthroscopy Video"
                className="img-fluid"
              />
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/fracture-img-13.jpg"
                alt="Arthroscopy Video"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="p pt-5">
              Recovery and prognosis following fracture repair
            </h4>
            <p>
              Recovery, prognosis and timeframe of healing following fracture
              repair is quite variable depending on the type of fracture and age
              of the patient. On average, fracture healing progresses gradually
              over a two to four-month period. During this postoperative period
              patient activity should be limited. Again, the degree of
              restrictions depends upon the fracture and fracture repair.
            </p>
          </Col>
          <Col md={5} className="d-flex flex-column">
            <div>
              <img
                src="/assets/img/fracture-img-14.jpg"
                alt="Arthroscopy Video"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">Joint dislocations</h4>
            <p>
              Joint dislocations, also called luxations, are common in
              veterinary orthopedics. Trauma is almost always the culprit
              although congenital patella luxations and congenital shoulder
              luxations in toy breed dogs are the exceptions.
            </p>
            <p>
              In the front limb elbow, luxations are most common but shoulder
              and carpal (wrist) joints also occur. In the hind limb, hip
              luxations are by far the most common but again, stifle (knee) and
              tarsal (ankle) joint luxations also occur. The diagnosis is based
              on physical examination and radiographs (X-rays). Treatment
              options are quiet variable depending on joint involved. Closed,
              non-surgical reduction is possible for some luxations.
            </p>
            <p>
              Hip or coxofemoral, luxations represent the most common canine
              joint luxation. Some are amendable to closed, non-surgical
              reduction, however recurrence is common. Surgical treatment is
              indicated in dogs with abnormal hip confirmation (hip dysplasia),
              in situations where a small bone fragments breaks off at the time
              of luxation and if closed, non-surgical treatment has failed
              either immediately or weeks later. In dogs with normal hip
              confirmation, open reductions and stabilization using an
              “artificial” ligament and toggle pin technique is indicated and
              carries a very good prognosis. In large breed dogs with abnormal
              hip confirmation, total hip replacement is the ideal treatment
              option with an excellent prognosis. In small breed dogs and cats,
              good to excellent results can be achieved by removing the femoral
              head (femoral head ostectomy or FHO).
            </p>
          </Col>
          <Col md={5} className="d-flex flex-column">
            <div className="mb-4">
              <img
                src="/assets/img/fracture-img-15.jpg"
                alt="Arthroscopy Video"
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="/assets/img/fracture-img-15.jpg"
                alt="Arthroscopy Video"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Prices for fracture fixation and joint dislocations are variable
              based on type of injury and procedure required for repair
            </h4>
            <p>
              Costs for fracture repair and joint luxations vary depending on
              the extent of the injury and the surgical procedure required. We
              will provide information about costs for your dog’s case at your
              consultation. Please feel free to contact us with questions.
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
                src="/assets/img/fracture-img-16.jpg"
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

export default Fractures
