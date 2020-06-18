import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Main from "../components/sections/main"
import More from "../components/sections/more"
import ServiceList from "../components/sections/service-list"
import Service from "../components/sections/service"
import AnimationWrapper from "../components/sections/animationWrapper"
import SectionWrapper from "../components/sections/sectionWrapper"

import TeamList from "../components/sections/team-list"
import Founders from "src/components/sections/founders"
import { graphql } from "gatsby"
import Translator from "../utils/translator"
import { connect } from "react-redux"
import ReactHtmlParser from "react-html-parser"
import ValuesSection from "../components/sections/values"
import MissionCard from "src/components/cards/mission"

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

    const founders = Translator.process(
      this.props.lang,
      this.props.data.founders.translations
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
            image={this.props.data.mainSection.image}
          >
            {mainSection.description}
          </Main>
        </AnimationWrapper>
        <AnimationWrapper>
          <Service
            id="services"
            title={servicesSection.title}
            description={servicesSection.description}
            image={this.props.data.servicesSection.image}
          ></Service>
          <ServiceList
            title={servicesSection.title}
            description={servicesSection.description}
            services={this.props.data.services.list}
          ></ServiceList>
        </AnimationWrapper>
        <TeamList
          id="team"
          title={teamSection.title}
          description={teamSection.description}
          members={this.props.data.team.members}
        />
        <AnimationWrapper>
          <SectionWrapper
            backgroundClass="bg-grey-lightest text-black"
            title={aboutUs.title}
            id="about-us"
          >
            <div class="text-lg lg:text-sm tracking-wider leading-relaxed xs:w-100 p-0 mr-10 m-0 xs:text-sm pb-32 w-100 ml-auto">
              {ReactHtmlParser(aboutUs.description)}
            </div>
          </SectionWrapper>
        </AnimationWrapper>
        <AnimationWrapper>
          <Founders
            title={founders.title}
            image={this.props.data.founders.image}
            description={founders.description}
          />
        </AnimationWrapper>
        {/* <AnimationWrapper>
          <ValuesSection
            id="about-us"
            title={valuesSection.title}
            values={this.props.data.values.list}
          ></ValuesSection>

          <SectionWrapper title="Our Vision">
            <div class="w-100 ml-auto relative xs:w-100 xs:m-0">
              <div class="flex pt-12 flex-wrap">
                {this.props.data.strategies.list.map((item, index) => (
                  <MissionCard key={index} details={item} />
                ))}
              </div>
            </div>
          </SectionWrapper>
        </AnimationWrapper> */}

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
    mainSection: wordpressPost(slug: { eq: "main-section" }) {
      translations: polylang_translations {
        lang: polylang_current_lang
        id
        title
        description: content
        button: acf {
          text: button_text
        }
      }
      image: featured_media {
        url: source_url
      }
    }
    aboutUs: wordpressPost(slug: { eq: "about-us-main" }) {
      translations: polylang_translations {
        lang: polylang_current_lang
        id
        title
        description: content
        button: acf {
          text: button_text
        }
      }
      image: featured_media {
        url: source_url
      }
    }
    founders: wordpressPost(slug: { eq: "founders" }) {
      translations: polylang_translations {
        lang: polylang_current_lang
        id
        title
        description: content
        button: acf {
          text: button_text
        }
      }
      image: featured_media {
        url: source_url
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
      }
      image: featured_media {
        url: source_url
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
      }
      image: featured_media {
        url: source_url
      }
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
