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
      <div className="xs:block align-items-end relative w-90 xs:w-85 mx-auto">
        <div className=" xs:pt-0 ">
          <div className="leading-loosexs:leading-normal text-xl text-left text-light xs:pt-0 xs:w-100 ">
            <h1 className="text-center font-semiBold text-6xl xs:text-3xl sm:text-xl md:text-3xl my-0 py-12 xs:pb-0">
              {props.title}
            </h1>
            <p
              className={[
                "text-base text-center w-80 mx-auto pb-32",
                !props.showSubtitle ? "hidden" : null,
              ].join(" ")}
            >
              ASC Ltd brings together with professional skills and extensive
              experience in the areas of central banking, commercial banking and
              financial system in general, legal issues and those related to
              information technology and organization.
            </p>
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
  backgroundClass: PropTypes.string,
  showSubtitle: PropTypes.bool,
}

SectionWrapper.defaultProps = {
  title: ``,
  backgroundClass: `bg-white text-black`,
  showSubtitle: true,
}

export default SectionWrapper
