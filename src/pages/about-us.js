import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

import Doghead from "../images/doghead.png"

import TPLO from "../images/tplo.png"
import welcomeMobile from "../images/welcome-mobile.png"

const AboutPage = ({ location }) => (
  <Layout>
    <SEO title="Home" />

    <div className="container about-headline">
      <div className="row">
        <div className="col-md-8">
          <img
            src={Doghead}
            alt="Logo"
            className="w-100 dog-head-img"
            style={{ marginTop: "-100px" }}
          />
          <img
            src={TPLO}
            alt="Welcome"
            className="tplo"
            style={{ marginTop: "-100px" }}
          />{" "}
        </div>
        <div className="col-md-4 w-100 p-relative"> </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
