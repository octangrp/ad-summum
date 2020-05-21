import React from "react"
import AnimationWrapper from "../components/sections/animationWrapper"

import Team from "../components/sections/team"

class TeamPage extends React.Component {
  render() {
    return (
      <div className="w-100 relative">
        <div className="w-85 mx-auto  relative">
          <img src={"/img/logo-full.png"} className="w-60" />
        </div>
      </div>
    )
  }
}

export default TeamPage
