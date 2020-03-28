import PropTypes from "prop-types"
import React from "react"
import ServiceCard from "../cards/service"
import ReactHtmlParser from "react-html-parser"

class Service extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
    this.switchSection = this.switchSection.bind(this)
  }

  switchSection(index) {
    // Update state so the next render will show the fallback UI.
    this.setState({ index: index })
  }

  currentService() {
    if (this.state.index < this.props.services.length) {
      return this.props.services[this.state.index]
    }
    return null
  }

  render() {
    return (
      <div class="panel z-10 px-0 pt-32 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto">
        <div class="panel-body min-h-screen  sm:min-h-auto xs:min-h-auto h-100 w-90 lg:w-90 -mt-24 lg:-mt-32 md:-mt-3  xs:mt-5 lg:mt-3 lg:pt-3 p-0 sm:mt-5 mx-auto md:w-90 xs:w-100 sm:w-95 relative">
          <h1 class="text-center font-semiBold text-4xl pb-24">What We Do</h1>
          <div>
            {this.currentService() ? (
              <ServiceCard
                key={this.state.index}
                title={this.currentService().title}
                image={this.currentService().image}
              >
                {ReactHtmlParser(this.currentService().body)}
              </ServiceCard>
            ) : null}
            <div class="w-100 text-center mt-12">
              {this.props.services.map((item, index) => (
                <span
                  key={index}
                  onClick={() => this.switchSection(index)}
                  className={[
                    "inline-block h-rem-3 w-rem-3 border-1 border-solid border-primary rounded-full mx-4 cursor-pointer",
                    this.state.index == index ? "bg-primary" : "bg-transparent",
                  ].join(" ")}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Service.propTypes = {
  siteTitle: PropTypes.string,
  services: PropTypes.array,
}

Service.defaultProps = {
  siteTitle: ``,
  services: [
    {
      image: "/img/Untitled-1.png",
      title: "Information Consulting fsd",
      body:
        "<p>Discover where your leads come from, what it costs to get them, and how they interact with your website before contacting you. Discover where  your leads come from, them.</p>",
    },
    {
      image: "/img/Untitled-1.png",
      title: "Information Consultin dfsd",
      body:
        "<p>Discover where your leads come from, what it costs to get them, and how they interact with your website before contacting you. Discover where  your leads come from, them.</p>",
    },
  ],
}

export default Service
