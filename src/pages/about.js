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
          {/* <ValueCard
            title={valuesSection.title}
            description={valuesSection.description}
            values={this.props.data.values.list}
          ></ValueCard> */}

          <div class="w-100 relative bg-grey-lightest py-16">
            <div class="w-85 mx-auto  relative">
              <div class="flex pt-12">
                <div class="w-30 pr-12 relative">
                  <div class="w-rem-12 h-rem-12 bg-white z-99 shadow mx-auto rounded-full relative items-center justify-center">
                    <div class="w-rem-4 h-rem-4 bg-primary-darker text-center mx-auto rounded-full absolute t-35 l-35"></div>
                  </div>

                  <div class="bg-grey-dark  w-60 h-rem-1 rounded-full relative t-5 -r-40 rotate-45deg"></div>

                  <div class="bg-grey-dark  w-60 h-rem-1 rounded-full relative t-5 r-0 -rotate-45deg"></div>

                  <div class="border-none rounded-lg bg-white shadow mt-12 px-4 z-999">
                    <div class="py-4">
                      <h2 class="text-left text-xl font-primary my-auto">
                        Excellence
                      </h2>
                      <p class="text-xs font-secondary">
                        {" "}
                        ASC Ltd brings together with professional skills and
                        extensive experience in the areas of central banking,
                        commercial banking and financial system{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div class="w-100 relative bg-white py-16">
            <div class="w-100 mx-auto  relative">
              <div class="w-40 my-auto">
                <div class="text-left my-auto">
                  <h1 class="font-semiBold text-3xl xs:text-3xl sm:text-xl md:text-3xl my-0 py-2 xs:pb-12">
                    Our Mission
                  </h1>
                  <div class=" w-25 border-2 border-grey-light border-solid"></div>
                  <div class="text-base w-90 p-0 m-0 xs:text-sm ">
                    <p class="my-6">
                      ASC Ltd brings together with professional skills and
                      extensive experience in the areas of central banking,
                      commercial banking and financial system in general, legal
                      issues and those related to information technology and
                      organization.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex pt-12">
                <div class="w-30 pr-12">
                  <div class="border-none rounded-lg bg-white shadow p-8">
                    <img src={"/img/target.png"} className="w-20 relative" />

                    <div class="pt-6">
                      <h2 class="text-left text-xl font-primary my-auto">
                        Excellence
                      </h2>
                      <p class="text-sm">
                        {" "}
                        ASC Ltd brings together with professional skills and
                        extensive experience in the areas of central banking,
                        commercial banking and financial system in general
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
