import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import SectionTitle from "../section-title"
import Logo from "../logo"

const SectionWrapper = props => (
  <div
    id={props.id}
    className={["z-10 px-0 t-0 relative ", props.backgroundClass].join(" ")}
  >
    <div className=" relative">
      <div className="xs:block align-items-end relative w-90 xs:w-85 mx-auto py-12">
        {props.logo ? <Logo /> : ""}
        <div className=" xs:pt-0 ">
          <div className="leading-loose xs:leading-normal text-xl text-left text-light xs:pt-0 xs:w-100">
            <SectionTitle>{props.title}</SectionTitle>
            <div
              className={[
                "text-base font-secondary w-50 xs:w-100 tracking-wider leading-relaxed",
                !props.showSubtitle ? "hidden" : null,
              ].join(" ")}
            >
              {ReactHtmlParser(props.description)}
            </div>
            <div className="text-lg sm:text-sm font-light section-content sm:mt-0 md:text-0 mt-4">
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
  logo: PropTypes.bool,
}

SectionWrapper.defaultProps = {
  title: ``,
  description: ``,
  backgroundClass: `bg-white text-black`,
  showSubtitle: true,
  logo: true,
}

export default SectionWrapper
