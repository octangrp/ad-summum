import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import { Link } from "gatsby"
import Logo from "../logo"
import SectionTitle from "../section-title"
import TruncateHtml from "../utilities/TruncateHtml"

const Service = props => (
  <div id={props.id} className="w-100 relative bg-white relative">
    <div className="w-100 ml-auto relative overflow-hidden">
      <div className="flex w-85 mx-auto py-32">
        <div className="w-40">
          <Logo />
        </div>
        <div className="w-60 my-auto border-0 border-b-1 border-r-1  border-solid border-primary">
          <div className="text-left my-auto px-12 py-18">
            <SectionTitle>{props.title}</SectionTitle>
            <div className="text-lg font-secondary w-100 tracking-wider leading-relaxed">
              <TruncateHtml length={350} tokenize={"words"}>
                {props.children}
              </TruncateHtml>
            </div>
            <div className="w-30 pt-12 text-right ml-auto">
              <button class="btn btn-outline-primary hover:text-white focus:text-white py-2 px-4 text-primary text-sm text-light mx-auto">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Service.propTypes = {
  siteTitle: PropTypes.string,
  buttonText: PropTypes.string,
}

Service.defaultProps = {
  siteTitle: ``,
  buttonText: `Read more`,
}

export default Service
