import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Main from "../components/sections/main"
import Service from "../components/sections/service"
import Information from "../components/sections/information"
import Team from "../components/sections/team"
import Value from "../components/sections/value"
import Member from "../components/sections/member"
import Footer from "../components/sections/footer"




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main />
    <Service />
    <Information />
    <Team />
    <Value />
    <Member />
    <Footer />
  
  </Layout>
)

export default IndexPage
