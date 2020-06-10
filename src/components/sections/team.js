import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import { Link } from "gatsby"
import Logo from "../logo"
import SectionTitle from "../section-title"

const Team = props => (
  <div id={props.id} className="w-100 relative bg-grey-lightest py-16">
    <div className="w-90 mx-auto relative">
      <div className="">
        <div className="w-40">
          <Logo />
        </div>
        <div className="w-60 md:w-100 lg:w-100 my-auto xs:w-100 xs:mx-auto">
          <div className="text-left my-auto">
            <SectionTitle>{props.title}</SectionTitle>
            <div className="text-base font-secondary w-70 xs:w-100 tracking-wider leading-relaxed text-justified">
              {ReactHtmlParser(props.description)}
            </div>
          </div>
        </div>
      </div>

      <div className="pb-6">
        <div className="mx-auto pt-6 relative xs:h-px-300">
          <img
            src={props.image && props.image.url ? props.image.url : null}
            className="clip-full relative"
          />
          <div className="absolute xl:flex lg:flex w-100 b-0 l-0 image-gradient px-12 xs:px-4 pt-16 pb-12 md:pb-8 xs:pb-4">
            <div className="w-80 xl:mx-auto xs:py-4">
              <h2 className="p-0 m-0 font-primary font-bold text-3xl xs:text-sm md:text-xl track-wider text-white uppercase leading-relaxed">
                {props.caption.title}
              </h2>
              <div className="pt-2 m-0 font-primary text-sm xs:text-xs md:text-xs text-white leading-relaxed">
                {ReactHtmlParser(props.caption.subtitle)}
              </div>
            </div>
            <div className="w-20 text-right my-auto">
              <Link to="team">
                <button class="btn bg-none  py-2 px-4 text-white border-1 border-solid border-white text-sm hover:bg-white hover:text-black text-light mx-auto">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Team.propTypes = {
  siteTitle: PropTypes.string,
  buttonText: PropTypes.string,
}

Team.defaultProps = {
  siteTitle: ``,
  buttonText: `Read more`,
}

export default Team
