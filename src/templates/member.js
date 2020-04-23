import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactHtmlParser from "react-html-parser"
import AnimationWrapper from "../components/sections/animationWrapper"
import { connect } from "react-redux"
import Translator from "../utils/translator"

class Member extends Component {
  render() {
    const member = Translator.process(
      this.props.lang,
      this.props.data.wordpressPost.translations
    )

    return (
      <Layout>
        <SEO title="Home" />
        <AnimationWrapper>
          <div className="z-10 px-0 t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto">
            <div className="w-100 mx-auto pt-3 text-center">
              <div className="flex min-h-screen">
                <div className="w-40 pt-48">
                  <div className="w-rem-84 h-rem-84 mx-auto rounded-full overflow-hidden">
                    <img
                      src={member.image.url}
                      className="clip-full "
                      alt="team-member"
                    />
                  </div>
                </div>

                <div className="w-60 py-32 bg-grey-lighter text-black text-left">
                  <div className="px-16">
                    <h1 className="p-0 m-0 text-9xl font-primary pb-24 xs:pb-0">
                      {member.name}
                    </h1>
                    <h5 className="text-3xl m-0 xs:text-sm p-0 md:text-base text-grey-darker">
                      {member.attributes.position}
                    </h5>
                    <div className="text-left font-light leading-normal py-6 m-0 text-lg">
                      {ReactHtmlParser(member.description)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </Layout>
    )
  }
}

Member.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(Member)

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
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
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
