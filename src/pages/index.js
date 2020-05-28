import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
// import MySwiper from "../components/swiper/swiper"

// images
// import aboutImg from "../images/about-img.png"
// import pawSvg from "../images/dog.svg"
// import curved from "../images/curved.svg"
// import syringes from "../images/syringes.svg"
// import reviewPp from "../images/review-pp-1.jpg"

const IndexPage = ({ location }) => (
  <Layout>
    <SEO title="Home" />
    <Hero location={location} />
  </Layout>
)

export default IndexPage
