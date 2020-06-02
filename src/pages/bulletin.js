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

            <div className=" xs:pt-8">
              <div className="mx-auto pt-6 relative">
                <img src={"/img/tim2.png"} class="w-100 relative" />
                <div class="absolute xl:flex lg:flex w-100 b-0 l-0 image-gradient px-12 xs:px-4 pt-16 pb-12 xs:py-0 md:pb-8">
                  <div class="w-80 xl:mx-auto">
                    <h2 class="p-0 m-0 font-primary font-bold text-3xl xs:text-sm md:text-xl track-wider text-white uppercase leading-relaxed">
                      We are behind all this
                    </h2>
                    <p class="w-80 p-0 m-0 text-white">
                      We are behind all this and we the one in charge in all,We
                      are behind all this and we the one in charge in all
                    </p>
                  </div>
                  <div class="w-20 xs:w-100 text-right mt-auto">
                    <h1 class="text-sm xs:text-xxs p-0 m-0 text-white text-light mx-auto">
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
                  <div class="h-rem-86 xs:h-rem-42">
                    <img
                      src={"/img/unsplash.jpg"}
                      class="w-100 clip-full relative"
                    />
                  </div>
                </div>
                <div class="w-60 xs:w-100 xs:pl-0  pl-10">
                  <div class="text-left my-auto">
                    <div class=" flex w-100 xs:pt-2 font-primary">
                      <div class="w-10 my-auto">
                        <div class="w-rem-6 h-rem-6 xs:w-rem-4 xs:h-rem-4 bg-primary-dark my-auto rounded-full"></div>
                      </div>
                      <div class="w-90">
                        <h1 class="text-2xl xs:text-lg font-bold uppercase">
                          {" "}
                          Economics, Finance
                        </h1>
                      </div>
                    </div>
                    <div class="text-base font-secondary w-80 xs:p-0 xsm-0">
                      <p class="font-secondary xs:text-xs tracking-wider leading-relaxed font-normal">
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
                <div class="flex pt-24 xs:pt-12 w-5 xs:w-25 lg:w-10 md:w-15 mx-auto">
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
            <div class="w-50 xs:w-100 xs:pl-0 xl:pr-10 lg:pr-10 sm:pr-0 xs:pb-8">
              <div class="xs:pb-0 h-rem-86 xs:h-rem-42">
                <img
                  src={"/img/unsplash.jpg"}
                  class="w-100 clip-full relative"
                />
              </div>
              <div>
                <div class=" flex w-100 font-primary pt-3">
                  <div class="w-5 xs:w-10 lg:w-10 md:w-10 my-auto">
                    <div class="w-rem-5 h-rem-5 xs:w-rem-3 xs:h-rem-3 bg-primary my-auto rounded-full"></div>
                  </div>
                  <div class="w-95  xs:w-90 lg:w-90 md:w-90">
                    <h1 class="text-xl p-0 w-90 m-0 xs:text-sm md:text-base font-bold uppercase text-black ">
                      {" "}
                      Economics, Finance
                    </h1>
                  </div>
                </div>
                <div class="text-sm  md:text-xs m-0 font-secondary w-95  xs:w-90 lg:w-90 md:w-90 ml-auto tracking-wider leading-relaxed">
                  <p class="p-0 m-0 text-left xs:text-xxs">Jan-12-2020</p>
                </div>
              </div>
            </div>
            <div class="w-50 xs:w-100 xs:pl-0 pl-10 sm:pl-0">
              <div class="xs:pb-0 h-rem-86 xs:h-rem-42">
                <img src={"/img/tim.png"} class="w-100 clip-full relative" />
              </div>
              <div>
                <div class=" flex w-100 font-primary pt-3">
                  <div class="w-5  xs:w-10 lg:w-10 md:w-10 my-auto">
                    <div class="w-rem-5 h-rem-5 xs:w-rem-3 xs:h-rem-3 bg-primary my-auto rounded-full"></div>
                  </div>
                  <div class="w-95  xs:w-90 lg:w-90 md:w-90">
                    <h1 class="text-xl p-0 w-80 m-0 xs:text-sm md:text-base font-bold uppercase text-black ">
                      {" "}
                      Economics, Finance
                    </h1>
                  </div>
                </div>
                <div class="text-sm  md:text-xs m-0 font-secondary w-95  xs:w-90 lg:w-90 md:w-90 ml-auto tracking-wider leading-relaxed">
                  <p class="p-0 m-0 text-left xs:text-xxs">Jan-12-2020</p>
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
