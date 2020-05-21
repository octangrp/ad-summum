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
        <h1 class=" xs:pt-8 md:pt-8 sm:pt-2 text-9xl xs:text-3xl md:text-sm sm:text-2xl w-55 xs:w-90 text-primary">
          <img
            src="/static/logo-full-519e0a8e7e1c1df7c19fdf149e78c986.png"
            class="w-35"
            alt=""
          />
        </h1>
        <div className=" xs:pt-0 ">
          <div className="leading-loosexs:leading-normal text-xl text-left text-light xs:pt-0 xs:w-100">
            <h1 className="font-semiBold text-4xl xs:text-3xl sm:text-xl md:text-3xl my-0 py-2 xs:pb-12">
              {props.title}
            </h1>
            <div class=" w-15 border-2 border-grey-light border-solid"></div>
            <div
              className={[
                "text-base w-50 xs:w-100 p-0 m-0 xs:text-sm pb-32 ",
                !props.showSubtitle ? "hidden" : null,
              ].join(" ")}
            >
              <p className="my-12">{ReactHtmlParser(props.description)}</p>
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
