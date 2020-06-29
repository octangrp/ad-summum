import React from "react"
import PropTypes from "prop-types"
import Translator from "src/utils/translator"
import { connect } from "react-redux"
import TruncateHtml from "src/components/utilities/TruncateHtml"
import { Link } from "gatsby"

class Discover extends React.Component {
  render() {
    const image = this.props.details.image
    const details = Translator.process(
      this.props.lang,
      this.props.details.translations
    )

    return (
      <Link to={`/bulletin/${details.slug}`} className="mb-18 block">
        <div className="xl:flex lg:flex md:flex ">
          <div class="w-40 xs:w-100">
            <div class="h-rem-86 xs:h-rem-42">
              <img
                src={image ? image.url : null}
                class="w-100 clip-full relative"
              />
            </div>
          </div>
          <div class="w-60 xs:w-100 xs:pl-0  pl-10">
            <div class="text-left my-auto">
              <div class="w-100 xs:pt-2 font-primary">
                <div class="w-rem-6 h-rem-6 xs:w-rem-4 xs:h-rem-4 bg-primary mt-1 inline-block mr-3 rounded-full"></div>
                <h1 class="text-2xl xs:text-lg font-bold uppercase leading-none inline-block">
                  {details.title}
                </h1>
              </div>
              <div class="text-base font-secondary w-80 xs:p-0 xsm-0">
                <div class="font-secondary xs:text-xs text-base tracking-wider leading-relaxed font-normal">
                  <TruncateHtml length={500} tokenize={"words"}>
                    {details.content}
                  </TruncateHtml>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

Discover.propTypes = {
  details: PropTypes.object,
}

Discover.defaultProps = {
  details: {
    translations: [],
    image: {},
  },
}

const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(Discover)
