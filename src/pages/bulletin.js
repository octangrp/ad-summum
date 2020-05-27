import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { connect } from "react-redux"

import Logo from "../components/logo"
import SectionWrapper from "../components/sections/sectionWrapper"

class BulletinPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="ASC Bulletin" />
        <div className="w-100 relative bg-white py-16">
          <div className="w-90 mx-auto  relative">
            <div className="xl:flex lg:flex">
              <div className="w-40">
                <Logo />
              </div>
              <div className="w-60 my-auto">
                <div className="text-left my-auto">
                  <h1 class="text-6xl xs:text-3xl uppercase font-bold tracking-wider">
                    Asc Bulletin
                  </h1>
                </div>
              </div>
            </div>

            <div className="pt-16 xs:pt-8">
              <div className="mx-auto pt-6 relative">
                <img src={"/img/tim2.png"} class="w-100 relative" />
                <div className="absolute flex w-100 b-0 l-0 image-gradient px-12 py-8 xs:px-6 xs:py-2">
                  <div className="w-20 xs:w-80 ml-auto text-white text-right mb-0 ">
                    <h3 class="text-base ">jan-2-2020</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SectionWrapper logo={false} title="All services">
            <div>
              <div className="xl:flex lg:flex md:flex">
                <div class="w-40  xs:w-100">
                  <div class=" py-12 h-rem-86">
                    <img
                      src={"/img/tim.png"}
                      class="w-100 clip-full relative"
                    />
                  </div>
                </div>
                <div class="w-60 xs:w-100 xs:pl-0 my-auto pl-12">
                  <div class="text-left my-auto">
                    <div class=" flex w-100 font-primary">
                      <div class="w-10 my-auto">
                        <div class="w-rem-8 h-rem-8 xs:w-rem-4 xs:h-rem-4 bg-primary my-auto rounded-full"></div>
                      </div>
                      <div class="w-90">
                        <h1 class="text-2xl xs:text-xl font-bold uppercase">
                          {" "}
                          Economics, Finance
                        </h1>
                      </div>
                    </div>
                    <div class="text-base font-secondary w-100 tracking-wider leading-relaxed">
                      <p>
                        The ASC Ltd team is composed of economists, financiers,
                        bankers, lawyers, IT and planners with long experience
                        in their respective fields. ASC Ltd provides clients
                        with services ensuring strategic decision-making,
                        excellent communication with shareholders and partners.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="flex w-5 lg:w-10 md:w-15 mx-auto">
                  <div class="w-30">
                    <div class="w-rem-3 h-rem-3 xs:w-rem-4 xs:h-rem-4 bg-white border-1 border-black border-solid my-auto rounded-full"></div>
                  </div>
                  <div class="w-30">
                    <div class="w-rem-3 h-rem-3 xs:w-rem-4 xs:h-rem-4 bg-white border-1 border-black border-solid my-auto rounded-full"></div>
                  </div>
                  <div class="w-30">
                    <div class="w-rem-3 h-rem-3 xs:w-rem-4 xs:h-rem-4 bg-white border-1 border-black border-solid my-auto rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>

          <div class="w-90 xl:flex lg:flex md:flex mx-auto">
            <div class="w-50 xs:w-100 xs:pl-0 pl-12">
              <div class=" pt-12 pb-4 xs:pb-0 h-rem-86">
                <img src={"/img/tim.png"} class="w-100 clip-full relative" />
              </div>
              <div>
                <div class=" flex w-100 font-primary">
                  <div class="w-10 my-auto">
                    <div class="w-rem-5 h-rem-5 bg-primary my-auto rounded-full"></div>
                  </div>
                  <div class="w-90 xs:pt-4">
                    <h1 class="text-2xl p-0 m-0 xs:text-xl md:text-base font-bold uppercase">
                      {" "}
                      Economics, Finance
                    </h1>
                  </div>
                </div>
                <div class="text-base  md:text-xs pl-12 m-0 font-secondary w-100 tracking-wider leading-relaxed">
                  <p class="p-0 m-0 text-left">Jan-12-2020</p>
                </div>
              </div>
            </div>
            <div class="w-50 xs:w-100 xs:pl-0 pl-12">
              <div class=" pt-12 pb-4 xs:pb-0 h-rem-86">
                <img src={"/img/tim.png"} class="w-100 clip-full relative" />
              </div>
              <div>
                <div class=" flex w-100 font-primary">
                  <div class="w-10 my-auto">
                    <div class="w-rem-5 h-rem-5 bg-primary my-auto rounded-full"></div>
                  </div>
                  <div class="w-90  xs:pt-4">
                    <h1 class="text-2xl p-0 m-0 xs:text-xl  md:text-base font-bold uppercase">
                      {" "}
                      Economics, Finance
                    </h1>
                  </div>
                </div>
                <div class="text-base pl-12 m-0  md:text-xs font-secondary w-100 tracking-wider leading-relaxed">
                  <p class="p-0 m-0 text-left">Jan-12-2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(BulletinPage)
