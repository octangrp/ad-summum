import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ServiceCard = ({ title, image, children }) => (
  <div class="flex flex-wrap xs:block w-95 md:w-55 pb-4 xs:w-95 mx-auto justify-center text-center">
    <div class="w-30">
      <div class="w-90 h-58 lg:h-64 md:h-64 mt-10 lg:mt-4  md:w-100 mt-5 sm:w-100  md:mt-0 sm:mt-0  rounded-xxl   bg-white  relative  lg:l-1 xs:hidden">
        <div class="-mt-10  mx-auto  w-100 ">
          <div class="rounded-full mt-0 mb-0 h-rem-16 w-rem-16  bg-primary mx-auto text-center  flex align-items-center shadow justify-content-center text-2xl text-white">
            <span class="cursor-pointer pl-6 pt-3">
              <img src={"/img/law.svg"} />
            </span>
          </div>
        </div>
        <div class="text-center text-black mx-auto">
          <h4 class="text-primary text-xl text-center font-primary font-normal text-center font-light pt-5 m-0 leading-loose">
            {title}
          </h4>
          <p class="w-100 mx-auto xs:my-3 sm:text-sm text-base pt-2 m-0 xs:w-90 font-normal ">
            A tangible and cherishable experience is acquired through our well
            developed hardware systems.
          </p>
        </div>
        <div class="w-100 text-center pt-6">
          <Link to="/service">
            <button class="btn bg-none  py-2 px-4 text-primary rounded-full border-1 border-solid border-primary text-xxs text-light mx-auto">
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
    <div class="w-30">
      <div class="w-90 h-58 lg:h-64 md:h-64 mt-10 lg:mt-4  md:w-100 mt-5 sm:w-100  md:mt-0 sm:mt-0  rounded-xxl   bg-white  relative  lg:l-1 xs:hidden">
        <div class=" -mt-10  mx-auto  w-100 ">
          <div class="rounded-full mt-0 mb-0 h-rem-16 w-rem-16  bg-primary mx-auto text-center  flex align-items-center shadow justify-content-center text-2xl text-white">
            <span class="cursor-pointer pl-6 pt-3">
              <img src={"/img/law.svg"} />
            </span>
          </div>
        </div>
        <div class="text-center text-black mx-auto">
          <h4 class="text-primary text-xl text-center font-primary font-normal text-center font-light pt-5 m-0 leading-loose">
            {title}
          </h4>
          <p class="w-100 mx-auto xs:my-3 sm:text-sm text-base pt-2 m-0 xs:w-90 font-normal ">
            A tangible and cherishable experience is acquired through our well
            developed hardware systems.
          </p>
        </div>
        <div class="w-100 text-center pt-6">
          <Link to="/service">
            <button class="btn bg-none  py-2 px-4 text-primary rounded-full border-1 border-solid border-primary text-xxs text-light mx-auto">
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
    <div class="w-30">
      <div class="w-90 h-58 lg:h-64 md:h-64 mt-10 lg:mt-4 md:w-100 mt-5 sm:w-100  md:mt-0 sm:mt-0  rounded-xxl   bg-white  relative  lg:l-1 xs:hidden">
        <div class=" -mt-10  mx-auto  w-100 ">
          <div class="rounded-full mt-0 mb-0 h-rem-16 w-rem-16  bg-primary mx-auto text-center  flex align-items-center shadow justify-content-center text-2xl text-white">
            <span class="cursor-pointer pl-6 pt-3">
              <img src={"/img/law.svg"} />
            </span>
          </div>
        </div>
        <div class="text-center text-black mx-auto">
          <h4 class="text-primary text-xl text-center font-primary font-normal text-center font-light pt-5 m-0 leading-loose">
            {title}
          </h4>
          <p class="w-100 mx-auto xs:my-3 sm:text-sm text-base pt-2 m-0 xs:w-90 font-normal ">
            A tangible and cherishable experience is acquired through our well
            developed hardware systems.
          </p>
        </div>
        <div class="w-100 text-center pt-6">
          <Link to="/service">
            <button class="btn bg-none  py-2 px-4 text-primary rounded-full border-1 border-solid border-primary text-xxs text-light mx-auto">
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
    <div class="w-30 pt-12">
      <div class="w-90 h-58 lg:h-64 md:h-64 mt-10 lg:mt-4 md:w-100 mt-5 sm:w-100  md:mt-0 sm:mt-0  rounded-xxl   bg-white  relative  lg:l-1 xs:hidden">
        <div class=" -mt-10  mx-auto  w-100 ">
          <div class="rounded-full mt-0 mb-0 h-rem-16 w-rem-16  bg-primary mx-auto text-center  flex align-items-center shadow justify-content-center text-2xl text-white">
            <span class="cursor-pointer pl-6 pt-3">
              <img src={"/img/law.svg"} />
            </span>
          </div>
        </div>
        <div class="text-center text-black mx-auto">
          <h4 class="text-primary text-xl text-center font-primary font-normal text-center font-light pt-5 m-0 leading-loose">
            {title}
          </h4>
          <p class="w-100 mx-auto xs:my-3 sm:text-sm text-base pt-2 m-0 xs:w-90 font-normal ">
            A tangible and cherishable experience is acquired through our well
            developed hardware systems.
          </p>
        </div>
        <div class="w-100 text-center pt-6">
          <Link to="/service">
            <button class="btn bg-none  py-2 px-4 text-primary rounded-full border-1 border-solid border-primary text-xxs text-light mx-auto">
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
    <div class="w-30 pt-12">
      <div class="w-90 h-58 lg:h-64 md:h-64 mt-10 lg:mt-4 md:w-100 mt-5 sm:w-100  md:mt-0 sm:mt-0  rounded-xxl   bg-white  relative  lg:l-1 xs:hidden">
        <div class="-mt-10  mx-auto  w-100 ">
          <div class="rounded-full mt-0 mb-0 h-rem-16 w-rem-16  bg-primary mx-auto text-center  flex align-items-center shadow justify-content-center text-2xl text-white">
            <span class="cursor-pointer pl-6 pt-3">
              <img src={"/img/law.svg"} />
            </span>
          </div>
        </div>
        <div class="text-center text-black mx-auto">
          <h4 class="text-primary text-xl text-center font-primary font-normal text-center font-light pt-5 m-0 leading-loose">
            {title}
          </h4>
          <p class="w-100 mx-auto xs:my-3 sm:text-sm text-base pt-2 m-0 xs:w-90 font-normal ">
            A tangible and cherishable experience is acquired through our well
            developed hardware systems.
          </p>
        </div>
        <div class="w-100 text-center pt-6">
          <Link to="/service">
            <button class="btn bg-none  py-2 px-4 text-primary rounded-full border-1 border-solid border-primary text-xxs text-light mx-auto">
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </div>

    {/* <div class="w-0 xs:w-100">
      <div class="pt-16 xs:pt-0">
        <h4 class="text-primary text-2xl font-bold text-center font-secondary text-center font-light pt-4 leading-loose">
          {title}
        </h4>
        {children}
        <div class="w-100 text-center pt-12">
          <Link to="/service">
            <button class="btn bg-none  py-3 px-8 text-primary rounded-full border-1 border-solid border-primary text-xs text-light mx-auto">
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </div> */}
  </div>
)

ServiceCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}

ServiceCard.defaultProps = {
  title: `Information Consulting`,
}

export default ServiceCard
