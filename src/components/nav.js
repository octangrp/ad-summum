import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ siteTitle }) => (
  <nav class="z-99 transition-500ms w-100 text-primary absolute bg-transparent m-0 t-0 l-0 r-0  border-0 border-b-1 border-solid border-primary ">
    <div class="xl:w-90 lg:w-90 xs:w-90 sm:w-90 md:w-90 flex mx-auto py-0 mx-0">
      <ul class="list text-left w-50 lg:w-60  mr-auto p-0 m-0 hidden xl:block lg:block px-0 mr-0  text-sm">
        <li class="inline-block px-8 bg-primary text-white my-0 mr-5">
          <button class="px-5 py-3">
            <Link to="/" className="inherit-color no-underline">
              Home
            </Link>
          </button>
        </li>
        <li class="inline-block  px-8 my-0 mr-5">
          <Link to="/#services" className="inherit-color no-underline">
            Services
          </Link>
        </li>
        <li class="inline-block  px-8 my-0 mr-5">
          <Link to="/#team" className="inherit-color no-underline">
            Team
          </Link>
        </li>
        <li class="inline-block  px-8 my-0 mr-5">
          <Link to="/#about-us" className="inherit-color no-underline">
            About us
          </Link>
        </li>
      </ul>
      <div class="w-10 text-right mr-auto pt-2 hidden xl:block lg:block px-0 mr-0  text-sm">
        <p class="text-xl p-0 m-0">
          <span class="pr-2">🇫🇷</span>
          <span class="">🇺🇸</span>
        </p>
      </div>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
