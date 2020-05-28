import React from "react"
import { Link } from "gatsby"
import SideBarMenu from "../sidebar/sidebar"
import Sticky from "react-sticky-el"
import Logo from "../../images/logo.svg"
import ReviewStars from "../../images/stars-group.svg"
import Searchicon from "../../images/searchcon.png"
import TooltipReviews from "../../components/tooltip-reviews"
import TooltipSurgery from "../tooltip-surgery"
import TooltipDoctors from "../tooltip-doctors"
import TooltipContact from "../tooltip-contact"
import Search from "../search"
import "./header.scss"

const allSitePage = {
  edges: [
    {
      node: {
        id: "SitePage /404/",
        title: "404",
        path: "/404",
      },
    },
    {
      node: {
        id: "SitePage /about-us/",
        title: "About Us",
        path: "/about-us",
      },
    },
    {
      node: {
        id: "SitePage /contact/",
        title: "Contact Us",
        path: "/contact",
      },
    },
  ],
}

const Header = () => (
  <header>
    <Sticky
      className="sticky-wrapper"
      stickyClassName="is-sticky"
      stickyStyle={{ transform: "unset", zIndex: "99" }}
    >
      <div className="header">
        <div className="mobile-header">
          <div className="container-fluid">
            <SideBarMenu />
            <div className="mobile-logo px-md-3">
              <Link to="/">
                <img
                  src={Logo}
                  className="w-100"
                  alt="Colorado Canine Orthopedics"
                />
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="d-block mt-2 text-right">
              <a href="tel:719.264.6666" className="header-phone">
                (719) 264.6666
              </a>
            </div>
          </div>
        </div>

        <div className="desktop-header">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-6">
                <Link to="/">
                  <img src={Logo} className="header-logo-img" alt="Logo" />
                </Link>
              </div>
              <div className="col-6" style={{ position: "relative" }}>
                <div className="d-block pt-3">
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <div className="header-reviews tooltip-wrap">
                        <div className="d-flex">
                          <img
                            className="img-fluid header-stars"
                            src={ReviewStars}
                            alt=""
                          />{" "}
                          <span className="header-reviews-title mt-1">
                            Reviews
                          </span>
                        </div>
                        <TooltipReviews />
                      </div>
                    </div>
                    <div className="">
                      <div className="header-search">
                        <img className="search-icon" src={Searchicon} alt="" />
                        <Search data={allSitePage} />
                      </div>
                    </div>
                    <div className=" mt-2 text-right">
                      <a href="tel:719.264.6666" className="header-phone">
                        (719) 264.6666
                      </a>
                    </div>
                  </div>
                </div>
                <div className="header-nav-wrapper">
                  <ul class="nav justify-content-between">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="tooltip-wrap-menu">
                      <Link className="tooltip-menu-nav">
                        Surgery <i className="fa fa-caret-down" />
                      </Link>
                      <TooltipSurgery />
                    </li>
                    <li className="tooltip-wrap-menu">
                      <Link className="tooltip-menu-nav">
                        Doctors <i className="fa fa-caret-down" />
                      </Link>
                      <TooltipDoctors />
                    </li>
                    <li>
                      <Link to="/">Telemedicine</Link>
                    </li>
                    <li className="tooltip-wrap-menu">
                      <Link className="tooltip-menu-nav">
                        Contact <i className="fa fa-caret-down" />
                      </Link>
                      <TooltipContact />
                    </li>
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
