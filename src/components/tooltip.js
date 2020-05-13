import React from "react"
import ReviewStar from "../images/reviewstar-white.png"
import Facebook from "../images/facebook-white.png"
import Google from "../images/google-white.png"
import Yelp from "../images/yelp-white.png"
import Angies from "../images/angies-white.png"
import BBB from "../images/bbb-white.png"

const Tooltip = () => {
  return (
    <div className="reviews-f tooltiptext">
      <div className="review-f-heading ml-3">
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
          <img src={BBB} alt="yelp" />
          <span>A+</span>
        </li>
      </ul>
    </div>
  )
}
export default Tooltip
