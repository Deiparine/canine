import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import MySwiper from "../components/swiper/swiper"

// images
import aboutImg from "../images/about-img.png"
import pawSvg from "../images/dog.svg"
import curved from "../images/curved.svg"
import syringes from "../images/syringes.svg"
import reviewPp from "../images/review-pp-1.jpg"

const IndexPage = ({ location }) => (
  <Layout>
    <SEO title="Home" />
    <Hero location={location} />
    <div class="container padding-200">
      <div class="row">
        <div class="col-md-6">
          <img class="h-100 w-100" src={aboutImg} />
        </div>
        <div class="col-md-6 about-content text-left vertical-align">
          <div>
            <h2 class="mb-4 mt-0">COLORADO CANINE ORTHOPEDICS</h2>
            <p class="mb-4">
              Colorado Canine Orthopedics and Rehab is open and here to help if
              your dog has an orthopedic problem. We offer free telemedicine
              appointments for routine canine orthopedic problems such as ACL
              tears or hip dysplasia and are scheduling new surgery cases after
              April 26th. Our operating schedule is open and available for pets
              with fractures and general orthopedic trauma and small breed dogs
              with intervertebral disk disease for immediate surgery if needed.
            </p>
            <button
              class="btn btn-primary btn-global hvr-rectangle-out hvr-box-shadow-outset"
              type="button"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid padding-200 svc-section">
      <div class="container">
        <h2 class="text-center mt-0 mb-4">OUR SERVICES</h2>
        <p class="text-center mb-5 sub-heading">
          At Colorado Canine Orthopedics at the Veterinary Specialty Center of
          Southern Colorado, our Veterinary Surgeons are committed to providing
          your pet with the best canine orthopedic surgical healthcare
          available.
        </p>
        <div class="row">
          <div class="col-md-4">
            <div class="svc-container">
              <div class="svc-img-1">
                <div class="svc-icon-container green-clr">
                  <img class="svc-icon" src={pawSvg} />
                </div>
                <img class="curve-svg" src={curved} />
              </div>
              <div class="svc-content p-4">
                <h5 class="mt-2">ACL Tear TPLO</h5>
                <p>
                  A TPLO is the optimal treatment for dogs with ACL tears of all
                  degrees.
                </p>
                <a class="hvr-icon-forward mr-2" href="#">
                  Learn More
                  <i class="fa fa-caret-right hvr-icon ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="svc-container">
              <div class="svc-img-2">
                <div class="svc-icon-container blue-clr">
                  <img class="svc-icon" src={pawSvg} />
                </div>
                <img class="curve-svg" src={curved} />
              </div>
              <div class="svc-content p-4">
                <h5 class="mt-2">Canine Hip Replacement</h5>
                <p>
                  Canine Total Hip Replacement is a very successful procedure
                  for dogs with hip dysplasia.
                </p>
                <a class="hvr-icon-forward mr-2" href="#">
                  Learn More
                  <i class="fa fa-caret-right hvr-icon ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="svc-container">
              <div class="svc-img-3">
                <div class="svc-icon-container orange-clr">
                  <img class="svc-icon" src={pawSvg} />
                </div>
                <img class="curve-svg" src={curved} />
              </div>
              <div class="svc-content p-4">
                <h5 class="mt-2">Canine Disk Herniation Repair</h5>
                <p>
                  We are experts in spinal surgery for dogs who have
                  Intervertebral Disc Disease.
                  <br />
                </p>
                <a class="hvr-icon-forward mr-2" href="#">
                  Learn More
                  <i class="fa fa-caret-right hvr-icon ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-12 mt-5 text-center">
            <button
              class="btn btn-primary btn-global hvr-rectangle-out hvr-box-shadow-outset"
              type="button"
            >
              View All&nbsp;
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid padding-200 mid-section text-center">
      <div class="container mx-auto">
        <img class="paw-icon" src={pawSvg} />
        <h2 class="text-white mx-auto">
          We look forward to providing the highest level of orthopedic care so
          your dog can return to an active, pain free lifestyle.
        </h2>
      </div>
    </div>

    <div class="container-fluid padding-200 svc-section">
      <div class="container">
        <h2 class="text-center mt-0 mb-4">OUR DOCTORS</h2>
        <p class="text-center mb-5 sub-heading">
          A veterinary specialist is someone who completes three to
          four&nbsp;years of additional&nbsp;training, usually in the form of an
          internship and residency programs, after graduating from veterinary
          school.
        </p>
        <div class="row">
          <div class="col-md-3">
            <div class="dctrs-container">
              <div class="dctrs-img-1">
                <div class="dctrs-icon-container green-clr">
                  <img class="svc-icon" src={syringes} />
                </div>
                <img class="curve-svg" src={curved} />
              </div>
              <div class="dctrs-content p-4">
                <h5 class="mt-2">Michael Bauer, DVM</h5>
                <p>Diplomate, American College of Veterinary Surgeons</p>
                <a class="hvr-icon-forward mr-2" href="#">
                  Read More<i class="fa fa-caret-right hvr-icon ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="dctrs-container">
              <div class="dctrs-img-2">
                <div class="dctrs-icon-container blue-clr">
                  <img class="svc-icon" src={syringes} />
                </div>
                <img class="curve-svg" src={curved} />
              </div>
              <div class="dctrs-content p-4">
                <h5 class="mt-2">
                  Michael DeTora, DVM
                  <br />
                </h5>
                <p>
                  Diplomate, American College of Veterinary Surgeons
                  <br />
                </p>
                <a class="hvr-icon-forward mr-2" href="#">
                  Read More<i class="fa fa-caret-right hvr-icon ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="dctrs-container">
              <div class="dctrs-img-3">
                <div class="dctrs-icon-container orange-clr">
                  <img class="svc-icon" src={syringes} />
                </div>
                <img class="curve-svg" src={curved} />
              </div>
              <div class="dctrs-content p-4">
                <h5 class="mt-2">
                  Sam Franklin, MS, DVM, PhD
                  <br />
                </h5>
                <p>
                  Diplomate, American College of Veterinary Surgeons
                  <br />
                </p>
                <a class="hvr-icon-forward mr-2" href="#">
                  Read More<i class="fa fa-caret-right hvr-icon ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="dctrs-container">
              <div class="dctrs-img-4">
                <div class="dctrs-icon-container purple-clr">
                  <img class="svc-icon" src={syringes} />
                </div>
                <img class="curve-svg" src={curved} />
              </div>
              <div class="dctrs-content p-4">
                <h5 class="mt-2">
                  Todd Riecks, DVM
                  <br />
                </h5>
                <p>
                  Diplomate, American College of Veterinary Surgeons
                  <br />
                </p>
                <a class="hvr-icon-forward mr-2" href="#">
                  Read More<i class="fa fa-caret-right hvr-icon ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-12 mt-5 text-center">
            <button
              class="btn btn-primary btn-global hvr-rectangle-out hvr-box-shadow-outset"
              type="button"
            >
              See All
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid map-section p-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12418.749818080616!2d-104.81756!3d38.908262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d2883801ce87f7f!2sColorado%20Canine%20Orthopedics%20%26%20Rehab!5e0!3m2!1sen!2sus!4v1589623752502!5m2!1sen!2sus"
        width="100%"
        height="550"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>

    <div class="contact-clean padding-200">
      <div class="container">
        <div class="row flex-column-reverse flex-md-row">
          <div class="col-md-6 review-section text-white">
            <h2>Reviews</h2>
            <MySwiper slidesperview={1}>
              <div className="testimonial-content text-white">
                <p className="text-white">
                  Seriously awesome place. My dog had a bad broken femur and he
                  first place I called told me they couldn't take him till the
                  next day or maybe even after the weekend, I was freaking out
                  thinking my pup would be in pain that long! I called canine
                  ortho and got him in an hour later and he was in surgery that
                  same evening. I'm so happy with my experience, the staff were
                  all incredibly nice and helpful and my dog's healing up really
                  nicely.
                  <br />
                </p>
                <div class="row pt-3">
                  <div class="col-md-2">
                    <img class="review-pp" src={reviewPp} />
                  </div>
                  <div class="col-md-10">
                    <h5 class="mt-1 mb-0">
                      <strong>Allison S.</strong>
                      <br />
                    </h5>
                    <h6 class="mt-0">Escondido, San Diego, CA</h6>
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <p className="text-white">
                  Seriously awesome place. My dog had a bad broken femur and he
                  first place I called told me they couldn't take him till the
                  next day or maybe even after the weekend, I was freaking out
                  thinking my pup would be in pain that long! I called canine
                  ortho and got him in an hour later and he was in surgery that
                  same evening. I'm so happy with my experience, the staff were
                  all incredibly nice and helpful and my dog's healing up really
                  nicely.
                  <br />
                </p>
                <div class="row pt-3">
                  <div class="col-md-2">
                    <img class="review-pp" src={reviewPp} />
                  </div>
                  <div class="col-md-10">
                    <h5 class="mt-1 mb-0">
                      <strong>Allison S.</strong>
                      <br />
                    </h5>
                    <h6 class="mt-0">Escondido, San Diego, CA</h6>
                  </div>
                </div>
              </div>
            </MySwiper>

            {/* <div class="carousel slide" data-ride="carousel" id="carousel-1">
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active">
                                <p>Seriously awesome place. My dog had a bad broken femur and he first place I called told me they couldn't take him till the next day or maybe even after the weekend, I was freaking out thinking my pup would be in pain that
                                    long! I called canine ortho and got him in an hour later and he was in surgery that same evening. I'm so happy with my experience, the staff were all incredibly nice and helpful and my dog's healing up really nicely.</p>
                                <div
                                    class="row pt-3">
                                    <div class="col-md-2"><img class="review-pp" src={reviewPp} /></div>
                                    <div class="col-md-10">
                                        <h5 class="mt-1 mb-0"><strong>Allison S.</strong><br /></h5>
                                        <h6 class="mt-0">Escondido, San Diego, CA</h6>
                                    </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <p>Seriously awesome place. My dog had a bad broken femur and he first place I called told me they couldn't take him till the next day or maybe even after the weekend, I was freaking out thinking my pup would be in pain that long!
                                I called canine ortho and got him in an hour later and he was in surgery that same evening. I'm so happy with my experience, the staff were all incredibly nice and helpful and my dog's healing up really nicely.</p>
                            <div
                                class="row pt-3">
                                <div class="col-md-2"><img class="review-pp" src={reviewPp} /></div>
                                <div class="col-md-10">
                                    <h5 class="mt-1 mb-0"><strong>Allison S.</strong><br /></h5>
                                    <h6 class="mt-0">Escondido, San Diego, CA</h6>
                                </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <p>Seriously awesome place. My dog had a bad broken femur and he first place I called told me they couldn't take him till the next day or maybe even after the weekend, I was freaking out thinking my pup would be in pain that long!
                            I called canine ortho and got him in an hour later and he was in surgery that same evening. I'm so happy with my experience, the staff were all incredibly nice and helpful and my dog's healing up really nicely.</p>
                        <div class="row pt-3">
                            <div class="col-md-2"><img class="review-pp" src={reviewPp} /></div>
                            <div class="col-md-10">
                                <h5 class="mt-1 mb-0"><strong>Allison S.</strong><br /></h5>
                                <h6 class="mt-0">Escondido, San Diego, CA</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button"
                        data-slide="next"><span class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a></div>
                <ol class="carousel-indicators">
                    <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-1" data-slide-to="1"></li>
                    <li data-target="#carousel-1" data-slide-to="2"></li>
                </ol> */}
          </div>
          <div class="col-md-6">
            <form class="shadow" method="post">
              <h2 class="text-center">Contact us</h2>
              <div class="form-group">
                <input
                  class="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  name="message"
                  placeholder="Message"
                  rows="14"
                ></textarea>
              </div>
              <div class="form-group">
                <button
                  class="btn btn-primary btn-global w-100 hvr-rectangle-out hvr-box-shadow-outset"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
