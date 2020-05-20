import PropTypes from "prop-types"
import React from "react"
import ValueCard from "../cards/value"
import SectionWrapper from "./sectionWrapper"

const Value = props => (
  <SectionWrapper
    id={props.id}
    title={props.title}
    description={props.description}
  >
    <div className="xl:flex md:flex lg:flex flex-wrap justify-center ">
      {props.values.map((item, index) => (
        <ValueCard key={index} details={item} />
      ))}
    </div>
  </SectionWrapper>
)

Value.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  values: PropTypes.array,
}

Value.defaultProps = {
  id: null,
  title: ``,
  description: ``,
  values: [],
}

export default Value
