import React from "react"
// import { Link } from "gatsby"
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap"

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

const Reviews = ({ location }) => {
  console.log(location)
  return (
    <Layout>
      <SEO title="Reviews" />
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
              <h1>Reviews</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-wrapper py-5"> */}
      <Container className="acl-container my-5">
        <Row className="border-none">
          <Col md={12} className="mb-5">
            <div className="facebook-review mb-5">
              <h2 className="mb-4 text-blue">Facebook Reviews</h2>
              <CardColumns>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic w-200">
                      This place is amazing! We were referred her by a vet in
                      Hays, Kansas when our little girl broke her growth plate.
                      Dr. Franklin explained the procedure of the surgery and
                      all possible complications. In the end, he did a fabulous
                      job. He had us in and out in good time so we could travel
                      the 5+ hours home the same day. Our golden retriever is
                      one day out of surgery and is already putting weight on
                      her leg and doing very well. Colorado Canine Orthopedics
                      and Rehab is a first rate canine care center. I could not
                      be happier with the treatment and would recommend them to
                      anyone who has a pet in pain and in need of specialized
                      medical attention.
                    </CardText>
                    <CardTitle className="text-blue">
                      <h4>Gayle Tripp Walsh</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Drs Franklin and Miller were awesome! Thorough and
                      compassionate. The staff was wonderful to work with. I
                      would recommend this group to any dog owner in the region
                      if your dog has an orthopedic issue.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">John Ireland</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      The staff is all amazing there! My dog is doing great! I
                      have no complaints and I’m thankful they were able to help
                      my baby get back to normal:
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Kelly Kovach Gerber</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      We are so impressed with this facility. From the first to
                      the last consultation the service we got was first class.
                      Our dog had a TPLO surgery. We were kept informed on the
                      day of surgery and given the best post surgical
                      information we have ever received. Follow up care was
                      excellent. The staff and doctors are the very best,
                      professional, friendly and informative. Highly recommend.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Val Baird</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      My Frenchie had a fracture repair at CCO and I am beyond
                      impressed with the staff. You can tell they love what they
                      do and love pups! When I went to pick my fur baby up post
                      op, he wasn’t in a kennel, he was being held and loved on
                      by the staff. Very happy with my experience and the
                      knowledge of their team.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Stefanie Prince</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Totally awesome people. Have enjoyed working with everyone
                      there. Digby is doing great and can't wait to be able to
                      use FULL POWER again soon.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Edward Kellock</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      My dog just had knee surgery this past weekend and has
                      been having complications with the medication provided.
                      The staff at CO Canine Ortho make me feel like they’re
                      genuinely concerned for my dogs well being and are
                      incredibly understanding and patient with all of my
                      questions and concerns. The office is very clean and
                      spacious; the staff communicated with me throughout my
                      dogs surgery, and they treated my dog as a priority
                      instead of just another patient.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Kilee Tucker</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      I truly believe you have the best staff available in
                      Colorado! The doctors are great - every tech or
                      receptionist said hello, ask if I needed anything and
                      check on my dog several times when the wait when over what
                      the doctor said it would be. I feel so comfortable with
                      the treatment plan developed for my Sadie and know that
                      you all have her best interest at heart. Can't thank you
                      enough!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Cindy Jaques</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Colorado Canine Orthopedics is amazing! They always take
                      such good care of my pup. They really care and go the
                      extra mile. So many staff love to stop what they are doing
                      and love on my boy anytime we come in. The atmosphere is
                      great and so is the service!
                      <br />
                      Dr.Swainson is awesome and has done great with both of my
                      dogs TPLO surgeries. Cynthia over in rehab is amazing as
                      well!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Jenni Samaro</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      I didn't give 5 stars only because I felt the front desk
                      staff to be rather cold. Other than that it was a
                      fantastic experience!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Kate Powell</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      If you need any kind of ortho work done, this is the
                      place. the gals there really love the babies. they took
                      great care of Ruckus. the doc will call to ck up on him
                      and that is reassuring that they really care.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Shorty Smith</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      These guys really are so incredibly gentle, informative
                      and know what they’re doing. We’re only one day post TPLO
                      but they gave clear, outlined instructions for aftercare.
                      Normally, it’s just a handout with “Do this and this. This
                      might happen. This might not happen. Call your vet if you
                      have questions.” Not so here. I’m very happy with our
                      decision. Highly recommend. True professionals.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Kylah Sutz Edgin</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Wonderful staff and beautiful facility! If ever I need
                      orthopedic work I am coming here!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Terry Sanford</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Luna had a TPLO by Dr Miller and we couldn’t be happier
                      with the results. She was back to her active self in no
                      time! Staff was exceptional and eased all of my worries
                      before surgery. I also appreciated the booklet they sent
                      home afterwards that answered all the questions I didn’t
                      think of while in the office! Not to mention how much I
                      appreciated Dr Millers call just to check in on our girl
                      after surgery. Very professional and thoughtful!
                      <br />
                      Thank you for taking the best care of my most prized
                      possession!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Kaley Hilfman</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Absolute the best. Dr Franklin is amazing. Therapy team
                      amazing. Love them
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Terry Makuh</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      I walked in today and was more than a little worried about
                      my little man. After 30 seconds, I was completely at ease,
                      the staff is amazing! Luckily my little dude doesn’t need
                      surgery, but if he did, there is nowhere else I would want
                      to go. The staff was professional and friendly and amazing
                      with my pup.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Felice Kohler</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      My German Shepherd, Hunter, had a hip replacement on
                      Monday by Dr. Miller. I was a basket case. They took
                      amazing care of both of us. Hunter is home and recovering
                      beautifully. Everyone there was professional, caring and
                      wonderful. This is my third time there. Several years ago
                      my Westie, Maggie, had two surgeries there. The same
                      incredible care. Thank you.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Bev Teagle</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      This place is excellent. They are super knowledgeable,
                      honest, reasonable and really want the best for your pet.
                      I have worked with both Dr. Miller and Dr. Bauer and have
                      trusted both completely, thanks for everything!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Melissa Parks</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      I can only say good things about Dr. Michael DeTora and
                      the rest of the staff at CO Canine Orthopedics! We had 2
                      vets tell us our dog needed knee surgery. Dr. DeTora
                      determined his knees were fine, but there was definitely
                      an issue with 1 of his legs. After multiple
                      tests/treatment trials, it was determined he had a
                      cancerous tumor in his tendons. Unfortunately, it wasn’t
                      the end result we were hoping for but our boy was at least
                      treated for his actual problem and he’s now living his
                      best life cancer free! Thanks for taking care of our baby
                      and treating him as your own! 🙏🏼
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Brenna Bulmer</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      The staff and Dr Riecks care very much from the minute you
                      walk in the door until your pet is healed. Wouldn't go
                      anywhere else.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Sarah Moe</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      I have had two pitbulls (both seniors) have TPLO surgery
                      here. One was with Dr. Franklin and one with Dr. DeTora.
                      Both were amazing with the dogs and great surgeons. I felt
                      comfortable the whole time and the dogs recovered quickly.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Wendy Birhanzel</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Just had my dog's second THR - she had her first one when
                      she was 2, and now she's 5. Both times saw Dr.Reicks and
                      he's amazing!! The office staff are all VERY nice, and
                      luckily for me, I have health insurance that pays 80% of
                      the procedure and they asked me to pay ONLY my 20% at the
                      time of surgery and they waited for reimbursement from my
                      insurance company for the bulk of the payment. That was
                      priceless to me! I gladly travel from Aurora for this
                      first rate care! I can't say enough about how fabulous
                      this entire office is!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Desire Leaf</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      We have a dog doing rehab with the Physical Therapists at
                      Colorado Canine and they are SO good with her. The are
                      patient and super kind, and they take the time to really
                      educate on how to increase strength, WHY you are doing the
                      exercises, and how to get the most out of the experience.
                      I couldn't be happier with their professionalism and care
                      for animals. We have also had a consult with a surgeon,
                      who took extra time to explain where we are at, options
                      for further treatment, and a plan going forward (with or
                      without surgery) He didn't push us to do anything before
                      it was time, which I highly appreciate. It was clear the
                      staff works together to give the best experience to the
                      animal and help the owner to make that animals life the
                      best quality they can. I'm a BIG fan! My dog may be a
                      bigger one, she actually enjoys being there and isn't
                      stressed at all about it!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Jennifer Cameron</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      My husband brought our two working dogs in for consults
                      and inpatient procedures yesterday and the entire
                      experience was outstanding. From caring and efficient
                      office staff, to competent and knowledgeable technical
                      staff, to the excellent doctors who treated our dogs, the
                      day was simply amazing. Their technology is top notch and
                      their expertise in the field of sports medicine
                      unparalleled.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Brittany A. Harris Bell</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      our experience with everyone there was awesome. I will be
                      recommending them repeatedly.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">
                        Tom-Tina Shackelford Weatherman
                      </h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Thank you so much to the whole team at Colorado Canine
                      Orthopedic, especially Dr & Mrs DeTora. Lucy is 6 weeks
                      Post Op and graduated from Physical Therapy today!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Anita Paas</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      My dog, Molly has been there three times. Dr. Franklin and
                      his team treated Molly like a VIP every time. Our dog is
                      anxious at the vet, usually because she goes for
                      vaccination shots. At CCO, she is not as anxious because
                      of the toy boxes they have throughout the office. The
                      office is very open and welcoming. I think the open space,
                      wide corridors, and glass walls help create a space that
                      makes dogs feel more comfortable. The front desk staff are
                      patient with questions and helpful in getting additional
                      information over email when needed.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Craig Wymer</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      thank you dr miller and staff for helping gilbert with his
                      herniated disc. dr miller and the staff were all too kind
                      and very helpful with absolutely every aspect of my little
                      dog's surgery and recover.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Thirza Dezan</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      I originally took Chance to my vet just to see if the
                      problem he was having was his hips, he is a rescue,
                      rescued after someone threw him on the highway at 3 months
                      old. I took to er and he had a fractured hip. I thought
                      arthritis had set in. Turns out it was his ACL. So I made
                      an appointment with Colorado Canine Orthopedics. Turns out
                      it was probably frayed. Set appointment to get fixed for
                      the 6th of January, between the consult and Dec 22nd he
                      had a mishap and I knew he tore it completely. I called
                      and they were able to get him in on the 26th. The surgery
                      was quick, took him in at 715 and he was able to go home
                      at 2. All of the staff were extremely kind and passionate.
                      Dr Franklin did an awesome job, after only 4 days of
                      having the TPLO done Chance is already putting weight on
                      that leg, of course with assistance . The office is clean
                      and organized. As I sat there waiting for them to bring
                      Chance out, several people came in and they were taken
                      care of immediately as was I when I first went in. I have
                      probably been to every office of that facility, internal
                      medicine, dental, er and the orthopedic. Highly recommend
                      to anyone for there pups.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Kimberleigh Harding</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      We couldn't be more happy! We live in Wyoming. CCO was
                      able to see us right away. Consult and do same day
                      surgery. Our girl Eva,is one week post op.... Thanks so
                      much CCO!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Kelli Kelly</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Thank you for your kind loving care, everyone was so nice.
                      I can’t believe what amazing service we received. It was
                      like being at home. Keep up the great work you all are
                      doing.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Christopher Charles</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Teddie says THANKYOU for taking such good care of him and
                      cant wait to play ball again soon! Great staff here,
                      highly recommended.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Trish Whitley</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      I highly recommend them. Great friendly staff and treat
                      your pets with great care. Priced reasonably. They send
                      you home with an easy to follow care program for your pet
                      and information that explains the procedure done. First
                      page had several numbers to call for an emergency after
                      surgery.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Jesslyn Swirka</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Wonderful staff!!! My boy had a TPLO and they communicated
                      all day about his progress... thank you for peace of mind
                      that day!!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Tania Mayes England</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      I can’t find words to thank this entire group enough. Your
                      entire team took a super scary situation, made me feel
                      comfortable, and more importantly, confident that we were
                      at the right place to fix our 7yr old Great Dane, Ellie,
                      up. What a lovely group of passionate people and an
                      amazing facility! Thank you CCO, Ellie and I will be
                      looking forward to our next visit to check the progress of
                      her recovery.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Lindsay Stephenson</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
              </CardColumns>
            </div>
            <div className="google-review mb-5">
              <h2 className="mb-4 text-blue">Google Reviews</h2>
              <CardColumns>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic w-200">
                      We had a standard but unique situation. The team were
                      friendly at every visit, all of our questions were
                      answered and explained. Best of all everything worked out
                      and we're well on the path of recovery. I waited until we
                      graduated to write this review and I can say the whole
                      experience was easy, supportive, and worth the expense as
                      our happy guy runs around the house with his new toy.
                    </CardText>
                    <CardTitle className="text-blue">
                      <h4>Bethan Keith</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Drs Franklin and Miller were awesome! Thorough and
                      compassionate. The staff was wonderful to work with. I
                      would recommend this group to any dog owner in the region
                      if your dog has an orthopedic issue.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Caleb Brooks</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Colorado Canine Orthopedics is one of the most amazing
                      organizations I have ever worked with - very few company’s
                      have such a great group of people anymore. Any experience
                      I have ever had with them, they have made me feel like a
                      part of their family. I would highly recommend them to
                      anyone considering surgery for their dog. I am amazed at
                      their state of the art surgical facilities and the love
                      that all of their staff show to pets.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Preston Knight</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Our dog needed leg surgery an we were referred to Colorado
                      Canine. They were very gentle with her. Dr. DeTora
                      explained in detail what needed to be done and what we
                      could expect in results. Her surgery went very well and is
                      now regaining strength in her legs. Wonderful place!!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Sheila Richarz</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Great Doctors and caring staff. They all love animals and
                      will do their best for your pet. State of the art new
                      facility which is warm and inviting. Highly recommended!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">
                        Trusted Colorado Photographer
                      </h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      I brought my sport dog in for a strange gait and the team
                      was able to pinpoint a soas strain. We followed up with an
                      ultrasound and PRP injection. Very knowledgeable staff,
                      I'll bring my dog back if she ever needs an orthopedic vet
                      again!
                    </CardText>
                    <CardText className="mb-2 font-italic">
                      They book up quickly and only offer ultrasounds once a
                      month so wait times for appointments can be long, but they
                      are worth the wait.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Becca Kreski</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
              </CardColumns>
            </div>
            <div className="google-review mb-5">
              <h2 className="mb-4 text-blue">Yelp Reviews</h2>
              <CardColumns>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic w-200">
                      Had to take my cat in for what my regular vet believed
                      were issues related to arthritis. However, Dr. Riecks
                      looked at the x-rays prior to me even arriving and knew
                      exactly what the problem was (torn ACL). He discussed the
                      statistics and the surgical procedure but immediately
                      recommended a conservative route (cage rest for 6-8
                      weeks). This was a huge relief as ACL surgery is far from
                      cheap and really wasn't an option for me financially. I've
                      never had a specialist recommend the conservative route
                      first. Overall, excellent experience, and they were able
                      to get me on their schedule the same week I called.
                    </CardText>
                    <CardTitle className="text-blue">
                      <h4>Danielle T.</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      This specialty vet is special! So pleased with my
                      experience here. My tiny chihuahua broke his left front
                      leg in a terrible fall, he promptly had surgery with a
                      boarded surgeon in denver. His leg was repaired with a
                      metal plate and screws. 2 weeks later, the surgery failed
                      and a second surgery was performed to place an external
                      fixator, 2 weeks later I discovered the metal pins were in
                      his carpal joint. The damage so bad, my sweet boy faced
                      amputation. I sought a second opinion. I took my dog to
                      Dr. Riecks, and after a grueling third surgery, lots of
                      rehab and proper follow through, my dog has 4 legs! I'm so
                      grateful to Colorado Canine and orthopedics, staff and
                      doctors are wonderful.They are the best
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Lora H.</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      I am not connected in any way with Colorado Canine
                      Orthopedics and Rehab., nor have I received any
                      compensation for this 5 Star review. I am the pet parent
                      of a 13 year old Labrador Retriever that I rescued at 5
                      mos. of age. She, in turn, has proven to rescue me. I
                      cannot find adequate words to express my heartfelt
                      appreciation to Dr. Todd Riecks, at Colorado Canine
                      Orthopedics for his skill in repairing a torn ACL ligament
                      in her left rear leg. I am certain that we would not have
                      been given more than a year together since her surgery,
                      had it not been for him seeing that my 12 year old pet,
                      was younger than her chronological age. I would not
                      hesitate recommending Dr. Riecks. He is caring and applies
                      his skills , if he feels it is to the benefit of his
                      canine patient. He is not about performing surgery out of
                      monetary motivation. Molly has a renewed spirit as a
                      result of the repair. Her activity level 13+ years old
                      amazes everyone. Thank you, Dr. Riecks!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Betty T.</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      I wish I could give them a million stars! Our Bernese
                      Mountain dog Emily was seen by Dr. Riecks and was
                      diagnosed with not one, but two torn ACL's in her back
                      legs.
                    </CardText>
                    <CardText className="mb-2 font-italic">
                      From the first visit we knew this was the place where we
                      wanted Emily to have her surgery. The first impression we
                      got was from Carly. She was so sweet and understanding
                      over the phone and was so helpful in finding is an
                      appointment for our busy schedules. When we got to the
                      office for our first appointment we were amazed! The
                      office was clean, bright, and inviting. They have dog beds
                      and baskets of toys in the waiting area as well as in each
                      room. As soon as we got there we were taken straight back
                      to our room and even offered something to drink! The wait
                      was a couple minutes, or at least that's how short of a
                      time it felt. We were too busy watching the adorable dog
                      videos they have playing on the big TV in our room :)
                    </CardText>
                    <CardText className="mb-2 font-italic">
                      After Emily returned from her x-rays, Dr. Riecks came in
                      and explained what he found. He did an amazing job using
                      terms we understood, showed us on a model of how her legs
                      are supposed to be compared to how they are and then what
                      he will do to fix it, and even gave us options for the
                      best success!
                    </CardText>
                    <CardText className="mb-2 font-italic">
                      While they are a little expensive, you get what you pay
                      for! They have various payment options that help people
                      even with poor credit! Janice was extremely helpful in
                      getting everything financially situated for surgery day.
                    </CardText>
                    <CardText className="mb-2 font-italic">
                      On surgery day my husband and I were a wreck! We dropped
                      Emily off and the office stayed in close contact with us
                      through the day. They let us know we are more than welcome
                      to call how ever many times to get updates. Once we picked
                      Emily up, and got her home, Dr. Riecks called to check in
                      on her. He gave us his cell phone number incase we had any
                      questions or problems which was greatly appreciated!
                    </CardText>
                    <CardText className="mb-2 font-italic">
                      Three months post-op Emily is doing phenomenal! I couldn't
                      even imagine how her life would be had we not decided to
                      do this surgery. This practice has been so good to us and
                      our sweet baby. So good that we actually have Emily's
                      second surgery scheduled next week. :)
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Ashley A.</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      I would like to update this original review. Since his
                      surgery, Max has completely healed and his knee performs
                      just as it did before. Unfortunately, we have had to bring
                      in a different dog for another surgery here - our 5 year
                      old dachshund became paralyzed due to an acute disc
                      rupture. This happened on a Sunday morning and we called
                      Dr. Bauer who had us perform a few simple tests on the
                      spot and then said to take Beans immediately into the
                      emergency care facility (in the same building as CCO) and
                      that they would see us first thing Monday morning but
                      would order heavy dose intravenous steroids at the ER
                      overnight to reduce swelling. Monday Morning, Dr. Riecks
                      said our Beans had no deep pain sensation and told us
                      straight up that her chances of walking again were not
                      good. A spinal surgery is a very serious operation and Dr.
                      Riecks once again gave us his complete attention and a
                      home phone number to call him with any questions. We also
                      had a problem with Beans not eating for several days after
                      surgery and once again we were offered an immediate follow
                      up appointment. There are just not enough words to explain
                      how grateful we are for the excellent medical care our
                      dogs have received at Colorado Canine Orthopedics.
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Shannon D.</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      My pup is doing great all thanks to the wonderful staff at
                      Colorado Canine Orthopedics and Rehab! I felt very at home
                      there and I could tell that he did too! He didn't act like
                      he was at the vet, probably due to the toys and dog beds
                      in the consultation rooms! It was especially nice to have
                      the TPLO surgery clearly explained to me ahead of time by
                      Dr. Riecks and to have such a detailed and comprehensive
                      treatment plan laid out for him after the surgery! I would
                      have been so lost without that! They made a rough time for
                      myself and my pup very easy and they come VERY highly
                      recommended from us!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Laura K.</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      Misty had double ACL surgury with Dr. Riecks about 2 1/2
                      years ago...cannot say enough fantastic things about this
                      place and Dr. Riecks. The care and concern, understanding
                      for how much we love our furbabies is outstanding. The
                      front office gave me a heartshaped worry stone when we
                      dropped off our girl for her surgury...I thought that was
                      so sweet and caring. Misty is almost 12 and she runs and
                      jumps like a young adult. Her life is 100% full because of
                      the surgury and the care of Dr. Riecks. We live 3 hours
                      away and was definitely worth driving all these miles for
                      checkups etc. to see the outcome of her surgury. We live
                      in a skitown and everyone at somepoint needs ACL surgury
                      from skiing...I would feel safe having Dr. Riecks do my
                      knee surgury!!!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Jeri P.</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText className="mb-2 font-italic">
                      This place is amazing, my dog tore her ACL and had TPLO
                      surgery by Dr. DeTora in January. I drove her from
                      California to have surgery at Colorado Canine Orthopedics.
                      I was not only impressed by the facility but by the time
                      that Dr. DeTora spent with me explaining everything from
                      the surgery to all the after care and expectations. I was
                      scared because we went straight from consult to surgery
                      that day. All the staff made me feel like my dog was in
                      the best hands and she really was. They gave me all the
                      detailed instructions and answered all my questions. She
                      is now back in California and her leg is doing amazing
                      recently went on a two mile hike with no issues!! I could
                      never repay the staff for all they did for us!
                    </CardText>
                    <CardTitle>
                      <h4 className="text-blue">Becca P.</h4>
                    </CardTitle>
                  </CardBody>
                </Card>
              </CardColumns>
            </div>
          </Col>
        </Row>
      </Container>
      <BackToTop />
      {/* </div> */}
    </Layout>
  )
}

export default Reviews
