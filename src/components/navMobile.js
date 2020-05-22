import { AnchorLink as Link } from "gatsby-plugin-anchor-links"
import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Translator from "../utils/translator"
class NavMobile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  openNav() {
    this.setState({ show: true })
  }

  closeNav() {
    this.setState({ show: false })
  }

  render() {
    const menu = Translator.process(
      this.props.lang,
      this.props.details.translations
    )
    return (
      <div className="relative">
        <nav className="z-99 w-100 text-primary border-primary border-solid border-0 border-b-1 absolute xl:hidden lg:hidden md:hidden m-0 t-0 l-0 r-0">
          <div className="w-90 flex mx-auto py-2 mx-0">
            <ul className="w-50 list mx-0 px-0 text-left">
              <li className="w-25 xs:w-50 text-black mx-0 px-0">
                <Link to="/">
                  <img src={"/img/logo.png"} className="w-50" />
                </Link>
              </li>
            </ul>

            <ul className="mr-auto list w-50 text-right px-0 ml-1 xl:hidden lg:hidden py-0 my-2">
              <li className="my-0">
                <button
                  className="px-0 pt-m-2 py-l-4 py-0 my-0"
                  onClick={() => this.openNav()}
                >
                  <FontAwesomeIcon icon={["fas", "bars"]} />
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <div
          className={[
            "xl:hidden md:hidden lg:hidden w-100 h-100 fixed z-999",
            !this.state.show ? "hidden" : null,
          ].join(" ")}
        >
          <div className="bg-primary h-100 w-70 ml-auto">
            <div className="my-0 w-95 py-3 text-right">
              <span
                className="text-2xl text-white"
                onClick={() => this.closeNav()}
              >
                <FontAwesomeIcon icon={["far", "times-circle"]} />
              </span>
            </div>
            <ul className="py-2 text-left text-white pt-2 -mt-3 p-0 pb-3 mx-auto w-80 relative xl:hidden lg:hidden md:hidden">
              {menu.items.map((item, index) => (
                <li
                  key={index}
                  className="inline-block  text-center m-0 py-4 text-base hover:bg-primary hover:text-white"
                  onClick={() => this.closeNav()}
                >
                  <Link
                    to={item.url}
                    className="inherit-color  px-12 no-underline leading-none"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

              <li className="my-3 text-xl">
                <div className="w-100 text-left ml-auto pt-2 px-0 mr-0  text-sm">
                  <img
                    src={"/img/england.svg"}
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

NavMobile.propTypes = {
  siteTitle: PropTypes.string,
  items: PropTypes.array,
}

NavMobile.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NavMobile)
