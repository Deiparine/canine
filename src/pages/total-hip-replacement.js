import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero-adjusted/hero"

// images
import Telemed from "../images/acl-tears/telemed.jpg"
import aclVideo1 from "../images/acl-tears/man-carry-puppy.jpg"
import aclVid from "../images/thr-hero.jpg"
import tplodog from "../images/tplo-dog.jpg"

// import MySwiper from "../components/swiper/swiper

// Reactstrap
import { Container, Row, Col } from "reactstrap"

// images
// import aboutImg from "../images/about-img.png"
// import pawSvg from "../images/dog.svg"
// import curved from "../images/curved.svg"
// import syringes from "../images/syringes.svg"
// import reviewPp from "../images/review-pp-1.jpg"

const THR = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="TOTAL HIP REPLACEMENT" />
      <Hero videoImg={aclVid} pageTitle="TOTAL HIP REPLACEMENT" />
      {/* <div className="about-wrapper py-5"> */}
      <Container className="innerpage-container my-5">
        <Row className="mb-3 pb-5">
          <Col md={7}>
            <h3 className="mb-5">Canine Total Hip Replacement (THR)</h3>
            <h4>Overview</h4>
            <p>
              Canine total hip replacement (THR) is one of the most successful
              and gratifying orthopedic procedures for the patient and owner.
              The majority of dog’s (greater than 90%) with current hip
              replacements are completely painfree, have no exercise
              restrictions and live a full active life.
            </p>
          </Col>
          <Col md={5}>
            <img
              src="/assets/img/misc-img.jpg"
              alt="Misc Image"
              className="img-fluid mb-4"
            />
          </Col>
        </Row>
        <Row className="my-3 py-5">
          <Col md={7}>
            <h4>
              Telemedicine appointments for canine hip dysplasia and total hip
              replacement
            </h4>
            <p>
              Colorado Canine Orthopedics is offering telemedicine appointments
              to discuss canine hip dysplasia, treatment options and prognosis.
              Previous radiographs are needed for this type of appointment. A
              short cell phone video is helpful as well. We’ll set-up a computer
              virtual meeting and walk you through each step. It’s easier than
              you think! One of our experienced boardcertified surgeons will
              evaluate the information, suggest the likely diagnosis and answer
              any questions you might have regarding canine hip dysplasia and
              optimal treatment options. Please call us at 719-264-6666 to
              schedule your appointment.
            </p>
            <h4 className="border-top pt-4">
              Consultation, surgery and back home all in the same day
            </h4>
            <p>
              Colorado Canine Orthopedics also offers in-house consultation
              followed by surgery the same day for out of town clients. Patients
              can undergo an examination and radiographic review, followed
              surgery all in the same day.
            </p>
            <h4 className="border-top pt-4">
              Components and surgical procedure
            </h4>
            <p>
              Four components make up a canine THR; stem, cup, head and neck
              (figure 1). Each component comes in numerous sizes that can be
              mixed and matched to fit each individual patient.
            </p>
            <img
              src="/assets/img/total-hip.jpg"
              alt="Misc Image"
              className="img-fluid mb-4"
            />
            <p>
              The titanium components are coated with hydroxyapatite to
              encourage bone ingrowth (figure 2). Once each component is
              implanted, the ball is positioned within the cup (figure 3). Bone
              integration takes one to two months resulting in permanent
              stability. This bone ingrowth technology is like that seen in
              humane orthopedics and human dental implants.
            </p>
            <img
              src="/assets/img/total-hip-1.jpg"
              alt="Misc Image"
              className="img-fluid mb-4"
            />
            <p>
              The surgical procedure takes between one to three hours. Patients
              are under general anesthesia but also receive an epidural for
              post-operative comfort. Preoperative radiographs are imported into
              an orthopedic planning software program to help determine size and
              placement. Following surgery postoperative radiographs are
              obtained to insure proper implant placement (figure 4).
            </p>
          </Col>
          <Col md={5}>
            <img
              src="/assets/img/tplo-telemedicine.jpg"
              alt="Misc Image"
              className="img-fluid mb-4"
            />
            <img
              src="/assets/img/misc-img-big.jpg"
              alt="Misc Image"
              className="img-fluid mb-4"
            />
            <img
              src="/assets/img/total-hip-2.jpg"
              alt="Misc Image"
              className="img-fluid mb-4"
            />
          </Col>
        </Row>
        <Row className="my-3 py-5">
          <Col md={7}>
            <h4>Prognosis, healing and recovery</h4>
            <p>
              Overall, dogs undergoing total hip replacements have an excellent
              prognosis and return to full unrestricted activity. At Colorado
              Canine Orthopedics, virtually all animals undergoing total hip
              replacement wake up pain-free thanks to epidural analgesia and can
              comfortably walk out of the hospital the day of surgery. Weight
              bearing is permitted immediately. Most dogs start using the leg
              within 24 hours of surgery. Icing is helpful for a few days
              following surgery.
            </p>
            <p>
              In the days and weeks following total hip replacement surgery,
              most dogs are very comfortable. The surgeons at Colorado Canine
              Orthopedics find total hip patients to be more comfortable
              following surgery than almost any other major orthopedic
              procedure. Not to mention, most patients quickly find relief from
              the previous pain associated chronic hip osteoarthritis.
            </p>

            <p>
              Postoperative restrictions include in house confinement with short
              leash walks initially, progressing to longer and longer walks as
              weeks go by. Stairs are usually permitted with supervision. Off
              leash outdoor activity and excessive rough housing should be
              avoided for about 8 weeks.
            </p>

            <p>
              The skin incision heals in about 10-14 days, but bone integration
              with the implants takes one to two months. Once healed, nearly all
              dogs return to full function.
            </p>
            <p>
              As with any major orthopedic surgical procedure some complication
              risks exist. Approximately 5% of patients experience a short-term
              complication within the first four weeks following surgery. An
              example is hip luxation where the head slips out of the socket.
              Most of these complications are successfully managed but often
              require a second procedure. Approximately 5% of implants loosen
              and require replacement during the lifespan of the patient. Please
              be certain to discuss these potential complications with your
              surgeon prior to surgery. Despite complications, over 90% of dogs
              enjoy a lifetime normal, pain-free activity.
            </p>
          </Col>
          <Col md={5}>
            <img
              src="/assets/img/total-hip-video.jpg"
              alt="Misc Image"
              className="img-fluid mb-4"
            />
            <img
              src="/assets/img/total-hip-video-1.jpg"
              alt="Misc Image"
              className="img-fluid mb-4"
            />
          </Col>
        </Row>
        <Row className="my-3 py-5">
          <Col md={7}>
            <h4>Why Choose Colorado Canine Orthopedics?</h4>
            <ul>
              <li>
                Our surgeons have performed thousands of total hip replacements
                (THR) surgeries over the past 20 years and arguably perform more
                THRs than anyone in the United States.
              </li>
              <li>
                Colorado Canine Orthopedics is the only canine orthopedic
                specific practice in this region of the country.
              </li>
              <li>All of our surgeons are board certified.</li>
              <li>Our patients are able to go home the day of surgery.</li>
              <li>Our prices are extremely competitive.</li>
            </ul>
            <h4 className="border-top pt-4">
              Cost of Canine Total Hip Replacement
            </h4>
            <p>
              Veterinary specialty care is a double-edged sword these days (no
              pun intended). All major orthopedic procedures are more
              sophisticated, successful, and less invasive today than they were
              in the past. These advances come at a cost for the surgeon and
              client.
            </p>
            <p>
              The average cost of Total Hip Replacement at Colorado Canine
              Orthopedics is $5,580 - $6,500 depending on the patient’s size.
              Total hip replacements remain one of the most successful, but
              highest cost and lowest profit margin procedures performed at CCO.
              The implants alone are quite expensive.
            </p>
            <p>
              <strong>About Hip Surgery Fees:</strong>
            </p>
            <ul>
              <li>
                Fees includes pre-surgical x-rays, anesthesia and monitoring,
                nerve blocks or epidural, implants, post-operative x-rays and
                routine go home medications.
              </li>
              <li>
                Consultation, pre-operative bloodwork and post-operative x-rays
                (4 and 8 weeks) are not included.
              </li>
            </ul>

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
          <Col md={5}>
            <img
              src="/assets/img/misc-img.jpg"
              alt="Misc Image"
              className="img-fluid mb-4"
            />
            <img
              src="/assets/img/misc-img-big.jpg"
              alt="Misc Image"
              className="img-fluid mb-4"
            />
          </Col>
        </Row>
      </Container>
      {/* </div> */}
    </Layout>
  )
}

export default THR
