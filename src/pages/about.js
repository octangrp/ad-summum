import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SectionWrapper from "../components/sections/sectionWrapper"
import ValuesSection from "../components/sections/values"
import { graphql } from "gatsby"
import Translator from "../utils/translator"
import ReactHtmlParser from "react-html-parser"
import MissionCard from "src/components/cards/mission"

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
          <div class="text-lg lg:text-sm tracking-wider leading-relaxed xs:w-100 p-0 mr-10 m-0 xs:text-sm pb-32 w-95 ml-auto">
            {ReactHtmlParser(aboutUs.description)}
          </div>
        </SectionWrapper>
        <ValuesSection
          title={valuesSection.title}
          description={valuesSection.description}
          values={this.props.data.values.list}
        ></ValuesSection>

        <SectionWrapper
          title="Our Mission"
          description="ASC Ltd brings together with professional skills and
        extensive experience in the areas of central banking,
        commercial banking and financial system in general, legal
        issues and those related to information technology and
        organization."
        >
          <div class="w-95 ml-auto relative bg-white">
            <div class="flex pt-12">
              {this.props.data.strategies.list.map((item, index) => (
                <MissionCard key={index} details={item} />
              ))}
            </div>
          </div>
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
    strategies: allWordpressPost(
      filter: {
        categories: { elemMatch: { slug: { eq: "company-strategy" } } }
      }
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
