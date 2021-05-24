import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import GlobalLayout from "../components/layouts/global-layout"
import SEO from "../components/seo"
import { themeVal } from "../styles/utils/general"
import { glsp } from "../styles/utils/theme-values"
import media from "../styles/utils/media-queries"

import Button from "../styles/button/button"
import {
  Inpage,
  InpageHeader,
  InpageHeaderInner,
  InpageHeadline,
  InpageBody,
  InpageBodyInner,
} from "../styles/inpage"
import Heading, { Subheading } from "../styles/type/heading"
import MoreLink from "../styles/button/more-link"

import LogoSymbolWhite from "../../static/assets/logo/SafetagSymbolWhite.svg"

const HomepageHeader = styled(InpageHeader)`
  background-color: ${themeVal("color.primary")};
  color: ${themeVal("color.surface")};
  position: relative;
  ${MoreLink} {
    color: ${themeVal("color.surface")};
    padding-bottom: ${glsp()};
    border-bottom: 1px solid ${themeVal("color.surface")};
  }
  ${media.mediumUp`
    padding-bottom: ${glsp(6)};
    &:after {
      content: url(${LogoSymbolWhite});
      position: absolute;
      bottom: 20%;
      right: 10%;
      opacity: 0.125;
      transform: scale(1.75);
    }
  `}
`

const HomepageHeaderInner = styled(InpageHeaderInner)`
  text-align: justify;
  ${media.mediumUp`
    padding: 6rem 1rem;
    padding-right: 40vw;
  `}
  ${media.largeUp`
    padding-right: 40rem;
  `}
`

const HomepageTitle = styled(Heading)`
  border-top: 2px solid ${themeVal("color.surface")};
  padding-top: ${glsp()};
`

const HomepageHeaderButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position:relative;
  z-index: 1;
  ${media.mediumUp`
    flex-flow: row nowrap;
  `}
  ${Button} {
    margin: ${glsp()};
    align-items: center;
    justify-content: center;
    line-height: 1.5;
  }
`

function IndexPage({ data }) {

  return (
    <GlobalLayout>
      <SEO title="Safetag" />
      <Inpage>
        <HomepageHeader>
          <HomepageHeaderInner>
            <InpageHeadline>
              <HomepageTitle size="jumbo" variation="white">
                SAFETAG
              </HomepageTitle>
              <Subheading>Security Auditing Framework and Evaluation Template for Advocacy Groups</Subheading>
            </InpageHeadline>
            <p>
              SAFETAG is a professional audit framework that adapts
              traditional penetration testing and risk assessment methodologies
              to be relevant to smaller non-profit organizations based or
              operating in the developing world.
            </p>
          </HomepageHeaderInner>
        </HomepageHeader>
        <InpageBody>
          <InpageBodyInner>
            <Heading id="about" size="jumbo" variation="primary" withDeco>
              About SAFETAG
            </Heading>
            <p>
              SAFETAG audits serve small scale civil society organizations and independent
              media houses who have digital security concerns by working with them to identify
              the risks they face and providing capacity-aware, pragmatic next steps to
              address them.
            </p>
            <p>
              Traditional security audits are based upon the assumption that an organization
              has the time, money, and capacity to aim for perfect security. Low-income
              at-risk groups have none of these luxuries. SAFETAG combines assessment
              activities from the the security auditing world with best-practices for working
              with small scale at-risk organizations.
            </p>
            <p>
              SAFETAG auditors lead a risk modeling process that helps staff and leadership
              take an institutional look at their digital security problems, expose
              vulnerabilities that impact their critical processes and assets, and provide
              clear reporting and follow up to help the organization strategically move
              forward and identify the support that they need.
            </p>
          </InpageBodyInner>
        </InpageBody>

        <InpageBody variation="blue">
          <InpageBodyInner>
            <Heading id="recent-updates" size="jumbo" variation="primary" withDeco>
              Recent Updates
            </Heading>
            <ul>
              {data.allMarkdownRemark.edges.map(
                ({ node }, index) => (
                    <li key={index}>
                      <Link to={node.fields.slug}>{node.frontmatter.title}</Link>

                      {node.frontmatter.date}
                    </li>
                  )
              )}
            </ul>
          </InpageBodyInner>
        </InpageBody>

        <InpageBody>
          <InpageBodyInner>

            <Heading id="framework" size="jumbo" variation="primary" withDeco>
              The SAFETAG Audit Framework
            </Heading>

            <Heading id="methods" size="large">
              SAFETAG Methods
            </Heading>
            <p>
              The Overview contains the SAFETAG Methods and top-level approaches
              and is available in mutiple languages:
            </p>
            <ul>
              <li><span>العربية</span></li>
              <li><span>english</span></li>
              <li><span>español</span></li>
              <li><span>русский</span></li>
            </ul>

            <Heading id="methods" size="large">
              Full Guide
            </Heading>
            <p>
              You can <a href="" target="_blank" rel="noopener">explore the full
              guide online</a> and download it in <a href="" target="_blank"
              rel="noopener">English</a>.
            </p>

            <Heading id="curricula" size="large">
              Curricula
            </Heading>
            <p>
              To train new auditors, Internews has also provided an <a href="">Auditor training curricula</a>.
            </p>


          </InpageBodyInner>
        </InpageBody>

      </Inpage>
    </GlobalLayout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.array,
}

export default IndexPage

/*
      filter: {
        relativeDirectory: { eq: "methods" }
        internal: { mediaType: { eq: "text/markdown" } }
      }
*/

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date],  order: DESC },
      limit: 5,
      filter: {fileAbsolutePath: {regex: "/posts/"}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`
