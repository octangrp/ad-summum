import PropTypes from "prop-types"
import React from "react"
import Member from "../cards/member"

const Team = ({ title, members }) => (
  <div
    class="panel z-10 px-0 py-12 t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto"
    style={{ background: "#F4F4F4" }}
  >
    <div class="panel mt-0 py-4 w-85 mx-auto md:w-95 xs:w-100 sm:w-100 mx-auto text-center">
      {members.map((member, index) => (
        <Member
          key={index}
          name={member.name}
          position={member.position}
          imageUrl={member.imageUrl}
        />
      ))}
    </div>
  </div>
)

Team.propTypes = {
  title: PropTypes.string,
  members: PropTypes.array,
}

Team.defaultProps = {
  title: ``,
  members: [
    {
      name: "Rutabingwa Jean Paul",
      position: "Consultant",
      imageUrl: "/img/lewis.jpg",
    },
    {
      name: "Munyankindi Pascal",
      position: "Consultant",
      imageUrl: "/img/lewis.jpg",
    },
    {
      name: "Gakindi Vincent",
      position: "Consultant",
      imageUrl: "/img/lewis.jpg",
    },
    {
      name: "Rutabingwa Jean Paul",
      position: "Consultant",
      imageUrl: "/img/lewis.jpg",
    },
    {
      name: "Rutabingwa Jean Paul",
      position: "Consultant",
      imageUrl: "/img/lewis.jpg",
    },
  ],
}

export default Team
