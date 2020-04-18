import PropTypes from "prop-types"
import React from "react"

class Member extends React.Component {
  // constructor(props){
  //     super(props)

  // }

  render() {
    return (
      <div className="rounded-lg overflow-hidden bg-transparent w-100">
        <div className="h-rem-74 w-rem-74 sm:h-64 sm:w-rem-64 xxs:h-48 xxs:w-rem-48 overflow-hidden centered mx-auto mb-2">
          <img src={this.props.imageUrl} alt="team-member" />
        </div>
        <div className="panel-body bg-white center text-center py-4">
          <h5 className="mb-2 mt-1 text-2xl">{this.props.name}</h5>
          <p className="font-light text-lg my-1">{this.props.position}</p>
        </div>
      </div>
    )
  }
}

Member.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  imageUrl: PropTypes.string,
}

Member.defaultProps = {
  name: `Name`,
  position: `Position`,
  imageUrl: ``,
}

export default Member
