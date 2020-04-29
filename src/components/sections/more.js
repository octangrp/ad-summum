import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import SectionWrapper from "./sectionWrapper"

const More = props => (
  <SectionWrapper
    id={props.id}
    title={props.title}
    showSubtitle={false}
    backgroundClass="bg-primary text-white p-0 m-0"
  >
    {ReactHtmlParser(props.children)}
  </SectionWrapper>
)

More.propTypes = {
  siteTitle: PropTypes.string,
  buttonText: PropTypes.string,
}

More.defaultProps = {
  siteTitle: ``,
  buttonText: `Read more`,
}

export default More
