import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Main from "../components/sections/main"
import Service from "../components/sections/service"
import Information from "../components/sections/information"
import Team from "../components/sections/team"
import Value from "../components/sections/value"
import Footer from "../components/sections/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main title="Economics, Financial, Legal and IT axperts">
      <p>
        {" "}
        Discover where your leads come from, what it costs to getthem, and how
        they interact with your website before contacting you. Discover where
        your leads come from, them.
      </p>
    </Main>
    <Service id="services" title="What We Do"></Service>
    <Information />
    <Team />
    <Value id="about-us" title="Gakindi Vincent">
      <p>Discover where your leads come from, what it costs to getthem, .</p>
    </Value>
    <Footer />
  </Layout>
)

export default IndexPage
