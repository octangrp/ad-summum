import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle, address, phoneNumber, email }) => (
  <div className="w-100 relative bg-primary">
    <div className="w-60 mx-auto py-20 text-white">
      <div className="w-100">
        <h4 className="text-8xl m-0 font-bold font-primary">Let's Talk</h4>
      </div>
      <div className="w-100 flex text-lg font-light">
        <div className="w-50">
          <p>{email}</p>
        </div>
        <div className="w-50 text-right">
          <p>{address}</p>
          <p>{phoneNumber}</p>
        </div>
      </div>
    </div>
    <div className="w-100 bg-primary-darker text-center py-2 text-sm text-white">
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
