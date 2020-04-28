import PropTypes from "prop-types"
import React from "react"
import Translator from "../../utils/translator"
import { connect } from "react-redux"

class Member extends React.Component {
  render() {
    const details = Translator.process(
      this.props.lang,
      this.props.details.translations
    )
    return (
      <div className="rounded-lg overflow-hidden bg-transparent w-100">
        <div className="h-rem-64 w-rem-64 sm:h-64 sm:w-rem-64 xxs:h-48 xxs:w-rem-48 overflow-hidden centered mx-auto mb-0">
          <img src={details.image.url} alt="team-member" />
        </div>
        <div className="bg-white center text-center py-3">
          <h5 className="mb-2 mt-0 text-2xl xs:text-xl md:text-xl sm:text-lg">
            {details.name}
          </h5>
          <p className="font-light text-lg xs:text-base md:text-base sm:text-sm m-">
            {details.attributes.position}
          </p>
        </div>
      </div>
    )
  }
}

Member.propTypes = {
  details: PropTypes.object,
}

Member.defaultProps = {
  details: {
    translations: [],
  },
}

const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(Member)
