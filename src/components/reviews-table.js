import React from "react"
import ReviewStar from "../images/stars-group.svg"
import Facebook from "../images/facebook.svg"
import Google from "../images/google.svg"
import Yelp from "../images/yelp.svg"
import Angies from "../images/angies-list.svg"
import BBB from "../images/BBB.svg"
import Message from "../images/message.png"

// review stars
import FiveStars from "../images/review-stars/5-stars.svg"
import FourSomethingStars from "../images/review-stars/4-something-stars.svg"

const ReviewsTable = () => {
  return (
    <div className="reviews-table">
      <div className="row no-gutters review-row">
        <div className="col-3 col-md-2 col-lg-4">
          <img src={Facebook} alt="Facebook" height="15px" />
        </div>
        <div className="col-5 col-md-5 col-lg-3 pl-4 text-right text-md-left">
          <div className="d-inline-block text-left d-md-block text-md-center">
            <span className="star-value pl-2 pr-2 pl-md-4">4.9</span>
          </div>
          <div className="d-inline-block text-left d-md-block text-md-center">
            <img
              src={FourSomethingStars}
              className="review-stars"
              alt="★★★★★"
            />
          </div>
        </div>
        <div className="col-4 col-md-5 text-right">
          <span className="review-count">198 reviews</span>
        </div>
      </div>
      <div className="row no-gutters review-row">
        <div className="col-3 col-md-2 col-lg-4">
          <img src={Google} alt="Google" height="19px" />
        </div>
        <div className="col-5 col-md-5 col-lg-3 pl-4 text-right text-md-left">
          <div className="d-inline-block text-left d-md-block text-md-center">
            <span className="star-value pl-2 pr-2 pl-md-4">4.8</span>
          </div>
          <div className="d-inline-block text-left d-md-block text-md-center">
            <img
              src={FourSomethingStars}
              className="review-stars"
              alt="★★★★★"
            />
          </div>
        </div>
        <div className="col-4 col-md-5 text-right">
          <span className="review-count">270 reviews</span>
        </div>
      </div>
      <div className="row no-gutters review-row">
        <div className="col-3 col-md-2 col-lg-4">
          <img src={Yelp} alt="yelp" height="24px" />
        </div>
        <div className="col-5 col-md-5 col-lg-3 pl-4 text-right text-md-left">
          <div className="d-inline-block text-left d-md-block text-md-center">
            <span className="star-value pl-2 pr-2 pl-md-4">5</span>
          </div>
          <div className="d-inline-block text-left d-md-block text-md-center">
            <img src={FiveStars} className="review-stars" alt="★★★★★" />
          </div>
        </div>
        <div className="col-4 col-md-5 text-right">
          <span className="review-count">23 reviews</span>
        </div>
      </div>
      <div className="row no-gutters justify-content-between review-row">
        <div className="col-3 col-md-2 col-lg-4">
          <img src={Angies} alt="Angie's List" height="15px" />
        </div>
        <div className="col-5 text-left col-md-3 pl-4">
          <span className="letter-rating">A</span>
        </div>
        <div className="col-4 col-md-5 text-right">
          <span className="review-count">63 reviews</span>
        </div>
      </div>
      <div className="row no-gutters justify-content-between review-row">
        <div className="col-3 col-md-2 col-lg-4">
          <img src={BBB} alt="BBB" height="17px" />
        </div>
        <div className="col-5 text-left col-md-3 pl-4">
          <span className="letter-rating">A+</span>
        </div>
        <div className="col-4 col-md-5 text-right"></div>
      </div>
    </div>
  )
}
export default ReviewsTable
