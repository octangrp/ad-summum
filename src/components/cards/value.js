import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import Translator from "src/utils/translator"
import { connect } from "react-redux"

class ValueCard extends React.Component {
  render() {
    const details = Translator.process(
      this.props.lang,
      this.props.details.translations
    )
    return (
      <div class="w-30 relative xs:w-100 mr-auto pt-8">
        <div class="w-rem-12 h-rem-12 bg-white z-99 shadow mx-auto rounded-full relative items-center justify-center flex">
          <div class="w-rem-5 h-rem-5 bg-primary-darker text-center mx-auto rounded-full  items-center"></div>
        </div>
        <div className="flex">
          <div className="w-50">
            <div class=" ml-auto h-rem-20 border-0 border-l-1 border-solid border-black border-dashed -mt-6 rotate-30deg w-rem-0 mr-10"></div>
          </div>

          <div className="w-50">
            <div class="h-rem-20 border-0 border-l-1 border-solid border-black border-dashed -mt-6 -rotate-30deg w-rem-0 ml-10"></div>
          </div>
        </div>

        <div class="border-none rounded-lg bg-white shadow px-8 h-rem-64 overflow-hidden py-6 z-999 relative -mt-3">
          <div>
            <h2 class="text-left text-xl text-center uppercase font-semibold my-auto tracking-wider leading-relaxed">
              {details.title}
            </h2>
            <p class="text-sm tracking-wider leading-relaxed">
              {ReactHtmlParser(details.description)}
            </p>
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
