import PropTypes from "prop-types"
import React from "react"
import Member from "../cards/member"
import MemberExpanded from "../cards/memberExpanded"
import SectionWrapper from "./sectionWrapper"
import { Link } from "gatsby"

class TeamList extends React.Component {
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
          details={this.currentMember()}
          onCloseModal={this.closeModal}
        />
      )
    }
    return null
  }
  render() {
    return (
      <SectionWrapper
        id={this.props.id}
        title={this.props.title}
        description={this.props.description}
        backgroundClass="bg-white text-black"
      >
        <div className="w-100 lg:text-center relative">
          {this.props.members.map((member, index) => (
            <div
              className=" xs:mx-0 lg:mx-8 sm:mx-2 pt-12 width-card md:w-35 sm:w-40 xs:w-100 inline-block cursor-pointer relative pb-24"
              key={index}
            >
              <div
                className="w-100 lg:mx-auto xs:hidden relative sm:hidden"
                onClick={() => this.showMember(index)}
              >
                <Member details={member} />
              </div>
              <div class="hidden xs:block sm:block">
                <Link to={`/members/${member.translations[0].slug}`}>
                  <Member details={member} />
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

TeamList.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  members: PropTypes.array,
  defaultTranslation: PropTypes.object,
}

TeamList.defaultProps = {
  title: ``,
  description: ``,
  members: [],
  defaultTranslation: {},
}

export default TeamList
