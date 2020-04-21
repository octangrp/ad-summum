import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Information = ({ siteTitle }) => (
  <div class="panel z-10 px-0 pt-32 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto">
    <div class="panel-body min-h-screen  sm:min-h-auto xs:min-h-auto h-100 w-90 lg:w-90 -mt-24 lg:-mt-32 md:-mt-3  xs:mt-5 lg:mt-3 lg:pt-3 p-0 sm:mt-5 mx-auto md:w-90 xs:w-100 sm:w-95 xl:flex md:flex  lg:flex sm:flex relative">
      <div class="w-85 mx-auto">
        <h1 class="text-center text-4xl pb-24">Discover</h1>

        <div class="w-50 h-60 border-8 border-grey relative">
          <div class="pt-4 px-5 relative">
            <ul class="list text-center w-100 lg:w-60  mr-auto p-0 m-0 hidden xl:block lg:block px-0 mr-0  text-sm">
              <li class="inline-block my-0 mr-8 text-5xl text-grey font-bold">
                1.
              </li>
              <li class="inline-block my-0 mr-8 text-5xl text-orange font-boldunderline">
                2.
              </li>
              <li class="inline-block my-0 mr-8 text-5xl text-grey font-bold">
                3.
              </li>
              <li class="inline-block my-0 mr-8 text-5xl text-grey font-bold">
                5.
              </li>
            </ul>
          </div>
        </div>

        <div class="w-60 h-30 bg-white absolute t-40 r-20">
          <p class="text-black font-prina font-bold text-6xl">
            Discover where your leads come from, what it costs to getthem, and
            how they interact with your websitebefore contacting you.
          </p>
        </div>

        <div class="flex w-100 text-center relative pt-12">
          <div class="w-50 px-4">
            <div class="mt-0 mb-0 h-rem-12 w-rem-14 border-2 border-solid border-red ml-auto text-center flex align-items-center justify-content-center text-2xl text-back">
              <span class="animated fadeOutLeft custom-classes-transition-leave-to">
                <FontAwesomeIcon icon="coffee" />
              </span>
            </div>
          </div>
          <div class="w-50 px-4">
            <div class="mt-0 mb-0 h-rem-12 w-rem-14 border-2 border-solid border-red mr-auto text-center flex align-items-center justify-content-center text-2xl text-black">
              <span class="animated fadeOutLeft custom-classes-transition-leave-to">
                <FontAwesomeIcon icon="right" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Information.propTypes = {
  siteTitle: PropTypes.string,
}

Information.defaultProps = {
  siteTitle: ``,
}

export default Information
