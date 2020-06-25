import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import ReactHtmlParser from "react-html-parser"
import Logo from "src/components/logo"
import Translator from "src/utils/translator"
import moment from "moment"

class BlogPage extends React.Component {
  render() {
    const post = Translator.process(
      this.props.lang,
      this.props.data.post.translations
    )
    return (
      <Layout>
        <SEO title={post.title} />
        <div className="w-100 relative bg-white py-16">
          <div className="w-90 mx-auto  relative">
            <div className="pt-16 xs:pt-8">
              <div className="mx-auto pt-6 relative">
                <div className="w-40">
                  <Logo />
                </div>
                <div class=" xl:flex lg:flex w-100">
                  <div class="w-80 xl:mx-auto pb-12 md:pb-2 sm:pb-0 xs:pb-0">
                    <h1 class="p-0 m-0 xs:py-4 sm:text-base font-primary font-bold text-3xl xs:text-sm md:text-xl track-wider text-black uppercase leading-relaxed">
                      {post.title}
                    </h1>
                  </div>
                  <div class="w-20 ml-auto text-right">
                    {/* <h1 class="text-base xs:text-xxs sm:text-xs text-black text-light mx-auto">
                      {moment(this.props.data.post.date).format(
                        "dddd, MMM Do YYYY"
                      )}
                    </h1> */}
                  </div>
                </div>
                <img
                  src={
                    this.props.data.post.image && this.props.data.post.image.url
                      ? this.props.data.post.image.url
                      : null
                  }
                  class="w-100 relative"
                />

                <div class="py-8 text-lg lg:text-sm tracking-wider leading-relaxed w-100">
                  {ReactHtmlParser(post.description)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(BlogPage)

export const postQuery = graphql`
  query($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      translations: polylang_translations {
        lang: polylang_current_lang
        id
        slug
        title
        description: content
        attributes: acf {
          position
        }
      }
      image: featured_media {
        url: source_url
      }
      date
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
