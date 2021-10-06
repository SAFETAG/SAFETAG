import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';

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
  useTranslation('site', { useSuspense: false });
  let approaches = data.approaches.edges
  const approachNodes = {}
  approaches.forEach(
    approach =>
      (approachNodes[approach.node.frontmatter.title] = {
        title: approach.node.frontmatter.title,
        icon: `/img/${approach.node.fields.slug.replace('/approaches/', '')}_icon.png`
      })
  )

  return (
    <GlobalLayout>
      <SEO title="Activities" />
      <Inpage>
        <InpageHeader>
          <InpageInnerColumns columnLayout="3:1">
            <MethodHeadline>
              <InpageTitle size="jumbo" variation="primary" withDeco>
                <Trans i18nKey="activities-title">Activities</Trans>
              </InpageTitle>
            </MethodHeadline>
          </InpageInnerColumns>
        </InpageHeader>
        <InpageBody>
          <InpageBodyInner>
            <CardList>
              {data.activities.edges.map(
                ({ node }, index) =>
                  node.fields != null &&
                  node.frontmatter.summary && (
                    <li key={index}>
                      <ActivityCard
                        variation="secondary"
                        border="primary"
                        as={Link}
                        to={node.fields.slug}
                        withHover
                      >
                        <CardHeading variation="primary">
                          {node.frontmatter.approaches.map((approach, index) => (
                            <img key={`approach-${index}`} src={approachNodes[approach].icon} />
                          ))}
                          { node.frontmatter.title }
                        </CardHeading>
                        <p>
                          { node.fields.frontmattermd.summary.excerpt }
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
    activities: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/activities//"}, fields: {langKey: {eq: $language}}},
      sort: { fields: [frontmatter___position, frontmatter___title],  },
    ) {
      edges {
        node {
          fields {
            slug
            frontmattermd {
              summary { excerpt }
            }
          }
          frontmatter {
            title
            summary
            position
            approaches
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
