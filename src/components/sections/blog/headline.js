import React from "react"
import PropTypes from "prop-types"
import Translator from "src/utils/translator"
import { connect } from "react-redux"
import TruncateHtml from "src/components/utilities/TruncateHtml"
import { Link } from "gatsby"
import moment from "moment"

class HeadlineSection extends React.Component {
  render() {
    let details = {}
    let image = {}
    if (this.props.details.list && this.props.details.list.length) {
      image = this.props.details.list[0].image
      details = Translator.process(
        this.props.lang,
        this.props.details.list[0].translations
      )
    }

    return (
      <div className=" xs:pt-8">
        <Link to={`/bulletin/${details.slug}`}>
          <div className="mx-auto pt-6 relative">
            <img src={image.url} class="w-100 relative" />
            <div class="absolute xl:flex lg:flex w-100 b-0 l-0 image-gradient px-12 xs:px-4 pt-16 pb-12 xs:py-0 md:pb-8">
              <div class="w-80 xl:mx-auto">
                <h2 class="p-0 m-0 font-primary font-bold text-3xl xs:text-sm md:text-xl track-wider text-white uppercase leading-relaxed">
                  {details.title}
                </h2>
                <div class="w-80 p-0 m-0 text-white">
                  <TruncateHtml length={250} tokenize={"words"}>
                    {details.content}
                  </TruncateHtml>
                </div>
              </div>
              <div class="w-20 xs:w-100 text-right mt-auto">
                <h1 class="text-sm xs:text-xxs p-0 m-0 text-white text-light mx-auto">
                  {moment(details.date).format("dddd, MMM Do YYYY")}
                </h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

HeadlineSection.propTypes = {
  details: PropTypes.object,
}

HeadlineSection.defaultProps = {
  details: {
    translations: [],
    image: {},
  },
}

const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(HeadlineSection)
