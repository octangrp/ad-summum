import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReactHtmlParser from "react-html-parser"

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
      <div class="w-100 z-9999 overflow-hidden min-h-screen fixed t-0 l-0">
        <div class="z-10 relative w-100 min-h-screen flex items-center justify-center">
          <div
            onClick={this.closeModal}
            class="bg-black-darkest z-0 absolute h-100 w-100 opacity-50"
          ></div>
          <div class="w-70 panel-default py-5 relative z-10">
            <div class="w-100 lg:w-80 md:w-85 sm:w-90 xs:w-100 bg-white mx-auto shadow-lg border-1 border-grey border-solid">
              <div class="xl:flex sm:flex lg:flex md:flex xs:p-0">
                <div class="w-40 xs:w-100 xs:p-4">
                  <img
                    src={this.props.imageUrl}
                    class="w-95"
                    alt="team-member"
                  />
                </div>
                <div class="w-55 xs:w-100 border-grey border-0 border-solid border-b-1 pl-3 py-4">
                  <h4 class="xl:text-5xl mt-0 mb-0 text-primary-darkest font-primary sm:text-3xl lg:text-4xl xs:text-4xl md:text-4xl font-bold">
                    {this.props.name}
                  </h4>
                  <div class="font-secondary">
                    <h5 class="text-lg m-0 xs:text-sm p-0 md:text-base font-bold text-grey-darker">
                      {this.props.position}
                    </h5>
                    <div class="w-100 xs:w-100 mt-4 mx-auto leading-normal xs:text-base md:text-base xs:p-4 text-lg">
                      {ReactHtmlParser(this.props.children)}
                    </div>
                  </div>

                  <div class="flex justify-content-center mt-12">
                    <div class="mx-2">
                      <a target="_blank" href="#">
                        <button class="btn bg-red text-white h-rem-12 w-rem-12 p-0 rounded-full text-xl text-center">
                          <FontAwesomeIcon icon="coffee" />
                        </button>
                      </a>
                    </div>
                    <div class="mx-2">
                      <a target="_blank" href="#">
                        <button class="btn bg-blue text-white h-rem-12 w-rem-12 p-0 rounded-full text-xl text-center">
                          <FontAwesomeIcon icon="coffee" />
                        </button>
                      </a>
                    </div>
                    <div class="mx-2">
                      <a target="_blank" href="#">
                        <button class="btn bg-primary text-white h-rem-12 w-rem-12 p-0 rounded-full text-xl text-center">
                          F
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="w-5 text-red">
                  <p onClick={this.closeModal} class="cursor-pointer">
                    <FontAwesomeIcon icon="times" />
                  </p>
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
  name: PropTypes.string,
  position: PropTypes.string,
  imageUrl: PropTypes.string,
}

MemberExpanded.defaultProps = {
  name: `Name`,
  position: `Position`,
  imageUrl: ``,
}

export default MemberExpanded
