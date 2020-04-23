import { AnchorLink as Link } from "gatsby-plugin-anchor-links"
import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"

class Navbar extends React.Component {
  render() {
    return (
      <nav className="z-99 transition-500ms w-100 text-primary fixed bg-white m-0 t-0 l-0 r-0  border-0 border-b-1 border-solid border-primary ">
        <div className="xl:w-90 lg:w-90 xs:w-90 sm:w-90 md:w-90 flex mx-auto py-0 mx-0">
          <ul className="list text-left w-50 lg:w-90  mr-auto p-0 m-0 hidden xl:block lg:block px-0 mr-0  text-sm">
            {this.props.items.map((item, index) => (
              <li
                key={index}
                className="inline-block  text-center m-0 py-4 text-base hover:bg-primary hover:text-white"
              >
                <Link
                  to={item.link}
                  className="inherit-color  px-12 no-underline leading-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-10 text-right ml-auto pt-2 hidden xl:block lg:block px-0 mr-0  text-sm text-right">
            <img
              src={"/img/united-states.svg"}
              width="20"
              onClick={() => this.props.switchLanguage("en_US")}
              className="mt-3 mx-4 cursor-pointer"
              alt="english-language"
            />
            <img
              src={"/img/france.svg"}
              width="20"
              onClick={() => this.props.switchLanguage("fr_FR")}
              className="mt-3 cursor-pointer"
              alt="french-language"
            />
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
  items: PropTypes.array,
}

Navbar.defaultProps = {
  siteTitle: ``,
  items: [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Services",
      link: "/#services",
    },
    {
      label: "Team",
      link: "/#team",
    },
    {
      label: "About us",
      link: "/#about-us",
    },
  ],
}

const mapDispatchToProps = dispatch => {
  return {
    switchLanguage: lang =>
      dispatch({
        type: "SET_LANGUAGE",
        lang: lang,
      }),
  }
}

export default connect(null, mapDispatchToProps)(Navbar)
