import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AnimationWrapper from "../components/sections/animationWrapper"

import TeamList from "../components/sections/team-list"
import { graphql } from "gatsby"
import Translator from "../utils/translator"
import { connect } from "react-redux"

class TeamPage extends React.Component {
  render() {
    const teamSection = Translator.process(
      this.props.lang,
      this.props.data.teamSection.translations
    )

    return (
      <Layout>
        <SEO title="Team" />
        <AnimationWrapper>
          <TeamList
            id="team"
            title={teamSection.title}
            description={teamSection.description}
            members={this.props.data.team.members}
          />
        </AnimationWrapper>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(TeamPage)

export const queries = graphql`
  query team {
    teamSection: wordpressPost(slug: { eq: "team-section" }) {
      translations: polylang_translations {
        lang: polylang_current_lang
        id
        title
        description: content
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
  }
`
