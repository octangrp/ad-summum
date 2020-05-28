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
                <div class="absolute xl:flex lg:flex w-100 b-0 l-0 image-gradient px-12 xs:px-4 pt-16 pb-12 md:pb-8">
                  <div class="w-80 xl:mx-auto">
                    <h2 class="p-0 m-0 font-primary font-bold text-3xl xs:text-sm md:text-xl track-wider text-white uppercase leading-relaxed">
                      We are behind all this
                    </h2>
                  </div>
                  <div class="w-20 xs:w-100 text-right my-3">
                    <h1 class="text-sm xs:text-xxs text-white text-light mx-auto">
                      Janvier-12-2020
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SectionWrapper logo={false} title="All services">
            <div>
              <div className="xl:flex lg:flex md:flex ">
                <div class="w-40  xs:w-100">
                  <div class="h-rem-86">
                    <img
                      src={"/img/tim.png"}
                      class="w-100 clip-full relative"
                    />
                  </div>
                </div>
                <div class="w-60 xs:w-100 xs:pl-0  pl-12">
                  <div class="text-left my-auto">
                    <div class=" flex w-100 font-primary">
                      <div class="w-10 my-auto">
                        <div class="w-rem-6 h-rem-6 xs:w-rem-4 xs:h-rem-4 bg-primary-dark my-auto rounded-full"></div>
                      </div>
                      <div class="w-90">
                        <h1 class="text-2xl xs:text-xl font-bold uppercase">
                          {" "}
                          Economics, Finance
                        </h1>
                      </div>
                    </div>
                    <div class="text-base font-secondary w-80 ">
                      <p class="font-secondary tracking-wider leading-relaxed font-normal">
                        The ASC Ltd team is composed of economists, financiers,
                        bankers, lawyers, IT and planners with long experience
                        in their respective fields. ASC Ltd provides clients
                        with services ensuring strategic decision-making,
                        excellent communication with shareholders and partners.
                        ASC Ltd provides clients{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="flex pt-24 w-5 lg:w-10 md:w-15 mx-auto">
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
            <div class="w-50 xs:w-100 xs:pl-0 pr-10">
              <div class="xs:pb-0 h-rem-86">
                <img src={"/img/tim.png"} class="w-100 clip-full relative" />
              </div>
              <div>
                <div class=" flex w-100 font-primary pt-3">
                  <div class="w-5 my-auto">
                    <div class="w-rem-5 h-rem-5 bg-primary my-auto rounded-full"></div>
                  </div>
                  <div class="w-95 xs:pt-4">
                    <h1 class="text-xl p-0 w-90 m-0 xs:text-xl md:text-base font-bold uppercase text-black ">
                      {" "}
                      Economics, Finance
                    </h1>
                  </div>
                </div>
                <div class="text-sm  md:text-xs m-0 font-secondary w-95 ml-auto tracking-wider leading-relaxed">
                  <p class="p-0 m-0 text-left">Jan-12-2020</p>
                </div>
              </div>
            </div>
            <div class="w-50 xs:w-100 xs:pl-0 pl-10">
              <div class="xs:pb-0 h-rem-86">
                <img src={"/img/tim.png"} class="w-100 clip-full relative" />
              </div>
              <div>
                <div class=" flex w-100 font-primary pt-3">
                  <div class="w-5 my-auto">
                    <div class="w-rem-5 h-rem-5 bg-primary my-auto rounded-full"></div>
                  </div>
                  <div class="w-95 xs:pt-4">
                    <h1 class="text-xl p-0 w-80 m-0 xs:text-xl md:text-base font-bold uppercase text-black ">
                      {" "}
                      Economics, Finance
                    </h1>
                  </div>
                </div>
                <div class="text-sm  md:text-xs m-0 font-secondary w-95 ml-auto tracking-wider leading-relaxed">
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
