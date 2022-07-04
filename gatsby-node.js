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
    type Frontmatter @infer {
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
    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter!
    }

  `
  createTypes(typeDefs)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark` && node.fileAbsolutePath &&
      (node.fileAbsolutePath.includes("/methods/") ||
       node.fileAbsolutePath.includes("/activities/") ||
       node.fileAbsolutePath.includes("/references/") ||
       node.fileAbsolutePath.includes("/approaches/") ||
       node.fileAbsolutePath.includes("/tools/") ||
       node.fileAbsolutePath.includes("/guide_sections/") ||
       node.fileAbsolutePath.includes("/posts/"))) {

    let basepath, ctype, langKey
    const fileNode = getNode(node.parent)
    if (fileNode.relativePath.split('/').length == 2) {
      langKey = "en"
    } else if (fileNode.relativePath.split('/').length == 4) {
      langKey = fileNode.relativePath.split('/')[0]
    } else {
      console.log("Filenode error: " + fileNode.relativePath)
      langKey = "en"
    }
    if (node.fileAbsolutePath.includes("/posts/")) {
      basepath = "posts"
      ctype = "blog post"
    } else if (node.fileAbsolutePath.includes("/activities/")){
      basepath = "activities"
      ctype = "activity"
    } else if (node.fileAbsolutePath.includes("/references/")){
      basepath = "references"
      ctype = "reference"
    } else if (node.fileAbsolutePath.includes("/approaches/")){
      basepath = "approaches"
      ctype = "approach"
    } else if (node.fileAbsolutePath.includes("/guide_sections/")){
      basepath = "sections"
      ctype = "section"
    } else if (node.fileAbsolutePath.includes("/tools/")){
      basepath = "tools"
      ctype = "tool"
    } else {
      basepath = "methods"
      ctype = "method"
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
    createNodeField({
      node,
      name: "content_type",
      value: ctype,
    })
    createNodeField({
      node,
      name: "langKey",
      value: langKey,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for nodes to use in creating pages.
  const activities = await graphql(
    `
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___position],  },
          filter: {fileAbsolutePath: {regex: "//activities//"}}
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
  activities.data.allMarkdownRemark.edges.forEach(({ node }) => {
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
          sort: { fields: [frontmatter___date],  },
          filter: {fileAbsolutePath: {regex: "/posts//"}}
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
          filter: {fileAbsolutePath: {regex: "/methods//"}}
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

  const sections = await graphql(
    `
      query {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/guide_sections//"}}
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
  if (sections.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each file.
  sections.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/layouts/section-layout.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  const tools = await graphql(
    `
      query {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/tools//"}}
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
  if (tools.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each file.
  tools.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/layouts/tool-layout.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

}
exports.onCreateWebpackConfig = ({ stage, loaders, actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        stream: require.resolve('stream-browserify'),
      },
    },
    plugins: [
      plugins.provide({
        process: 'process/browser'
      }),
      plugins.define({
        'process.env': JSON.stringify(process.env)
      }),
    ],
  })
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
