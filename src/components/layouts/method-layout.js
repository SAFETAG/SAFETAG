import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, withPrefix } from "gatsby"
import styled from "styled-components"
import mapValues from "lodash.mapvalues"

import GlobalLayout from "./global-layout"
import SEO from "../seo"

import {
  Inpage,
  InpageInnerColumns,
  InpageHeader,
  InpageHeadline,
  InpageBody,
  InpageTitle,
} from "../../styles/inpage"

import MoreLink from "../../styles/button/more-link"
import Dl, { SquareUl } from "../../styles/type/lists"
import media from "../../styles/utils/media-queries"
import Card, { CardHeading, CardList } from "../../styles/card"

const MethodHeadline = styled(InpageHeadline)`
  ${media.mediumUp`
    grid-column: span 2;
  `}
`

const MethodIcon = styled.img`
  position: relative;
  max-width: 2.5rem;
  margin-left: 1rem;
  margin-top: 1rem;
  bottom: -0.25rem;
  vertical-align: bottom;
`

const MethodIntro = styled.article`
  display: flex;
  flex-flow: column nowrap;
  p {
    max-width: 60ch;
    &:first-of-type {
      &::first-line {
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
`
const MethodMeta = styled.aside``

const ActivityList = styled.section`
  grid-column: span 2;

  ${CardList} {
    margin-top: 2rem;
  }
`
const ActivityCard = styled(Card)`
  ${media.mediumUp`
    min-height: 6rem;
  `}
  ${CardHeading} {
    margin: 0;
  }
`

function MethodLayout({ data, location }) {
  const frontmatter = data.method.frontmatter
  const frontmattermd = data.method.fields.frontmattermd

  // creates an object with activity names as keys and activity slugs as values
  let activities = data.activities.edges
  const activityNodes = {}
  activities.forEach(
    activity =>
      (activityNodes[activity.node.childMarkdownRemark.frontmatter.title] = {
        slug: activity.node.fields.slug,
        excerpt:
          activity.node.childMarkdownRemark.fields.frontmattermd.summary
            ?.excerpt,
      })
  )

  // creates an object with reference names as keys and reference slugs as values
  let references = data.references.edges
  const referenceNodes = {}
  references.forEach(
    reference =>
      (referenceNodes[reference.node.childMarkdownRemark.frontmatter.title] = {
        title: reference.node.childMarkdownRemark.frontmatter.title,
        html: reference.node.childMarkdownRemark.html,
      })
  )

  // Get previous page path, if available
  let prevPath = location.state && location.state.prevPath || ""
  let prevPage = location.state && location.state.prevPage || ""

  // Fix images URL by adding app root url with prefix
  const sections = mapValues(frontmatter, section => {
    if (section && section.html) {
      return section.html.replace(
        /<img src="\/img/g,
        `<img src="${withPrefix("/img")}`
      )
    }
    return section
  })

  return (
    <GlobalLayout>
      <SEO title={`Method: ` + frontmatter.title} />
      <Inpage>
        <InpageHeader>
          <InpageInnerColumns columnLayout="2:1">
            <MethodHeadline>
              <MoreLink
                direction="back"
                to={
                  prevPath.startsWith("/guide-builder")
                    ? prevPage
                    : "/#allMethods"
                }
              >
                Back to {prevPath ? "guide builder" : "all methods"}
              </MoreLink>
              <InpageTitle size="jumbo" variation="primary">
                {frontmatter.title}
                <MethodIcon src={frontmatter.method_icon} />
              </InpageTitle>
            </MethodHeadline>
            <MethodIntro>
              <InpageTitle size="large" withDeco>
                Summary
              </InpageTitle>
              <div
                dangerouslySetInnerHTML={{ __html: frontmattermd.summary.html }}
              ></div>
              <InpageTitle size="large" withDeco>
                Purpose
              </InpageTitle>
              <div
                dangerouslySetInnerHTML={{ __html: frontmattermd.purpose.html }}
              ></div>
            </MethodIntro>
            <MethodMeta>
              <Dl boldDesc>
                <dt>Author</dt>
                {frontmatter.authors.map(authr => (
                  <dd key={authr}>{authr}</dd>
                ))}
                {/* {frontmatter.info_provided !== "" && (
                  <>
                    <dt>Info Provided</dt>
                    <dd>{frontmatter.info_provided}</dd>
                    <dt>Info Required</dt>
                    <dd>{frontmatter.required}</dd>
                  </>
                )}*/}
              </Dl>
            </MethodMeta>
          </InpageInnerColumns>
        </InpageHeader>
        <InpageBody>
          <InpageInnerColumns columnLayout="2:1">
            <section>
              {/*{sections.the_flow_of_information && (
                <>
                  <InpageTitle size="large" withDeco>
                    The Flow of Information
                  </InpageTitle>
                  <SquareUl
                    dangerouslySetInnerHTML={{
                      __html: sections.the_flow_of_information,
                    }}
                  ></SquareUl>
                </>
                  )}*/}
              <InpageTitle size="large" withDeco>
                Guiding Questions
              </InpageTitle>
              <SquareUl
                dangerouslySetInnerHTML={{
                  __html: frontmattermd.guiding_questions.html,
                }}
              ></SquareUl>
            </section>
            <section></section>
          </InpageInnerColumns>
          <InpageInnerColumns columnLayout="1:1">
            {sections.operational_security && (
              <Card border="base">
                <CardHeading>Operational Security</CardHeading>
                <div
                  dangerouslySetInnerHTML={{
                    __html: frontmattermd.operational_security.html,
                  }}
                ></div>
              </Card>
            )}
            {sections.preparation && (
              <Card border="base">
                <CardHeading>Preparation</CardHeading>
                <SquareUl
                  dangerouslySetInnerHTML={{
                    __html: frontmattermd.preparation.html,
                  }}
                ></SquareUl>
              </Card>
            )}
          </InpageInnerColumns>
          <InpageInnerColumns columnLayout="2:1">
            <section>
              {sections.outputs && (
                <>
                  <InpageTitle size="large" withDeco>
                    Outputs
                  </InpageTitle>
                  <SquareUl
                    dangerouslySetInnerHTML={{
                      __html: frontmattermd.outputs.html,
                    }}
                  ></SquareUl>
                </>
              )}
            </section>
          </InpageInnerColumns>
        </InpageBody>
        <InpageBody>
          <InpageInnerColumns columnLayout="2:1">
            <section>
              <InpageTitle size="large" withDeco>
                References
              </InpageTitle>
              <SquareUl>
                {(frontmatter.references || []).map(reference => (
                  <>
                    <p>{referenceNodes[reference].title}:</p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: referenceNodes[reference].html,
                      }}
                    ></div>
                  </>
                ))}
              </SquareUl>
            </section>
            <section></section>
            <ActivityList>
              <InpageTitle size="large" withDeco>
                Activities
              </InpageTitle>
              <CardList>
                {(frontmatter.activities || []).map((activity, index) => (
                  <li key={index}>
                    <ActivityCard
                      as={Link}
                      to={`${activityNodes[activity].slug}/`}
                      border="primary"
                      variation="secondary"
                      withHover
                    >
                      <CardHeading variation="primary">{activity}_</CardHeading>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: activityNodes[activity].excerpt,
                        }}
                      ></div>
                    </ActivityCard>
                  </li>
                ))}
              </CardList>
            </ActivityList>
          </InpageInnerColumns>
        </InpageBody>
      </Inpage>
    </GlobalLayout>
  )
}

MethodLayout.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export default MethodLayout

export const query = graphql`
  query($slug: String!) {
    method: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        authors
        activities
        info_provided
        info_required
        references
        method_icon
        summary
        purpose
        guiding_questions
        preparation
        outputs
        operational_security
      }
      fields {
        frontmattermd {
          summary { html }
          purpose { html }
          guiding_questions { html }
          preparation { html }
          outputs { html }
          operational_security { html }
        }
      }
    }
    activities: allFile(
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
    references: allFile(
      filter: {
        relativeDirectory: { eq: "references" }
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
            html
          }
        }
      }
    }
  }
`
