import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = ({ location }) => (
  <Layout>
    <SEO title="Home" />
    <Hero location={location} />
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center my-5">
          <h1>Hi people</h1>
          <p>Content</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
