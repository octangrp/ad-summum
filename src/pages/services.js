import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ServiceList from "../components/sections/service-list"
import { graphql } from "gatsby"
import Translator from "../utils/translator"
import AnimationWrapper from "../components/sections/animationWrapper"
import { connect } from "react-redux"

class ServicePage extends React.Component {
  render() {
    const servicesSection = Translator.process(
      this.props.lang,
      this.props.data.servicesSection.translations
    )

    return (
      <Layout>
        <SEO title="Services" />
        <AnimationWrapper>
          <ServiceList
            id="services"
            title={servicesSection.title}
            description={servicesSection.description}
            services={this.props.data.services.list}
          ></ServiceList>
        </AnimationWrapper>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(ServicePage)

export const queries = graphql`
  query services {
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
    servicesSection: wordpressPost(slug: { eq: "services-section" }) {
      translations: polylang_translations {
        lang: polylang_current_lang
        id
        title
        description: content
      }
    }
  }
`
