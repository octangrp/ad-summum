import React from "react"
import PropTypes from "prop-types"
import Translator from "src/utils/translator"
import SectionWrapper from "src/components/sections/sectionWrapper"
import Discover from "src/components/sections/blog/partials/discover"

class DiscoverSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = { index: 0 }
  }

  list() {
    if (this.props.list.length) {
      return
    }
    return null
  }

  render() {
    return (
      <SectionWrapper logo={false}>
        <div>
          {this.props.list.map((post, i) => (
            <Discover key={i} details={post} />
          ))}
        </div>
      </SectionWrapper>
    )
  }
}

DiscoverSection.propTypes = {
  list: PropTypes.array,
}

DiscoverSection.defaultProps = {
  list: [],
}

export default DiscoverSection
