import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import { Link } from "gatsby"
import Logo from "../logo"
import SectionWrapper from "./sectionWrapper"

class Founders extends React.Component {
  render() {
    return (
      <SectionWrapper title={this.props.title}>
        <div className="w-100 ml-auto xs:m-0 xs:w-100">
          <div className="w-100">
            <img
              src={
                this.props.image && this.props.image.url
                  ? this.props.image.url
                  : null
              }
              className="relative"
            />
          </div>
          <div className="w-100 my-6 text-lg tracking-wider leading-relaxed ">
            {ReactHtmlParser(this.props.description)}
          </div>
        </div>
      </SectionWrapper>
    )
  }
}

Founders.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

Founders.defaultProps = {
  id: null,
  title: ``,
  description: ``,
}

export default Founders
