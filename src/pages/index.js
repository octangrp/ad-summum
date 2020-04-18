import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Main from "../components/sections/main"
import More from "../components/sections/more"
import Service from "../components/sections/service"
import AnimationWrapper from "../components/sections/animationWrapper"

import Team from "../components/sections/team"
import Value from "../components/sections/value"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <AnimationWrapper>
      <Main
        title={data.mainSection.title}
        buttonText={data.mainSection.button.text}
      >
        {data.mainSection.description}
      </Main>
    </AnimationWrapper>
    <AnimationWrapper>
      <More id="about-us" title={data.aboutUs.title}>
        {data.aboutUs.description}
      </More>
    </AnimationWrapper>
    <AnimationWrapper>
      <Service
        id="services"
        title={data.serviceCategory.title}
        services={data.services.list}
      ></Service>
    </AnimationWrapper>
    <AnimationWrapper>
      <Team id="team" members={data.team.members} />
    </AnimationWrapper>
    <AnimationWrapper>
      <Value title="Gakindi Vincent" values={data.values.list}>
        <p>Discover where your leads come from, what it costs to getthem, .</p>
      </Value>
    </AnimationWrapper>
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
    aboutUs: wordpressPost(slug: { eq: "about-us" }) {
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
        id
        slug
        title
        content
        image: featured_media {
          url: source_url
        }
        attributes: acf {
          button_text
          summary
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
        id
        slug
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
