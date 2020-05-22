import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { connect } from "react-redux"

class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="About us" />
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(AboutPage)
