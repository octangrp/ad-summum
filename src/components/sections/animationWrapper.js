import React from "react"
import VisibilitySensor from "react-visibility-sensor"

class AnimationWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { animate: true }
    this.onChange = this.onChange.bind(this)
  }

  onChange(isVisible) {
    this.setState({ animate: isVisible })
  }

  render() {
    return (
      <VisibilitySensor
        onChange={this.onChange}
        minTopValue={10}
        partialVisibility={true}
      >
        <div
          className={
            this.state.animate ? "animated slow fadeIn visible" : "invisible"
          }
        >
          {this.props.children}
        </div>
      </VisibilitySensor>
    )
  }
}

export default AnimationWrapper
