import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Information = ({ siteTitle }) => (

    <div class="panel z-10 px-0 pt-32 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto">
  <div class="panel-body min-h-screen  sm:min-h-auto xs:min-h-auto h-100 w-90 lg:w-90 -mt-24 lg:-mt-32 md:-mt-3  xs:mt-5 lg:mt-3 lg:pt-3 p-0 sm:mt-5 mx-auto md:w-90 xs:w-100 sm:w-95 xl:flex md:flex  lg:flex sm:flex relative">

  <div class="w-85 mx-auto">

    <h4 class="text-center text-2xl pb-24 font-bold text-primary font-secondary">Discover</h4>
        <div class="relative w-100">
        <div class="w-rem-88 h-rem-88 border-8 border-grey relative">

        <div class="pt-4 px-5 relative">
          <ul class="list text-center w-100 lg:w-60  font-primary mr-auto p-0 m-0 hidden xl:block lg:block px-0 mr-0  text-sm">
            <li class="inline-block my-0 py-1 mr-8 text-3xl text-grey font-bold">1.</li>
            <li class="inline-block my-0 py-1 mr-8 text-3xl text-primary font-bold border-0 border-b-4 border-solid border-grey">2.</li>
            <li class="inline-block my-0 py-1 mr-8 text-3xl text-grey font-bold">3.</li>
            <li class="inline-block my-0 py-1 mr-8 text-3xl text-grey font-bold">4.</li>
            </ul>
        </div>

        </div>
        <div class="w-60  bg-white absolute t-25 mx-16 py-10">
        <p class="text-black font-secondary font-bold text-2xl my-0">Discover where your leads come from, 
        what it costs to getthem,  and how they 
        interact with your websitebefore contacting you. 
        </p>
        </div>
        </div>


        <div class="flex w-100 text-center relative pt-12">
        <div class="w-50 px-4 text-right">
          <button class="btn  bg-transparent hover:bg-primary hover:text-white cursor-pointer text-primary py-1 px-4 border-primary border-6 text-2xl">
              <FontAwesomeIcon icon="arrow-left" />
          </button>
        </div>
        <div class="w-50 px-4 text-left">
           <button class="btn  bg-transparent hover:bg-primary hover:text-white cursor-pointer text-primary py-1 px-4 border-primary border-6 text-2xl">
              <FontAwesomeIcon icon="arrow-right" />
          </button>
        </div>
      </div>  
  </div>


  </div>
</div>

    
)

Information.propTypes = {
  siteTitle: PropTypes.string,
}

Information.defaultProps = {
  siteTitle: ``,
}

export default Information
