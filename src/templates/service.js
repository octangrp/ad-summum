import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactHtmlParser from "react-html-parser"

class Service extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <SEO title="Home" />

        <div class="z-10 px-0 pt-32 t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto">
          <div class="min-h-screen  sm:min-h-auto xs:min-h-auto h-100 w-100 lg:w-90 -mt-24 lg:-mt-32 md:-mt-3  xs:mt-5 lg:mt-3 lg:pt-3 p-0 sm:mt-5 ml-auto md:w-90 xs:w-100 sm:w-95 relative">
            <div class="w-100 mx-auto pt-3 text-center">
              <div class="flex">
                <div class="w-40 pt-48">
                  <img src={"/img/Untitled-1.png"} class="" />
                </div>

                <div class="w-60 py-18 bg-primary">
                  <div class="px-16">
                    <h1 class="text-center font-Bold p-0 m-0 text-white text-6xl pb-24 xs:pb-0">
                      {post.title}
                    </h1>
                    <div class="text-white text-left font-light leading-normal py-6 m-0 text-xl">
                      {ReactHtmlParser(post.content)}
                    </div>
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

Service.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Service

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
