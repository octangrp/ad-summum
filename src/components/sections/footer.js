import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle, address, phoneNumber, email }) => (
  <div className="w-100 relative bg-grey-lighter">
    {/* <div className="w-85 xs:w-85 sm:w-90 mx-auto py-20 xs:py-8 md:py-12 sm:py-6 text-black">
      <div className="w-100">
        <h4 className="font-primary font-bold text-3xl xs:text-xl sm:xl uppercase my-3 track-wider">
          Let's Talk
        </h4>
      </div>
      <div className="w-100 xl:flex sm:text-sm md:flex lg:flex font-secondary text-lg font-light tracking-wider leading-relaxed">
        <div className="w-50">
          <p>{email}</p>
        </div>
        <div className="w-50 xs:w-100 text-right sm:text-left xs:text-left sm:text-sm text-lg tracking-wider leading-relaxed">
          <p>{address}</p>
          <p>{phoneNumber}</p>
        </div>
      </div>
    </div> */}
    <div className="w-100 bg-black opacity-30 text-center py-3 text-sm text-white">
      © 2020 {siteTitle}.
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
  address: "",
  email: "",
  phoneNumber: "",
}

export default Footer
