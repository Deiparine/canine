import React from "react"
import { Link } from "gatsby"
// import SideBarMenu from "../sidebar/sidebar"
// import Sticky from "react-sticky-el"
// import styl from "./header.module.css"
import Logo from "../../images/logo.png"
import ReviewStar from "../../images/reviewstar.png"
import Searchicon from "../../images/searchcon.png"
import Tooltip from "../../components/tooltip"

const Header = () => (
  <header>
    {/* <Sticky
      className={styl.stickyWrapper}
      stickyClassName={styl.isSticky}
      stickyStyle={{ transform: "unset", zIndex: "2" }}
    > */}
    {/* <div className={`header ${styl.header}`}> */}
    <div className="container-fluid header">
      <div className="row py-3">
        <div className="col-md-6">
          <div className="px-5">
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row pr-5 text-right">
            <div className="col-12">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item mr-5 tooltip-wrap">
                  <img
                    className="img-fluid mb-0 mr-2"
                    src={ReviewStar}
                    alt="revstar"
                    style={{ width: "43px" }}
                  />
                  <span style={{ fontSize: "15px" }} className="mt-2">
                    REVIEWS
                  </span>
                  <Tooltip />
                </li>
                <li className="list-inline-item search-wrap">
                  <img
                    className="img-fluid mb-0 mr-2"
                    src={Searchicon}
                    alt="revstar"
                    style={{ width: "23px" }}
                  />
                  <input type="text" name="search" />
                </li>
                <li className="list-inline-item">
                  <a className="ml-3" href="tel:719-264-6666">
                    (719)264-6666
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 header_nav mt-4">
              <ul className="list-inline list-unstyled ml-0">
                <li className="list-inline-item">
                  <a href="/">HOME</a>
                </li>
                <li className="list-inline-item">
                  <a href="/">Surgery</a>
                </li>
                <li className="list-inline-item">
                  <a href="/">Doctors</a>
                </li>
                <li className="list-inline-item">
                  <a href="/">TELEMEDICINE</a>
                </li>
                <li className="list-inline-item">
                  <a href="/">HOSPITAL TOUR</a>
                </li>
                <li className="list-inline-item">
                  <a href="/">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
    {/* </Sticky> */}
  </header>
)

export default Header
