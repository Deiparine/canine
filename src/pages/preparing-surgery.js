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

const PreparingSurgery = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="Contact Colorado Canine Orthopedics" />
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
              <h1>How to Prepare for my Dog's Orthopedic Surgery</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-wrapper py-5"> */}
      <Container className="acl-container my-5">
        <Row className="border-none">
          <Col md={12}>
            <p>
              The day of surgery represents the beginning of your pet's steady,
              comfortable return to a pain free lifestyle. Find answers to the
              variety of questions you may have when preparing for your dog's
              surgery.
            </p>
            <p>
              <span className="text-blue">
                <strong>1. What should I do the night before surgery? </strong>
              </span>
              Feed your pet dinner as usual, but no food after midnight (water
              is o.k. up until the time of surgery). Try not to let the
              scheduled surgery disrupt your pet’s usual routine (i.e. remember
              to let your pet out for his or her usual romp). Please let our
              doctors know the names and dosages of any special medications your
              pet regularly takes. Most medications can be given the night
              before surgery, until midnight. Aspirin should be avoided for one
              week prior to surgery.
            </p>
            <p>
              <span className="text-blue">
                <strong>2. What do I bring to the surgery appointment? </strong>
              </span>
              Please bring any medications your pet is taking and radiographs
              (x-rays) from your family veterinarian, if available. We will
              contact your veterinarian for current blood work. Ideally, a
              complete blood count (CBC) and chemistry panel should be performed
              by your family veterinarian within 6 months of major surgery. If
              necessary, blood work can be performed on the day of surgery at
              our hospital.
            </p>
            <p>
              <span className="text-blue">
                <strong>
                  3. What time should I arrive the day of surgery?
                </strong>
              </span>{" "}
              Some patients may have a consultation on the morning of surgery
              and others will have had a previous consult with surgery being
              scheduled for an upcoming day. Regardless, the exact time for
              arrival will be discussed when your appointment is made. It is
              important that all patients arrive at their appointed time, so we
              can prepare your pet for anesthesia and surgery. During the
              morning hours, between 7:15 am and 10:00 am, we get all of our
              ducks in a row (no pun intended). Blood work is run and/or
              reviewed, IV catheters are placed, pre-medications are calculated
              and administered, etc. Even if a patient is going into surgery at
              3:00 pm, we require their presence in the morning hours.
            </p>
            <img
              src="/assets/img/13.jpg"
              alt="Dog"
              className="img-fluid mb-4"
            />
            <p>
              <span className="text-blue">
                <strong>
                  4. How is the exact time of my pet’s surgery determined?
                </strong>
              </span>{" "}
              We use a number of criteria when making our surgery schedule
              within any given day. Issues such as critical nature of the
              problem and distance the client travels to and from our hospital,
              etc. are considered. In general we strive to provide the best
              surgical care available while trying our best to accommodate each
              client’s needs.
            </p>
            <p>
              <span className="text-blue">
                <strong>
                  5. Will I be able to stay with my pet the day of surgery and
                  when can I take my pet home?
                </strong>
              </span>{" "}
              Because of the effectiveness of epidural analgesia, most patients
              undergoing hind limb surgery can go home the day of surgery. In
              these cases, clients are welcome to stay with their pet prior to
              and following surgery. Many pets love the company of their ‘Moms
              or Dads’. We have many ‘pet lovers’ movies available to relax with
              and promise to keep you supplied with soda, coffee and snacks.
              Internet access is readily available. However, if you plan to stay
              you will probably be with us most or all of the day; please plan
              accordingly. Patients undergoing forelimb procedures usually spend
              one night in ICU following surgery. Parents can stay with their
              pets prior to forelimb surgery if they desire.
            </p>
          </Col>
        </Row>
      </Container>
      <BackToTop />
      {/* </div> */}
    </Layout>
  )
}

export default PreparingSurgery
