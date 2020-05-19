import React from "react"
import ReviewStar from "../../images/reviewstar.png"
import Facebook from "../../images/facebook.png"
import Google from "../../images/google.png"
import Yelp from "../../images/yelp.png"
import Angies from "../../images/angies.png"
import BBB from "../../images/bbb.png"
import Message from "../../images/message.png"

const Footer = () => {
  return (
    <footer className="">
      <div className="container-fluid main-footer">
        <div className="row">
          <div className="col-md-4 contact-f pl-5">
            <h3>CONTACT US</h3>
            <p>
              Colorado Canine Orthopedics 5528 North Nevada Colorado Springs, CO
              80918
            </p>
            <p>
              Tel: <a href="tel:719-264-6666">719-264-6666</a> <br /> Email:{" "}
              <a href="mailto:hello@canineortho.com">hello@canineortho.com</a>
            </p>
            <h3>CONNECT WITH US! </h3>
          </div>
          <div className="col-md-4 reviews-f">
            <div className="review-f-heading">
              <img
                className="img-fluid mb-0 mr-2"
                src={ReviewStar}
                alt="revstar"
                style={{ width: "50px" }}
              />
              <span style={{ fontSize: "30px" }} className="mt-2">
                REVIEWS
              </span>
            </div>

            <ul className="list-unstyled m-0 reviews-list">
              <li>
                <img src={Facebook} alt="Facebook" />
                <small style={{ position: "relative" }}>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <small className="star-value">4.9</small>
                </small>
                <span>198 reviews</span>
              </li>
              <li>
                <img src={Google} alt="Google" />
                <small style={{ position: "relative" }}>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <small className="star-value">4.9</small>
                </small>
                <span>270 reviews</span>
              </li>
              <li>
                <img src={Yelp} alt="yelp" />
                <small style={{ position: "relative" }}>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <small className="star-value">4.9</small>
                </small>
                <span>23 reviews</span>
              </li>
              <li>
                <img src={Angies} alt="Angies" />
                <span>A</span>
                <span>63 reviews</span>
              </li>
              <li>
                <img src={BBB} alt="Angies" />
                <span>A+</span>
              </li>
            </ul>
          </div>
          <div className="col-md-4 consultation-f pr-5 text-white">
            <div className="d-flex">
              <img src={Message} alt="Angies" />
              <h3 className="ml-3">CONSULTATION</h3>
            </div>
            <p className="mt-3 text-white">
              Call our office today and speak with one of our Pet Care
              Coordinators to schedule a consultation.
            </p>
            <div className="button-blocks">
              <a className="btn btn-primary" href="tel:719-264-6666">
                719-264-6666
              </a>
              <button className="btn btn-primary">SCHEDULE ONLINE</button>
              <button className="btn btn-primary">
                TELEMEDICINE APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer px-5">
        © {new Date().getFullYear()} by Colorado Canine Orthopedics
        <span className="float-right">
          Designed and Powered by 
          <a
            class="webriq-link"
            target="_blank"
            href="https://itspecialists.net/"
            rel="noopener noreferrer"
          >
            IT Specialists, Inc.
          </a>
        </span>
      </div>
    </footer>
  )
}
export default Footer
