import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
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
import Dl from "../../styles/type/lists"
import media from "../../styles/utils/media-queries"

const PostHeadline = styled(InpageHeadline)`
  ${media.mediumUp`
    grid-column: span 2;
  `}
`

const PostBody = styled.article`
  display: flex;
  flex-flow: column nowrap;
  p > img {
    display: block;
    margin: 1rem auto;
    max-width: 100%;
  }
`

const PostMeta = styled.aside``

function PostLayout({ data, location }) {
  const post = data.post
  const frontmatter = data.post.frontmatter
  // const frontmattermd = data.post.fields.frontmattermd

  // Get previous page path, if available
  let prevPath = location.state && location.state.prevPath || ""
  let prevPage = location.state && location.state.prevPage || ""

  // Fix images URL by adding app root url with prefix
  /*
  const sections = mapValues(frontmatter, section => {
    if (section && section.html) {
      return section.html.replace(
        /<img src="\/img/g,
        `<img src="${withPrefix("/img")}`
      )
    }
    return section
  })
  */

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
                    : "/posts/"
                }
              >
                Back to {prevPath ? "the home page" : "the blog index"}
              </MoreLink>
              <InpageTitle size="jumbo" variation="primary">
                {frontmatter.title}
              </InpageTitle>
            </PostHeadline>
            <PostBody>
              <div className="blog-post-content"
                   dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </PostBody>
            <PostMeta>
              <Dl boldDesc>
                <dt>Author</dt>
                <dd>{frontmatter.author}</dd>
              </Dl>
              <Dl>
                <dt>Tags</dt>
                {frontmatter.tags.map(tag => (
                  <dd key={tag}>{tag}</dd>
                ))}
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
        tags
        main_image
        main_image_caption
        draft
      }
    }
  }
`
