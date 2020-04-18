import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = ({ siteTitle, address, phoneNumber, email }) => (
  <div class="panel pb-0 px-0 pt-32 bg-primary t-0 overflow-hidden relative md:h-auto sm:h-auto">
    <div class="panel-body min w-90 sm:min-h-auto xs:min-h-auto h-100 bg-primary lg:w-90 -mt-24 lg:-mt-32 md:-mt-3  xs:mt-5 lg:mt-3 lg:pt-3 p-0 sm:mt-5 mx-auto md:w-90 xs:w-100 sm:w-95 ">
      <div class="w-auto w-90 flex relative md:w-55 xs:w-95 mx-auto">
        <div class="w-60 py-6">
          <h1 class="text-8xl text-white">Let's Talk</h1>
          <div class="flex w-40 pb-16">
            <div class="w-25">
              <div class="mx-2">
                <button class="btn bg-primary-lightest text-primary h-rem-12 w-rem-12 p-0 rounded-full text-xl text-center">
                  {" "}
                  <FontAwesomeIcon icon="map-marker-alt" />
                </button>
              </div>
            </div>
            <div class="w-25">
              <div class="mx-2">
                <button class="btn bg-primary-lightest text-primary h-rem-12 w-rem-12 p-0 rounded-full text-xl text-center">
                  {" "}
                  <FontAwesomeIcon icon="map-marker-alt" />
                </button>
              </div>
            </div>
            <div class="w-25">
              <div class="mx-2">
                <button class="btn bg-primary-lightest text-primary h-rem-12 w-rem-12 p-0 rounded-full text-xl text-center">
                  {" "}
                  <FontAwesomeIcon icon="map-marker-alt" />
                </button>
              </div>
            </div>
            <div class="w-25">
              <div class="mx-2">
                <button class="btn bg-primary-lightest text-primary h-rem-12 w-rem-12 p-0 rounded-full text-xl text-center">
                  {" "}
                  <FontAwesomeIcon icon="map-marker-alt" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-40 pt-12">
          <div class="text-left pt-6 font-secondary font-normal">
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
    <div class="panel bg-primary-dark h-auto min-h-auto text-center mx-auto">
      <div class="text-centered text-white mx-auto xs:text-xs text-sm">
        © 2019 - 2020 AdSummum · All rights reserved ·
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
