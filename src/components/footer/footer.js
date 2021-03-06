import React from "react"
import Message from "../../images/message.png"
import ReviewStar from "../../images/stars-group.svg"

import ReviewsTable from "../../components/reviews-table"

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-4 col-lg-4 col-xl-5 contact-f">
            <div className="footer-mobile-padding">
              <h3>CONTACT US</h3>
              <p>
                Colorado Canine Orthopedics
                <br />
                5528 North Nevada
                <br />
                Colorado Springs, CO 80918
              </p>
              <p>
                Tel: <a href="tel:719-264-6666">719-264-6666</a> <br /> Email:{" "}
                <a href="mailto:hello@canineortho.com">hello@canineortho.com</a>
              </p>
              <div className="connect mt-4">
                {" "}
                <h3 className="mr-3 mt-2">
                  CONNECT WITH US!
                  <i class="fa fa-facebook ml-2 mr-2 social-icon"></i>
                  <i class="fa fa-instagram mr-2 social-icon"></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-3 reviews-f">
            <div className="footer-mobile-padding">
              <div className="review-f-heading">
                <h3>
                  <img
                    className="img-fluid mb-0 mr-2"
                    src={ReviewStar}
                    alt="revstar"
                    style={{ width: "50px" }}
                  />
                  REVIEWS
                </h3>
              </div>
              <div className="reviews-table">
                <ReviewsTable />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 consultation-f text-white ">
            <div className="d-flex align-items-center">
              <div className="consult-img-cont float-left">
                <img src={Message} alt="" />
              </div>

              <h3 className="pl-3 mb-0"> CONSULTATION</h3>
            </div>
            <p className="mt-3 text-white">
              Call our office today and speak with one of our Pet Care
              Coordinators to schedule a consultation.
            </p>

            <div className="row text-center footer-btn-row">
              <div className="col-5 col-md-12 col-xl-5 p-0">
                <div className="spacer h-100">
                  <button
                    className="btn-footer w-100 h-100"
                    href="tel:719-264-6666"
                  >
                    719-264-6666
                  </button>
                </div>
              </div>
              <div className="col-7 col-md-12 col-xl-7 p-0">
                <div className="spacer h-100">
                  <button className="btn-footer w-100 h-100">
                    SCHEDULE ONLINE
                  </button>
                </div>
              </div>
              <div className="col-12 p-0">
                <div className="spacer">
                  <button className="btn-footer w-100">
                    TELEMEDICINE APPOINTMENT
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="button-blocks">
              <a className="btn btn-primary" href="tel:719-264-6666">
                719-264-6666
              </a>
              <button className="btn btn-primary">SCHEDULE ONLINE</button>
              <button className="btn btn-primary">
                TELEMEDICINE APPOINTMENT
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          © {new Date().getFullYear()} by Colorado Canine Orthopedics Designed
          and Powered by 
          <a
            class="webriq-link"
            target="_blank"
            href="https://itspecialists.net/"
            rel="noopener noreferrer"
          >
            IT Specialists, Inc.
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
