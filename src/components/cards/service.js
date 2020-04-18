import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ServiceCard = ({ service }) => (
  <div class="w-30">
    <div class="w-90 h-58 lg:h-64 md:h-64 mt-10 lg:mt-4  md:w-100 mt-5 sm:w-100  md:mt-0 sm:mt-0  rounded-xxl   bg-white  relative  lg:l-1 xs:hidden">
      <div class="-mt-10  mx-auto  w-100 ">
        <div class="rounded-full mt-0 mb-0 h-rem-16 w-rem-16  bg-primary mx-auto text-center  flex align-items-center shadow justify-content-center text-2xl text-white">
          <span class="cursor-pointer pl-6 pt-3">
            <img src={service.image ? service.image.url : ""} />
          </span>
        </div>
      </div>
      <div class="text-center text-black mx-auto">
        <h4 class="text-primary text-xl text-center font-primary font-normal text-center font-light pt-5 m-0 leading-loose">
          {service.title}
        </h4>
        <p class="w-100 mx-auto xs:my-3 sm:text-sm text-base pt-2 m-0 xs:w-90 font-light ">
          {service.attributes.summary}
        </p>
      </div>
      <div class="w-100 text-center pt-6">
        <Link to={`/service/${service.slug}`}>
          <button class="btn bg-none  py-2 px-4 text-primary rounded-full border-1 border-solid border-primary text-xxs text-light mx-auto">
            {service.attributes.button_text}
          </button>
        </Link>
      </div>
    </div>
  </div>
)

ServiceCard.propTypes = {
  service: PropTypes.object,
}

ServiceCard.defaultProps = {
  service: {},
}

export default ServiceCard
