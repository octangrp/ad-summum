import PropTypes from "prop-types"
import React from "react"
import ValueCard from "../cards/value"

const Value = props => (
  <div
    id={props.id}
    class="panel z-10 px-0 py-20 t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto"
  >
    <div class="panel mt-0 w-85 mx-auto md:w-95 xs:w-100 sm:w-100 centered">
      <h1 class=" font-semiBold text-4xl text-primary my-0">Our core values</h1>
      <div class="w-50 py-12">
        <p>
          Discover where your leads come from, what it costs to getthem, .
          Discover where your leads come from, what it costs to getthem, .
        </p>
      </div>
      <div class="flex flex-wrap justify-center py-20">
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
