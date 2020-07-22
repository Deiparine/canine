import React from "react"
// import { Link } from "gatsby"

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

const Disc = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="DISC" />
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
            <div class="inner-page-title text-center disc-hero">
              <h1>DISC</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-wrapper py-5"> */}
      <Container className="acl-container my-5">
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h3 className="mb-4">
              Canine Intervertebral Disc (or Disk) Disease
            </h3>
            <h4>Overview</h4>
            <p>
              Canine intervertebral disc disease (IVDD) involves degeneration of
              the intervertebral discs that often leads to disc herniation
              resulting in spinal cord or spinal nerve compression. The syndrome
              can affect all breeds but toy breed dogs such as dachshunds,
              poodles, Pekingese, etc. are more commonly affected. Clinical
              signs range from intermittent pain to complete paralysis.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/disc-img.jpg"
                alt="Disc Image"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">Anatomy</h4>
            <p>
              The spine is made up of block bones called vertebrae. Dogs have
              seven cervical (neck), thirteen thoracic (chest), seven lumbar
              (back), three fused sacral (tail bone) and a variable number of
              tail vertebrae. Each vertebra is made up of a body, the lamina,
              which houses the spinal cord, and the facets that are partially
              responsible for the connection from one vertebra to the next.
            </p>
            <p>
              Intervertebral discs are situated between each vertebra and in
              dogs and cats the disc sits just beneath, or ventral to, the
              spinal canal (figure 1). The discs are comprised of a fibrous
              outer ring called the annulus fibrosis and an inner gel called the
              nucleus pulposus and act as both connectors and shock absorbers
              between each vertebra.
            </p>
            <p>
              Canine intervertebral disc disease manifests by two different
              pathologic processes classified as Hansen type one, Hansen type
              two and less commonly, Hansen type three. In toy breed dogs the
              discs degenerate and dehydrate (Hansen type one). This process can
              begin as early as one year of age. As discs lose resiliency and
              the outer layers weakens, the inner nucleus pulposus is at risk to
              displace upward (herniate) resulting in spinal cord trauma and
              compression (figure 2). The herniation often involves a rapid
              burst of disc material causing acute pain or paralysis. In large
              breed dogs the pathologic process involves cycles of gradual break
              down, followed by fibrous repair resulting in disc bulging and
              insidious or slow onset of clinical signs (Hansen type two).
              Colorado Canine Orthopedics’ surgeons focus on toy breed dogs and
              the following discussion refer specifically to Hansen type one
              disc disease. Disc herniations can also be classified according to
              location: cervical (neck), thoracolumbar (mid-back) or
              lumbo-sacral (lower back).
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/disc-img-1.jpg"
                alt="Disc Video"
                className="img-fluid"
              />
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/disc-img-2.jpg"
                alt="Disc Video"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">Cervical disc disease</h4>
            <h5>Clinical signs of cervical IVDD</h5>
            <p>
              Clinical signs associated with Hansen type one (small breed)
              cervical IVDD vary depending the exact location and force of the
              disc herniation and the amount of material herniated. Often the
              clinical signs appear suddenly and include neck pain, crying out
              when moving or being picked up, and an extremely stiff neck. The
              head is often held in a downward position and a front limb
              lameness may be present. Tetraparesis (stumbling on all four
              limbs) is possible but uncommon. Dogs with cervical IVDD are
              almost always ambulatory (walking).
            </p>
            <h5>Diagnosis of cervical IVDD</h5>
            <p>
              Numerous imaging modalities can be used to diagnose cervical IVDD.
              Plain radiographs (X-rays) are a useful screening tool but usually
              are not accurate in obtaining a conclusive diagnosis. Computerized
              tomography (CT) is quite accurate in diagnosing cervical IVDD in
              small breed dogs (figure 1). Contrast media is often used in
              conjunction with CT imaging. Magnetic resonance imaging (MRI) is
              also used to diagnose canine spinal disorders but is most
              applicable in large breed dogs, lumbosacral IVDD and neoplasia.
            </p>
            <h5>Treatment options for cervical IVDD </h5>
            <p>
              The treatment options for cervical IVDD are variable depending on
              the severity of the clinical signs, duration of clinical signs and
              number of recurrences. Dogs with mild neck pain should be treated
              conservatively with cage confinement, acupuncture, possibly
              corticosteroids and pain medications as needed. In cases where the
              pain is severe and/or neurologic deficits, are present such as
              stumbling while walking, surgical decompression is recommended. In
              cases of multiple recurrences, surgery is also recommended.
            </p>
            <p>
              Surgery involves making a small opening through the ventral
              (underside) aspect of the vertebra allowing access to the spinal
              canal and herniated disc. The actual name of the procedure is
              ventral slot. Most animals spend one night in ICU and are able go
              home the following day.
            </p>
            <h5>Recovery and prognosis for cervical IVDD surgery </h5>
            <p>
              The day following surgery most patients are comfortable and able
              to return home. Crate confinement with occasional short leash
              walks is recommended for the first several weeks following surgery
              (lap sitting is encouraged). Most dogs can return to full function
              after 4 weeks.
            </p>
            <p>
              Overall the prognosis is excellent following surgery. Additional
              subsequent disc herniations are possible and studies suggest the
              probability is about 15%.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/disc-img-3.jpg"
                alt="Disc Image"
                className="img-fluid"
              />
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/disc-img-4.jpg"
                alt="Disc Image"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">Thoracolumbar disc disease</h4>
            <h5>Clinical signs of thoracolumbar (mid-back) IVDD</h5>
            <p>
              Clinical signs of thoracolumbar (mid-back) intervertebral IVDD
              range from pain to complete paralysis and often develop rapidly.
              In mild cases, dogs have back pain only. In more advanced cases,
              the patient is ambulatory but staggers on the rear limbs. In more
              severe cases, paraplegia (inability to use the rear limbs) is
              present. In the most severe cases paraplegia is present and deep
              pain sensation is lost. It is not uncommon for the clinical signs
              to progress from pain only, to paraplegia over 12-24 hours.
            </p>
            <h5>Diagnosis of thoracolumbar IVDD </h5>
            <p>
              Numerous imaging modalities can be used to diagnose thoracolumbar
              IVDD. Plain radiographs (X-rays) are a useful screening tool but
              usually are not accurate in obtaining a conclusive diagnosis.
              Computerized tomography (CT) is quite accurate in diagnosing
              thoracolumbar IVDD in small breed dogs (figures 1 and 2). Contrast
              media is often used in conjunction with CT imaging. Magnetic
              resonance imaging (MRI) is also used to diagnose canine spinal
              disorders but is most applicable in large breed dogs, lumbosacral
              IVDD and neoplasia.
            </p>
            <h5>Treatment options of thoracolumbar IVDD </h5>
            <p>
              The treatment options for thoracolumbar IVDD are variable
              depending on the severity and duration of the clinical signs. Dogs
              with back pain only, should be treated conservatively with cage
              confinement, acupuncture, possibly corticosteroids and pain
              medications as needed. These patients should be closely monitored
              for progression of clinical signs. In cases where neurologic
              deficits are present, such as stumbling while walking the decision
              between conservative management and surgical intervention become
              somewhat opiniated and vague. If clinical signs are rapidly
              deteriorating, for example going from pain only to stumbling
              (paresis) over several hours, surgical decompression should be
              considered. In animals unable to walk, surgery is recommended
              within 12-24 hours.
            </p>
            <p>
              Surgery involves a small surgical approach to spine followed by
              burring away the lamina (side portion of the vertebra), thereby
              exposing the spinal cord and herniated disc material. The material
              is gently removed from the spinal canal. The procedure is called a
              hemilaminectomy. Most animals spend one night in ICU and are able
              go home the following day.{" "}
            </p>
            <h5>Recovery and prognosis </h5>
            <p>
              The day following surgery most patients are comfortable and able
              to return home. A urinary catheter is typically left in place for
              5-7 days. Crate confinement is recommended for the first several
              weeks following surgery (lap sitting is encouraged). Use of the
              hind limbs is often present after two weeks although the return to
              functional walking may take up to 4 weeks. Most dogs can return to
              full function after about 6-8 weeks.
            </p>
            <p>
              The prognosis for non-ambulatory, deep pain present dogs with
              thoracolumbar IVDD is excellent. In a series of 50 surgical cases
              followed at Colorado Canine Orthopedics, 98% of dogs that had deep
              pain sensation at the time of surgery returned to walking. Dogs
              that have lost deep pain sensation have a less favorable
              prognosis, and although the exact percentage if not well
              established, approximately 50 percent of return to some level of
              functional walking. Additional subsequent disc herniations are
              possible and studies suggest the probability is about 15%.{" "}
            </p>
          </Col>
          <Col md={5} className="d-flex flex-column">
            <div className="mb-4">
              <img
                src="/assets/img/disc-img-5.jpg"
                alt="Disc Video"
                className="img-fluid"
              />
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/disc-img-6.jpg"
                alt="Disc Video"
                className="img-fluid"
              />
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/disc-img-7.jpg"
                alt="Disc Video"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">Costs for IVDD surgery</h4>

            <p>
              The surgical costs for small breed IVDD surgery is $3800.00
              including imaging, surgery, overnight in ICU, go home medications
              and rechecks.
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
                src="/assets/img/disc-video.jpg"
                alt="Disc Video"
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

export default Disc
