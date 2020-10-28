import keyBy from "lodash.keyby"
import { useStaticQuery, graphql } from "gatsby"

/**
 * The following hook will query all methods and activities and create an object
 * where each property is a method with its activities included.
 */
export default function useAllGuideData() {
  const data = useStaticQuery(
    graphql`
      query {
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
        activities: allFile(
          filter: {
            relativeDirectory: { eq: "activities" }
            internal: { mediaType: { eq: "text/markdown" } }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              childMarkdownRemark {
                frontmatter {
                  title
                  summary
                  orgSize: organization_size_under
                  approaches
                  remoteOptions: remote_options
                }
                fields {
                  frontmattermd {
                    summary {
                      excerpt
                      rawMarkdownBody
                    }
                    overview {
                      rawMarkdownBody
                    }
                    materials_needed {
                      rawMarkdownBody
                    }
                    considerations {
                      rawMarkdownBody
                    }
                    walk_through {
                      rawMarkdownBody
                    }
                    recommendations {
                      rawMarkdownBody
                    }
                  }
                }
              }
            }
          }
        }
        methods: allFile(
          filter: {
            relativeDirectory: { eq: "methods" }
            internal: { mediaType: { eq: "text/markdown" } }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              childMarkdownRemark {
                frontmatter {
                  title
                  activities
                  references
                }
                fields {
                  frontmattermd {
                    summary {
                      excerpt(pruneLength: 280)
                      rawMarkdownBody
                    }
                    purpose {
                      rawMarkdownBody
                    }
                    the_flow_of_information {
                      rawMarkdownBody
                    }
                    guiding_questions {
                      rawMarkdownBody
                    }
                    outputs {
                      rawMarkdownBody
                    }
                    operational_security {
                      rawMarkdownBody
                    }
                    preparation {
                      rawMarkdownBody
                    }
                  }
                }
              }
            }
          }
        }
        references: allFile(
          filter: {
            relativeDirectory: { eq: "references" }
            internal: { mediaType: { eq: "text/markdown" } }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              childMarkdownRemark {
                frontmatter {
                  title
                }
                rawMarkdownBody
              }
            }
          }
        }
      }
    `
  )

  const activities = data.activities.edges.map(({ node }) => ({
    id: node.childMarkdownRemark.frontmatter.title,
    sections: node.childMarkdownRemark.fields.frontmattermd,
    slug: node.fields.slug,
    ...node.childMarkdownRemark.frontmatter,
    ...node.childMarkdownRemark.fields.frontmattermd,
  }))

  const methods = data.methods.edges.map(({ node }) => ({
    id: node.childMarkdownRemark.frontmatter.title,
    sections: node.childMarkdownRemark.fields.frontmattermd,
    slug: node.fields.slug,
    ...node.childMarkdownRemark.frontmatter,
    ...node.childMarkdownRemark.fields.frontmattermd,
  }))

  const references = data.references.edges.map(({ node }) => ({
    id: node.childMarkdownRemark.frontmatter.title,
    rawMarkdownBody: node.childMarkdownRemark.rawMarkdownBody,
  }))

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
        }
      }),
      "id"
    ),
    references,
    activities,
    fixedSections,
  }
}