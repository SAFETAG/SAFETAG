import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import styled from "styled-components"

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
import media from "../../styles/utils/media-queries"

const SectionHeadline = styled(InpageHeadline)`
  ${media.mediumUp`
    grid-column: span 2;
  `}
`

function SectionLayout({ data, location }) {
  const { t } = useTranslation('site', { useSuspense: false })
  const frontmatter = data.section.frontmatter

  // Get previous page path, if available
  let prevPath = location.state && location.state.prevPath || ""
  let prevPage = location.state && location.state.prevPage || ""

  return (
    <GlobalLayout>
      <SEO title={`Section: ` + frontmatter.title} />
      <Inpage>
        <InpageHeader>
          <InpageInnerColumns columnLayout="2:1">
            <SectionHeadline>
              <MoreLink
                direction="back"
                to={
                  prevPath.startsWith("/guide-builder")
                    ? prevPage
                    : "/#allSections"
                }
              >
                <Trans i18nKey="method-back">Back to</Trans> {prevPath ? t("guide builder") : t("all methods")}
              </MoreLink>
              <InpageTitle size="jumbo" variation="primary">
                {frontmatter.title ? frontmatter.title : ""}
              </InpageTitle>
            </SectionHeadline>
          </InpageInnerColumns>
        </InpageHeader>
        <InpageBody>
          <InpageInnerColumns columnLayout="2:1">
            <section
                dangerouslySetInnerHTML={{
                  __html: data.section.html,
                }}>
            </section>
            <section></section>
          </InpageInnerColumns>
        </InpageBody>
      </Inpage>
    </GlobalLayout>
  )
}

SectionLayout.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export default SectionLayout

export const query = graphql`
  query($slug: String!, $language: String!) {
    section: markdownRemark(fields: { slug: { eq: $slug }, langKey: {eq: $language} }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
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
