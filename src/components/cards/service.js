import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TruncateHtml from "../utilities/TruncateHtml"
import Translator from "../../utils/translator"
import { connect } from "react-redux"

class ServiceCard extends React.Component {
  render() {
    const details = Translator.process(
      this.props.lang,
      this.props.details.translations
    )
    return (
      <div className="w-30 mx-auto">
        <div className="w-100 flex mt-4 mb-16">
          <div className="w-35 pr-4 flex items-center">
            <div className="w-100">
              <img src={details.image ? details.image.url : ""} />
            </div>
          </div>

          <div className="w-65">
            <div className="text-left text-black mx-auto p-0">
              <h4 className="text-primary text-xl font-primary font-normal font-light p-0 m-0 leading-loose">
                {details.title}
              </h4>
              <div className="w-100 mx-auto xs:my-3 sm:text-sm text-base pt-2 m-0 xs:w-90 font-light ">
                <TruncateHtml length={80} tokenize={"words"}>
                  {details.content}
                </TruncateHtml>
              </div>
            </div>
            <div className="w-100 text-left pt-4">
              <Link to={`/service/${details.slug}`}>
                <button className="btn bg-none  py-2 px-4 text-primary rounded-full border-1 border-solid border-primary text-xs text-light mx-auto">
                  {details.attributes.button_text}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ServiceCard.propTypes = {
  details: PropTypes.object,
}

ServiceCard.defaultProps = {
  details: {
    translations: [],
  },
}

const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(ServiceCard)
