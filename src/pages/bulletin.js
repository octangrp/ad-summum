import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { connect } from "react-redux"

import Logo from "../components/logo"
import { graphql } from "gatsby"
import HeadlineSection from "src/components/sections/blog/headline"
import DiscoverSection from "src/components/sections/blog/discover-section"
import Post from "src/components/sections/blog/post"

class BulletinPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="ASC Bulletin" />
        <div className="w-100 relative bg-white py-16">
          <div className="w-90 mx-auto  relative">
            <div className="xl:flex lg:flex">
              <div className="w-40">
                <Logo />
              </div>
            </div>
          </div>
          <div class="w-100 bg-grey-lightest">
            <div class="">
              <DiscoverSection list={this.props.data.post.list} />
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

export default connect(mapStateToProps)(BulletinPage)

export const queries = graphql`
  query bulletin {
    post: allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: "bulletin" } } } }
      sort: { fields: date }
    ) {
      list: nodes {
        translations: polylang_translations {
          lang: polylang_current_lang
          id
          slug
          title
          content
          date
        }
        image: featured_media {
          url: source_url
        }
      }
    }
  }
`
