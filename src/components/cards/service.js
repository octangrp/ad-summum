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
    const defaultTranslation = Translator.process(
      "en_US",
      this.props.details.translations
    )
    return (
      <div className="w-30 xs:w-100 mb-10 mx-auto hover:shadow p-8 pb-18 relative hover:shadow-lg cursor-pointer transition-500ms border-1 border-solid border-grey-light bg-white">
        <div className="w-100 relative text-left mb-6">
          <img
            src={defaultTranslation.image ? defaultTranslation.image.url : ""}
            className="w-rem-16"
          />
        </div>
        <div className="text-left text-black mx-auto relative pb-12">
          <h4 className="text-xl xs:text-base xs:text-lg text-grey-darker uppercase my-2 tracking-wider font-primary">
            {details.title}
          </h4>
          <div className="w-100 text-lg lg:text-sm xs:text-sm my-5 tracking-wide text-justified">
            <TruncateHtml length={80} tokenize={"words"}>
              {details.content}
            </TruncateHtml>
          </div>
        </div>
        <div className="w-50 pt-4 text-right absolute b-10 r-0 px-8 xs:px-4 lg:px-4 pt-8">
          <Link
            to={`/service/${defaultTranslation.slug}`}
            className="uppercase text-sm text-primary-darkest font-bold font-primary"
          >
            {details.attributes.button_text}
          </Link>
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
