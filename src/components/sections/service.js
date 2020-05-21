import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import { Link } from "gatsby"

const Service = props => (
  <div className="w-100 relative bg-white relative">
    <div className="w-100 ml-auto h-px-500 relative overflow-hidden">
      {/* <div className="flex ">
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
      </div> */}

      <div className="relative overflow-hidden">
        <img src={"/img/tim.png"} className="clip-full relative" />

        <div className="absolute w-85 bg-transparent  l-5 t-10 z-999">
          <div className="w-50 relative">
            <div className="text-left">
              <img src={"/img/logo-full.png"} className="w-40" />
            </div>
          </div>
          <div className="w-90 pl-6 my-auto relative">
            <div className="text-left py-6 my-auto">
              <h1 className="text-xl font-primary font-semibold">
                OUR SERVICES
              </h1>
              <div className=" w-20 border-1 border-grey-light border-solid"></div>
              <p className="text-sm font-secondary w-60">
                ASC Ltd brings together with professional skills and extensive
                experience in the areas of central banking, commercial banking
                and financial system in general, legal issues and those related
                to information technology and organization.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white w-90 h-px-800 rotate-60deg -t-5  -l-20"></div>
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
