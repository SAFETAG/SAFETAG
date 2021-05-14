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

function IndexPage({ data }) {

  return (
    <GlobalLayout>
      <SEO title="Safetag guide" />
      <Inpage>
        <HomepageHeader>
          <HomepageHeaderInner>
            <InpageHeadline>
              <HomepageTitle size="jumbo" variation="white">
                SAFETAG (BETA)
              </HomepageTitle>
              <Subheading>Custom guide creator_</Subheading>
            </InpageHeadline>
            <p>
              Security Auditing Framework and Evaluation Template for Advocacy
              Groups. SAFETAG is a professional audit framework that adapts
              traditional penetration testing and risk assessment methodologies
              to be relevant to smaller non-profit organizations based or
              operating in the developing world.
            </p>
            <MoreLink direction="forward" to="/about/">
              Learn More
            </MoreLink>
          </HomepageHeaderInner>
          <HomepageHeaderButtons>
            <Button
              size="jumbo"
              box="semi-fluid"
              variation="primary-outline"
              title="Download full guide as PDF"
              onClick={() => {
                window.open('/guides/Safetag_full_guide.pdf');
              }}
            >
              Download Full Guide
            </Button>
            <Button
              size="jumbo"
              box="semi-fluid"
              variation="primary-raised-light"
              to="/guide-builder/"
              as={Link}
            >
              Create Custom Guide
            </Button>
          </HomepageHeaderButtons>
        </HomepageHeader>
        <InpageBody>
          <InpageBodyInner>
            <Heading id="allMethods" size="jumbo" variation="primary" withDeco>
              Methods
            </Heading>
            <Subheading>Explore all Safetag Methods</Subheading>
            <HomeCardList>
              {data.allMarkdownRemark.edges.map(
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
