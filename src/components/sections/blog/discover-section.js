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
      return <Discover details={this.props.list[this.state.index]} />
    }
    return null
  }

  render() {
    return (
      <SectionWrapper logo={false} title="All services">
        <div>
          {this.list()}
          <div>
            <div class="w-100 pt-24 xs:pt-12 w-5 xs:w-25 lg:w-10 md:w-15 mx-auto text-center">
              {this.props.list.map(index => (
                <div class="w-rem-3 h-rem-3 xs:w-rem-4 xs:h-rem-4 inline-block bg-white border-1 border-black border-solid my-auto rounded-full cursor-pointer hover:bg-black"></div>
              ))}
            </div>
          </div>
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
