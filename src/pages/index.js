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
import Translator from "../utils/translator"
import { connect } from "react-redux"

class IndexPage extends React.Component {
  render() {
    const mainSection = Translator.process(
      this.props.lang,
      this.props.data.mainSection.translations
    )
    const aboutUs = Translator.process(
      this.props.lang,
      this.props.data.aboutUs.translations
    )

    return (
      <Layout>
        <SEO title="Home" />
        <AnimationWrapper>
          <Main title={mainSection.title} buttonText={mainSection.button.text}>
            {mainSection.description}
          </Main>
        </AnimationWrapper>
        <AnimationWrapper>
          <More id="about-us" title={aboutUs.title}>
            {aboutUs.description}
          </More>
        </AnimationWrapper>
        <AnimationWrapper>
          <Service
            id="services"
            title={this.props.data.serviceCategory.title}
            services={this.props.data.services.list}
          ></Service>
        </AnimationWrapper>
        <AnimationWrapper>
          <Team id="team" members={this.props.data.team.members} />
        </AnimationWrapper>
        <AnimationWrapper>
          <Value
            title="Gakindi Vincent"
            values={this.props.data.values.list}
          ></Value>
        </AnimationWrapper>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(IndexPage)

export const queries = graphql`
  query data {
    mainSection: wordpressPost(
      categories: { elemMatch: { slug: { eq: "main-section" } } }
    ) {
      translations: polylang_translations {
        lang: polylang_current_lang
        id
        title
        description: content
        button: acf {
          text: button_text
        }
      }
    }
    aboutUs: wordpressPost(slug: { eq: "about-us" }) {
      translations: polylang_translations {
        lang: polylang_current_lang
        id
        title
        description: content
        button: acf {
          text: button_text
        }
      }
    }
    services: allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: "services" } } } }
    ) {
      list: nodes {
        translations: polylang_translations {
          lang: polylang_current_lang
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
        translations: polylang_translations {
          lang: polylang_current_lang
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
    }
    values: allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: "values-section" } } } }
    ) {
      list: nodes {
        translations: polylang_translations {
          lang: polylang_current_lang
          title
          description: content
          image: featured_media {
            url: source_url
          }
        }
      }
    }
    footer: wordpressPost(slug: { eq: "footer" }) {
      translations: polylang_translations {
        lang: polylang_current_lang
        id
        title
        description: content
        button: acf {
          text: button_text
        }
      }
    }
  }
`
