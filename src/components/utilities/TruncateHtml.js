import PropTypes from "prop-types"
import React from "react"
import { truncate as LodashTruncate } from "lodash"

class TruncateHtml extends React.Component {
  truncate() {
    let children = this.props.children ? this.props.children : ""
    let stripedHtml = children.replace(/<[^>]+>/g, "")
    return LodashTruncate(stripedHtml, {
      length: this.props.length,
    })
  }

  render() {
    return this.truncate()
  }
}

TruncateHtml.propTypes = {
  length: PropTypes.number,
}

TruncateHtml.defaultProps = {
  length: 24,
}

export default TruncateHtml
