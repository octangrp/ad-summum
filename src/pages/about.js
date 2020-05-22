import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SectionWrapper from "../components/sections/sectionWrapper"
import ValueCard from "../components/cards/value"
import { graphql } from "gatsby"
import Translator from "../utils/translator"
import { connect } from "react-redux"
import value from "../components/cards/value"

class AboutUsPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Team" />
        <SectionWrapper>
          <h1 class="font-semiBold text-3xl xs:text-3xl sm:text-xl md:text-3xl my-0 py-2 xs:pb-12">
            About us
          </h1>
          <div class=" w-15 border-2 border-grey-light border-solid"></div>
          <div class="text-base xs:w-100 p-0 mr-10 m-0 xs:text-sm pb-32  ">
            <p class="my-8 mx-16">
              ASC Ltd is therefore a consulting company specializing in economic
              and financial analysis. It also provides its clients with legal
              advice, information technology and business organization. The
              objective is to support its clients in understanding the
              challenges and opportunities they face in their activities. The
              expertise covers a wide range of services related to economics,
              finance and banking, legal and information technology and business
              organization. ASC Ltd works to provide practical advice to its
              clients.
            </p>
            <p class="my-8 mx-16">
              ASC Ltd brings together with professional skills and extensive
              experience in the areas of central banking, commercial banking and
              financial system in general, legal issues and those related to
              information technology and organization. ASC Ltd gives reasoned
              opinions and participates in debates related to economic,
              financial, legal and regulatory issues, decision-making and public
              policies. In addition to its activities related to economic and
              financial analysis, legal issues, information technology and
              organization, ASC Ltd offers professional training. ASC Ltd also
              extends its services to translation and review of documents of
              economic, financial and legal nature or relating to information
              technology. To accomplish its mission, ASC Ltd relies, not only,
              on its own human resources, but also on a wide network of external
              partners. ASC Ltd aims to be a reference in the fields of
              economic, financial, legal and IT & organization. Its main clients
              are: central government and other government agencies, private
              companies, non-governmental organizations, research institutions,
              development institutions, banking and financial institutions.
            </p>

            <p class="my-8 mx-16">
              ASC Ltd brings together with professional skills and extensive
              experience in the areas of central banking, commercial banking and
              financial system in general, legal issues and those related to
              information technology and organization. ASC Ltd gives reasoned
              opinions and participates in debates related to economic,
              financial, legal and regulatory issues, decision-making and public
              policies. In addition to its activities related to economic and
              financial analysis, legal issues, information technology and
              organization, ASC Ltd offers professional training. ASC Ltd also
              extends its services to translation and review of documents of
              economic, financial and legal nature or relating to information
              technology. To accomplish its mission, ASC Ltd relies, not only,
              on its own human resources, but also on a wide network of external
              partners. ASC Ltd aims to be a reference in the fields of
              economic, financial, legal and IT & organization. Its main clients
              are: central government and other government agencies, private
              companies, non-governmental organizations, research institutions,
              development institutions, banking and financial institutions.
            </p>
          </div>

          <h1 class="font-semiBold text-3xl xs:text-3xl sm:text-xl md:text-3xl my-0 py-2 xs:pb-12">
            Our Core VaLues
          </h1>
          <div class=" w-25 border-2 border-grey-light border-solid"></div>
          <div class="text-base w-50 p-0 m-0 xs:text-sm pb-32  ">
            <p class="my-8">
              ASC Ltd brings together with professional skills and extensive
              experience in the areas of central banking, commercial banking and
              financial system in general, legal issues and those related to
              information technology and organization.
            </p>
          </div>

          <ValueCard />
        </SectionWrapper>
      </Layout>
    )
  }
}

export default AboutUsPage
