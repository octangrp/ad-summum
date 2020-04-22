import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"

class ValueCard extends React.Component {
  render() {
    return (
      <div className="p-2 xl:w-30 xs:mx-auto lg:w-45 md:w-45 sm:w-45 md:mr-2 xs:w-80 rounded-lg overflow-hidden bg-transparent xl:inline-block lg:inline-block md:inline-block sm:inline-block sm:m-2 xl:m-2 lg:m-2 mt-3">
        <div className="sm:h-64 sm:w-rem-64 xxs:h-48 xxs:w-rem-48 overflow-hidden text-center mx-auto my-2">
          <img src={this.props.imageUrl} alt={this.props.title} />
        </div>
        <div className="panel-body bg-white text-center py-2 px-0">
          <h5 className="text-3xl md:text-xl sm:text-lg text-center my-2">
            {this.props.title}
          </h5>
          <div className="w-100 text-center font-light text-lg md:text-base sm:text-sm">
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
