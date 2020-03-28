import PropTypes from "prop-types"
import React from "react"

class Member extends React.Component {
  // constructor(props){
  //     super(props)

  // }

  render() {
    return (
      <div class="p-2 mx-4 my-12 xl:w-30 lg:w-45 md:w-45 sm:w-45  rounded-lg overflow-hidden bg-transparent inline-block ">
        <div class="h-rem-74 w-rem-74 sm:h-64 sm:w-rem-64 xxs:h-48 xxs:w-rem-48 overflow-hidden centered mx-auto my-2">
          <img src={this.props.imageUrl} alt="team-member" />
        </div>
        <div class="panel-body bg-white center text-center py-2">
          <h5 class="my-2">{this.props.name}</h5>
          <p>{this.props.position}</p>
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
