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
import Card, { CardHeader, CardHeading, CardList } from "../styles/card"

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


const HomeCardList = styled(CardList)`
  margin: ${glsp(4)} 0;
`

const ContactButton = styled(Button)`
  font-size: 1.5rem;
  padding: 1rem;
  margin-top: 1rem;
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
              {data.posts.edges.map(
                ({ node }, index) => (
                    <li key={index}>
                      <Link to={node.fields.slug}>{node.frontmatter.title}</Link> &mdash; {node.frontmatter.date}
                    </li>
                  )
              )}
            </ul>
          </InpageBodyInner>
        </InpageBody>

        <InpageBody>
          <InpageBodyInner>

            <Heading id="allMethods" size="jumbo" variation="primary" withDeco>
              The SAFETAG Methods
            </Heading>
            <Subheading>Explore all Safetag Methods</Subheading>
            <HomeCardList>
              {data.methods.edges.map(
                ({ node }, index) => (
                    <li key={index}>
                      <Card
                        border="primary"
                        as={Link}
                        to={node.fields.slug}
                        withHover
                      >
                        <CardHeader>
                        	<img src={node.frontmatter.method_icon} />
                        	<CardHeading variation="primary" withDeco>
                        	  {node.frontmatter.title}
                        	</CardHeading>
                        </CardHeader>
                        <p>
                          {
                            node.frontmatter.summary.split(' ').slice(0,25).join(' ') + "..."
                          }
                        </p>
                      </Card>
                    </li>
                  )
              )}
            </HomeCardList>

          </InpageBodyInner>
        </InpageBody>

        <InpageBody variation="blue">
          <InpageBodyInner>
            <Heading id="license" size="jumbo" variation="primary" withDeco>
              License
            </Heading>
            <p>
              SAFETAG resources are available under a <a
              href="https://creativecommons.org/licenses/by-sa/3.0/">Creative
              Commons Attribution-ShareAlike (CC BY-SA 3.0) License</a>.
            </p>
            <p>
              For photo and design details, check out the <Link
              to="/credits/">Credits</Link> page.
            </p>
            <p>
              Please see the <Link to="/license/">full license</Link> for
              content attribution and a usage guide to referring to the
              "SAFETAG" wordmark.
            </p>
          </InpageBodyInner>
        </InpageBody>

        <InpageBody>
          <InpageBodyInner>
            <Heading id="license" size="jumbo" variation="primary" withDeco>
              Get in touch
            </Heading>
            <ContactButton
                variation="primary-raised-light"
                to="#"
                onClick={(e) => {
                  window.location = "mailto:info@SAFETAG.org";
                  e.preventDefault();
                }}
                as={Link}>
              info@SAFETAG.org
            </ContactButton>
            <p>
              We have a global network of auditors trained in the SAFETAG
              framework available for independent work with small NGOs.
            </p>
            <p>
              For updates or suggestions for the framework, <Link
              to="https://github.com/SAFETAG/SAFETAG/issues">submit an
              issue</Link>.
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
    posts: allMarkdownRemark(
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
    methods: allMarkdownRemark(
      sort: { fields: [frontmatter___position],  },
      filter: {fileAbsolutePath: {regex: "/methods/"}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            position
            method_icon
            summary
          }
        }
      }
    }
  }
`
