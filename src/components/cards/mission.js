import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import Translator from "src/utils/translator"
import { connect } from "react-redux"

class MissionCard extends React.Component {
  render() {
    const details = Translator.process(
      this.props.lang,
      this.props.details.translations
    )
    return (
      <div class="w-30 lg:pr-0 xs:w-100 xs:pr-0 mr-auto border-none rounded-lg bg-white shadow p-8 lg:p-6">
        <img src={"/img/target.png"} className="w-20 relative" />

        <div class="pt-6">
          <h2 class="text-left text-xl font-primary font-semibold my-auto uppercase tracking-wider leading-relaxed">
            {details.title}
          </h2>
          <p class="text-sm tracking-wider leading-relaxed">
            {ReactHtmlParser(details.description)}
          </p>
        </div>
      </div>
    )
  }
}

MissionCard.propTypes = {
  details: PropTypes.object,
}

MissionCard.defaultProps = {
  details: {
    translations: [],
  },
}
const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(MissionCard)
