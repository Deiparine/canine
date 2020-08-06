import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero-adjusted/hero"
import BackToTop from "../components/back-to-top"

// images
// import Telemed from "../images/acl-tears/telemed.jpg"
// import aclVideo1 from "../images/acl-tears/man-carry-puppy.jpg"
import aclVid from "../images/medial-hero-video.jpg"
// import tplodog from "../images/tplo-dog.jpg"

// import MySwiper from "../components/swiper/swiper

// Reactstrap
import { Container, Row, Col } from "reactstrap"

// images
// import aboutImg from "../images/about-img.png"
// import pawSvg from "../images/dog.svg"
// import curved from "../images/curved.svg"
// import syringes from "../images/syringes.svg"
// import reviewPp from "../images/review-pp-1.jpg"

const MPL = ({ location }) => {
  // console.log(location)
  return (
    <Layout>
      <SEO title="MEDIAL PATELLA LUXATION" />
      <Hero
        videoImg={aclVid}
        pageTitle="MEDIAL PATELLA LUXATION"
        location={location}
      />
      {/* <div className="about-wrapper py-5"> */}
      <Container className="acl-container my-5">
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4>Overview</h4>
            <p>
              Medical patella luxation (MPL) is a common orthopedic disorder in
              small and toy breed dogs. Poodles represent the most common breed
              affected. The word patella is the anatomic term for the kneecap,
              luxation infers “out of position” and the definition of medial is
              “toward the middle”. Less commonly the patella moves (luxates)
              toward the outside which is termed lateral patella luxation.
              Lateral patella luxations and less common, but most prevalent in
              large breed dogs. However, both small and large breeds can develop
              either. Medial and lateral patella luxations usually develop in
              young dogs between six and nine months of age.
            </p>
            <h4 className="border-top pt-4">
              Canine patellar luxations can be categorized from mild to severe
              and graded from 1-4 respectively.
            </h4>
            <ul>
              <li>
                Grade 1 luxations only luxate under digital pressure. These
                patients are usually asymptomatic and usually do not require
                surgery.
              </li>
              <li>
                Grade 2 luxations are the most common grade and are
                characterized by the patellar spontaneously slipping in and out
                of position. Most dogs with grade 2 luxations experience mild to
                moderate lameness and often skip with the leg up for several
                steps when the patellar is out. Then, when the patellar slips
                back into position, the skipping temporarily resolves. Grade 2
                MPLs usually require surgical repair.
              </li>
              <li>
                Grade 3 luxations are always out of position but can be reduced
                by digital pressure. Patients with grade 3 luxations experience
                mild to severe lameness, skip sometimes and almost always
                require surgery.
              </li>
              <li>
                Grade 4 luxations are always out and cannot be reduced by
                digital pressure. Patients with grade 4 luxations usually
                experience severe lameness and require surgical repair.
              </li>
            </ul>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/medial-img.jpg"
                alt="Medial"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Why canine patella luxations occur{" "}
            </h4>
            <p>
              Patella luxations usually occur secondary to hereditary,
              congenital abnormalities in limb alignment and both rear legs are
              affected. In many cases the leg(s) are “bowed” and the groove
              where the patella glides (trochlear groove) is often shallow and
              malaligned. Rarely, trauma causes the patella to luxate.
            </p>
            <h4 className="border-top pt-4">
              Clinical signs of canine patella luxations
            </h4>
            <p>
              Clinical signs of patella luxations are variable and dependent on
              the grade or severity of luxation. Usually, clinical signs become
              apparent prior to one year of age. In mild cases, there are no
              obvious clinical signs. In moderate cases the puppy or dog
              occasionally limps or “skips” and a clicking or popping sound is
              present. The patella can also be felt popping in and out of
              position. In severe cases, “duck walking” and persistent limping
              is present. In some dogs the bow-legged deformity is obvious.
            </p>
            <p>
              Infrequently, dogs live for years with patella luxations without
              clear clinical signs only to develop lameness in later life. In
              this scenario many times an ACL tear is responsible for the late
              onset of lameness. In some patients with late onset of signs,
              severe osteoarthritis secondary to the patella problem is the
              culprit.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/medial-dog-img.jpg"
                alt="Medial Dog"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Diagnosis of canine patella luxations
            </h4>
            <p>
              Diagnosis of patella luxation is primarily based on physical
              examination. Radiographs are helpful, but with grade one and two
              patella luxations the patella may be in the appropriate position
              when the radiograph is snapped, i.e., seeing the patella in
              position on a radiograph does not rule out a patella luxation.
              Arthroscopy may also be useful in patella luxation cases to
              evaluate the cartilage wear and rule out other stifle joint
              disorders such as ACL tears.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/440737233"
                width="100%"
                height="350"
                frameborder="0"
                allowfullscreen
                title="Arthroscopy of Medila Patella Luxation"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Treatment options for canine patella luxations
            </h4>
            <p>
              Treatment options for patella luxations are dependent on the
              underlying anatomic abnormalities leading to the luxation. For
              asymptomatic patients, especially those with grade one luxation,
              surgery may not be needed. Dogs with spontaneously luxating
              patellas, require surgery to resolve clinical signs and prevent
              and minimize the development of osteoarthritis, such as cartilage
              erosion.
            </p>
            <p>
              Typical treatment techniques include releasing one side of the
              joint capsule, tightening the opposite of the joint capsule
              (imbrication), deepening the grove where the patella normally
              glides (trochleoplasty), realigning the attachment point of the
              patella tendon, and in severe cases, straightening the femur (also
              know as distal femoral osteotomy or DFO). In routine cases surgery
              takes less than one hour and virtually all patients can leave the
              hospital the day of surgery.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/440737600"
                width="100%"
                height="350"
                frameborder="0"
                allowfullscreen
                title="trochleoplasty surgery for MPL"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Prognosis, healing and recovery for canine patella luxations
            </h4>
            <p>
              The prognosis for patella luxation repair is excellent in dogs
              with grades 1-3. At Colorado Canine Orthopedics patients can be
              comfortably discharged from the hospital the day of surgery.
              Healing time depends on the age of the patient and procedures
              employed. In puppies healing usually takes about one month. During
              this convalescent period animals can go on short leash walks, do
              lots of lap sitting but should not be permitted to jump from
              furniture or stairs. Following healing the patient can return to a
              normal, fully active lifestyle.
            </p>
            <h4 className="border-top pt-4">
              Cost of patella surgery at Colorado Canine Orthopedics
            </h4>
            <p>
              The average cost of patella surgery at Colorado Canine Orthopedics
              is $2.180 - $2,980 depending on the size of the patient. Fees for
              dogs with grade four patella luxations requiring femoral
              straightening are determined on a case by case basis.
            </p>
            <p>About Our Fees:</p>
            <ul>
              <li>
                All surgery fees include pre-surgical x-rays, anesthesia and
                monitoring, nerve block or epidural, implants, post-operative
                x-rays and routine go home medications.{" "}
              </li>
              <li>
                Consultation, pre-operative bloodwork and four and eight and
                week post- operative x-rays are not included.{" "}
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
            <div className="mb-4">
              <img
                src="/assets/img/medial-dog2-img.jpg"
                alt="Medial Dog"
                className="img-fluid"
              />
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/medial-dog3-img.jpg"
                alt="Medial Dog"
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

export default MPL
