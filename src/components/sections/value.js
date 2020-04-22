import PropTypes from "prop-types"
import React from "react"
import ValueCard from "../cards/value"
import SectionWrapper from "./sectionWrapper"

const Value = props => (
  <SectionWrapper id={props.id} title="Our core values">
    <div className="xl:flex md:flex lg:flex flex-wrap justify-center ">
      {props.values.map((item, index) => (
        <ValueCard key={index} title={item.title} imageUrl={item.image.url}>
          {item.description}
        </ValueCard>
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
