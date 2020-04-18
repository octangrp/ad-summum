import PropTypes from "prop-types"
import React from "react"
import Member from "../cards/member"
import MemberExpanded from "../cards/memberExpanded"

class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      showModal: false,
    }
    this.showMember = this.showMember.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  showMember(index) {
    this.setState({ index: index })
    this.setState({ showModal: true })
  }

  currentMember() {
    return this.props.members[this.state.index]
  }

  closeModal() {
    return this.setState({ showModal: false })
  }

  renderModal() {
    if (this.state.showModal) {
      return (
        <MemberExpanded
          slug={this.currentMember().slug}
          name={this.currentMember().name}
          position={this.currentMember().attributes.position}
          imageUrl={this.currentMember().image.url}
          onCloseModal={this.closeModal}
        >
          {this.currentMember().description}
        </MemberExpanded>
      )
    }
    return null
  }
  render() {
    return (
      <div
        id={this.props.id}
        className="panel px-0 py-12 t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto relative"
        style={{ background: "#F4F4F4" }}
      >
        <h1 className="text-center font-semiBold text-6xl pb-24 xs:pb-0">
          Our Team
        </h1>
        <div className="mt-0 w-95 mx-auto md:w-95 xs:w-100 sm:w-100 mx-auto text-center relative">
          {this.props.members.map((member, index) => (
            <div
              className="mx-4 pb-12 xl:w-30 lg:w-45 md:w-45 sm:w-45 inline-block cursor-pointer"
              key={index}
              onClick={() => this.showMember(index)}
            >
              <Member
                name={member.name}
                position={member.attributes.position}
                imageUrl={member.image.url}
              />
            </div>
          ))}
        </div>
        {this.renderModal()}
      </div>
    )
  }
}

Team.propTypes = {
  title: PropTypes.string,
  members: PropTypes.array,
}

Team.defaultProps = {
  title: ``,
  members: [],
}

export default Team
