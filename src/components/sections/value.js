import PropTypes from "prop-types"
import React from "react"
import ValueCard from "../cards/value"

const Value = props => (
  <div
    id={props.id}
    class="panel z-10 px-0 pt-32 t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto"
  >
    <div class="panel mt-0 py-4 w-85 mx-auto md:w-95 xs:w-100 sm:w-100 centered">
      {props.values.map((item, index) => (
        <ValueCard key={index} title={item.title} imageUrl={item.image.url}>
          {item.description}
        </ValueCard>
      ))}
    </div>
  </div>
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
