import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Search from "../components/search-site"

import GlobalLayout from "../components/layouts/global-layout"
import SEO from "../components/seo"

import {
  Inpage,
  InpageBody,
  InpageBodyInner,
} from "../styles/inpage"
import Heading from "../styles/type/heading"

function SearchPage({ location }) {
  const initialQuery = location.state.searchQuery ? location.state.searchQuery : ''
  return (
    <GlobalLayout>
      <SEO title="Safetag" />
      <Inpage>
        <InpageBody>
          <InpageBodyInner>
            <Heading id="recent-updates" size="jumbo" variation="primary" withDeco>
              Search SAFETAG
            </Heading>

            <Search initialQuery={initialQuery} />

          </InpageBodyInner>
        </InpageBody>
      </Inpage>
    </GlobalLayout>
  )
}

SearchPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export default SearchPage

export const query = graphql`
  query($language: String!) {
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
