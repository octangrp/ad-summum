import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TruncateHtml from "../utilities/TruncateHtml"
import ReactHtmlParser from "react-html-parser"

const ServiceCard = ({ service }) => (
  <div className="w-30 xs:w-100 mx-auto">
    <div className="w-100 xl:flex lg:flex xs:flex md:flex mt-4 mb-16">
      <div className="w-35 pr-4 flex items-center">
        <div className="w-100">
          <img src={service.image ? service.image.url : ""} />
        </div>
      </div>

      <div className="w-65">
        <div className="text-left text-black mx-auto">
          <h4 className="text-primary text-xl font-primary font-normal font-light p-0 m-0 leading-loose sm:leading-normal">
            {service.title}
          </h4>
          <div className="w-100 mx-auto xs:my-3 sm:text-sm text-base pt-2 m-0 xs:w-90 font-light ">
            <TruncateHtml length={80} tokenize={"words"}>
              {service.content}
            </TruncateHtml>
          </div>
        </div>
        <div className="w-100 text-left pt-4">
          <Link to={`/service/${service.slug}`}>
            <button className="btn bg-none  py-2 px-4 text-primary rounded-full border-1 border-solid border-primary text-xs text-light mx-auto">
              {service.attributes.button_text}
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

ServiceCard.propTypes = {
  service: PropTypes.object,
}

ServiceCard.defaultProps = {
  service: {},
}

export default ServiceCard
