import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = ({ siteTitle, address, phoneNumber, email }) => (
  <div class="panel pb-0 px-0 pt-32 bg-white t-0 overflow-hidden relative md:h-auto sm:h-auto">
    <div class="panel-body min  sm:min-h-auto xs:min-h-auto h-100 w-40 lg:w-90 -mt-24 lg:-mt-32 md:-mt-3  xs:mt-5 lg:mt-3 lg:pt-3 p-0 sm:mt-5 mx-auto md:w-90 xs:w-100 sm:w-95 xl:flex md:flex  lg:flex sm:flex relative">
      <div class="w-auto h-40 bg-primary align-items-end relative w-100 md:w-55 xs:w-95 mx-auto">
        <div class="text-left p-20 font-secondary font-normal">
          <p class="text-white text-lg">
            <span class="w-rem-10 inline-block">
              {" "}
              <FontAwesomeIcon icon="map-marker-alt" />
            </span>
            {address}
          </p>
          <p class="text-white text-base text-lg">
            <span class="w-rem-10 inline-block">
              {" "}
              <FontAwesomeIcon icon="phone-alt" />
            </span>
            {phoneNumber}
          </p>
          <p class="text-white text-base text-lg">
            <span class="w-rem-10 inline-block">
              {" "}
              <FontAwesomeIcon icon="envelope" />
            </span>
            {email}
          </p>
        </div>
      </div>
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
  address: "",
  email: "",
  phoneNumber: "",
}

export default Footer
