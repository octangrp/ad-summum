import PropTypes from "prop-types"
import React from "react"
import ServiceCard from "../cards/service"
import SectionWrapper from "./sectionWrapper"

class Service extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  render() {
    return (
      <SectionWrapper
        id={this.props.id}
        title={this.props.title}
        description={this.props.description}
        backgroundClass="bg-white text-black"
      >
        <div className="xl:flex md:flex lg:flex sm:flex flex-wrap justify-center text-center w-100">
          {this.props.services.map((service, index) => (
            <ServiceCard key={index} details={service} />
          ))}
        </div>
      </SectionWrapper>
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
