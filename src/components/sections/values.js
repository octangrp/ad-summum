import PropTypes from "prop-types"
import React from "react"
import ValueCard from "../cards/value"
import SectionWrapper from "./sectionWrapper"

class ValuesSection extends React.Component {
  render() {
    return (
      <SectionWrapper
        id={this.props.id}
        title={this.props.title}
        description={this.props.description}
        backgroundClass="bg-white text-black"
      >
        <div className="xl:flex md:flex lg:flex flex-wrap justify-center w-95 ml-auto ">
          {this.props.values.map((item, index) => (
            <ValueCard key={index} details={item} />
          ))}
        </div>
      </SectionWrapper>
    )
  }
}

ValuesSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  values: PropTypes.array,
}

ValuesSection.defaultProps = {
  id: null,
  title: ``,
  description: ``,
  values: [],
}

export default ValuesSection
