import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReactHtmlParser from "react-html-parser"
import { Link } from "gatsby"
import TruncateMarkup from "react-truncate-markup"
import Translator from "../../utils/translator"
import { connect } from "react-redux"

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
    const details = Translator.process(
      this.props.lang,
      this.props.details.translations
    )
    return (
      <div className="w-100 z-9999 overflow-hidden min-h-screen fixed t-0 l-0">
        <div className="z-10 relative w-100 min-h-screen flex items-center justify-center">
          <div
            onClick={this.closeModal}
            className="bg-black-darkest z-0 absolute h-100 w-100 opacity-50"
          ></div>
          <div className="w-70 lg:w-100 panel-default py-5 relative z-10">
            <div className="w-100 lg:w-80 md:w-85 sm:w-90 xs:w-100 bg-white mx-auto shadow-lg border-1 border-grey border-solid">
              <div className="xl:flex sm:flex lg:flex md:flex xs:p-0">
                <div className="w-40 xs:w-100 xs:p-4 flex items-center justify-center">
                  <div className="w-rem-64 h-rem-64 rounded-full overflow-hidden">
                    <img
                      src={
                        details.image && details.image.url
                          ? details.image.url
                          : null
                      }
                      className="clip-full "
                      alt="team-member"
                    />
                  </div>
                </div>
                <div className="w-60 py-8 px-6 relative">
                  <div className="absolute z-10 r-0 t-0 text-black text-2xl my-0 p-5">
                    <div onClick={this.closeModal} className="cursor-pointer">
                      <FontAwesomeIcon icon={["far", "times-circle"]} />
                    </div>
                  </div>
                  <div className="w-100 z-5 relative">
                    <h4 className="text-2xl mt-0 mb-0 text-primary-darkest font-bold font-primary tracking-wider uppercase">
                      {details.name}
                    </h4>
                    <div className="">
                      <h5 className="text-xl m-0 xs:text-sm p-0 md:text-base font-semibold text-grey-darker tracking-wider">
                        {details.attributes.position}
                      </h5>
                      <TruncateMarkup lines={6}>
                        <div className="font-normal text-lg tracking-wider">
                          {ReactHtmlParser(details.description)}
                        </div>
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
                      <Link to={`/members/${details.slug}`}>Read more</Link>
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
  details: PropTypes.object,
}

MemberExpanded.defaultProps = {
  details: {
    translation: [],
  },
}

const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(MemberExpanded)
