import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import { Link } from "gatsby"
import Logo from "../logo"
import SectionTitle from "../section-title"

class Service extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  render() {
    return (
      <div className="w-100 relative bg-white relative">
        <div className="w-100 ml-auto  relative overflow-hidden">
          <div className="w-100 h-100 bg-white absolute t-10 z-5 rotate-60deg -l-30" />
          <div className="w-50 relative z-10">
            <div className="w-90 ml-auto py-6">
              <Logo />
              <div className="w-100 my-auto relative">
                <div className="text-left my-auto">
                  <SectionTitle>{this.props.title}</SectionTitle>
                  <div className="text-lg font-secondary w-100 tracking-wide">
                    {ReactHtmlParser(this.props.description)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-70 absolute r-0 t-0 h-100">
            <img src={"/img/tim.png"} className="clip-full relative" />
            <div className="absolute r-5 b-5 text-right">
              <Link to="services" className="uppercase text-white text-base">
                View more
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Service.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  services: PropTypes.array,
}

Service.defaultProps = {
  id: null,
  title: ``,
  description: ``,
  services: [],
}

export default Service
