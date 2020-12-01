import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import pickBy from "lodash.pickby"
import values from "lodash.values"
import MoreLink from "../styles/button/more-link"
import queryString from 'query-string'

import {useQueryParams} from 'use-query-params';

import GlobalLayout from "../components/layouts/global-layout"
import SEO from "../components/seo"
import Filters from "../components/filters"
import Search from "../components/search"
import useAllGuideData from "../helpers/useAllGuideData"
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

const GuideBuilder = ({ location }) => {
  const { fullGuide, activities, fixedSections } = useAllGuideData()
  // Add the full guide to state
  const [guide, setGuide] = useState(fullGuide)
  const [isNoResults, setNoResults] = useState(false)
  const [activitiesInCustomGuide, setActivitiesInCustomGuide] = useState([])
  const [isCustomGuideLoading, setCustomGuideLoader] = useState(false)

    // eslint-disable-next-line no-unused-vars
    const [query, setQuery] = useQueryParams({});
  
  
    // adds selected activities to guide if any exist in url param on initial load
    useEffect(() => {
      if(location.search) {
        const qs = queryString.parse(location.search)
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
    }
    }, [])
  
    // stores list of selected activities to be references by url params and filter guide
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
        setQuery(
            allSelectedActivities.reduce((prev, curr) => {return {...prev, ...curr}}, {}),
          'push'
        )
      } else {
        setQuery({},'replace')
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
      <Inpage>
        <InpageHeader>
          <InpageHeaderInner>
            <InpageTitle size="jumbo" variation="primary" withDeco>
              Custom Guide Builder
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
                {fullGuide ? "Full" : "Filtered"} Safetag Guide Content
              </InpageTitle>
              {isNoResults && <p>No Search Results</p>}
              <GuideSelector>
                {values(guide).filter(method => !method.filterDoesNotApply).map(method => {
                  return (
                    <FormGroup key={method.id}>
                      <FormGroupHeader>
                        <MethodHeading>Method: {method.title}</MethodHeading>
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
                          Read More
                        </MoreLink>
                        <FormCheckableGroup>
                          {method.activities[0] !== "" && (
                            <ActivitiesSelector>
                              <ActivitiesHeading>Activities</ActivitiesHeading>
                              <Button
                                variation="primary-plain"
                                title="Select all activities in this method"
                                onClick={() =>
                                  selectMultipleActivities(method.id, "all")
                                }
                              >
                                Select All
                              </Button>
                              <Button
                                variation="danger-plain"
                                title="Deselect all activities in this method"
                                onClick={() =>
                                  selectMultipleActivities(method.id, "none")
                                }
                              >
                                Select None
                              </Button>
                            </ActivitiesSelector>
                          )}
                          <ul>
                            {values(method.activities).map(activity => {
                              const fieldId = `checkbox-${method.id}-${activity.id}`
                              return (
                                <li key={fieldId}>
                                  <ActivityCheckable
                                    type="checkbox"
                                    id={fieldId}
                                    name={fieldId}
                                    checked={activity.checked}
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
                                  <div>{activity.summary?.excerpt}</div>
                                </li>
                              )
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
                Selected Safetag Guide Content
              </InpageTitle>
              <ExportButtons>
                <Button
                  size="xlarge"
                  variation="primary-raised-dark"
                  title="Export selected methods and activities as PDF"
                  onClick={async () => {
                    setCustomGuideLoader(true)
                    await prepareGuide(guide, 'custom-guide', fixedSections, false)
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
                    ? "Exporting selected..."
                    : "Export selected"}
                </Button>
                <Button
                  size="xlarge"
                  variation="base-plain"
                  title="Download full guide"
                  onClick={() => { 
                    window.open('/guides/Safetag_full_guide.pdf');
                  }}
                >
                  Download Full Guide
                </Button>
              </ExportButtons>
              {
                !activitiesInCustomGuide.length &&
                <GuideSelected>
                  <h3>No sections selected</h3>
                  <p>← Select activities from the panel to the left to build your custom guide</p>
                </GuideSelected>
              }
              {values(guide).map(method => {
                // Get selected activities from method, if any
                const selectedActivities = values(
                  pickBy(method.activities, a => a.checked)
                )

                // Bypass if method doesn't have any selected activities
                if (selectedActivities.length === 0) return

                return (
                  <GuideSelected key={method.id}>
                    <MethodHeading>Method: {method.title}</MethodHeading>
                    <p>{method.summary.excerpt}</p>
                    <ActivitiesHeading>Activities</ActivitiesHeading>
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
    </GlobalLayout>
  )
}

export default GuideBuilder

GuideBuilder.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
    pathname: PropTypes.string,
  })

}
