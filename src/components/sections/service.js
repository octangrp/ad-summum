import PropTypes from "prop-types"
import React from "react"
import ServiceCard from "../cards/service"

class Service extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  render() {
    return (
      <div
        id={this.props.id}
        className="panel z-10 px-0 pt-32 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto"
      >
        <div className="min-h-screen  sm:min-h-auto xs:min-h-auto h-100 w-95 lg:w-90 -mt-24 lg:-mt-32 md:-mt-3  xs:mt-5 lg:mt-3 lg:pt-3 p-0 sm:mt-5 mx-auto md:w-90 xs:w-100 sm:w-95 relative">
          <h1 className="text-center font-semiBold text-6xl pb-24 xs:pb-0">
            {this.props.title}
          </h1>
          <div className="flex flex-wrap xs:block w-95 md:w-55 pb-4 xs:w-95 mx-auto justify-center text-center">
            {this.props.services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

Service.propTypes = {
  siteTitle: PropTypes.string,
  services: PropTypes.array,
  id: PropTypes.string,
}

Service.defaultProps = {
  siteTitle: ``,
  id: null,
  services: [],
}

export default Service
