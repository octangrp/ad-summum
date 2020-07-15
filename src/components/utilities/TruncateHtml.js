import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import { truncate as LodashTruncate } from "lodash"

class TruncateHtml extends React.Component {
  truncate() {
    let stripedHtml = this.props.children ? this.props.children : ""
    // let stripedHtml = children.replace(/<[^>]+>/g, "")
    return LodashTruncate(stripedHtml, {
      length: this.props.length,
    })
  }

  render() {
    return ReactHtmlParser(this.truncate())
  }
}

TruncateHtml.propTypes = {
  length: PropTypes.number,
}

TruncateHtml.defaultProps = {
  length: 30,
}

export default TruncateHtml
