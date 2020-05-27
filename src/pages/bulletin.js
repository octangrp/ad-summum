import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { connect } from "react-redux"

class BulletinPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="ASC Bulletin" />
        <div className="w-100 relative bg-white py-16">
          <div className="w-85 mx-auto  relative">
            <div className="xl:flex lg:flex md:flex">
              <div className="w-40">
                <img src={"/img/logo-full.png"} className="w-80 relative" />
              </div>
              <div className="w-60 my-auto">
                <div className="text-left my-auto">
                  <h1 class="text-6xl xs:text-3xl">ASC Bulletin</h1>
                </div>
              </div>
            </div>

            <div className="pt-16 xs:pt-8">
              <div className="mx-auto pt-6 relative">
                <img src={"/img/tim2.png"} class="w-100 relative" />
                <div className="absolute flex w-100 b-0 l-0 image-gradient px-12 xs:p-4 py-8">
                  <div className="w-20 xs:w-50 ml-auto text-white text-right mb-0 ">
                    <h3 class="text-base xs:text-xs">jan-2-2020</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="inline-block mb-6 pt-24">
              <h1 class="text-lg font-primary font-bold uppercase tracking-wider">
                All services
              </h1>
              <div class=" w-100 h-rem-1 rounded-full bg-grey-light"></div>
            </div>

            <div class="xl:flex lg:flex md:flex">
              <div class="w-40 xs:w-100">
                <div class=" py-12 xs:py-8 h-rem-86">
                  <img src={"/img/tim.png"} class="w-100 clip-full relative" />
                </div>
              </div>
              <div class="w-60 my-auto pl-12 xs:pl-0 xs:w-100">
                <div class="text-left my-auto">
                  <div class=" flex w-100 font-primary">
                    <div class="w-10 my-auto">
                      <div class="w-rem-8 h-rem-8 bg-primary my-auto rounded-full"></div>
                    </div>
                    <div class="w-90 xs:pl-4">
                      <h1 class="text-2xl xs:text-lg font-bold uppercase">
                        {" "}
                        Economics, Finance
                      </h1>
                    </div>
                  </div>
                  <div class="text-base font-secondary w-100 tracking-wider leading-relaxed">
                    <p>
                      The ASC Ltd team is composed of economists, financiers,
                      bankers, lawyers, IT and planners with long experience in
                      their respective fields. ASC Ltd provides clients with
                      services ensuring strategic decision-making, excellent
                      communication with shareholders and partners.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-85 lg:w-100 md:w-100 xs:w-100 xl:flex lg:flex md:flex mx-auto">
              <div class="w-50 pl-12 md:pl-0 md:pr-4 lg:pl-0 xs:pl-0 xs:w-100">
                <div class=" pt-12 pb-4 h-rem-86">
                  <img src={"/img/tim.png"} class="w-100 clip-full relative" />
                </div>
                <div>
                  <div class=" flex w-100 font-primary">
                    <div class="w-10 my-auto">
                      <div class="w-rem-5 h-rem-5 bg-primary my-auto rounded-full"></div>
                    </div>
                    <div class="w-90">
                      <h1 class="text-2xl md:text-base xs:text-lg font-bold uppercase">
                        {" "}
                        Economics, Finance
                      </h1>
                    </div>
                  </div>
                  <div class="text-base xs:text-xs p-0 m-0 font-secondary w-100 tracking-wider leading-relaxed">
                    <p class="p-0 m-0 text-left">Jan-12-2020</p>
                  </div>
                </div>
              </div>
              <div class="w-50 pl-12 xs:pl-0 xs:w-100">
                <div class=" pt-12 pb-4 h-rem-86">
                  <img src={"/img/tim.png"} class="w-100 clip-full relative" />
                </div>
                <div>
                  <div class=" flex w-100 font-primary">
                    <div class="w-10 my-auto">
                      <div class="w-rem-5 h-rem-5 bg-primary my-auto rounded-full"></div>
                    </div>
                    <div class="w-90">
                      <h1 class="text-2xl md:text-base xs:text-lg font-bold uppercase">
                        {" "}
                        Economics, Finance
                      </h1>
                    </div>
                  </div>
                  <div class="text-base xs:text-xs p-0 m-0 font-secondary w-100 tracking-wider leading-relaxed">
                    <p class="p-0 m-0 text-left">Jan-12-2020</p>
                  </div>
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
