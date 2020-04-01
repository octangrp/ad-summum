import PropTypes from "prop-types"
import React from "react"

const ServiceCard = ({ title, image, children }) => (
  <div class="flex xs:block align-items-end relative w-100 md:w-55 pb-4 xs:w-95 mx-auto">
    <div class="w-60 xs:hidden ">
      <img src={image} />
    </div>
    <div class="w-40 xs:w-100">
      <div class="pt-16 xs:pt-0">
        <h4 class="text-primary text-2xl font-bold text-center font-secondary text-center font-light pt-4 leading-loose">
          {title}
        </h4>
        {children}
        <div class="w-100 text-center pt-12">
          <button class="btn bg-none  py-3 px-8 text-primary rounded-full border-1 border-solid border-primary text-xs text-light mx-auto">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  </div>
)

ServiceCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}

ServiceCard.defaultProps = {
  title: `Information Consulting`,
}

export default ServiceCard
