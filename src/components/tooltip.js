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
      <div id="triangle-up-2"></div>
      <ul className="list-unstyled m-0 reviews-list tooltip-reviews">
        <li>
          <img src={Facebook} alt="Facebook" />
          <small style={{ position: "relative" }}>
            <small className="star-value mr-2">4.9</small>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </small>
          <span>198 reviews</span>
        </li>
        <li>
          <img src={Google} alt="Google" />
          <small style={{ position: "relative" }}>
            <small className="star-value mr-2">4.9</small>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </small>
          <span>270 reviews</span>
        </li>
        <li>
          <img src={Yelp} alt="yelp" />
          <small style={{ position: "relative" }}>
            <small className="star-value mr-2">4.9</small>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
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
