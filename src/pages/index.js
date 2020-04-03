import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Main from "../components/sections/main"
import Service from "../components/sections/service"
import Information from "../components/sections/information"
import Team from "../components/sections/team"
import Value from "../components/sections/value"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Main
      title={data.mainSection.title}
      buttonText={data.mainSection.button.text}
    >
      {data.mainSection.description}
    </Main>
    <Service
      id="services"
      title={data.serviceCategory.title}
      services={data.services.list}
    ></Service>
    <Information
      title={data.discoverCategory.title}
      cards={data.discoverContent.list}
    />
    <Team members={data.team.members} />
    <Value id="about-us" title="Gakindi Vincent" values={data.values.list}>
      <p>Discover where your leads come from, what it costs to getthem, .</p>
    </Value>
  </Layout>
)

export default IndexPage

export const queries = graphql`
  query data {
    mainSection: wordpressPost(
      categories: { elemMatch: { slug: { eq: "main-section" } } }
    ) {
      title
      description: content
      button: acf {
        text: button_text
      }
    }
    services: allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: "services" } } } }
    ) {
      list: nodes {
        title
        content
        featured_media {
          source_url
        }
      }
    }
    serviceCategory: wordpressCategory(slug: { eq: "services" }) {
      title: name
    }
    discoverContent: allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: "discover" } } } }
    ) {
      list: nodes {
        content
      }
    }
    discoverCategory: wordpressCategory {
      title: name
    }
    team: allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: "team-member" } } } }
    ) {
      members: nodes {
        name: title
        description: content
        attributes: acf {
          position
        }
        image: featured_media {
          url: source_url
        }
      }
    }
    values: allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: "values-section" } } } }
    ) {
      list: nodes {
        title
        description: content
        image: featured_media {
          url: source_url
        }
      }
    }
    footer: wordpressPost(slug: { eq: "footer" }) {
      id
      attributes: acf {
        address
        email
        phone_number
      }
    }
  }
`
