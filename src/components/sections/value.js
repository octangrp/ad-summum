import PropTypes from "prop-types"
import React from "react"
import ValueCard from "../cards/value"

const Value = props => (
  <div
    id={props.id}
    className="panel px-0 py-12 t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto relative"
  >
    <div className="mt-0 w-85 mx-auto md:w-95 xs:w-100 sm:w-100 centered">
      <h1 className=" text-center font-semiBold text-6xl pb-24 xs:pb-0">
        Our core values
      </h1>
      <div className="flex flex-wrap justify-center ">
        {props.values.map((item, index) => (
          <ValueCard key={index} title={item.title} imageUrl={item.image.url}>
            {item.description}
          </ValueCard>
        ))}
      </div>
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
