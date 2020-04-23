import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const SectionWrapper = props => (
  <div
    id={props.id}
    className={[
      "z-10 px-0 t-0 relative min-h-screen",
      props.backgroundClass,
    ].join(" ")}
  >
    <div className="min-h-screen relative">
      <div className="xs:block align-items-end relative w-90 mx-auto">
        <div className=" xs:pt-0 ">
          <div className="leafing-loose text-xl text-left text-light xs:pt-0 xs:w-100 ">
            <h1 className="text-center font-semiBold text-6xl my-0 py-12 xs:pb-0">
              {props.title}
            </h1>
            <div className="text-lg font-light section-content mt-5">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

SectionWrapper.propTypes = {
  title: PropTypes.string,
  backgroundClass: PropTypes.string,
}

SectionWrapper.defaultProps = {
  title: ``,
  backgroundClass: `bg-white text-black`,
}

export default SectionWrapper