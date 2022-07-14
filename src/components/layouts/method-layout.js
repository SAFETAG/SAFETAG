import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import styled from "styled-components"
import { Remark } from 'react-remark';

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

import { loadAllFootnotes, processSections } from "../../helpers/footnotes.js"

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
  const { t, i18n } = useTranslation('site', { useSuspense: false })
  const frontmatter = data.method.frontmatter

  // creates an object with activity names as keys and activity slugs as values
  const activities = data.activities.edges
  const activityNodes = {}
  console.log(activities)
  activities.forEach(
    activity => {
      activityNodes[activity.node.frontmatter.title] = {
        slug: activity.node.fields.slug,
        approaches: activity.node.frontmatter.approaches,
        excerpt: activity.node.frontmatter.short_summary ?
          activity.node.frontmatter.short_summary
          : activity.node.frontmatter.summary?.slice(0,200) + "...",
      }
    }
  )

  // creates an object with reference names as keys and reference slugs as values
  let references = data.references.edges
  const referenceNodes = {}
  references.forEach(
    reference =>
      (referenceNodes[reference.node.frontmatter.title] = {
        title: reference.node.frontmatter.title,
        html: reference.node.html,
      })
  )

  // the same for approaches
  let approaches = data.approaches.edges
  const approachNodes = {}
  approaches.forEach(
    approach =>
      (approachNodes[approach.node.frontmatter.title] = {
        title: approach.node.frontmatter.title,
        icon: `/img/${approach.node.fields.slug.replace('/approaches/', '')}_icon.png`
      })
  )

  // Get previous page path, if available
  let prevPath = location.state && location.state.prevPath || ""
  let prevPage = location.state && location.state.prevPage || ""

  // load and integrate footnotes
  const allFootnotes = loadAllFootnotes(data.references.edges, i18n.language)
  let frontmatterCopy = Object.assign({}, frontmatter)
  let { sections, footnotes } = processSections(frontmatterCopy, allFootnotes)

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
                <Trans i18nKey="method-back">Back to</Trans> {prevPath ? t("guide builder") : t("all methods")}
              </MoreLink>
              <InpageTitle size="jumbo" variation="primary">
                {frontmatter.title}
                <MethodIcon src={frontmatter.method_icon} />
              </InpageTitle>
            </MethodHeadline>
            <MethodIntro>
              <InpageTitle size="large" withDeco>
                <Trans i18nKey="method-title-summary">Summary</Trans>
              </InpageTitle>
              <div><Remark>{sections.summary}</Remark></div>

              <InpageTitle size="large" withDeco>
                <Trans i18nKey="method-title-purpose">Purpose</Trans>
              </InpageTitle>
              <div><Remark>{sections.purpose}</Remark></div>
            </MethodIntro>
            <MethodMeta>
              <Dl boldDesc>
                <Trans i18nKey="method-title-author">Author</Trans>
                {(frontmatter.authors || []).map(authr => (
                  <dd key={authr}>{authr}</dd>
                ))}

                {frontmatter.activities ? <dt><Trans i18nKey="method-title-act">Included activities</Trans></dt> : ""}
                {(frontmatter.activities || []).map((activity) => (
                  <dd key={activity}>
                    <a href="#activities">
                      {activity}
                    </a>
                  </dd>
                ))}
              </Dl>
            </MethodMeta>
          </InpageInnerColumns>
        </InpageHeader>
        <InpageBody>
          <InpageInnerColumns columnLayout="2:1">
            <section>
              <InpageTitle size="large" withDeco>
                <Trans i18nKey="method-title-questions">Guiding Questions</Trans>
              </InpageTitle>
              <SquareUl>
                <Remark>{sections.guiding_questions}</Remark>
              </SquareUl>
            </section>
            <section></section>
          </InpageInnerColumns>
          <InpageInnerColumns columnLayout="1:1">
            {sections.operational_security && (
              <Card border="base">
                <CardHeading><Trans i18nKey="method-title-opsec">Operational Security</Trans></CardHeading>
                <div><Remark>{sections.operational_security}</Remark></div>
              </Card>
            )}
            {sections.preparation && (
              <Card border="base">
                <CardHeading><Trans i18nKey="method-title-prep">Preparation</Trans></CardHeading>
                <SquareUl>
                  <Remark>{sections.preparation}</Remark>
                </SquareUl>
              </Card>
            )}
          </InpageInnerColumns>
          <InpageInnerColumns columnLayout="2:1">
            <section>
              {sections.outputs && (
                <>
                  <InpageTitle size="large" withDeco>
                    <Trans i18nKey="method-title-outputs">Outputs</Trans>
                  </InpageTitle>
                  <SquareUl>
                    <Remark>{sections.outputs}</Remark>
                  </SquareUl>
                </>
              )}
            </section>
          </InpageInnerColumns>
        </InpageBody>
        <InpageBody>
          <InpageInnerColumns columnLayout="2:1">
            <section id="activities">
              <ActivityList>
                <InpageTitle size="large" withDeco>
                  <Trans i18nKey="method-title-activities">Activities</Trans>
                </InpageTitle>
                <CardList>
                  {(frontmatter.activities || []).map((activity, index) => (
                    activityNodes[activity] ?
                    <li key={index}>
                      <ActivityCard
                        as={Link}
                        to={activityNodes[activity] ? `${activityNodes[activity].slug}/`: ''}
                        border="primary"
                        variation="secondary"
                      >
                        <CardHeading variation="primary">
                        {activityNodes[activity] ? activityNodes[activity].approaches.map((approach, index) => (
                          <img key={`approach-${index}`} src={approachNodes[approach].icon} />
                        )) : ''}
                        {activity}_
                        </CardHeading>
                        <div>
                          <Remark>{activityNodes[activity].excerpt}</Remark>
                        </div>
                      </ActivityCard>
                    </li>
                    : <li>{activity}</li>
                  ))}
                </CardList>
              </ActivityList>
            </section>
          </InpageInnerColumns>

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

          <InpageInnerColumns columnLayout="2:1">
            <section>
              <InpageTitle size="large" withDeco>
                <Trans i18nKey="method-title-references">References and resources for</Trans> {frontmatter.title}
              </InpageTitle>
              <SquareUl>
                {(frontmatter.references || []).map((reference, index) => (
                  referenceNodes[reference] ? (
                  <div key={"ref-" + index}>
                    <p>{referenceNodes[reference].title}:</p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: referenceNodes[reference].html,
                      }}
                    ></div>
                  </div>
                ) : ''
                ))}
              </SquareUl>
            </section>
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
  query($slug: String!, $language: String!) {
    method: markdownRemark(fields: { slug: { eq: $slug }, langKey: {eq: $language} }) {
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
    }
    activities: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/activities//"}, fields: {langKey: {eq: $language}}}
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          frontmatter {
            title
            summary
            approaches
            short_summary
          }
        }
      }
    }
    approaches: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/approaches//"}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          html
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
          html
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
