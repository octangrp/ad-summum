import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactHtmlParser from "react-html-parser"
import AnimationWrapper from "../components/sections/animationWrapper"

class Service extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <SEO title="Home" />
        <AnimationWrapper>
          <div class="z-10 px-0 t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto">
            <div class="w-100 mx-auto pt-3 text-center">
              <div class="flex min-h-screen">
                <div class="w-40 pt-48">
                  <img src={"/img/Untitled-1.png"} class="" />
                </div>

                <div class="w-60 py-32 bg-primary-dark">
                  <div class="px-16">
                    <h1 class="text-center p-0 m-0 text-white text-9xl font-primary pb-24 xs:pb-0">
                      {post.title}
                    </h1>
                    <div class="text-white text-left font-light leading-normal py-6 m-0 text-lg">
                      {ReactHtmlParser(post.content)}
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
