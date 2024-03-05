import React from "react"
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Remark } from 'react-remark';
import remarkGfm from 'remark-gfm';


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
import Card, { CardHeading, CardList } from "../../styles/card"
import media from "../../styles/utils/media-queries"
import { themeVal } from "../../styles/utils/general"

import { loadAllFootnotes, processSections } from "../../helpers/footnotes.js"

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

  // load and integrate footnotes
  const allFootnotes = loadAllFootnotes(data.references.edges, i18n.language)
  let frontmatter = Object.assign({}, data.activity.frontmatter)
  let { sections, footnotes } = processSections(frontmatter, allFootnotes)

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
      <SEO title={`Activity: ` + sections.title} />
      <ActivityPage>
        <InpageHeader>
          <InpageInnerColumns columnLayout="3:1">
            <ActivityHeadline>
              <MoreLink direction="back" to="/activities/">
                <Trans i18nKey="activity-back">Back to all activities</Trans>
              </MoreLink>
              <ActivityTitle size="xlarge" variation="primary">
                {sections.title}
              </ActivityTitle>
            </ActivityHeadline>
            <ActivityIntro>
              <InpageTitle size="large" withDeco>
                <Trans i18nKey="activity-summary">Summary</Trans>
              </InpageTitle>
              <div><Remark>{sections.summary}</Remark></div>
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
                  {(frontmatter.skills_required || []).map(skill => (
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
                <SquareUl>
                  <Remark>{sections.overview}</Remark>
                </SquareUl>
              </aside>
              {sections.materials_needed && (
                <aside>
                  <Card variation="outline" border="white">
                    <CardHeading><Trans i18nKey="activity-materials">Materials Needed</Trans></CardHeading>
                    <div>
                      <Remark> {sections.materials_needed} </Remark>
                    </div>
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
                <SquareUl><Remark>{sections.considerations}</Remark></SquareUl>
              </article>
            </InpageInnerColumns>
          )}
          {sections.walk_through && (
            <InpageInnerColumns columnLayout="3:1">
              <article>
                <InpageTitle size="large" withDeco>
                  <Trans i18nKey="activity-walkthrough">Walk Through</Trans>
                </InpageTitle>
                <SquareUl><Remark remarkPlugins={[ remarkGfm ]}>{sections.walk_through}</Remark></SquareUl>
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
                          <div><Remark>{toolNodes[tool].short_summary}</Remark></div>
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
                <SquareUl><Remark>{sections.recommendations}</Remark></SquareUl>
              </article>
            </InpageInnerColumns>
          )}

          {footnotes.length ? (
            <InpageInnerColumns columnLayout="3:1">
              <article id="footnotes">
                <InpageTitle size="large" withDeco>
                  <Trans i18nKey="activity-footnotes">Footnotes</Trans>
                </InpageTitle>
                <SquareUl>
                  {footnotes.map(fn => (
                    <li key={fn.key} id={fn.key}>
                      <strong>{fn.index}</strong> <span
                        dangerouslySetInnerHTML={{
                          __html: fn.html,
                        }}
                        ></span>
                    </li>
                  ))}
                </SquareUl>
              </article>
            </InpageInnerColumns>
          ) : ""}

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
  query($slug: String!, $language: String!) {
    activity: markdownRemark(fields: { slug: { eq: $slug }, langKey: {eq: $language} }) {
      html
      frontmatter {
        title
        summary
        overview
        considerations
        walk_through
        materials_needed
        recommendations
        approaches
        tools
        authors
        remote_options
        skills_required
        time_required_minutes
        organization_size_under
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
