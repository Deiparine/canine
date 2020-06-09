import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero-adjusted/hero"
import tploVid from "../images/tplo-vid.png"

import Fig2 from "../images/tplo-fig2.jpg"
import Fig4 from "../images/tplo-fig4.jpg"
import Fig5 from "../images/tplo-fig5.jpg"

import dog from "../images/tplo-dog.jpg"
import telemedicine from "../images/tplo-telemedicine.jpg"
import surgery from "../images/tplo-surgery.jpg"
import video1 from "../images/tplo-how-tplo-works.jpg"
import video2 from "../images/tplo-video-animation.jpg"
import video3 from "../images/tplo-8-weeks.jpg"
import video4 from "../images/tplo-why-us.jpg"

const AboutPage = ({ location }) => (
  <Layout>
    <SEO title="Home" />
    <Hero videoImg={tploVid} pageTitle="TPLO" />
    <div className="page-content">
      <div className="container">
        <div className="mb-5 ">
          <div className="row">
            <div className="col-md-8">
              <h2>
                Tibial Plateau Leveling Osteotomy (TPLO) is the optimal
                treatment for dogs with ACL tears.
              </h2>
              <div className="mb-5  ">
                <h6>Overview</h6>
                <p>
                  Canine ACL tears are by far, the most common small animal
                  orthopedic condition seen in veterinary medicine. Fortunately,
                  it is also one of the most successfully treated conditions in
                  veterinary medicine. In the majority of canine ACL cases, TPLO
                  is the ideal treatment with minimal complications, lowest risk
                  of “breakdown” requiring additional surgery and relative quick
                  return to comfortable, full activity. Thanks to nerve blocks
                  and epidural analgesia, almost all dogs undergoing TPLO at
                  Colorado Canine Orthopedics can safely and comfortably return
                  home the day of surgery. Of course, we have a 24/7 ICU if
                  needed or requested.
                </p>
              </div>
              <div className="mb-5">
                <h6>
                  What procedure would veterinary surgeons choose you their own
                  pet?
                </h6>
                <p>
                  In a recent published survey, by far the majority of
                  board-certified surgeons would choose the TPLO if their own
                  dog had an ACL tear.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <img src={dog} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="mb-5 ">
          <div className="row">
            <div className="col-md-8">
              <div className="mb-5  ">
                <h6>Telemedicine appointments for canine ACL tears and TPLO</h6>
                <p>
                  Colorado Canine Orthopedics is offering telemedicine
                  appointments to discuss ACL tears, the TPLO surgery, aftercare
                  and prognosis. A short cell phone video is helpful during the
                  appointment as are X-rays, if available. We’ll set-up a
                  computer virtual meeting and walk you through each step. It’s
                  easier than you think! One of our experienced board-certified
                  surgeons will evaluate the information, suggest the likely
                  diagnosis and answer any questions you might have regarding
                  canine ACL tears and optimal treatment options. Please call us
                  at 719-264-6666 to schedule your appointment.
                </p>
              </div>
              <div className="mb-5">
                <h6>
                  Consultation, surgery and back home all in the same day.{" "}
                </h6>
                <p>
                  Colorado Canine Orthopedics offers consultation followed by
                  surgery the same day. Patients can undergo an examination and
                  radiographic review, followed by minimally invasive
                  arthroscopy and TPLO surgery (if needed) all in the same day.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <img src={telemedicine} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="mb-5 ">
          <div className="row">
            <div className="col-md-8">
              <div className="mb-5  ">
                <h6>How the TPLO works</h6>
                <p>
                  Tibial plateau leveling osteotomy helps restore joint
                  biomechanics by altering the joint’s “sliding motion” thought
                  to be the underlying cause of canine ACL tears. The downward,
                  backward sliding motion of the femur is eliminated following
                  surgery resulting in joint stability (figure 1).{" "}
                </p>
                <p>
                  The stability is primarily a straight-forward biomechanical
                  effect of the level tibial plateau, however the TPLO also
                  slightly repositions the caudal cruciate ligament, which adds
                  to overall joint stability. Recent biomechanical studies have
                  examined dogs with normal stifle joints, dogs with ACL tears
                  and dogs that have undergone current surgical techniques and
                  found the TPLO is superior in restoring normal joint
                  biomechanics.
                </p>
                <p>
                  A typical TPLO procedure takes an experienced surgeon about
                  one hour. Anesthesia is extremely safe using today’s
                  anesthetic agents, equipment and monitoring devices.
                </p>
                <p>
                  Once the patient is safely anesthetized, nerve blocks are
                  performed effectively numbing the leg for approximately 20
                  hours. Similar blocks are routinely used in human orthopedics.
                </p>
                <p>
                  Prior to surgery, but while under general anesthesia, specific
                  radiographs (X-Rays) are obtained and imported into an
                  orthopedic planning computer program to determine the tibial
                  plateau angle and preoperative planning (figure 2).{" "}
                </p>
                <p>
                  Once in the operating room, an arthroscope is inserted through
                  a several millimeter opening to confirm the diagnosis, debride
                  (clean-up) the torn ligament and inspect the remainder of the
                  joint and treat meniscal pathology (figure 3).
                </p>
                <p>
                  Following arthroscopy, a small surgical approach is made to
                  the top of the tibia and the osteotomy is performed and
                  secured using a specialized titanium bone plate (figure 4 and
                  5).
                </p>
              </div>

              <div className="row">
                <div className="col-6">
                  <figure>
                    <img src={Fig4} alt="" className="w-100 img-fluid" />
                    <figcaption>Figure 4</figcaption>
                  </figure>
                </div>
                <div className="col-6">
                  <figure>
                    <img src={Fig5} alt="" className="w-100 img-fluid" />
                    <figcaption>Figure 5</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img src={video1} className="mb-4 w-100 img-fluid" alt="" />
              <figure className="mb-4">
                <img src={video2} alt="" className="w-100 img-fluid" />
                <figcaption>Figure 1</figcaption>
              </figure>
              <figure className="mb-4">
                <img src={Fig5} alt="" className="w-100 img-fluid" />
                <figcaption>Figure 2</figcaption>
              </figure>
              <figure className="mb-4">
                <img src={surgery} alt="" className="w-100 img-fluid" />
                <figcaption>Figure 3</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
