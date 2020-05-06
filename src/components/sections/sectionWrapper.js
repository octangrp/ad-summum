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
      <div className="xs:block align-items-end relative w-90 xs:w-85 mx-auto  py-12">
        <div className=" xs:pt-0 ">
          <div className="leading-loosexs:leading-normal text-xl text-left text-light xs:pt-0 xs:w-100">
            <h1 className="text-center font-semiBold text-6xl xs:text-3xl sm:text-xl md:text-3xl my-0 pb-12 xs:pb-12">
              {props.title}
            </h1>
            <div
              className={[
                "text-base text-center w-80 xs:w-100 p-0 m-0 mx-auto xs:text-sm pb-32 ",
                !props.showSubtitle ? "hidden" : null,
              ].join(" ")}
            >
              {ReactHtmlParser(props.description)}
            </div>
            <div className="text-lg sm:text-sm font-light section-content sm:mt-0 md:text-0">
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
  description: PropTypes.string,
  backgroundClass: PropTypes.string,
  showSubtitle: PropTypes.bool,
}

SectionWrapper.defaultProps = {
  title: ``,
  description: ``,
  backgroundClass: `bg-white text-black`,
  showSubtitle: true,
}

export default SectionWrapper
