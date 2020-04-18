import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TruncateHtml from "../utilities/TruncateHtml"
import ReactHtmlParser from "react-html-parser"

const ServiceCard = ({ service }) => (
  <div class="w-30 mx-auto">
    <div class="w-100 flex mt-4 mb-12">
      <div class="w-35 pr-4 flex items-center">
        <div class="w-100">
          <img src={service.image ? service.image.url : ""} />
        </div>
      </div>

      <div className="w-65">
        <div class="text-left text-black mx-auto">
          <h4 class="text-primary text-xl font-primary font-normal font-light p-0 m-0 leading-loose">
            {service.title}
          </h4>
          <div class="w-100 mx-auto xs:my-3 sm:text-sm text-base pt-2 m-0 xs:w-90 font-light ">
            <TruncateHtml length={80} tokenize={"words"}>
              {service.content}
            </TruncateHtml>
          </div>
        </div>
        <div class="w-100 text-left pt-3">
          <Link to={`/service/${service.slug}`}>
            <button class="btn bg-none  py-2 px-4 text-primary rounded-full border-1 border-solid border-primary text-xxs text-light mx-auto">
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
