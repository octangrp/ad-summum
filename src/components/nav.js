import { AnchorLink as Link } from "gatsby-plugin-anchor-links"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = ({ siteTitle, items }) => (
  <nav className="z-99 transition-500ms xs:hidden w-100 text-primary fixed bg-white m-0 t-0 l-0 r-0  border-0 border-b-1 border-solid border-primary ">
    <div className="xl:w-90 lg:w-90 xs:w-90 sm:w-90 md:w-90 flex mx-auto py-0 mx-0">
      <ul className="list text-left w-50 lg:w-90  mr-auto p-0 m-0 hidden xl:block lg:block px-0 mr-0  text-sm">
        <li className="inline-block  text-center m-0 py-0 text-base pr-2">
          <img src={Logo} alt="ad-summum-logo" width="50" />
        </li>
        {items.map((item, index) => (
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

  // <nav class="z-99 w-100 text-primary border-primary border-solid border-0 border-b-1 absolute xl:hidden lg:hidden md:hidden m-0 t-0 l-0 r-0">
  //   <div class="w-90 flex mx-auto py-2 mx-0">

  //                     <ul class="mr-auto list w-50 text-left px-0 ml-1 xl:hidden lg:hidden py-0 my-2">
  //                       <li class="my-0">
  //                         <button class="px-0 pt-m-2 py-l-4 py-0 my-0">
  //                         <FontAwesomeIcon icon={["fas", "bars"]} />
  //                           </button>
  //                           </li>
  //                           </ul>

  //       <ul class="w-50 lg:w-40 list mx-0 px-0 text-right">
  //       <li class="w-25 xs:w-50 text-black mx-0 px-0  ml-auto">
  //         <a href="#"> logo</a>
  //             </li>
  //             </ul>
  //                           </div>
  //                           </nav>
)

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
