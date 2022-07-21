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
        activities: allMarkdownRemark(
          filter: { fileAbsolutePath: {regex: "/activities//"} }
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
          filter: { fileAbsolutePath: {regex: "/methods//"} }
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
          filter: { fileAbsolutePath: {regex: "/references//"} }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
              rawMarkdownBody
            }
          }
        }
      }
    `
  )

  const activities = data.activities.edges.map(({ node }) => ({
    id: node.frontmatter.title,
    sections: node.frontmatter,
    slug: node.fields.slug,
    ...node.frontmatter,
  }))

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
