import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import GlobalLayout from "../components/layouts/global-layout"
import SEO from "../components/seo"

import {
  Inpage,
  InpageBody,
  InpageBodyInner,
} from "../styles/inpage"
import Heading from "../styles/type/heading"

function PostsPage({ data }) {

  return (
    <GlobalLayout>
      <SEO title="Safetag" />
      <Inpage>

        <InpageBody>
          <InpageBodyInner>
            <Heading id="recent-updates" size="jumbo" variation="primary" withDeco>
              All posts
            </Heading>
            <ul>
              {data.allMarkdownRemark.edges.map(
                ({ node }, index) => (
                    <li key={index}>
                      <Link to={node.fields.slug}>{node.frontmatter.title}</Link> &mdash; {node.frontmatter.date}
                    </li>
                  )
              )}
            </ul>
          </InpageBodyInner>
        </InpageBody>

      </Inpage>
    </GlobalLayout>
  )
}

PostsPage.propTypes = {
  data: PropTypes.array,
}

export default PostsPage

/*
      filter: {
        relativeDirectory: { eq: "methods" }
        internal: { mediaType: { eq: "text/markdown" } }
      }
*/

export const query = graphql`
  query($language: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date],  order: DESC },
      filter: {fileAbsolutePath: {regex: "/posts/"}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
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
