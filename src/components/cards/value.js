import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"

class ValueCard extends React.Component {
  render() {
    return (
      <div class="p-2 xl:w-30 lg:w-45 md:w-45 sm:w-45 md:mr-2  rounded-lg overflow-hidden bg-transparent xl:inline-block lg:inline-block md:inline-block sm:inline-block sm:m-2 xl:m-2 lg:m-2 mt-3">
        <div class="sm:h-64 sm:w-rem-64 xxs:h-48 xxs:w-rem-48 overflow-hidden centered mx-auto my-2">
          <img src={this.props.imageUrl} alt={this.props.title} />
        </div>
        <div class="panel-body bg-white center text-left py-2 px-0">
          <h5 class=" my-1 color-accent xl:pt-4 lg:pt-3 font-bold font-primary text-xl md:text-base xs:text-xs sm:text-base sm:ml-3 xs:text-center sm:my-3 xs:my-3">
            {this.props.title}
          </h5>
          <div class="w-100  xl:pt-2 lg:pt-1 sm:ml-3 xs:text-center sm:text-xs md:text-sm text-lg left xs:text-xs xs:mx-auto xs:w-80 opacity-95">
            {ReactHtmlParser(this.props.children)}
          </div>
        </div>
      </div>
    )
  }
}

ValueCard.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
}

ValueCard.defaultProps = {
  title: `Name`,
  imageUrl: ``,
}

export default ValueCard
