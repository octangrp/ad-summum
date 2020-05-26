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
      <div id={this.props.id} className="w-100 relative bg-white relative">
        <div className="w-100 ml-auto  relative overflow-hidden">
          <div className="w-100 h-100 bg-white absolute t-10 lg:t-20 z-5 rotate-60deg md:hidden xs:hidden -l-30" />
          <div
            className="w-50 md:w-90 relative z-10 xs:w-90 xs:mx-auto
          "
          >
            <div className="w-90 ml-auto py-6">
              <Logo />
              <div className="w-100 my-auto relative">
                <div className="text-left my-auto">
                  <SectionTitle>{this.props.title}</SectionTitle>
                  <div className="text-lg font-secondary w-100 tracking-wider leading-relaxed">
                    {ReactHtmlParser(this.props.description)}
                  </div>
                </div>
                <div className=" r-5 b-5 text-right ">
                  <Link to="services">
                    <button class="btn bg-white text-black border-black border-1 border-solid py-2 px-4 text-sm text-light mx-auto xl:hidden lg:hidden">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-70 md:w-85 md:mx-auto xl:absolute lg:absolute r-0 t-0 h-100 xs:hidden">
            <img src={this.props.image.url} className="clip-full relative" />
            <div className="absolute r-5 b-5 text-right md:hidden">
              <Link to="services">
                <button class="btn bg-white text-black  py-2 px-4 text-sm text-light mx-auto">
                  Read More
                </button>
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
