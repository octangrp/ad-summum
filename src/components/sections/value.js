import PropTypes from "prop-types"
import React from "react"
import ValueCard from "../cards/value"
import SectionWrapper from "./sectionWrapper"

const Value = props => (
  <SectionWrapper id={props.id} title="Our core values">
    <div className="flex flex-wrap justify-center ">
      {props.values.map((item, index) => (
        <ValueCard key={index} details={item} />
      ))}
    </div>
  </SectionWrapper>
)

Value.propTypes = {
  siteTitle: PropTypes.string,
  id: PropTypes.string,
  values: PropTypes.array,
}

Value.defaultProps = {
  siteTitle: ``,
  id: null,
  values: [],
}

export default Value
