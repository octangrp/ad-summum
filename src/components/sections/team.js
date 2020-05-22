import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import { Link } from "gatsby"
import Logo from "../logo"
import SectionTitle from "../section-title"

const Team = props => (
  <div id={props.id} className="w-100 relative bg-grey-lightest py-16">
    <div className="w-85 mx-auto  relative">
      <div className="flex ">
        <div className="w-40">
          <Logo />
        </div>
        <div className="w-60 my-auto">
          <div className="text-left my-auto">
            <SectionTitle>{props.title}</SectionTitle>
            <div className="text-base font-secondary w-100 tracking-wider leading-relaxed">
              {ReactHtmlParser(props.description)}
            </div>
          </div>
        </div>
      </div>

      <div className="pb-6">
        <div className="mx-auto pt-6 relative">
          <img src={"/img/tim2.png"} className="clip-full relative" />
          <div className="absolute flex w-90 b-5 l-5">
            <div classsName="w-80 mx-auto">
              <h2 className="p-0 m-0 font-primary font-bold text-3xl track-wider text-white uppercase leading-relaxed">
                We behind all this
              </h2>
              <p className="pt-2 m-0 font-primary text-sm text-white leading-relaxed">
                ASC Ltd brings together with professional skills and extensive
                experience in the areas of central banking, commercial banking
                and financial.
              </p>
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
