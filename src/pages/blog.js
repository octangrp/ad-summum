import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { connect } from "react-redux"

import Logo from "../components/logo"
import SectionWrapper from "../components/sections/sectionWrapper"

class BlogPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="w-100 relative bg-white py-16">
          <div className="w-90 mx-auto  relative">
            {/* <div className="xl:flex lg:flex">
              <div className="w-40">
                <Logo />
              </div>
              <div className="w-60 my-auto">
                <div className="text-left my-auto">
                  <h1 class="text-6xl xs:text-3xl uppercase font-bold tracking-wider">
                    Blog
                  </h1>
                </div>
              </div>
            </div> */}

            <div className="pt-16 xs:pt-8">
              <div className="mx-auto pt-6 relative">
                <div class=" xl:flex lg:flex w-100">
                  <div class="w-80 xl:mx-auto pb-12">
                    <h2 class="p-0 m-0 font-primary font-bold text-3xl xs:text-sm md:text-xl track-wider text-black uppercase leading-relaxed">
                      We are behind all this
                    </h2>
                  </div>
                  <div class="w-20 xs:w-100 ml-auto text-right">
                    <h1 class="text-base xs:text-xxs text-black text-light mx-auto">
                      Janvier-12-2020
                    </h1>
                  </div>
                </div>
                <img src={"/img/tim.png"} class="w-100 relative" />
                <div class="w-80 b-0 l-0 pt-12 pb-12 xs:py-0 md:pb-8">
                  <h1 class="p-0 m-0 font-primary text-black font-bold text-3xl xs:text-sm md:text-xl track-wider uppercase leading-relaxed">
                    We are behind all this and we the one in charge in all,We
                    are behind all this and we the one in charge in all
                  </h1>
                </div>
                <div>
                  <p class="p-0 m-0">
                    Working with Breaks Agency, an independent creative agency
                    based in London, with clients such as Nike and Dr. Martens
                    (snap), we designed and built an engaging digital time
                    capsule using high-quality 3D scans of the new,
                    to-be-released shoes using WebGL technology. On each shoe,
                    there are nodes that show the influences each collaborative
                    shoe has contributed to this release over the past 20 years.
                    Encapsulating the past, present and future through a history
                    of Nike and size? collaborations.
                  </p>
                  <p>
                    Working with Breaks Agency, an independent creative agency
                    based in London, with clients such as Nike and Dr. Martens
                    (snap), we designed and built an engaging digital time
                    capsule using high-quality 3D scans of the new,
                    to-be-released shoes using WebGL technology. On each shoe,
                    there are nodes that show the influences each collaborative
                    shoe has contributed to this release over the past 20 years.
                    Encapsulating the past, present and future through a history
                    of Nike and size? collaborations.
                  </p>
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

export default connect(mapStateToProps)(BlogPage)
