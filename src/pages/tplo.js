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
import aclVid from "../images/tplo-vid.png"
import tplodog from "../images/tplo-dog-v4.png"
// import tplopostop from "../images/tplo/TPLOpostop.png"
import hipImage from "../images/hip-image-xray-v2.png"
// import tplopreop from "../images/tplo/TPLOpreop.png"
import arthrscopysetup from "../images/tplo/arthrscopysetup.png"
// import VideoFPO from "../images/tplo/VideoFPO.png"
// import TPLOplanning from "../images/tplo/TPLOplanning.png"
import TPLORecoveryvideo from "../images/tplo/TPLO-Recovery-video-v2.png"
import TPLORecoveryvideo1 from "../images/tplo/TPLO-Recovery-video-1.png"
import TPLORecoveryvideo2 from "../images/tplo/TPLO-Recovery-video-2.png"
import whyus from "../images/tplo/why-us-v2.png"
import costoftplo from "../images/tplo/cost-of-tplo-v2.png"
import prestonanimated from "../images/tplo/preston-animated.png"

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
			<SEO title="TPLO" />
			<div className="tplo-hero">
				<Hero videoImg={aclVid} pageTitle="TPLO" />
			</div>
			{/* <div className="about-wrapper py-5"> */}
			<Container className="acl-container my-5">
				<Row className="mb-3 pb-5 align-items-center">
					<Col md={7}>
						<h3 className="mb-5 text-capitalize">
							Tibial Plateau Leveling Osteotomy (TPLO) is the optimal treatment
							for dogs with ACL tears.
						</h3>
						<h4>Overview</h4>
						<p>
							Canine ACL tears are by far, the most common small animal
							orthopedic condition seen in veterinary medicine. Fortunately, it
							is also one of the most successfully treated conditions in
							veterinary medicine. In the majority of canine ACL cases, TPLO is
							the ideal treatment with minimal complications, lowest risk of
							“breakdown” requiring additional surgery and relative quick return
							to comfortable, full activity. Thanks to nerve blocks and epidural
							analgesia, almost all dogs undergoing TPLO at Colorado Canine
							Orthopedics can safely and comfortably return home the day of
							surgery. Of course, we have a 24/7 ICU if needed or requested.
						</p>
						<h4 className="border-top pt-4">
							What procedure would veterinary surgeons choose you their own pet?
						</h4>
						<p>
							In a recent published survey, by far the majority of
							board-certified surgeons would choose the TPLO if their own dog
							had an ACL tear.
						</p>
					</Col>
					<Col md={5}>
						<img
							src={tplodog}
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
						<h4 className="border-top pt-4">
							Consultation, surgery and back home all in the same day.
						</h4>
						<p>
							Colorado Canine Orthopedics offers consultation followed by
							surgery the same day. Patients can undergo an examination and
							radiographic review, followed by minimally invasive arthroscopy
							and TPLO surgery (if needed) all in the same day.
						</p>
					</Col>
					<Col md={5}>
						<img src={hipImage} alt="Telemed" style={{ width: "100%" }} />
					</Col>
				</Row>
				<Row className="my-3 py-5">
					<Col md={7}>
						<h4>How the TPLO works</h4>
						<p>
							Tibial plateau leveling osteotomy helps restore joint biomechanics
							by altering the joint’s “sliding motion” thought to be the
							underlying cause of canine ACL tears. The downward, backward
							sliding motion of the femur is eliminated following surgery
							resulting in joint stability (Figure 1).
						</p>
						<p>
							The stability is primarily a straight-forward biomechanical effect
							of the level tibial plateau, however the TPLO also slightly
							repositions the caudal cruciate ligament, which adds to overall
							joint stability. Recent biomechanical studies have examined dogs
							with normal stifle joints, dogs with ACL tears and dogs that have
							undergone current surgical techniques and found the TPLO is
							superior in restoring normal joint biomechanics.
						</p>
						<p>
							A typical TPLO procedure takes an experienced surgeon about one
							hour. Anesthesia is extremely safe using today’s anesthetic
							agents, equipment and monitoring devices. Once the patient is
							safely anesthetized, nerve blocks are performed effectively
							numbing the leg for approximately 20 hours. Similar blocks are
							routinely used in human orthopedics.
						</p>
						<p>
							Prior to surgery, but while under general anesthesia, specific
							radiographs (X-Rays) are obtained and imported into an orthopedic
							planning computer program to determine the tibial plateau angle
							and preoperative planning (figure 2).
						</p>
						<p>
							Once in the operating room, an arthroscope is inserted through a
							several millimeter opening to confirm the diagnosis, debride
							(clean-up) the torn ligament and inspect the remainder of the
							joint and treat meniscal pathology (figure 3).
						</p>
						<p>
							Following arthroscopy, a small surgical approach is made to the
							top of the tibia and the osteotomy is performed and secured using
							a specialized titanium bone plate (figure 4).
						</p>
						<div className="d-flex justify-content-between mb-5">
							<img
								src="/assets/img/tplo-figure-4.jpg"
								alt="TPLO Pre Op"
								style={{ width: "100%" }}
								className="tibial-sloped"
							/>
						</div>
					</Col>
					<Col md={5} className="d-flex flex-column justify-content-between">
						<div className="mb-5">
							<img
								src="/assets/img/tplo-video.jpg"
								alt="Acl vid 1"
								style={{ width: "100%" }}
							/>
						</div>
						<div className="mb-5">
							<img
								src="/assets/img/tplo-video-1.jpg"
								alt="Acl vid 1"
								style={{ width: "100%" }}
							/>
						</div>
						<div className="mb-5">
							<img
								src="/assets/img/tplo-video-2.jpg"
								alt="Acl vid 1"
								style={{ width: "100%" }}
							/>
						</div>
						<div>
							<img
								src={arthrscopysetup}
								alt="arthrs copy setup"
								style={{ width: "100%" }}
							/>
							<p
								className="text-right mt-3"
								style={{ fontFamily: "Caveat", fontSize: 29 }}
							>
								Figure 3
							</p>
						</div>
					</Col>
				</Row>
				<Row className="my-3 py-5">
					<Col md={7}>
						<h4>TPLO Recovery</h4>
						<p>
							At Colorado Canine Orthopedics, virtually all animals undergoing
							TPLO wake up pain-free thanks to nerve block analgesia and can
							comfortably walk out of the hospital the day of surgery. Weight
							bearing is permitted immediately. Most dogs start using the leg
							within a day or two of their TPLO surgery. Sutures are buried and
							do not require removal. Icing is helpful for a few days following
							surgery.
						</p>
						<p>
							In the days and weeks following TPLO surgery, most dogs are very
							comfortable. The surgeons at Colorado Canine Orthopedics find TPLO
							patients to be more comfortable following surgery than following
							many of the antiquated procedures. This comfort is the result of
							minimally invasive arthroscopy rather than open joint procedures,
							the stability and security afforded by today’s bone plate
							technology and of course, the preemptive nerve block. In our
							opinion, old style repairs involving soft tissues lack stability
							compared to bone fixation, leading to more postoperative
							discomfort and pain. Colorado Canine Orthopedics typically uses
							titanium bone plates with a specialize locking screw technology.
						</p>
						<p>
							Postoperative restrictions include in house confinement with short
							leash walks initially, progressing to longer and longer walks as
							weeks go by. Stairs are usually permitted with supervision. The
							TPLO is one of the strongest repairs in veterinary surgery, but
							off leash outdoor activity and excessive rough housing should be
							avoided until the osteotomy heals.
						</p>
						<p>
							The skin incision heals in about 10-14 days, but the bone takes
							months to heal completely. While bone takes longer to heal, it
							heals stronger than any other connective tissue in the body!
							Complete bone healing takes about two to three months but varies
							from animal to animal and is somewhat dependent on a dog’s age.
							Once healed, nearly all dogs return to full function.
						</p>
					</Col>
					<Col md={5} className="d-flex flex-column justify-content-between">
						<div className="mb-5">
							<img
								src={TPLORecoveryvideo}
								alt="TPLO Recovery video"
								style={{ width: "100%" }}
							/>
						</div>
						<div>
							<img
								src={TPLORecoveryvideo1}
								alt="TPLO Recovery video 1"
								class=" mb-5"
								style={{ width: "100%" }}
							/>
						</div>
						<div>
							<img
								src={TPLORecoveryvideo2}
								alt="TPLO Recovery video 2"
								style={{ width: "100%" }}
							/>
						</div>
					</Col>
				</Row>
				<Row className="my-3 py-5">
					<Col md={7}>
						<h4>Why Choose Colorado Canine Orthopedics?</h4>
						<ul>
							<li>
								Colorado Canine Orthopedic surgeons are board certified with
								years of experience and have performed tens of thousands of TPLO
								surgeries over the past 20 years.
							</li>
							<li>
								Colorado Canine Orthopedics is the only canine orthopedic
								specific practice in this region of the country.
							</li>
							<li>All ACL tears are confirmed via non-invasive arthroscopy.</li>
							<li>
								Our patients are able to safely go home the day of surgery.
							</li>
							<li>Our prices are extremely competitive.</li>
						</ul>
					</Col>
					<Col md={5} className="d-flex flex-column justify-content-between">
						<div>
							<img src={whyus} alt="Why Us" style={{ width: "100%" }} />
						</div>
					</Col>
				</Row>
			</Container>
			<div
				style={{
					backgroundImage: `url(${costoftplo})`,
					backgroundRepeat: `no-repeat`,
					backgroundPosition: `right`,
					"background-size": "42%",
				}}
				className="costoftplo-container"
			>
				<Container
					className="acl-container"
					style={{ borderTop: `3px solid #dedede` }}
				>
					<Row className="py-5">
						<Col md={7}>
							<h4>Cost of TPLO surgery at Colorado Canine Orthopedics:</h4>
							<p>
								The average cost of a TPLO at Colorado Canine Orthopedics is
								$3,480 - $3,980 depending on the size of the dog.
							</p>
							<p>
								All surgery fees include pre-surgical x-rays, anesthesia and
								monitoring, nerve block or epidural, implants, post-operative
								x-rays and routine go home medications. Consultation,
								pre-operative bloodwork and four and eight and week
								post-operative x-rays are not included.
							</p>
							<p>
								At Colorado Canine Orthopedics we are committed to providing
								only state of the art, non-compromised pet healthcare. We
								realize some pet owners may find this level of care relatively
								costly. However, despite the inherently expensive nature of our
								work, we are dedicated to providing the highest level of care at
								the most affordable price possible. We believe if you compare
								our fees to other specialty practices you will find this true.
							</p>
						</Col>
						<Col md={5} className="costoftplo">
							<div>
								<img src={costoftplo} alt="Why Us" style={{ width: "100%" }} />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div style={{ background: `#f3f3f3` }}>
				<Container className="acl-container pt-5 mb-3">
					<Row>
						<Col md={12}>
							<h4>TPLO FAQs</h4>
							<p>
								We know you have a variety of questions about TPLO surgery for
								your dog. We’ve answered many commonly asked questions here, but
								you can be certain your dog’s surgeon will answer any of your
								questions prior to and after surgery.
							</p>
						</Col>
						<Col md={6}>
							<p>
								<b>Q: Does my pet have to spend the night in the hospital?</b>
								<p className="pt-2">
									A: No. Virtually all dogs undergoing TPLO at Colorado Canine
									Orthopedics can be discharged the day of surgery. Of course,
									we have a fully staffed 24/7 ICU if your pet does spend the
									night.
								</p>
							</p>
							<p>
								<b>
									Q: Will this technique have a negative effect on the opposite
									leg?
								</b>
								<p className="pt-2">
									A: No, quite the opposite. The TPLO provides the best possible
									outcome with no negative affect on the opposite leg.
								</p>
							</p>
							<p>
								<b>Q: Will the opposite knee have the same problem?</b>
								<p className="pt-2">
									A: Forty percent of all dogs with ACL tears on one side will
									have the problem on the opposite side. The most effective ways
									to decrease this percentage are early surgical repair leading
									to symmetrical weight distribution and weight loss in
									over-weight dogs.
								</p>
							</p>
							<p>
								<b>Q: Is TPLO only for large dogs?</b>
								<p className="pt-2">
									A: No. Many small and toy breed dogs have the greatest degree
									of tibial plateau slope. Small breed dogs typically have
									excellent outcomes following TPLO surgery.
								</p>
							</p>
							<p>
								<b>
									Q: What technique would Colorado Canine Orthopedics’ surgeons
									perform on their own dogs?
								</b>
								<p className="pt-2">A: Unquestionably the TPLO</p>
							</p>
							<p>
								<b>
									Q: Is the postoperative period more difficult following TPLO
									than following older techniques?
								</b>
								<p className="pt-2">
									A: In our opinion, it is not. In numerous situations, where an
									older technique had been performed on one side and a TPLO
									performed on the other side, clients have reported that the
									TPLO resulted in less discomfort.
								</p>
							</p>
						</Col>
						<Col md={6} className="d-flex flex-column justify-content-between">
							<p>
								<b>
									Q: Can a TPLO be performed on an animal when an older
									technique has failed?
								</b>
								<p className="pt-2">
									A: Yes. In many cases, we have successfully performed TPLOs in
									patients with failed TTAs, tightrope repairs or older
									replacement techniques.
								</p>
							</p>
							<p>
								<b>
									Q: Will my dog experience pain in the postoperative period?
								</b>
								<p className="pt-2">
									A: Minimal. All dogs undergoing TPLO at Colorado Canine
									Orthopedics receive pre-operative nerve blocks, similar to
									human orthopedics. Most clients feel their pet’s discomfort
									level is quite tolerable.
								</p>
							</p>
							<p>
								<b>Q: How long does it take for healing?</b>
								<p className="pt-2">
									A: The osteotomy takes 2-3 months to heal. During this time
									your pet can have a reasonable amount of leash activity.
								</p>
							</p>
							<p>
								<b>
									Q: How many TPLOs have the doctors at Colorado Canine
									Orthopedics performed?
								</b>
								<p className="pt-2">
									A: Our doctors have performed tens of thousands of TPLOs over
									the past 20 years.
								</p>
							</p>
							<p>
								<b>Q: How will I know how to care for my pet after surgery?</b>
								<p className="pt-2">
									A: At Colorado Canine Orthopedics we prepare a detailed set of
									written discharge instructions for each patient. We carefully
									review this information with you prior to discharge.
								</p>
							</p>
							<p>
								<b>
									Q: What should I expect when I get home the night of surgery?
								</b>
								<p className="pt-2">
									A: Your pet will most likely be able to walk (but not well)
									when you get home. Most patients find their comfort zone once
									home and sleep the evening and night away. Your pet’s surgeon
									will call the night of surgery to check on your pet and answer
									any questions. You will also be given the doctors’ cell phone
									number in case you have urgent questions or concerns in the
									evenings on weekends.
								</p>
							</p>
						</Col>
					</Row>
				</Container>
			</div>
			<div style={{ background: `#eef7fb` }}>
				<Container className="acl-container pt-5 mb-3">
					<Row className="py-5">
						<Col md={12}>
							<h4>The Ten Most Common TPLO Misconceptions</h4>
						</Col>
						<Col md={6}>
							<p>
								<b>
									1. Dogs, like humans, may not require surgery following an ACL
									tear.
								</b>
								<p>
									Not true. Unfortunately, the anatomy and biomechanics of the
									canine stifle (knee) differs from humans. The sloping canine
									tibial plateau in results in joint sub-luxation (dislocation)
									during weight bearing. This radiographic animation
									demonstrates the detrimental instability during weight bearing
									following a canine ACL tear (Figure 1). Because of this,
									untreated canine ACL tears result in progressive clinical
									signs, meniscal tearing, severe osteoarthritis (OA) and
									debilitating lameness.
								</p>
							</p>
							<div className="text-center">
								<img
									src={prestonanimated}
									alt="Preston Animated"
									style={{ width: "50%", margin: "auto" }}
								/>
								<p
									className="text-left mt-3"
									style={{ fontFamily: "Caveat", fontSize: 29 }}
								>
									Figure 1
								</p>
							</div>
							<p>
								<b>
									2.The same surgical techniques used in humans are effective in
									dogs.
								</b>
								<p>
									Not true. Replacement techniques using biological grafts are
									the standard for humans with ACL tears. Similar grafts and
									techniques have been unsuccessful in dogs due to persistent
									biomechanical stress. This stress is associated with the
									sloping tibial plateau present in dogs but not humans.
								</p>
							</p>
							<p>
								<b>
									3. Recovery from a TPLO is more difficult than old style
									replacement techniques.
								</b>
								<p>
									Not true. In many instances we have seen dogs with a “fishing
									line” repair or tight rope have a more prolonged recovery than
									dogs who have undergone a TPLO.
								</p>
							</p>
							<p>
								<b>
									4. Postoperative pain is greater following TPLO than old style
									replacement techniques.
								</b>
								<p>
									Not true. Almost all TPLO patients are very comfortable
									following surgery. In fact, the surgeons at Colorado Canine
									Orthopedics find TPLO patients to be more comfortable
									following surgery than following many other procedures. This
									comfort is, in large part, due to the stability afforded by
									today’s bone plate technology. The bone/plate/screw
									combination provides better stability than any other repair on
									any other type of tissue. Stability equals comfort.
								</p>
							</p>
						</Col>
						<Col md={6} className="d-flex flex-column justify-content-between">
							<p>
								<b>
									5. Recovery time is greater following TPLO than “Old Style”
									repairs.
								</b>
								<p>
									Partially true. It is true that bone healing takes longer than
									soft tissues. Old style repairs are as strong as they will
									ever be as soon as the surgeon ties the knot. However
									old-style repairs are not as strong as the TPLO at any point
									after surgery. Bone healing is a double-edged sword; it takes
									longer to heal but heals stronger than any other connective
									tissue in the body! Complete bone healing takes about three
									months but varies from animal to animal and is somewhat
									dependent on age.
								</p>
							</p>
							<p>
								<b>
									6. Stricter confinement is needed following the TPLO compared
									to other procedures.
								</b>
								<p>
									Not true. The TPLO is the strongest ACL technique performed.
									Following any surgery, dogs require some degree of
									restriction. TPLO patients should be restricted to the house
									with leash walks only. Stairs are usually permitted with
									supervision.
								</p>
							</p>
							<p>
								<b>7. TPLO increases the risk of the opposite side tearing.</b>
								<p>
									Not true. In fact, quite the opposite is the case. Because
									canine ACL tears are caused by biomechanical wear and tear,
									40% of animals that tear one side will someday tear the other.
									The best way to minimize this risk is to equalize weight
									bearing by performing a TPLO on the affected side. Weight loss
									is also important in overweight animals. Nearly all dogs left
									untreated will tear the other side because of shifting weight
									to the intact side.
								</p>
							</p>
							<p>
								<b>8. TPLO is only for show or performance dogs.</b>
								<p>
									Not true. Most surgeons agree the TPLO is the best procedure
									whether your pet’s an agility star, tennis ball player or lap
									warmer.
								</p>
							</p>
							<p>
								<b>9. TPLO is expensive.</b>
								<p>
									Partially true. Old style repairs can be performed less
									expensively. The old techniques often involve the use of
									simple hand instrumentation and a piece of fishing line or
									suture material. The TPLO involves the use of sophisticated
									plating equipment, surgical drills and specialized saws. At
									Colorado Canine Orthopedics we frequently see patients with
									unsuccessful old-style repairs. It goes without saying these
									situations result in added expense for the client and
									additional surgery for the pet.
								</p>
							</p>
							{/* <p>
							<b>10. TPLO prevents or reverses osteoarthritis (OA).</b>
							<p>
								Unfortunately, Not true. Almost all dogs with ACL tears develop
								OA. In fact, almost all dogs have OA at the time of diagnosis.
								Most surgeons agree the TPLO is the best option to minimize OA.
							</p>
						</p>*/}
						</Col>
					</Row>
				</Container>
				<BackToTop />
			</div>
			{/* </div> */}
		</Layout>
	)
}

export default Acl
