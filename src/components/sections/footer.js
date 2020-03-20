import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({ siteTitle }) => (

    <div class="panel z-10 px-0 pt-32 bg-white t-0 overflow-hidden relative md:h-auto sm:h-auto">
  <div class="panel-body min  sm:min-h-auto xs:min-h-auto h-100 w-40 lg:w-90 -mt-24 lg:-mt-32 md:-mt-3  xs:mt-5 lg:mt-3 lg:pt-3 p-0 sm:mt-5 mx-auto md:w-90 xs:w-100 sm:w-95 xl:flex md:flex  lg:flex sm:flex relative">
      
      
      <div class="w-40 h-40 bg-green align-items-end relative w-100 md:w-55 pb-4 xs:w-95 mx-auto">
          <div class="text-center">
              <h2 class="text-white text-base">
                <span>   <FontAwesomeIcon icon="coffee" /></span>
                27 Kg 8 Ave Kigali, Rwanda</h2>
                <h2 class="text-white text-base">
                <span>   <FontAwesomeIcon icon="coffee" /></span>
                +25078501891</h2>
                <h2 class="text-white text-base">
                <span>   <FontAwesomeIcon icon="coffee" /></span>
                landos007@gmail.com</h2>
          </div>
          </div>

       
  </div>


</div>

    
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
