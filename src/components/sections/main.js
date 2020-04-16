import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"

const Main = props => (
  <div class="panel z-10 px-0 pt-32 xs:pt-0 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto">
    <div class="panel-body min-h-screen  sm:min-h-auto xs:min-h-auto h-100 w-95 lg:w-90 -mt-24 lg:-mt-32 md:-mt-3 xs:pt-0 xs:mt-5 lg:mt-3 lg:pt-3 p-0 sm:mt-5 ml-auto md:w-90 xs:w-100 sm:w-95 xl:flex md:flex  lg:flex sm:flex relative">
      <div class="flex xs:block align-items-end relative w-100 md:w-55 pb-4 xs:w-90 mx-auto">
        <div class="w-50 xs:w-100 pt-16 xs:pt-0">
          <div class="pt-5 xs:pt-0">
            <div class="w-60 leafing-loose  text-light pt-6 xs:pt-0 xs:w-100 font-light">
              {ReactHtmlParser(props.children)}
              Paragraphs are the building blocks of papers. Many students define
              paragraphs in terms of length: a paragraph is a group of at least
              five sentences, a paragraph is half a page long, etc. In reality,
              though, the unity and coherence of ideas among sentences is what
              constitutes a paragraph. A paragraph is defined as “a group of
              sentences or a single sentence that forms a unit” (Lunsford and
              Connors 116).
            </div>
          </div>
          <div class="w-100 pt-16 xs:pt-5 text-right xs:text-left">
            <button class="btn bg-primary py-3 px-12 text-white rounded-full text-xs text-light mx-auto shadow-primary">
              {props.buttonText}
            </button>
          </div>
        </div>
        <div class="w-50 xs:hidden pt-16 text-right">
          <div class="text-right">
            <img src={"/img/group.png"} class="clip-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

Main.propTypes = {
  siteTitle: PropTypes.string,
  buttonText: PropTypes.string,
}

Main.defaultProps = {
  siteTitle: ``,
  buttonText: `Read more`,
}

export default Main
