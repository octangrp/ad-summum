import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ siteTitle }) => (
  <nav class="z-99 transition-500ms w-100 text-primary absolute bg-transparent m-0 t-0 l-0 r-0  border-0 border-b-1 border-solid border-primary ">
    <div class="xl:w-90 lg:w-90 xs:w-90 sm:w-90 md:w-90 flex mx-auto py-0 mx-0">
      <ul class="list text-left w-50 lg:w-60  mr-auto p-0 m-0 hidden xl:block lg:block px-0 mr-0  text-sm">
        <li class="inline-block px-8 bg-primary text-white my-0 mr-5">
          <button class="px-5 py-3">
            <a href="#" class="inherit-color no-underline">
              Home
            </a>
          </button>
        </li>
        <li class="inline-block  px-8 my-0 mr-5">
          <a href="#services" class="inherit-color no-underline">
            Services
          </a>
        </li>
        <li class="inline-block  px-8 my-0 mr-5">
          <a href="#" class="inherit-color no-underline">
            Team
          </a>
        </li>
        <li class="inline-block  px-8 my-0 mr-5">
          <a href="#about-us" class="inherit-color no-underline">
            About us
          </a>
        </li>
      </ul>
      <ul class="list text-right w-40 lg:w-60  mr-auto p-0 mt-3 hidden xl:block lg:block px-0 mr-0  text-sm">
        <li class="inline-block my-0">
          <a>
            <img src={"/img/735145cfe0a4.png"} />
          </a>
        </li>
      </ul>

      <div class="w-10 text-right mr-auto p-0 mt-3 hidden xl:block lg:block px-0 mr-0  text-sm">
        <select id="cars" class="border-0">
          <option value="volvo">English</option>
          <option value="saab">French</option>
        </select>
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
