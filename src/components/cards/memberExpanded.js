import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReactHtmlParser from "react-html-parser"
import { Link } from "gatsby"
import TruncateMarkup from "react-truncate-markup"

class MemberExpanded extends React.Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal() {
    // Update state so the next render will show the fallback UI.
    this.props.onCloseModal(true)
  }

  render() {
    return (
      <div className="w-100 z-9999 overflow-hidden min-h-screen fixed t-0 l-0">
        <div className="z-10 relative w-100 min-h-screen flex items-center justify-center">
          <div
            onClick={this.closeModal}
            className="bg-black-darkest z-0 absolute h-100 w-100 opacity-50"
          ></div>
          <div className="w-70 panel-default py-5 relative z-10">
            <div className="w-100 lg:w-80 md:w-85 sm:w-90 xs:w-100 bg-white mx-auto shadow-lg border-1 border-grey border-solid">
              <div className="xl:flex sm:flex lg:flex md:flex xs:p-0">
                <div className="w-40 xs:w-100 xs:p-4 flex items-center justify-center">
                  <div className="w-rem-64 h-rem-64 rounded-full overflow-hidden">
                    <img
                      src={this.props.imageUrl}
                      className="clip-full "
                      alt="team-member"
                    />
                  </div>
                </div>
                <div className="w-60 py-8 px-6 relative">
                  <div
                    className="absolute r-0 t-0 text-black text-2xl my-0"
                    onClick={this.closeModal}
                  >
                    <div className="cursor-pointer p-5">
                      <FontAwesomeIcon icon={["far", "times-circle"]} />
                    </div>
                  </div>
                  <div className="w-100 relative">
                    <h4 className="text-5xl mt-0 mb-0 text-primary-darkest font-primary">
                      {this.props.name}
                    </h4>
                    <div className="">
                      <h5 className="text-2xl m-0 xs:text-sm p-0 md:text-base text-grey-darker">
                        {this.props.position}
                      </h5>
                      <TruncateMarkup lines={6}>
                        <div>{ReactHtmlParser(this.props.children)}</div>
                      </TruncateMarkup>
                    </div>
                  </div>

                  <div className="flex justify-content-center mt-12 mb-3">
                    <div className="mx-2">
                      <a target="_blank" href="#">
                        <button className="btn btn-outline-white border-1 border-solid border-black text-black h-rem-12 w-rem-12 p-0 rounded-full text-xl text-center">
                          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                        </button>
                      </a>
                    </div>
                    <div className="mx-2">
                      <a target="_blank" href="#">
                        <button className="btn btn-outline-white border-1 border-solid border-black text-black h-rem-12 w-rem-12 p-0 rounded-full text-xl text-center">
                          <FontAwesomeIcon icon={["fas", "envelope"]} />
                        </button>
                      </a>
                    </div>
                    <div className="text-blue text-right ml-auto w-100 underline flex items-end justify-end">
                      <Link to={`/members/${this.props.slug}`}>Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MemberExpanded.propTypes = {
  slug: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  imageUrl: PropTypes.string,
}

MemberExpanded.defaultProps = {
  slug: `Name`,
  name: `Name`,
  position: `Position`,
  imageUrl: ``,
}

export default MemberExpanded
