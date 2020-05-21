import { AnchorLink as Link } from "gatsby-plugin-anchor-links"
import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import Translator from "../utils/translator"

class Navbar extends React.Component {
  render() {
    const menu = Translator.process(
      this.props.lang,
      this.props.details.translations
    )
    return (
      <nav className="z-99 transition-500ms w-100 text-black fixed bg-white m-0 t-0 l-0 r-0 ">
        <div className="xl:w-90 lg:w-90 xs:w-90 sm:w-90 md:w-90 flex mx-auto py-0 mx-0">
          <ul className="list text-right w-80 lg:w-90 font-primary font-semibold text-xs ml-auto p-0 m-0 hidden xl:block lg:block px-0 mr-0  text-sm">
            {/* <li className="inline-block  text-center m-0 py-0 text-base pr-2">
              <img src={Logo} alt="ad-summum-logo" width="50" />
            </li> */}
            {menu.items.map((item, index) => (
              <li
                key={index}
                className="inline-block  text-center m-0 py-4 text-base "
              >
                <Link
                  to={item.url}
                  className="inherit-color  px-6 no-underline leading-sm uppercase"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="list text-left font-semibold hidden xl:block lg:block px-0 mr-0  text-sm ">
            <li className="inline-block  m-0 py-3 px-3 text-sm">
              <img
                src={"/img/united-states.svg"}
                width="20"
                onClick={() => this.props.switchLanguage("en_US")}
                className="cursor-pointer"
                alt="english-language"
              />
              <span className="pl-2 pt-3">EN</span>
            </li>
            <li className="inline-block m-0 py-4 px-3 text-sm ">
              <img
                src={"/img/france.svg"}
                width="20"
                onClick={() => this.props.switchLanguage("fr_FR")}
                className="cursor-pointer"
                alt="french-language"
              />
              <span className="pl-2">FR</span>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
  details: PropTypes.array,
}

Navbar.defaultProps = {
  siteTitle: ``,
  details: [],
}

const mapStateToProps = state => ({
  lang: state.lang,
})

const mapDispatchToProps = dispatch => {
  return {
    switchLanguage: lang =>
      dispatch({
        type: "SET_LANGUAGE",
        lang: lang,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
