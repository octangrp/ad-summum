import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import Translator from "../../utils/translator"
import { connect } from "react-redux"

class ValueCard extends React.Component {
  render() {
    const details = Translator.process(
      this.props.lang,
      this.props.details.translations
    )
    return (
      <div className="p-2 xl:w-30 lg:w-45 md:w-45 sm:w-45 md:mr-2  rounded-lg overflow-hidden bg-transparent xl:inline-block lg:inline-block md:inline-block sm:inline-block sm:m-2 xl:m-2 lg:m-2 mt-3">
        <div className="sm:h-64 sm:w-rem-64 xxs:h-48 xxs:w-rem-48 overflow-hidden text-center mx-auto my-2">
          <img src={details.image.url} alt={details.title} />
        </div>
        <div className="panel-body bg-white text-center py-2 px-0">
          <h5 className="text-3xl text-center my-2">{details.title}</h5>
          <div className="w-100 text-center font-light text-lg">
            {ReactHtmlParser(details.description)}
          </div>
        </div>
      </div>
    )
  }
}

ValueCard.propTypes = {
  details: PropTypes.object,
}

ValueCard.defaultProps = {
  details: {
    translations: [],
  },
}
const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(ValueCard)
