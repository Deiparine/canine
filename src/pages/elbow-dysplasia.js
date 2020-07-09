import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero-adjusted/hero"

// images
import Telemed from "../images/acl-tears/telemed.jpg"
import aclVideo1 from "../images/acl-tears/man-carry-puppy.jpg"
import aclVid from "../images/elbow/elbow-video-header.png"
import tplodog from "../images/tplo-dog.jpg"
import elbowmiscimg from "../images/elbow/elbow-misc-img.png"
import elbowvideoheader from "../images/elbow/elbow-video-header.png"
import elbowvideo from "../images/elbow/elbow-video.png"
import elbowvideo1 from "../images/elbow/elbow-video-1.png"
import elbowvideo2 from "../images/elbow/elbow-video-2.png"
import elbowvideo3 from "../images/elbow/elbow-video-3.png"
import elbowvideo4 from "../images/elbow/elbow-video-4.png"
import elbowvideo5 from "../images/elbow/elbow-video-5.png"

// import MySwiper from "../components/swiper/swiper

// Reactstrap
import { Container, Row, Col } from "reactstrap"

// images
// import aboutImg from "../images/about-img.png"
// import pawSvg from "../images/dog.svg"
// import curved from "../images/curved.svg"
// import syringes from "../images/syringes.svg"
// import reviewPp from "../images/review-pp-1.jpg"

const Elbow = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="Elbow Dysplasia" />
      <Hero videoImg={aclVid} pageTitle="Elbow Dysplasia" />
      {/* <div className="about-wrapper py-5"> */}
      <Container className="acl-container my-5">
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4>Overview</h4>
            <p>
              Canine elbow dysplasia is a common disorder and has been shown to
              be more prevalent than hip dysplasia in some breeds. Labrador
              Retriever, Golden Retriever, Bernese Mountain, German Shepherd,
              Newfoundland and Rottweiler are breeds that are over-predisposed.
              The problem is a congenital, hereditary disease affecting young
              dogs, usually under one year of age. Elbow dysplasia is a complex
              problem with numerous “sub-set” pathologies but in the most
              simplistic terms it involves malalignment of the bones of the
              elbow joint also called joint incongruency. This mal-alignment
              causes abnormal pressure or joint loading, and chronic rubbing
              which wears away the cartilage resulting in severe osteoarthritis.
            </p>
            <p>
              Elbow dysplasia can be broken down into numerous underlying
              pathologies such as fragmented medial coronoid process,
              osteochondritis dissecans and medial compartment syndrome just to
              name a few. Definitive diagnosis is made via CT scanning and
              arthroscopic examination. Some cases can be treated entirely with
              arthroscopic procedures.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src={elbowmiscimg}
                alt="Elbow Misc Image"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Clinical signs of elbow dysplasia
            </h4>
            <p>
              The primary clinical sign of canine elbow dysplasia is limping or
              lameness. Head bobbing at a fast walk or slow trot is typical of
              front limb lameness. The lameness is usually not recognizable at a
              run. Some dogs with elbow dysplasia are reluctant to go for long
              walks or play for long periods of time. Dogs with elbow dysplasia
              also have limited range of motion (ROM) in the elbow joints and
              have pain on elbow extension and flexion. The limited ROM may
              cause discomfort and difficulty when lying down in sternal
              position.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src={elbowvideo}
                alt="Elbow Video"
                class=" mb-5"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">Diagnosis of elbow dysplasia</h4>
            <p>
              The diagnosis of canine elbow dysplasia is based on physical
              examination, radiographs (X-rays), computerized tomography (CT
              Scan) and ultimately arthroscopy. The surgeons at CCOR can make a
              fairly accurate diagnosis of elbow dysplasia and discuss the next
              steps based on physical examination and simple X-rays alone. CT
              scanning is often needed for the ultimate, final treatment plan.
              Arthroscopy is used both as a diagnostic tool and to treat elbow
              dysplasia.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img src={elbowvideo1} alt="Elbow Video" className="img-fluid" />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Treatment options for elbow dysplasia
            </h4>
            <p>
              The treatment options for canine elbow dysplasia depend on the
              actual definitive diagnosis. Non-surgical treatments include pain
              management, physical therapy, nutraceuticals such as glucosamine,
              and various intra-articular injections. All of these options may
              be indicated in older dogs, or in conjunction with arthroscopic
              treatments, but none of the above listed treatments address the
              underlying problem. A common misconception regarding joint
              injections (stem cells, PRP, etc.) and oral or injectable
              nutraceuticals is that they promote cartilage regrowth or repair,
              and this is simply not true.
            </p>
            <p>
              Intra-articular injections (joint injections) are commonly
              performed but with somewhat variable clinical results. Stem cells,
              platelet rich plasma (PRP), hyaluronic acid (HA) and
              glucocorticoid steroids are the typical products injected. Recent
              studies have shown clinical improvement in some dogs with elbow
              dysplasia treated with PRP. The duration of improvement is
              currently unknown, but a best guess would be 6 months. Colorado
              Canine Orthopedics has extensive experience with intra-articular
              joint injections and we would be happy to discuss the pros and
              cons of joint injections for individual patients.
            </p>
            <p>
              Surgical treatment options can be broken down into arthroscopic
              treatments, osteotomies (bone cuts) to realign the bones, or a
              combination of both. Virtually all board certified surgeons agree
              that dogs with elbow dysplasia require a thorough arthroscopic
              examination both to evaluate pathology and provide treatment.
              Arthroscopy is typically performed under general anthesis and
              involves a small “poke hole” into the joint. The arthroscope
              (usually 2-3 mm in diameter) is passed through the opening and
              into the joint. Joint visualization via magnified arthroscopy is
              incredibly thorough comparted to open joint inspection which is
              minimal at best. Bone and cartilage fragments and other joint
              debris can be identified and removed via arthroscopy. Joint
              surfaces can also be debrided or “cleaned up” using small electric
              shavers and handheld instruments.
            </p>
            <p>
              Dogs undergoing arthroscopic elbow surgery have a fair to
              excellent prognosis depending on the exact diagnosis, degree of
              incongruency and existing osteoarthritis (OA). Nearly all surgeons
              agree our best defense against progressive OA is to obtain an
              accurate diagnosis (CT and arthroscopic examination), remove any
              free fragments and minimize abnormal joint contact. Overall, the
              majority of dogs with elbow problems lead a fairly normal life
              although some degree of OA is inevitable.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src={elbowmiscimg}
                alt="Elbow Misc Image"
                className="img-fluid"
              />
            </div>
            <div className="mb-4">
              <img
                src={elbowmiscimg}
                alt="Elbow Misc Image"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Fragmented medial coronoid process
            </h4>
            <p>
              Fragmented coronoid process is a subset of elbow dysplasia that
              affects large and giant breed dogs, particularly Retrievers,
              Rottweilers, Mastiffs, Bernese Mountain dogs, and German Shepherd
              dogs. Malalignment and overloading of the medial (innermost aspect
              of the joint) compartment are believed to be key in this
              pathology. Loading or abnormal weight bearing on the medial
              compartment leads to concurrent cartilage erosions (often full
              thickness) and possible fragmentation of the medial coronoid.
            </p>
            <p>
              Diagnosis of fragmented coronoid process and medial compartment
              disease can be challenging. Radiographs are helpful but not
              definitive. In our opinion, arthroscopy is the ideal modality for
              the diagnosis of fragmented coronoid process because it allows
              accurate diagnosis and treatment of the fragment, as well as
              cartilage assessment. Traditional open surgery to diagnose
              fragmented coronoid is antiquated. First and foremost, the
              surgical approach to the elbow joint that affords the surgeon a
              thorough inspection is invasive and has moderate post-operative
              morbidity. Secondly, the arthroscopic visualization of key
              structures is far superior to an invasive surgical approach.
            </p>
            <p>
              Treatment of fragmented coronoid process in mild cases involves
              arthroscopic removal of the fragmented bone and cartilage.
              Arthroscopy is fast, effective, and minimally invasive.
              Arthroscopic treatment takes between 15 and 30 minutes per elbow
              and virtually all dogs can be treated on an outpatient basis. In
              mild cases the prognosis for return to normal activity is
              excellent. Most dogs return to normal activity within a few weeks
              to a few months with little or no lameness.
            </p>
            <p>
              In moderate cases, the coronoid process is both fragmented and
              abnormal in size and shape, cartilage erosion is present on both
              the medial humeral condyle and the non-fragmented portion of the
              remaining medial coronoid. In these situations, the fragment is
              removed and a partial coronoidectomy is performed
              arthroscopically. An ulnar osteotomy may also be performed in
              moderate cases. The prognosis for moderate cases of fragmented
              coronoid process is less certain. If the aforementioned treatments
              are performed and the cartilage is in fair condition, many dogs
              have no or minimal lameness and the progression of arthritis is
              slow.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img src={elbowvideo2} alt="Elbow Video" className="img-fluid" />
            </div>
            <div className="mb-4">
              <img src={elbowvideo3} alt="Elbow Video" className="img-fluid" />
            </div>
            <div className="mb-4">
              <img
                src={elbowmiscimg}
                alt="Elbow Misc Image"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">Medial compartment disease</h4>
            <p>
              In the majority of dogs with chronic severe elbow dysplasia, all
              of the cartilage on the medial (innermost) aspect of the joint is
              worn away, resulting in what is now termed medial compartment
              disease. Unfortunately, this degree of osteoarthritis is difficult
              to successfully treat. Arthroscopy can be used to remove any free
              fragments and the joint. Several osteotomies such as proximal
              dynamic ulnar osteotomy and PAUL procedure can also be used to
              treat medial compartment syndrome with variable results. Platelet
              rich plasma has shown some promise for short term improvement but
              will not promote cartilage regrowth. Elbow replacement is
              available, and has been performed at CCOR, but the procedure is
              new and long-term results are not yet available.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img src={elbowvideo4} alt="Elbow Video" className="img-fluid" />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Canine osteochondritis dissecans (OCD)
            </h4>
            <p>
              Osteochondritis Dissecans (OCD) is a juvenile bone disease that
              can affect the shoulder, stifle, tarsal and elbow joints of young
              dogs. Osteochondritis Dissecans is a subset of osteochondrosis.
            </p>
            <p>
              Osteochondrosis is a failure of endochondral ossification; the
              process by which most bones grow and involves juvenile cartilage
              being replaced by bone. This failure of cartilage becoming bone
              results in overly thick joint cartilage adjacent to the joint
              (figure 1). The deepest layer of this thickened cartilage is
              inadequately nourished resulting in cell death (figure 2).
              Eventually, the deep detachment fissures and propagates to the
              joint surface and a “flap” develops (figure 3). Cartilage debris
              and inflammatory mediators are released into the joint fluid and
              inflammation ensues. With time, arthritis/degenerative joint
              disease occurs.
            </p>
            <p>
              Elbow OCD affects young large and giant breed dogs. Limping is the
              common clinical sign. Many dogs have pain on elbow flexion and
              extension, as well as limited range of motion. Radiographs are
              helpful in diagnosing OCD, but CT scanning and arthroscopy are
              used for definitive diagnosis. Treatment for elbow OCD involves
              arthroscopic debridement followed by a cartilage grafting
              procedure called osteochondral autograph transfer system (OATS).
              Artificial cartilage plugs (Synacart by Arthrex) can also be used
              to fill the defect. Some forms of biological treatment such as
              platelet rich plasma or stem cells have also been advocated but
              will not result in cartilage regeneration despite claims made by
              some.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src={elbowmiscimg}
                alt="Elbow Misc Image"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Canine ununited anconeal process (UAP)
            </h4>
            <p>
              Ununited anconeal process (UAP) is an elbow disorder most often
              affecting young German Shepherds, although it can be seen in
              almost any breed. The underlying problem is not clearly
              understood. UAP may be associated with malalignment of the elbow
              joint or a genetic juvenile bone disorder called osteochondrosis.
            </p>
            <p>
              The most common clinical signs are limping and swelling of the
              elbow joint. Clinical signs usually appear at about 6-8 months of
              age. Radiography, CT scan and arthroscopy are used to make the
              diagnosis.
            </p>
            <p>
              Treatment options include arthroscopy, ulnar osteotomy, fragment
              removal or fragment re-attachment. Treatment should be initiated
              as soon as the diagnosis is made. The prognosis is fair to good.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img src={elbowvideo5} alt="Elbow Video" className="img-fluid" />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Cost of elbow disorder treatments
            </h4>
            <p>
              Veterinary specialty care is a double-edged sword these days (no
              pun intended). All major orthopedic procedures are more
              sophisticated, successful, and less invasive today than they were
              in the past. These advances come at a cost for the surgeon and
              client. The costs for elbow arthroscopy at CCO range from
              $2,280-$2,880.
            </p>
            <p>
              Fees for elbow arthroscopy includes anesthesia and monitoring,
              nerve blocks when needed, and routine go home medication.
              Radiographs and CT scans are charged for separately and should be
              discussed at the time of the initial consultation. Osteotomies,
              when required, are charged for separately and should be discussed
              on a case by case basis.
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
                src={elbowmiscimg}
                alt="Elbow Misc Image"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
      {/* </div> */}
    </Layout>
  )
}

export default Elbow
