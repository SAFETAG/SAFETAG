import React from "react"
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes from "prop-types"
import { graphql, withPrefix } from "gatsby"
import styled from "styled-components"
import mapValues from "lodash.mapvalues"

import GlobalLayout from "./global-layout"
import SEO from "../seo"

// import {unified} from 'unified'
// import remarkParse from 'remark-parse'
// import remarkHtml from 'remark-html'

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
import Card, { CardHeading, CardList } from "../../styles/card"
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
      img {
        max-width: 1.75rem;
        margin-right: 1rem;
        order: -1;

      }
      + dd {
        margin-top: 0;
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

const ToolList = styled.section`
  grid-column: span 2;

  ${CardList} {
    margin-top: 2rem;
  }
`
const ToolCard = styled(Card)`
  ${media.mediumUp`
    min-height: 6rem;
  `}
  ${CardHeading} {
    margin: 0;
  }
`

function ActivityLayout({ data }) {
  const { i18n } = useTranslation('site', { useSuspense: false });
  const {
    frontmatter,
    fields: { frontmattermd },
  } = data.markdownRemark

  // load and parse footnotes
  const footnotesNode = data.references.edges.filter(
    r => r.node.fields.slug.includes('footnotes') && r.node.fields.langKey == i18n.language
  )[0]
  const footnotesMD = footnotesNode.node.rawMarkdownBody
  const footnotes = {}
  // format them into a key-content object
  footnotesMD.split('\n\n').forEach(
    line => {
      line = line.trim()
      if (line && !line.startsWith('<!--')) {
        const key = line.split(':')[0].replace('[^', '').replace(']', '').replace(/"/, '')
        const value = line.replace(':', '|').split('|')[1]
        footnotes[key] = value
      }
    }
  )
  console.log(frontmatter)
  console.log(frontmattermd)
  Object.keys(footnotes).forEach(
    key => {
      if (frontmatter.summary.includes(key)) {
        frontmatter.summary = frontmatter.summary.replace(key, 'HELLO')
        console.log(frontmatter.summary)
      }
    }
  )

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


  // creates an object with tool names as keys and tool slugs as values
  const tools = data.tools.edges
  const toolNodes = {}
  tools.forEach(
    tool => {
      toolNodes[tool.node.frontmatter.title] = {
        slug: tool.node.fields.slug,
        short_summary: tool.node.frontmatter.short_summary,
      }
    }
  )

  return (
    <GlobalLayout>
      <SEO title={`Activity: ` + frontmatter.title} />
      <ActivityPage>
        <InpageHeader>
          <InpageInnerColumns columnLayout="3:1">
            <ActivityHeadline>
              <MoreLink direction="back" to="/activities/">
                <Trans i18nKey="activity-back">Back to all activities</Trans>
              </MoreLink>
              <ActivityTitle size="xlarge" variation="primary">
                {frontmatter.title}
              </ActivityTitle>
            </ActivityHeadline>
            <ActivityIntro>
              <InpageTitle size="large" withDeco>
                <Trans i18nKey="activity-summary">Summary</Trans>
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
                  <dt><Trans i18nKey="activity-approach">Approach</Trans></dt>
                  {frontmatter.approaches.map(approach => (
                    <dd key={approach}>{approach}<img src={`/img/${approach.toLowerCase()}_icon.png`} /></dd>
                  ))}
                  <dt><Trans i18nKey="activity-authors">Authors</Trans></dt>
                  {frontmatter.authors.map(authr => (
                    <dd key={authr}>{authr}</dd>
                  ))}


                  <dt><Trans i18nKey="activity-orgsize">Org Size under</Trans></dt>
                  <dd>{frontmatter.organization_size_under}</dd>
                  <dt><Trans i18nKey="activity-remote">Remote options</Trans></dt>
                  <dd>{frontmatter.remote_options}</dd>
                  <dt><Trans i18nKey="activity-skills">Skills required</Trans></dt>
                  {frontmatter.skills_required.map(skill => (
                    <dd key={skill}>{skill}</dd>
                  ))}
                  <dt><Trans i18nKey="activity-time">Time required (minutes)</Trans></dt>
                  <dd>{frontmatter.time_required_minutes}</dd>
                  {frontmatter.tools ? <dt><Trans i18nKey="activity-included-tools">Included tools</Trans></dt> : ""}
                {(frontmatter.tools || []).map((tool) => (
                  <dd key={tool}>
                    <a href="#tools">
                      {tool}
                    </a>
                  </dd>
                ))}
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
                  <Trans i18nKey="activity-overview">Overview</Trans>
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
                    <CardHeading><Trans i18nKey="activity-materials">Materials Needed</Trans></CardHeading>
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
                  <Trans i18nKey="activity-considerations">Considerations</Trans>
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
                  <Trans i18nKey="activity-walkthrough">Walk Through</Trans>
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

          {frontmatter.tools && (
            <div id="tools">
              <InpageInnerColumns columnLayout="3:1">
                <ToolList>
                  <InpageTitle size="large" withDeco>
                    <Trans i18nKey="activity-tools">Tools and variants</Trans>
                  </InpageTitle>
                  <CardList>
                    {(frontmatter.tools || []).map((tool) => (
                      <li key={tool}>
                        <ToolCard
                          as={Link}
                          to={toolNodes[tool] ? `${toolNodes[tool].slug}/`: ''}
                          border="primary"
                          variation="secondary"
                          withHover
                        >
                          <CardHeading variation="primary">
                            {tool}_
                          </CardHeading>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: toolNodes[tool] ? toolNodes[tool].short_summary : '',
                            }}
                          ></div>
                        </ToolCard>
                      </li>
                    ))}
                  </CardList>
                </ToolList>
              </InpageInnerColumns>
            </div>
          )}

          {sections.recommendations && (
            <InpageInnerColumns columnLayout="3:1">
              <article>
                <InpageTitle size="large" withDeco>
                  <Trans i18nKey="activity-recommendations">Recommendations</Trans>
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
  data: PropTypes.array,
}

export default ActivityLayout

export const query = graphql`
  query($slug: String!, $language: String!) {
    markdownRemark(fields: { slug: { eq: $slug }, langKey: {eq: $language} }) {
      html
      frontmatter {
        title
        summary
        approaches
        tools
        authors
        remote_options
        skills_required
        time_required_minutes
        organization_size_under
      }
      fields {
        frontmattermd {
          overview { html }
          materials_needed { html }
          considerations { html }
          recommendations { html }
          summary { rawMarkdownBody, html }
          walk_through { html }
        }
      }
    }
    tools: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/tools//"}, fields: {langKey: {eq: $language}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            short_summary
          }
        }
      }
    }
    references: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/references//"}}
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          frontmatter {
            title
          }
          rawMarkdownBody
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
