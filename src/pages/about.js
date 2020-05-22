import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SectionWrapper from "../components/sections/sectionWrapper"
import ValueCard from "../components/cards/value"
import { graphql } from "gatsby"
import Translator from "../utils/translator"
import { connect } from "react-redux"
import value from "../components/cards/value"
import ReactHtmlParser from "react-html-parser"

class AboutUsPage extends React.Component {
  render() {
    const aboutUs = Translator.process(
      this.props.lang,
      this.props.data.aboutUs.translations
    )

    const valuesSection = Translator.process(
      this.props.lang,
      this.props.data.valuesSection.translations
    )

    return (
      <Layout>
        <SEO title="Team" />
        <SectionWrapper title={aboutUs.title}>
          <div class="text-lg tracking-wider leading-relaxed xs:w-100 p-0 mr-10 m-0 xs:text-sm pb-32 w-90 ml-auto">
            {ReactHtmlParser(aboutUs.description)}
          </div>
        </SectionWrapper>
        <SectionWrapper
          title={valuesSection.title}
          description={valuesSection.description}
          backgroundClass="bg-grey-lightest"
        >
          <ValueCard
            title={valuesSection.title}
            description={valuesSection.description}
            values={this.props.data.values.list}
          ></ValueCard>
        </SectionWrapper>
      </Layout>
    )
  }
}

export default AboutUsPage

export const queries = graphql`
  query about {
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
    valuesSection: wordpressPost(slug: { eq: "values-section" }) {
      translations: polylang_translations {
        lang: polylang_current_lang
        id
        title
        description: content
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
