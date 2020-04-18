import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const More = props => (
  <div
    id={props.id}
    class="panel z-10 px-0 pt-32 bg-primary t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto"
  >
    <div class="min-h-screen  sm:min-h-auto xs:min-h-auto h-100 lg:w-90 -mt-24 lg:-mt-32 md:-mt-3 xs:pt-0 xs:mt-5 lg:mt-3 lg:pt-3 p-0 sm:mt-5 ml-auto md:w-90 xs:w-100 sm:w-95 xl:flex md:flex  lg:flex sm:flex relative">
      <div class="xs:block align-items-end relative w-90 mx-auto">
        <div class=" xs:pt-0 ">
          <div class="leafing-loose text-white text-xl text-left text-light xs:pt-0 xs:w-100 ">
            <h1 class="text-center font-semiBold text-6xl pb-24 xs:pb-0">
              {props.title}
            </h1>
            <div class="text-lg font-light">
              {ReactHtmlParser(props.children)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

More.propTypes = {
  siteTitle: PropTypes.string,
  buttonText: PropTypes.string,
}

More.defaultProps = {
  siteTitle: ``,
  buttonText: `Read more`,
}

export default More
