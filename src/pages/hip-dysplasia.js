import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero-adjusted/hero"

// images
import Telemed from "../images/acl-tears/telemed.jpg"
import aclVideo1 from "../images/acl-tears/man-carry-puppy.jpg"
import aclVid from "../images/hip-video.jpg"
import tplodog from "../images/tplo-dog.jpg"

// import MySwiper from "../components/swiper/swiper

// Reactstrap
import { Container, Row, Col } from "reactstrap"
import BackToTop from "../components/back-to-top"

// images
// import aboutImg from "../images/about-img.png"
// import pawSvg from "../images/dog.svg"
// import curved from "../images/curved.svg"
// import syringes from "../images/syringes.svg"
// import reviewPp from "../images/review-pp-1.jpg"

const HD = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="Hip Dysplasia" />
      <div class="hip">
        <Hero videoImg={aclVid} pageTitle="Hip Dysplasia" />
      </div>
      {/* <div className="about-wrapper py-5"> */}
      <Container className="acl-container my-5">
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h2 className="mb-5 text-blue">Canine Hip Dysplasia</h2>
            <h4>Overview</h4>
            <p>
              Despite efforts by breeders and the Orthopedic Foundation of
              America (OFA), the prevalence of canine hip dysplasia is not
              decreasing. The problem and resulting clinical signs ranges from
              mild inactivity to severe pain, lameness and immobility. Usually,
              clinical signs of canine hip dysplasia develop by one year of age
              but in some dogs the signs become obvious later in life as
              osteoarthritis gradually worsens. Hip dysplasia is a genetic
              disorder often beginning in puppies as young as six months of age.
              Numerous successful treatments for hip dysplasia are available
              depending on the age and size of the patient and severity of the
              problem.
            </p>
            <p>
              Many breeds are susceptible to hip dysplasia, although it tends to
              be especially common in larger dog breeds including Labrador
              Retrievers, German Shepherds, Golden Retrievers, Bernese Mountain
              Dogs, Rottweilers, Saint Bernards, and so on. Mixed breeds are
              also subject to hip dysplasia. Not even the toy breeds are spared,
              although frequency is lower in small dogs. Large dog breeds that
              have a relatively low incidence of hip dysplasia include the
              Borzoi, Doberman Pinscher, Great Dane, Greyhound and Irish
              Wolfhound.
            </p>
          </Col>
          <Col md="5">
            <div className="mb-4">
              <img
                src="/assets/img/misc-img-big.jpg"
                alt="Misc Image"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
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
              schedule your appointment
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/hip-image-xray.jpg"
                alt="Hip Image"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">Cause of Canine Hip Dysplasia</h4>
            <p>
              The primary cause of hip dysplasia is genetic and results in a
              malformation of the hip joint. During development, the femoral
              head (ball) fails to fit well into the acetabulum (socket). In
              very young dogs (6-9 months) the joint is lax and the femoral head
              slides partially out, and back into the acetabulum. This is known
              as subluxation.
            </p>
            <p>
              Over time, the hip joint becomes arthritic because of these
              anatomical abnormalities. The joint capsule thickens and becomes
              inflamed, osteophytes (bone spurs) develop, cartilage erodes, the
              acetabulum begins to fill in with bone. These secondary arthritic
              changes can develop quickly; puppies with severe hip dysplasia can
              develop severe osteoarthritis before their first birthday. In
              cases where the femoral head stays somewhat within the acetabulum,
              and the dog lives without intervention, the arthritic changes
              continue to worsen over years. The hip metamorphosis video depicts
              this chronic gradual deterioration.
            </p>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/metamorphosis-video.jpg"
                alt="metamorphosis Video"
                className="img-fluid mt-4"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">Clinical Signs of Hip Dysplasia</h4>
            <p>
              Usually, clinical signs of canine hip dysplasia develop by one
              year of age, but in some cases the signs become obvious later in
              life as osteoarthritis gradually worsens. Clinical signs in young
              dogs (about one year of age) with hip dysplasia can be quite
              variable. Lack of willingness to play, lying down after short
              periods of exercise, showing pain when playing or when getting up
              and down and walking with a stiff gait are common. Occasionally a
              popping noise, or a palpable “click” are present. Clear-cut
              lameness may be present but is less common.
            </p>
            <p>
              Older dogs will often have decreased muscle mass, stand with the
              rear feet close together (as if walking a tightrope) and be
              reluctant to go for walks, jump onto the couch or into the car,
              etc. Crepitus (a grinding feel) can occasionally be felt by
              placing a hand over the hip(s) while the dog is slowly walking.
            </p>
            <p>
              Physical examination and hip palpation may aid in the diagnosis of
              hip dysplasia. However, standard radiographs (X-rays) are needed
              to confirm the diagnosis. The following images represent
              radiographs of a dog with normal hips (figure 1) and of a dog with
              moderate to severe hip dysplasia (figure 2).
            </p>
            <p>
              PennHIP® radiography has been found to be the best predictor of
              future hip arthritis development in young dogs. PennHIP®
              radiography can be performed as early as 4 months of age whereas
              the traditional x-ray technique for hips is not certifiable until
              2 years of age.
            </p>
            <p>
              PennHIP® radiography can identify young puppies with hip dysplais
              that might benefit from early surgical intervention (see JPS
              discussed below).
            </p>
            <img
              src="/assets/img/misc-img.jpg"
              alt="Misc Image"
              className="img-fluid"
            />
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/hip-xray.jpg"
                alt="Hip Xray 1"
                className="img-fluid mb-2"
              />
              <p
                className="text-right mt-3"
                style={{ fontFamily: "Caveat", fontSize: 29 }}
              >
                Figure 1
              </p>
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/hip-xray-1.jpg"
                alt="Hip Xray 2"
                className="img-fluid mb-2"
              />
              <p
                className="text-right mt-3"
                style={{ fontFamily: "Caveat", fontSize: 29 }}
              >
                Figure 2
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pb-5 border-none">
          <Col md={7}>
            <h4 className="border-top pt-4">
              Treatment Options for Hip Dysplasia
            </h4>
            <p>
              <strong>Conservative, Non-surgical Treatment Options:</strong>
              <br />
              Treatment options for dogs with hip dysplasia depend on age, size
              of the patient and severity of the clinical signs. Many dogs with
              mild hip dysplasia can live with the problem fairly well with
              conservative management. Weight and pain management are often the
              key components of conservative management. Pain management usually
              involves some form of a nonsteroidal anti-inflammatory drug, such
              as carprofen. Pain medications like gabapentin may also be
              beneficial. These medicines may be needed either daily or
              intermittently depending on the severity of the problem.
              Acupuncture has also been shown to be effective in pain relief.
            </p>
            <p>
              Glucosamine and other holistic oral products may be helpful in
              cases of mild hip dysplasia. Such products may result in subtle
              improved comfort, but they do not repair or rebuild cartilage as
              some folks suggest. The same is true for similar injectable
              products (polysulfated glycosominoglycan). Stem cell therapy and
              platelet rich plasma (PRP) are the latest non-surgical treatment
              proposed by some veterinarians. Bone marrow or fat derived stem
              cells may improve comfort for a limited time by mediating
              inflammation do not repair or rebuild cartilage despite claims by
              some stem cell companies. Platelet rich plasma is another new
              regenerative therapy being used for hip dysplasia, and while
              cartilage repair/regrowth is highly unlikely, recent studies
              suggest PRP may be an effective tool in the pain management
              toolbox.
            </p>
            <p>
              <strong>Surgical Treatment Options:</strong>
              <br />
              Dogs with moderate to severe clinical signs and anatomical
              mal-formation are candidates for surgery. In general, 4 surgical
              options to treat canine hip dysplasia are currently recommended
              depending on the dog’s age, weight, severity of the disorder and
              signs clinical signs.
            </p>
            <p>
              <strong>Juvenile Pubic Symphysiodesis (JPS)</strong>
              <br /> is a newer, less invasive procedure involving fusion of the
              growth plate within the pelvis and is indicated in dogs less than
              5 months of age (figure 1). Juvenile Pubic Symphysiodesis alters
              the pelvic development with the ultimate result of the ball and
              socket fitting more “tightly,” therefore, decreasing the potential
              amount of future hip arthritis. Also, compared to other more
              traditional surgeries for hip dysplasia, JPS is less invasive,
              less costly, and is an easier recovery. Juvenile Pubic
              Symphysiodesis should not be thought of as a definitive cure for
              hip dysplasia, but can significantly improve hip joint
              conformation and lessen the long-term affects of hip arthritis.
            </p>
            <p>
              <strong>Double Pelvic Osteotomy (DPO)</strong>
              <br /> is appropriate for young dogs under 8-9 nine months of age.
              Double pelvic osteotomy involves making two osteotomies (bone
              cuts) in the pelvic bones, reorienting the acetabulum over the
              femoral head and securing the osteotomy with a bone plate (figure
              2).
            </p>
            <p>
              Numerous factors are considered when deciding which patients will
              benefit from a DPO. Patient selection criteria must be adhered to
              for good outcome. Potential patients should be less than eight
              months of age, have no osteoarthritis, the femoral head should be
              normal in size and shape and the femoral head should fall into
              place within the acetabulum on palpation without excessive force
              or angulations.
            </p>
            <p>
              <strong>Femoral Head Ostectomy (FHO)</strong>
              <br /> is best suited for cats and small dogs (figure 3). Femoral
              Head Ostectomy involves removal of the femoral head (ball) from
              the joint. Scar tissue forms between the remaining bone and socket
              (acetabulum) forming a “false joint”. The primary advantage of the
              FHO is lower cost, since no implants are needed.
            </p>
            <p>
              <strong>Total Hip Replacement (THR)</strong>
              <br /> is the ideal treatment for medium to large breed dogs with
              moderate to severe hip dysplasia. Ideally, these patients should
              be approximately one year of age or older. No upper-end age
              restrictions exists, but geriatric patients may have a more
              difficult recovery and higher complication rate.
            </p>
            <button type="button" class="btn">
              LEARN MORE ABOUT THR
            </button>
          </Col>
          <Col md={5}>
            <div className="mb-4">
              <img
                src="/assets/img/misc-img-small.jpg"
                alt="Misc Image"
                className="img-fluid"
              />
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/hip-xray-img.jpg"
                alt="Hip Xray"
                className="img-fluid mb-2"
              />
              <p
                className="text-right mt-3"
                style={{ fontFamily: "Caveat", fontSize: 29 }}
              >
                Figure 1
              </p>
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/hip-xray-img.jpg"
                alt="Hip Xray"
                className="img-fluid mb-2"
              />
              <p
                className="text-right mt-3"
                style={{ fontFamily: "Caveat", fontSize: 29 }}
              >
                Figure 2
              </p>
            </div>
            <div className="mb-4">
              <img
                src="/assets/img/hip-xray-img.jpg"
                alt="Hip Xray"
                className="img-fluid mb-2"
              />
              <p
                className="text-right mt-3"
                style={{ fontFamily: "Caveat", fontSize: 29 }}
              >
                Figure 3
              </p>
              <button type="button" class="btn">
                BACK TOP TOP
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <BackToTop />
      {/* </div> */}
    </Layout>
  )
}

export default HD
