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

    const servicesSection = Translator.process(
      this.props.lang,
      this.props.data.servicesSection.translations
    )

    const teamSection = Translator.process(
      this.props.lang,
      this.props.data.teamSection.translations
    )

    const valuesSection = Translator.process(
      this.props.lang,
      this.props.data.valuesSection.translations
    )

    return (
      <Layout>
        <SEO title="Home" />
        <AnimationWrapper>
          <Main
            title={mainSection.title}
            buttonText={mainSection.button.text}
            image={mainSection.image}
          >
            {mainSection.description}
          </Main>
        </AnimationWrapper>
        <AnimationWrapper>
          <Service
            id="services"
            title={servicesSection.title}
            description={servicesSection.description}
            image={servicesSection.image}
          ></Service>
        </AnimationWrapper>
        <AnimationWrapper>
          <Team
            id="team"
            title={teamSection.title}
            description={teamSection.description}
            caption={teamSection.caption}
            image={teamSection.image}
          />
        </AnimationWrapper>
        <AnimationWrapper>
          <More id="about-us" title={aboutUs.title}>
            {aboutUs.description}
          </More>
        </AnimationWrapper>

        {/* <AnimationWrapper>
          <Value
            title={valuesSection.title}
            description={valuesSection.description}
            values={this.props.data.values.list}
          ></Value>
        </AnimationWrapper> */}
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
        image: featured_media {
          url: source_url
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
    servicesSection: wordpressPost(slug: { eq: "services-section" }) {
      translations: polylang_translations {
        lang: polylang_current_lang
        id
        title
        description: content
        button: acf {
          text: button_text
        }
        image: featured_media {
          url: source_url
        }
      }
    }
    teamSection: wordpressPost(slug: { eq: "team-section" }) {
      translations: polylang_translations {
        lang: polylang_current_lang
        id
        title
        description: content
        button: acf {
          text: button_text
        }
        caption: acf {
          title: picture_title
          subtitle: picture_subtitle
        }
        image: featured_media {
          url: source_url
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
