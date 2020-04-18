import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactHtmlParser from "react-html-parser"

class Member extends Component {
  render() {
    const member = this.props.data.wordpressPost

    return (
      <Layout>
        <SEO title="Home" />

        <div class="z-10 px-0 t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto">
          <div class="w-100 mx-auto pt-3 text-center">
            <div class="flex min-h-screen">
              <div class="w-40 pt-48">
                <div className="w-rem-84 h-rem-84 mx-auto rounded-full overflow-hidden">
                  <img
                    src={member.image.url}
                    class="clip-full "
                    alt="team-member"
                  />
                </div>
              </div>

              <div class="w-60 py-32 bg-grey-lighter text-black text-left">
                <div class="px-16">
                  <h1 class="p-0 m-0 text-9xl font-primary pb-24 xs:pb-0">
                    {member.name}
                  </h1>
                  <h5 class="text-2xl m-0 xs:text-sm p-0 md:text-base font-bold text-grey-darker">
                    {member.attributes.position}
                  </h5>
                  <div class="text-left font-light leading-normal py-6 m-0 text-lg">
                    {ReactHtmlParser(member.description)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

Member.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Member

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
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
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
