import PropTypes from "prop-types"
import React from "react"
import Member from "../cards/member"
import MemberExpanded from "../cards/memberExpanded"
import SectionWrapper from "./sectionWrapper"
import { Link } from "gatsby"

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
      <SectionWrapper
        id={this.props.id}
        title="Our Team"
        backgroundClass="bg-grey-lightest text-black"
      >
        <div className="w-100 relative text-center">
          {this.props.members.map((member, index) => (
            <div
              className="mx-4 xs:h pb-12 w-25 inline-block cursor-pointer"
              key={index}
            >
              <div
                className="w-100 xs:hidden"
                onClick={() => this.showMember(index)}
              >
                <Member
                  name={member.name}
                  position={member.attributes.position}
                  imageUrl={member.image.url}
                />
              </div>
              <div class="hidden xs:block">
                <Link to={`/members/${member.slug}`}>
                  <Member
                    name={member.name}
                    position={member.attributes.position}
                    imageUrl={member.image.url}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        {this.renderModal()}
      </SectionWrapper>
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
