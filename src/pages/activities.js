import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import GlobalLayout from "../components/layouts/global-layout"
import SEO from "../components/seo"

import {
  Inpage,
  InpageInnerColumns,
  InpageHeader,
  InpageHeadline,
  InpageBody,
  InpageBodyInner,
  InpageTitle,
} from "../styles/inpage"
import Card, { CardHeading, CardList } from "../styles/card"
import media from "../styles/utils/media-queries"

const MethodHeadline = styled(InpageHeadline)`
  ${media.mediumUp`
    grid-column: span 2;
  `}
`

const ActivityCard = styled(Card)`
  > :last-child:not(:first-child) {
    padding-top: 0;
  }
  ${CardHeading} {
    &:after {
      content: "_";
    }
  }
`

function Activities({ data }) {
  return (
    <GlobalLayout>
      <SEO title="Activities" />
      <Inpage>
        <InpageHeader>
          <InpageInnerColumns columnLayout="3:1">
            <MethodHeadline>
              <InpageTitle size="jumbo" variation="primary" withDeco>
                Activities
              </InpageTitle>
            </MethodHeadline>
          </InpageInnerColumns>
        </InpageHeader>
        <InpageBody>
          <InpageBodyInner>
            <CardList>
              {data.allFile.edges.map(
                ({ node }, index) =>
                  node.fields != null &&
                  node.childMarkdownRemark.fields.frontmattermd.summary && (
                    <li key={index}>
                      <ActivityCard
                        variation="secondary"
                        border="primary"
                        as={Link}
                        to={node.fields.slug}
                        withHover
                      >
                        <CardHeading variation="primary">
                          {node.childMarkdownRemark.frontmatter.title}
                        </CardHeading>
                        <p>
                          {
                            node.childMarkdownRemark.fields.frontmattermd
                              .summary.excerpt
                          }
                        </p>
                      </ActivityCard>
                    </li>
                  )
              )}
            </CardList>
          </InpageBodyInner>
        </InpageBody>
      </Inpage>
    </GlobalLayout>
  )
}

Activities.propTypes = {
  data: PropTypes.array,
}

export default Activities

export const query = graphql`
  query($language: String!) {
    allFile(
      filter: {
        relativeDirectory: { eq: "activities" }
        internal: { mediaType: { eq: "text/markdown" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          childMarkdownRemark {
            frontmatter {
              title
            }
            fields {
              frontmattermd {
                summary {
                  excerpt
                }
              }
            }
          }
        }
      }
    }
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
