import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import { Link } from "gatsby"
import Logo from "../logo"
import SectionTitle from "../section-title"
import TruncateHtml from "../utilities/TruncateHtml"

const More = props => (
  <div id={props.id} className="w-100 relative bg-white relative">
    <div className="w-100 ml-auto lg:w-95 lg:ml-auto relative overflow-hidden">
      <div className="w-100 h-100 bg-white absolute t-10 z-5 xl:rotate-60deg lg:t-0 lg:-l-45 md:t-0 md:-l-45 -l-30" />
      <div className="w-50 relative z-10">
        <div className="w-90 lg:w-100 ml-auto py-6">
          <Logo />
          <div className="w-100 my-auto py-6 relative">
            <div className="text-left w-80 my-auto">
              <SectionTitle>{props.title}</SectionTitle>
              <div className="text-lg lg:text-sm font-secondary w-100 tracking-wider leading-relaxed">
                <p>
                  <TruncateHtml length={350} tokenize={"words"}>
                    {props.children}
                  </TruncateHtml>
                </p>
              </div>
              <div className="my-12">
                <Link to="about">
                  <button class="btn bg-white text-black hover:bg-black hover:text-white  border-black border-1 border-solid py-2 px-4 text-sm text-light mx-auto">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-70 md:w-85 md:mx-auto xl:absolute lg:absolute r-0 t-0 h-100 xs:hidden sm:hidden">
        <img
          src={props.image && props.image.url ? props.image.url : null}
          className="clip-full relative"
        />
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
