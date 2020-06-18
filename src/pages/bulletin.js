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
              <div className="w-60 my-auto">
                {/* <div className="text-left my-auto">
                  <h1 class="text-6xl xs:text-3xl uppercase font-bold tracking-wider">
                    Asc Bulletin
                  </h1>
                </div> */}
              </div>
            </div>
            <HeadlineSection details={this.props.data.headlines} />
          </div>
          <DiscoverSection list={this.props.data.discover.list} />
          <div class="w-90 xl:flex lg:flex md:flex mx-auto">
            {this.props.data.post.list.map((post, index) => (
              <Post details={post} />
            ))}
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
    headlines: allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: "headline" } } } }
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
    discover: allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: "discover" } } } }
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
    post: allWordpressPost(
      filter: {
        categories: {
          elemMatch: {
            parent_element: { slug: { ne: "bulletin" } }
            slug: { eq: "bulletin" }
          }
        }
      }
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
