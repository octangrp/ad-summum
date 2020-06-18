import React from "react"
import PropTypes from "prop-types"
import Translator from "src/utils/translator"
import { connect } from "react-redux"
import TruncateHtml from "src/components/utilities/TruncateHtml"
import { Link } from "gatsby"
import moment from "moment"

class Post extends React.Component {
  render() {
    const image = this.props.details.image
    const details = Translator.process(
      this.props.lang,
      this.props.details.translations
    )

    return (
      <div class="w-50 xs:w-100 xs:pl-0 mr-10 sm:pl-0">
        <Link to={`/bulletin/${details.slug}`}>
          <div class="xs:pb-0 h-rem-86 xs:h-rem-42">
            <img
              src={image ? image.url : null}
              class="w-100 clip-full relative"
            />
          </div>
          <div>
            <div class="w-100 my-3 ">
              <div class="w-rem-5 h-rem-5 xs:w-rem-3 xs:h-rem-3 bg-primary rounded-full inline-block mr-3"></div>
              <h1 class="text-xl p-0 w-80 mx-0 xs:text-sm md:text-base font-bold uppercase text-black inline-block ">
                {details.title}
              </h1>
            </div>
            <div className="text-base font-secondary tracking-wider leading-relaxed my-3">
              <TruncateHtml length={100} tokenize={"words"}>
                {details.content}
              </TruncateHtml>
            </div>
          </div>
          {/* <div class="text-sm  md:text-xs m-0 font-secondary w-100 tracking-wider leading-relaxed text-right">
            <p class="p-0 m-0 xs:text-xxs">
              {moment(details.date).format("dddd, MMM Do YYYY")}
            </p>
          </div> */}
        </Link>
      </div>
    )
  }
}

Post.propTypes = {
  details: PropTypes.object,
}

Post.defaultProps = {
  details: {
    translations: [],
    image: {},
  },
}

const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(Post)
