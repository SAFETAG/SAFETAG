const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Serve files from `static` in development per https://github.com/gatsbyjs/gatsby/issues/13072
const express = require('express')
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static("static"))
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter implements Node {
      title: String
      summary: String
      activities: [String]
      approaches: [String]
      remote_options: [String]
      authors: [String]
      organization_size_under: Int
      operational_security: String
      skills_required: [String]
      time_required_minutes: String
      info_provided: [String]
      info_required: [String]
      method_icon: String
    }
  `
  createTypes(typeDefs)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  const { mediaType } = node.internal
  const contentType = node.relativeDirectory

  // Create slugs for activities, methods and references
  if ( mediaType === `text/markdown` && ["activities", "references"].includes(node.relativeDirectory) ) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: contentType,
      trailingSlash: false,
    })

    createNodeField({
      node,
      name: "slug",
      value: `/${contentType}${slug.substring(slug.lastIndexOf("/"))}`,
    })
  } else if (node.internal.type === `MarkdownRemark` && node.fileAbsolutePath &&
      (node.fileAbsolutePath.includes("methods") || node.fileAbsolutePath.includes("posts"))) {

    let basepath
    if (node.fileAbsolutePath.includes("posts")) {
      basepath = "posts"
    } else {
      basepath = "methods"
    }
    const slug = createFilePath({
      node,
      getNode,
      basePath: basepath + '/',
      trailingSlash: false,
    })

    createNodeField({
      node,
      name: "slug",
      value: `/${basepath}${slug.substring(slug.lastIndexOf("/"))}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for nodes to use in creating pages.
  const activities = await graphql(
    `
      query {
        allFile(
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
            }
          }
        }
      }
    `
  )
  // Handle errors
  if (activities.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each file.
  activities.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/layouts/activity-layout.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  const posts = await graphql(
    `
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___position],  },
          filter: {fileAbsolutePath: {regex: "/posts/"}}
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  if (posts.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each file.
  posts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/layouts/post-layout.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })


  const methods = await graphql(
    `
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___position],  },
          filter: {fileAbsolutePath: {regex: "/methods/"}}
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  // Handle errors
  if (methods.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each file.
  methods.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/layouts/method-layout.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
