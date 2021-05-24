import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, withPrefix } from "gatsby"
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
import media from "../../styles/utils/media-queries"
import Card, { CardHeading, CardList } from "../../styles/card"

const PostHeadline = styled(InpageHeadline)`
  ${media.mediumUp`
    grid-column: span 2;
  `}
`

const PostIntro = styled.article`
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
const PostMeta = styled.aside``

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

function PostLayout({ data, location }) {
  const post = data.post
  const frontmatter = data.post.frontmatter
  // const frontmattermd = data.post.fields.frontmattermd

  // Get previous page path, if available
  let prevPath = location.state && location.state.prevPath || ""
  let prevPage = location.state && location.state.prevPage || ""

  // Fix images URL by adding app root url with prefix
  const sections = mapValues(frontmatter, section => {
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
      <SEO title={`Post: ` + frontmatter.title} />
      <Inpage>
        <InpageHeader>
          <InpageInnerColumns columnLayout="2:1">
            <PostHeadline>
              <MoreLink
                direction="back"
                to={
                  prevPath.startsWith("/guide-builder")
                    ? prevPage
                    : "/#allPosts"
                }
              >
                Back to {prevPath ? "guide builder" : "all post"}
              </MoreLink>
              <InpageTitle size="jumbo" variation="primary">
                {frontmatter.title}
              </InpageTitle>
            </PostHeadline>
            <PostIntro>
              <div className="blog-post-content"
                   dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </PostIntro>
            <PostMeta>
              <Dl boldDesc>
                <dt>Author</dt>
                <dd>{frontmatter.author}</dd>
              </Dl>
            </PostMeta>
          </InpageInnerColumns>
        </InpageHeader>
        <InpageBody>
        </InpageBody>
      </Inpage>
    </GlobalLayout>
  )
}

PostLayout.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export default PostLayout

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
        main_image
        main_image_caption
        draft
      }
    }
  }
`
