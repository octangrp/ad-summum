import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import { Link } from "gatsby"

const Service = props => (
  <div className="w-100 relative bg-white relative">
    <div className="w-100 ml-auto h-px-500 relative overflow-hidden">
      <div className="flex w-85 mx-auto py-12">
        <div className="w-40">
          <div className="text-left">
            <img src={"/img/logo-full.png"} className="w-60" />
          </div>
        </div>
        <div className="w-60 my-auto border-0 border-b-1 border-r-1  border-solid border-primary">
          <div className="text-left my-auto py-4 px-4">
            <h1 className="text-xl font-primary font-semibold">ABOUT US</h1>
            <div className=" w-20 border-1 border-grey-light border-solid"></div>
            <p className="text-sm w-70">
              ASC Ltd brings together with professional skills and extensive
              experience in the areas of central banking, commercial banking and
              financial system in general, legal issues and those related to
              information technology and organization.
            </p>
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
