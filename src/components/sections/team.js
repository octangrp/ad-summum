import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import { Link } from "gatsby"

const Team = props => (
  <div className="w-100 relative bg-grey-lightest">
    <div className="w-85 mx-auto py-16 relative">
      <div className="flex ">
        <div className="w-40">
          <div className="text-left">
            <img src={"/img/logo-full.png"} className="w-60" />
          </div>
        </div>
        <div className="w-60 my-auto">
          <div className="text-left my-auto">
            <h1 className="text-xl font-primary font-semibold">OUR TEAM</h1>
            <div className=" w-20 border-1 border-grey-light border-solid"></div>
            <p className="text-sm w-60">
              ASC Ltd brings together with professional skills and extensive
              experience in the areas of central banking, commercial banking and
              financial system in general, legal issues and those related to
              information technology and organization.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="mx-auto pt-16 relative">
          <img src={"/img/tim2.png"} className="clip-full relative" />
          <div className="absolute flex w-90 b-5 l-5">
            <div classsName="w-80 mx-auto">
              <h2 className="p-0 m-0 font-primary text-white">
                We behind all this
              </h2>
              <p className="pt-2 m-0 font-primary text-sm text-white">
                ASC Ltd brings together with professional skills and extensive
                experience in the areas of central banking, commercial banking
                and financial.
              </p>
            </div>
            <div className="w-20 text-right my-auto">
              <button class="btn bg-none  py-2 px-4 text-white border-1 border-solid border-white text-xs text-light mx-auto">
                Read More
              </button>
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
