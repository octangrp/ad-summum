import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Information extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
    this.switchCard = this.switchCard.bind(this)
    this.slideLeft = this.slideLeft.bind(this)
    this.slideRight = this.slideRight.bind(this)
  }

  switchCard(index) {
    // Update state so the next render will show the fallback UI.
    if (index >= 0 && index < this.props.cards.length) {
      return this.setState({ index: index })
    }
    return null
  }

  slideLeft() {
    return this.slider(this.state.index - 1)
  }

  slider(next) {
    if (next >= this.props.cards.length) {
      return this.switchCard(0)
    }
    if (next < 0) {
      return this.switchCard(this.props.cards.length - 1)
    }
    return this.switchCard(next)
  }

  slideRight() {
    return this.slider(this.state.index + 1)
  }

  currentCard() {
    if (this.state.index < this.props.cards.length) {
      return this.props.cards[this.state.index]
    }
    return null
  }

  render() {
    return (
      <div class="panel z-10 px-0 pt-10 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto">
        <div class=" min-h-screen w-95 mx-auto relative">
          <div class="w-85 mx-auto">
            <h4 class="text-center text-2xl pb-24 font-bold text-primary font-secondary">
              {this.props.title}
            </h4>
            <div class="relative w-100">
              <div class="w-rem-88 h-rem-88 border-8 border-grey relative">
                <div class="pt-4 px-5 relative">
                  <ul class="list text-center w-100 lg:w-60  font-primary mr-auto p-0 m-0 hidden xl:block lg:block px-0 mr-0  text-sm">
                    {this.props.cards.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => this.switchCard(index)}
                        className={[
                          "inline-block my-0 py-1 mr-8 text-3xl text-grey font-bold cursor-pointer",
                          this.state.index == index
                            ? "text-primary border-0 border-b-4 border-solid border-grey"
                            : null,
                        ].join(" ")}
                      >
                        {index + 1}.
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div class="w-60  bg-white absolute t-25 mx-16 py-10 text-black font-secondary font-bold text-2xl body-text">
                {ReactHtmlParser(this.currentCard().content)}
              </div>
            </div>
            <div class="flex w-100 text-center relative pt-12">
              <div class="w-50 px-4 text-right">
                <button
                  onClick={() => this.slideLeft()}
                  class="btn  bg-transparent hover:bg-primary hover:text-white cursor-pointer text-primary py-1 px-4 border-primary border-6 text-2xl"
                >
                  <FontAwesomeIcon icon="arrow-left" />
                </button>
              </div>
              <div class="w-50 px-4 text-left">
                <button
                  onClick={() => this.slideRight()}
                  class="btn  bg-transparent hover:bg-primary hover:text-white cursor-pointer text-primary py-1 px-4 border-primary border-6 text-2xl"
                >
                  <FontAwesomeIcon icon="arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Information.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array,
}

Information.defaultProps = {
  title: "Discover",
  cards: [
    {
      content:
        "<p>Discover where your leads come from, what it costs to get them, and how they interact with your websitebefore contacting you.</p>",
    },
    {
      content:
        "<p>We do software testing for flawless products. With a purpose.</p>",
    },
    {
      content:
        "<p>Our expert testers handle quality assurance so you can focus on building your ideas.</p>",
    },
  ],
}

export default Information
