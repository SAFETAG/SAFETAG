import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes from "prop-types"
import styled from "styled-components"
import pickBy from "lodash.pickby"
import values from "lodash.values"
import MoreLink from "../styles/button/more-link"
import queryString from 'query-string'
import { navigate } from "@reach/router"

import keyBy from "lodash.keyby"

import GlobalLayout from "../components/layouts/global-layout"
import SEO from "../components/seo"
import Filters from "../components/filters"
import Search from "../components/search-guide"
import { prepareGuide } from "../helpers/generate-guide"

import {
  Inpage,
  InpageHeader,
  InpageHeaderInner,
  InpageTitle,
  InpageBody,
  InpageBodyInner,
  InpageInnerColumns,
} from "../styles/inpage"
import Button from "../styles/button/button"
import Card from "../styles/card"
import Form from "../styles/form/form"
import { FormGroup, FormGroupHeader, FormGroupBody } from "../styles/form/group"
import { FormCheckableGroup, FormCheckable } from "../styles/form/checkable"
import FormLabel from "../styles/form/label"
import media from "../styles/utils/media-queries"
import { themeVal } from "../styles/utils/general"

const SplitPanels = styled(InpageInnerColumns)`
  ${media.mediumUp`
    gap: 0.5rem;
  `}
`

const Panel = styled(Card)`
  display: flex;
  width: 100%;
  min-height: 60vh;
  max-height: 100vh;
  overflow-y: auto;
  overflow-y: overlay;
  padding: 1.5rem 1rem;
  & > ${InpageTitle} {
    margin-bottom: 1rem;
  }
  &:first-of-type {
    background-color: ${themeVal("color.mist")};
    border-color: ${themeVal("color.baseLight")};
  }
  /* override default card padding */
  & > :last-child:not(:first-child) {
    padding-top: 0;
  }
`

const GuideSelector = styled(Form)`
  grid-template-columns: 100%;
  ${FormGroup} {
    margin-bottom: 1.5rem;
    background: white;
    padding: 2rem 1.5rem;
    box-shadow: inset 0 0 1px 0 ${themeVal("color.base")};
    grid-template-columns: 100%;
  }
  ${FormGroupBody} {
    grid-template-columns: 100%;
  }
  ${MoreLink} {
    margin: 0.25rem 0 1rem;
    text-align: right;
    padding-right: 2rem;
    opacity: 0.75;
    &:after {
      width: initial;
    }
    &:hover {
      opacity: 0.875;
    }
  }
  ${FormCheckableGroup} {
    flex-flow: column nowrap;
    align-items: flex-start;
    ul {
      list-style: none;
      padding-left: 2rem;
      max-width: 100%;
      ${FormCheckable} {
        margin-left: -2rem;
        grid-auto-columns: inherit;
      }
    }
    li {
      padding-bottom: 1rem;
    }
  }
`
const GuideSelected = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: start;
  padding-top: 2rem !important;
  padding: 2rem 1rem 0;
`

const MethodHeading = styled(FormLabel)`
  font-size: 1.25rem;
  font-family: ${themeVal("type.heading.family")};
  border-top: 2px solid ${themeVal("color.base")};
  border-bottom: 1px solid ${themeVal("color.base")};
  padding: 1rem 0 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
`

const ActivitiesSelector = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  margin-bottom: 0.5rem;
  ${Button} {
    ${media.largeUp`
      margin-left: 1rem;
      &:first-of-type {
        margin-left: auto;
      }
    `}
  }
`

const ActivitiesHeading = styled.h4`
  margin: 0 0 1rem;
  padding: 0.5rem 0;
  font-family: ${themeVal("type.heading.family")};
  text-transform: uppercase;
  border-bottom: 1px solid ${themeVal("color.base")};
  flex-basis: 100%;
  ${FormCheckableGroup} > & {
    margin: 1rem 0;
  }
  ${media.mediumUp`
    flex: inherit;
  `}
`

const ActivityLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`

const ActivityTitle = styled.p`
  font-family: ${themeVal("type.heading.family")};
  font-weight: ${themeVal("type.heading.weight")};
  margin: 0 0 0.5rem;
`

const ActivityCheckable = styled(FormCheckable)`
  grid-gap: 0.75rem;
  span {
    font-family: ${themeVal("type.heading.family")};
    font-weight: ${themeVal("type.heading.weight")};
  }
  + div {
    margin-top: 0.25rem;
  }
  & + & {
    margin-top: 0.5rem;
  }
`

const ExportButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  gap: 1rem;
`

function useAllGuideData(data) {
  const activities = data.activities.edges.map(({ node }) => {
    return {
      id: node.frontmatter.title,
      sections: node.frontmatter,
      toolnames: node.frontmatter.tools,
      slug: node.fields.slug,
      ...node.frontmatter,
    }
  })

  const methods = data.methods.edges.map(({ node }) => ({
    id: node.frontmatter.title,
    sections: [node.frontmatter.summary, node.frontmatter.purpose, node.frontmatter.guiding_questions, node.frontmatter.outputs, node.frontmatter.operational_security, node.frontmatter.preparation],
    slug: node.fields.slug,
    ...node.frontmatter,
  }))

  const references = data.references.edges.map(({ node }) => ({
    id: node.frontmatter.title,
    rawMarkdownBody: node.rawMarkdownBody,
  }))

  // creates an object with tool names as keys and tool slugs as values
  const datatools = data.tools.edges
  const tools = {}
  datatools.forEach(
    tool => {
      tools[tool.node.frontmatter.title] = {
        id: tool.node.id,
        slug: tool.node.fields.slug,
        title: tool.node.frontmatter.title,
        short_summary: tool.node.frontmatter.short_summary,
        rawMarkdownBody: tool.node.rawMarkdownBody,
      }
    }
  )

  const fixedSections = data.fixedSections.edges.reduce((acc, { node }) => {
    acc[node.base] = node.childMarkdownRemark.rawMarkdownBody
    return acc
  }, {})

  return {
    fullGuide: keyBy(
      methods.map(m => {
        return {
          ...m,
          activities: keyBy(
            (m.activities || []).map(id => activities.find(a => a.id === id)),
            "id"
          ),
          references: keyBy(
            (m.references || []).map(id => references.find(r => r.id === id)),
            "id"
          ),
          tools: tools,
        }
      }),
      "id"
    ),
    references,
    activities,
    tools,
    fixedSections,
  }
}


const GuideBuilder = ({ data, location }) => {
  const { t, i18n } = useTranslation('site', { useSuspense: false });
  const { fullGuide, activities, fixedSections } = useAllGuideData(data)
  // Add the full guide to state
  const [guide, setGuide] = useState(fullGuide)
  const [isNoResults, setNoResults] = useState(false)
  const [activitiesInCustomGuide, setActivitiesInCustomGuide] = useState([])
  const [isCustomGuideLoading, setCustomGuideLoader] = useState(false)

    // adds selected activities to guide if any exist in url param on initial load
    useEffect(() => {
      if(location.search) {
        const qs = queryString.parse(location.search)

        try {
          const newGuide = Object.entries(qs).reduce((prev, [key, value]) => {
            const values = value.split(',')
            const checkedActivities = values.reduce((prev, curr) => {
              return {
                ...prev,
                [curr]: {
                  ...guide[key].activities[curr],
                checked: true,
              }
              }
            }, {})

            return {
              ...guide,
              ...prev,
              [key]: {
                ...guide[key],
                activities: {
                  ...guide[key].activities,
                  ...checkedActivities
                  }
                }
              }
          }, {})
          setGuide(newGuide)
        } catch (error) {
          console.log("Error parsing the search string, dropping.")
        }
    }
    }, [])

    // stores list of selected activities to be referenced by url params and filter guide
    useEffect(() => {
      const activities = values(guide).filter(({ id, activities }) => {
        const act = values(pickBy(activities, a => a.checked))
        return act.length && {[id]: values(pickBy(activities, a => a.checked))}
      })
      setActivitiesInCustomGuide(activities)
    }, [guide])

    // sets url params as activities are selected
    useEffect(() => {
      if(activitiesInCustomGuide.length) {
        const allSelectedActivities = activitiesInCustomGuide.map(method => {
          const activityArray = Object.values(method.activities)
          .filter(activity => activity.checked)
          .map(activity => activity.id)
          return {[method.id]: activityArray}
        })
        const newQS = queryString.stringify(
            allSelectedActivities.reduce((prev, curr) => {return {...prev, ...curr}}, {}),
            {arrayFormat: 'comma'}
        )
        navigate(location.pathname + '?' + newQS)
      }
    }, [activitiesInCustomGuide])

  const selectMultipleActivities = (methodId, allOrNone) => {
    const allActivities = guide[methodId].activities
    let newActivities = Object.entries(allActivities).reduce(
      (prev, [key, activity]) => {
        return { ...prev, [key]: { ...activity, checked: allOrNone === "all" } }
      },
      {}
    )

    setGuide({
      ...guide,
      [methodId]: {
        ...guide[methodId],
        activities: newActivities,
      },
    })
  }

  return (
    <GlobalLayout>
      <SEO title="Guide Creator" />
      {fullGuide && activities && <div>
      <Inpage>
        <InpageHeader>
          <InpageHeaderInner>
            <InpageTitle size="jumbo" variation="primary" withDeco>
              <Trans i18nKey="builder-title">Custom Guide Builder</Trans>
            </InpageTitle>
          </InpageHeaderInner>
        </InpageHeader>
        <InpageBody>
          <InpageBodyInner>
              <Search
                 fullGuide={fullGuide}
                 setGuide={setGuide}
                 setNoResults={setNoResults}
              />
              <Filters
                fullGuide={fullGuide}
                activitiesInCustomGuide={activitiesInCustomGuide}
                setGuide={setGuide}
                activities={activities}
                // initialFilters={queryString.parse(location.search)}
              />
          </InpageBodyInner>
        </InpageBody>
        <InpageBody>
          <SplitPanels columnLayout="1:1">
            <Panel border="base">
              <InpageTitle size="xlarge">
                {fullGuide ? t("builder-full", "Full Safetag Guide Content") : t("builder-filtered", "Filtered Safetag Guide Content")}
              </InpageTitle>
              {isNoResults && <p>No Search Results</p>}
              <GuideSelector>
                {values(guide).filter(method => !method.filterDoesNotApply).map(method => {
                  return (
                    <FormGroup key={method.id}>
                      <FormGroupHeader>
                        <MethodHeading><Trans i18nKey="builder-method">Method</Trans>: {method.title}</MethodHeading>
                      </FormGroupHeader>
                      <FormGroupBody>
                        <div>{method.summary.excerpt}</div>
                        <MoreLink
                          to={method.slug}
                          state={{
                            prevPath: location.pathname,
                            prevPage: location.pathname + location.search,
                          }}
                        >
                          <Trans i18nKey="builder-readmore">Read More</Trans>
                        </MoreLink>
                        <FormCheckableGroup>
                          {method.activities[0] !== "" && (
                            <ActivitiesSelector>
                              <ActivitiesHeading><Trans i18nKey="builder-activities">Activities</Trans></ActivitiesHeading>
                              <Button
                                variation="primary-plain"
                                title="Select all activities in this method"
                                onClick={() =>
                                  selectMultipleActivities(method.id, "all")
                                }
                              >
                                <Trans i18nKey="builder-selectall">Select All</Trans>
                              </Button>
                              <Button
                                variation="danger-plain"
                                title="Deselect all activities in this method"
                                onClick={() =>
                                  selectMultipleActivities(method.id, "none")
                                }
                              >
                                <Trans i18nKey="builder-selectnone">Select None</Trans>
                              </Button>
                            </ActivitiesSelector>
                          )}
                          <ul>
                            {values(method.activities).map(activity => {
                              if (activity) {
                              const fieldId = `checkbox-${method.id}-${activity.id}`
                              return (
                                <li key={fieldId}>
                                  <ActivityCheckable
                                    type="checkbox"
                                    id={fieldId}
                                    name={fieldId}
                                    defaultChecked={activity.checked}
                                    onChange={() => {
                                      setGuide({
                                        ...guide,
                                        [method.id]: {
                                          ...method,
                                          activities: {
                                            ...method.activities,
                                            [activity.id]: {
                                              ...activity,
                                              checked: !activity.checked,
                                            },
                                          },
                                        },
                                      })
                                    }}
                                  >
                                    {activity.title}
                                  </ActivityCheckable>
                                  <div>{activity.summary.excerpt}</div>
                                </li>
                              )
                              }
                            })}
                          </ul>
                        </FormCheckableGroup>
                      </FormGroupBody>
                    </FormGroup>
                  )
                })}
              </GuideSelector>
            </Panel>
            <Panel border="base">
              <InpageTitle size="xlarge">
                <Trans i18nKey="builder-selected">Selected Safetag Guide Content</Trans>
              </InpageTitle>
              <ExportButtons>
                <Button
                  size="xlarge"
                  variation="primary-raised-dark"
                  title="Export selected methods and activities as PDF"
                  onClick={async () => {
                    setCustomGuideLoader(true)
                    await prepareGuide(guide, 'custom-guide', fixedSections, false, t, i18n, data.references.edges, data.approaches.edges)
                    // requires a small buffer period
                    setTimeout(() => {
                      setCustomGuideLoader(false)
                    }, 1000)
                  }}
                  isSpinning={isCustomGuideLoading}
                  spinnerColor="light"
                  disabled={isCustomGuideLoading || !activitiesInCustomGuide.length}
                >
                  {isCustomGuideLoading
                    ? t("builder-genpdf", "Generating PDF...")
                    : t("builder-genpdfguide", "Generate PDF Guide")}
                </Button>
                <Button
                  size="xlarge"
                  variation="base-plain"
                  title="Download full guide"
                  onClick={() => {
                    window.open('/guides/Safetag_full_guide.pdf');
                  }}
                >
                  <Trans i18nKey="builder-downloadfull">Download Full Guide</Trans>
                </Button>
              </ExportButtons>
              {
                !activitiesInCustomGuide.length &&
                <GuideSelected>
                  <h3><Trans i18nKey="builder-nosections">No sections selected</Trans></h3>
                  <p><Trans i18nKey="builder-nosections-more">← Select activities from the panel to the left to build your custom guide</Trans></p>
                </GuideSelected>
              }
              {values(guide).map(method => {
                // Get selected activities from method, if any
                const selectedActivities = values(
                  pickBy(method.activities, a => a ? a.checked : null)
                )

                // Bypass if method doesn't have any selected activities
                if (selectedActivities.length === 0) return

                return (
                  <GuideSelected key={method.id}>
                    <MethodHeading><Trans i18nKey="builder-method">Method</Trans>: {method.title}</MethodHeading>
                    <p>{method.summary.excerpt}</p>
                    <ActivitiesHeading><Trans i18nKey="builder-activities">Activities</Trans></ActivitiesHeading>
                    {selectedActivities.map(activity => (
                      <ActivityLine key={activity.id}>
                        <ActivityTitle>{activity.title}</ActivityTitle>
                        <Button
                          variation="danger-plain"
                          title="Remove activity from selection"
                          onClick={() => {
                            setGuide({
                              ...guide,
                              [method.id]: {
                                ...method,
                                activities: {
                                  ...method.activities,
                                  [activity.id]: {
                                    ...activity,
                                    checked: !activity.checked,
                                  },
                                },
                              },
                            })
                          }}
                        >
                          &#10005;
                        </Button>
                      </ActivityLine>
                    ))}
                  </GuideSelected>
                )
              })}
            </Panel>
          </SplitPanels>
        </InpageBody>
      </Inpage>
      </div>}
    </GlobalLayout>
  )
}

export default GuideBuilder

GuideBuilder.propTypes = {
  data: PropTypes.object,
  location: PropTypes.shape({
    search: PropTypes.string,
    pathname: PropTypes.string,
  })

}

export const query = graphql`
  query($language: String!) {
    fixedSections: allFile(
      filter: {
        relativeDirectory: { eq: "guide_sections" }
        internal: { mediaType: { eq: "text/markdown" } }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            rawMarkdownBody
          }
          base
        }
      }
    }
    activities: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "/activities//"}, fields: {langKey: {eq: $language}} },
      sort: { fields: [frontmatter___position],  },
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            summary
            orgSize: organization_size_under
            approaches
            position
            tools
            remoteOptions: remote_options
            overview
            materials_needed
            considerations
            walk_through
            recommendations
          }
        }
      }
    }
    methods: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "/methods//"}, fields: {langKey: {eq: $language}} },
      sort: { fields: [frontmatter___position],  },
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            method_icon
            activities
            references
            summary
            purpose
            guiding_questions
            outputs
            operational_security
            preparation
          }
        }
      }
    }
    references: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "/references//"}, fields: {langKey: {eq: $language}} },
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
    approaches: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "/approaches//"}, fields: {langKey: {eq: $language}} },
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
