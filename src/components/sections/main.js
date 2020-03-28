import PropTypes from "prop-types"
import React from "react"

const Main = ({ siteTitle }) => (
  <div class="panel z-10 px-0 pt-32 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto">
    <div class="panel-body min-h-screen  sm:min-h-auto xs:min-h-auto h-100 w-95 lg:w-90 -mt-24 lg:-mt-32 md:-mt-3  xs:mt-5 lg:mt-3 lg:pt-3 p-0 sm:mt-5 ml-auto md:w-90 xs:w-100 sm:w-95 xl:flex md:flex  lg:flex sm:flex relative">
      <div class="flex align-items-end relative w-100 md:w-55 pb-4 xs:w-95 mx-auto">
        <div class="w-50 pt-16">
          <div class="pt-5">
            <h1 class="text-6xl pt-6 font-primary text-primary w-75">
              Economics, Financial, Legal and IT axperts
            </h1>
            <p class="w-60 text-light pt-6 font-light">
              Discover where your leads come from, what it costs to getthem, and
              how they interact with your website before contacting you.
              Discover where your leads come from, them.
            </p>
          </div>
          <div class="w-100 pt-16 text-right">
            <button class="btn bg-primary py-3 px-12 text-white rounded-full text-xs text-light mx-auto shadow-primary">
              LEARN MORE
            </button>
          </div>
        </div>
        <div class="w-50 pt-16 text-right">
          <div class="text-right">
            <img src={"/img/group.png"} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

Main.propTypes = {
  siteTitle: PropTypes.string,
}

Main.defaultProps = {
  siteTitle: ``,
}

export default Main
