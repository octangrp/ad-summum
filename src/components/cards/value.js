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
      <div className="pt-12 xl:w-30 xs:mx-auto lg:w-45 md:w-45 sm:w-45 md:mr-2 xs:w-80 rounded-lg overflow-hidden bg-grey xl:inline-block lg:inline-block md:inline-block sm:inline-block sm:m-2 xl:m-2 lg:m-2 ">
        <div className="panel-body bg-grey text-center pt-2 px-0">
          <h5 className="text-3xl md:text-xl sm:text-lg text-center my-2">
            {details.title}
          </h5>
          <div className="w-100 text-center font-light text-lg md:text-base sm:text-sm">
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
