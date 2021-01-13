import React from "react"
import PropTypes from "prop-types"
import { graphql, withPrefix } from "gatsby"
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
import Card, { CardHeading } from "../../styles/card"
import media from "../../styles/utils/media-queries"
import { themeVal } from "../../styles/utils/general"

const ActivityPage = styled(Inpage)`
  article {
    overflow-x: hidden;
    pre {
      padding: 1rem;
      font-family: ${themeVal("type.monospace.family")};
      background: ${themeVal("color.mist")};
      overflow-x: scroll;
      font-size: 0.875rem;
    }
  }
  ${SquareUl} {
    h6 {
      font-size: 1rem;
      font-family: ${themeVal("type.monospace.family")};
      color: ${themeVal("color.primary")};
      text-transform: uppercase;
    }
  }
  ${Dl} {
    dd {
      display: flex;
      align-items: center;
      img {
        max-width: 1.75rem;
        margin-left: 1rem;
        margin-bottom: 0.5rem;
      }
    }
  }
`

const ActivityHeadline = styled(InpageHeadline)`
  ${media.mediumUp`
    grid-column: span 2;
  `}
`
const ActivityTitle = styled(InpageTitle)`
  &:after {
    content: "_";
  }
`

const ActivityIntro = styled.article`
  ${media.mediumUp`
    max-width: 40vw;
  `}
`
const ActivityMeta = styled.aside``

function ActivityLayout({ data }) {
  const {
    frontmatter,
    fields: { frontmattermd },
  } = data.file.childMarkdownRemark

  // Fix images URL by adding app root url with prefix
  const sections = mapValues(frontmattermd, section => {
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
      <SEO title={`Activity: ` + frontmatter.title} />
      <ActivityPage>
        <InpageHeader>
          <InpageInnerColumns columnLayout="3:1">
            <ActivityHeadline>
              <MoreLink direction="back" to="/activities/">
                Back to all activities
              </MoreLink>
              <ActivityTitle size="xlarge" variation="primary">
                {frontmatter.title}
              </ActivityTitle>
            </ActivityHeadline>
            <ActivityIntro>
              <InpageTitle size="large" withDeco>
                Summary
              </InpageTitle>
              {sections.summary && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: sections.summary,
                  }}
                ></div>
              )}
            </ActivityIntro>
            <ActivityMeta>
              <Card variation="outline" border="base">
                <Dl boldDesc>
                  <dt>Approach</dt>
                  {frontmatter.approaches.map(approach => (
                    <dd key={approach}>{approach}<img src={`/img/${approach.toLowerCase()}_icon.png`} /></dd>
                  ))}
                  <dt>Authors</dt>
                  <dd>{frontmatter.authors}</dd>
                  <dt>Org Size under</dt>
                  <dd>{frontmatter.organization_size_under}</dd>
                  <dt>Remote options</dt>
                  <dd>{frontmatter.remote_options}</dd>
                  <dt>Skills required</dt>
                  {frontmatter.skills_required.map(skill => (
                    <dd key={skill}>{skill}</dd>
                  ))}
                  <dt>Time required (minutes)</dt>
                  <dd>{frontmatter.time_required_minutes}</dd>
                </Dl>
              </Card>
            </ActivityMeta>
          </InpageInnerColumns>
        </InpageHeader>
        {sections.overview && (
          <InpageBody variation="dark">
            <InpageInnerColumns columnLayout="3:1">
              <aside>
                <InpageTitle size="large" withDeco>
                  Overview
                </InpageTitle>
                <SquareUl
                  dangerouslySetInnerHTML={{
                    __html: sections.overview,
                  }}
                ></SquareUl>
              </aside>
              {sections.materials_needed && (
                <aside>
                  <Card variation="outline" border="white">
                    <CardHeading>Materials Needed</CardHeading>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sections.materials_needed,
                      }}
                    ></div>
                  </Card>
                </aside>
              )}
            </InpageInnerColumns>
          </InpageBody>
        )}
        <InpageBody>
          {sections.considerations && (
            <InpageInnerColumns columnLayout="3:1">
              <article>
                <InpageTitle size="large" withDeco>
                  Considerations
                </InpageTitle>
                <SquareUl
                  dangerouslySetInnerHTML={{
                    __html: sections.considerations,
                  }}
                ></SquareUl>
              </article>
            </InpageInnerColumns>
          )}
          {sections.walk_through && (
            <InpageInnerColumns columnLayout="3:1">
              <article>
                <InpageTitle size="large" withDeco>
                  Walkthrough
                </InpageTitle>
                <SquareUl
                  dangerouslySetInnerHTML={{
                    __html: sections.walk_through,
                  }}
                ></SquareUl>
              </article>
              <span></span>
            </InpageInnerColumns>
          )}
          {sections.recommendations && (
            <InpageInnerColumns columnLayout="3:1">
              <article>
                <InpageTitle size="large" withDeco>
                  Recommendation
                </InpageTitle>
                <SquareUl
                  dangerouslySetInnerHTML={{
                    __html: sections.recommendations,
                  }}
                ></SquareUl>
              </article>
            </InpageInnerColumns>
          )}
        </InpageBody>
      </ActivityPage>
    </GlobalLayout>
  )
}

ActivityLayout.propTypes = {
  data: PropTypes.object,
}

export default ActivityLayout

export const query = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      childMarkdownRemark {
        frontmatter {
          title
          approaches
          authors
          remote_options
          skills_required
          time_required_minutes
          organization_size_under
        }
        fields {
          frontmattermd {
            overview {
              html
            }
            materials_needed {
              html
            }
            considerations {
              html
            }
            recommendations {
              html
            }
            summary {
              html
            }
            walk_through {
              html
            }
          }
        }
      }
    }
  }
`
