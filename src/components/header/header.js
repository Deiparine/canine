import React from "react"
import { Link } from "gatsby"
import SideBarMenu from "../sidebar/sidebar"
import Sticky from "react-sticky-el"
import styl from "./header.module.css"
import Logo from "../../images/logo.png"
import ReviewStar from "../../images/reviewstar.png"
import Searchicon from "../../images/searchcon.png"
import Tooltip from "../../components/tooltip"
import TooltipSurgery from "../tooltip-surgery"
import TooltipDoctors from "../tooltip-doctors"
import TooltipContact from "../tooltip-contact"

import { Dropdown } from "react-bootstrap"

const Header = () => (
  <header>
    <Sticky
      className={styl.stickyWrapper}
      stickyClassName={styl.isSticky}
      stickyStyle={{ transform: "unset", zIndex: "2" }}
    >
      <div className={`header ${styl.header}`}>
        <div className="container-fluid p-0">
          <div className="row ">
            <div className="col-md-1 pr-5 align-self-center burger-wrap">
              <SideBarMenu />
            </div>
            <div className="col-md-5">
              <div className="px-5">
                <Link
                  to="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  <img src={Logo} alt="Logo" className="img-fluid logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row text-right header-row">
                <div className="col-12">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item mr-5 tooltip-wrap">
                      <img
                        className="img-fluid mb-2 mr-2"
                        src={ReviewStar}
                        alt="revstar"
                        style={{ width: "43px" }}
                      />
                      <span style={{ fontSize: "20px" }} className="mt-3">
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
                    <li className="list-inline-item phone-cta">
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
                      <li className="list-inline-item tooltip-wrap-menu">
                        <a className="tooltip-menu-nav" href="/">
                          SURGERY <i class="fa fa-caret-down"></i>
                        </a>
                        <TooltipSurgery />
                      </li>
                    </li>
                    <li className="list-inline-item tooltip-wrap-menu">
                      <a className="tooltip-menu-nav" href="/">
                        DOCTORS <i class="fa fa-caret-down"></i>
                      </a>
                      <TooltipDoctors />
                    </li>
                    <li className="list-inline-item">
                      <a href="/">TELEMEDICINE</a>
                    </li>

                    <li className="list-inline-item tooltip-wrap-menu">
                      <a className="tooltip-menu-nav" href="/">
                        DOCTORS <i class="fa fa-caret-down"></i>
                      </a>
                      <TooltipDoctors />
                    </li>

                    {/* <li className="list-inline-item tooltip-wrap-menu">
                      <a className="tooltip-menu-nav" href="/">
                        CONTACT <i class="fa fa-caret-down"></i>
                      </a>
                      <TooltipContact />
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sticky>
  </header>
)

export default Header
