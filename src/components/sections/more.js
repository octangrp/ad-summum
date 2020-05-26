import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import { Link } from "gatsby"
import Logo from "../logo"
import SectionTitle from "../section-title"
import TruncateHtml from "../utilities/TruncateHtml"

const Service = props => (
  // <div id={props.id} className="w-100 relative bg-white relative">
  //   <div className="w-100 ml-auto relative overflow-hidden">
  /* <div className="flex w-85 mx-auto py-32">
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
              <Link to="about">
                <button class="btn btn-outline-primary hover:text-white focus:text-white py-2 px-4 text-primary text-sm text-light mx-auto">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */

  <div id={props.id} className="w-100 relative bg-white relative">
    <div className="w-100 ml-auto  relative overflow-hidden">
      <div className="w-100 h-100 bg-white absolute t-10 z-5 rotate-60deg -l-30" />
      <div className="w-50 relative z-10">
        <div className="w-90 ml-auto py-6">
          <Logo />
          <div className="w-100 my-auto py-6 relative">
            <div className="text-left w-80 my-auto">
              <SectionTitle>{props.title}</SectionTitle>
              <div className="text-lg font-secondary w-100 tracking-wider leading-relaxed">
                <TruncateHtml length={350} tokenize={"words"}>
                  {props.children}
                </TruncateHtml>
              </div>
              <div className="absolute -r-10 b-5 text-right">
                <Link to="about">
                  <button class="btn bg-white border-1 border-primary border-solid text-primary text-black  py-2 px-4 text-sm text-light mx-auto">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-70 absolute r-0 t-0 h-100">
        <img src={"/img/tim.png"} className="clip-full relative" />
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
