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
          <div class="text-lg lg:text-sm tracking-wider leading-relaxed xs:w-100 p-0 mr-10 m-0 xs:text-sm pb-32 w-90 ml-auto">
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
                <div class="w-40 relative xs:w-100">
                  <div class="w-rem-12 h-rem-12 bg-white z-99 shadow mx-auto rounded-full relative items-center justify-center flex">
                    <div class="w-rem-5 h-rem-5 bg-primary-darker text-center mx-auto rounded-full  items-center"></div>
                  </div>
                  <div className="flex">
                    <div className="w-50">
                      <div class=" ml-auto h-rem-20 border-0 border-l-1 border-solid border-black border-dashed -mt-6 rotate-30deg w-rem-0 mr-10"></div>
                    </div>

                    <div className="w-50">
                      <div class="h-rem-20 border-0 border-l-1 border-solid border-black border-dashed -mt-6 -rotate-30deg w-rem-0 ml-10"></div>
                    </div>
                  </div>

                  <div class="border-none rounded-lg bg-white shadow px-8 py-6 z-999 relative -mt-3">
                    <div>
                      <h2 class="text-left text-xl uppercase font-medium my-auto tracking-wider leading-relaxed">
                        Excellence
                      </h2>
                      <p class="text-xs font-secondary text-sm tracking-wider leading-relaxed">
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
          <div class="w-100 relative bg-white py-16 lg:">
            <div class="w-100 mx-auto  relative">
              <div class="w-40 my-auto  xs:w-100">
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
                <div class="w-30 pr-12  xs:w-100 xs:pr-0">
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
