import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Member = (props) => (
  <div class="panel z-10 px-0 pt-32 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto">
    <div class="panel-body min-h-screen  sm:min-h-auto xs:min-h-auto h-100 w-90 lg:w-90 -mt-24 lg:-mt-32 md:-mt-3  xs:mt-5 lg:mt-3 lg:pt-3 p-0 sm:mt-5 mx-auto md:w-90 xs:w-100 sm:w-95 xl:flex md:flex  lg:flex sm:flex relative">
      <div class="panel-body w-90 xs:w-90 xs:mx-auto pt-5 panel-default w-100 p-0 py-5">
        <div class="w-100 lg:w-80 md:w-85 sm:w-90 xs:w-100 bg-white mx-auto shadow-lg border-1 border-grey border-solid">
          <div class="xl:flex sm:flex lg:flex md:flex xs:p-0">
            <div class="w-40 xs:w-100 xs:p-4">
              <img src={"/img/lewis.jpg"} class="w-95" alt="team-member" />
            </div>
            <div class="w-55 xs:w-100 border-grey border-0 border-solid border-b-1 pl-3 py-4">
              <h4 class="xl:text-5xl mt-0 mb-0 text-primary-darkest font-primary sm:text-3xl lg:text-4xl xs:text-4xl md:text-4xl font-bold">
                {props.title}
              </h4>
              <div class="font-secondary">
                <h5 class="text-lg m-0 xs:text-sm p-0 md:text-base font-bold text-grey-darker">
                  Consultant
                </h5>
                <div class="w-100 xs:w-100 mt-4 mx-auto leading-normal xs:text-base md:text-base xs:p-4 text-lg">
                {props.children} 
                {props.children}
                </div>
              </div>

              <div class="flex justify-content-center mt-12">
                <div class="mx-2">
                  <a target="_blank" href="#">
                    <button class="btn bg-red text-white h-rem-12 w-rem-12 p-0 rounded-full text-xl text-center">
                      <FontAwesomeIcon icon="coffee" />
                    </button>
                  </a>
                </div>
                <div class="mx-2">
                  <a target="_blank" href="#">
                    <button class="btn bg-blue text-white h-rem-12 w-rem-12 p-0 rounded-full text-xl text-center">
                      <FontAwesomeIcon icon="coffee" />
                    </button>
                  </a>
                </div>
                <div class="mx-2">
                  <a target="_blank" href="#">
                    <button class="btn bg-primary text-white h-rem-12 w-rem-12 p-0 rounded-full text-xl text-center">
                      F
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="w-5 text-red">
              <p>
                <FontAwesomeIcon icon="times" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Member.propTypes = {
  siteTitle: PropTypes.string,
}

Member.defaultProps = {
  siteTitle: ``,
}

export default Member
