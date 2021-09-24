require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Safetag`,
    description: `Create custom Safetag guides for your needs`,
    author: `@developmentseed`,
    siteUrl: `https://safetag.org`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { resolve: "gatsby-plugin-styled-components" },
    { resolve: `gatsby-plugin-polished` },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `IBM Plex Sans:400,700`,
          `IBM Plex Mono:400,700`,
          `Space Mono:700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/locales`
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `fr`, `es`],
        redirect: false,
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://dev.safetag.org/`,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false
        },
      }
    },
    {
      resolve: 'gatsby-plugin-flexsearch',
      options: {
        languages: ['en'],
        type: 'MarkdownRemark',
        fields: [
          {
            name: 'title', resolver: 'frontmatter.title',
            indexed: true, store: true,
            attributes: { encode: 'balance', tokenize: 'forward', threshold: 6, depth: 3, },
          },
          {
            name: 'description', resolver: 'frontmatter.description',
            indexed: true, store: false,
            attributes: { encode: 'balance', tokenize: 'forward', threshold: 6, depth: 3, },
          },
          {
            name: 'summary', resolver: 'frontmatter.summary',
            indexed: true, store: false,
            attributes: { encode: 'balance', tokenize: 'forward', threshold: 6, depth: 3, },

          },
          {
            name: 'materials_needed', resolver: 'frontmatter.materials_needed',
            indexed: true, store: false,
            attributes: { encode: 'balance', tokenize: 'forward', threshold: 6, depth: 3, },
          },
          {
            name: 'overview', resolver: 'frontmatter.materials_needed',
            indexed: true, store: false,
            attributes: { encode: 'balance', tokenize: 'forward', threshold: 6, depth: 3, },
          },
          {
            name: 'walk_through', resolver: 'frontmatter.walk_through',
            indexed: true, store: false,
            attributes: { encode: 'balance', tokenize: 'forward', threshold: 6, depth: 3, },
          },
          {
            name: 'guiding_questions', resolver: 'frontmatter.guiding_questions',
            indexed: true, store: false,
            attributes: { encode: 'balance', tokenize: 'forward', threshold: 6, depth: 3, },
          },
          {
            name: 'outputs', resolver: 'frontmatter.outputs',
            indexed: true, store: false,
            attributes: { encode: 'balance', tokenize: 'forward', threshold: 6, depth: 3, },
          },
          {
            name: 'operational_security', resolver: 'frontmatter.operational_security',
            indexed: true, store: false,
            attributes: { encode: 'balance', tokenize: 'forward', threshold: 6, depth: 3, },
          },
          {
            name: 'purpose', resolver: 'frontmatter.purpose',
            indexed: true, store: false,
            attributes: { encode: 'balance', tokenize: 'forward', threshold: 6, depth: 3, },
          },
          {
            name: 'preparation', resolver: 'frontmatter.preparation',
            indexed: true, store: false,
            attributes: { encode: 'balance', tokenize: 'forward', threshold: 6, depth: 3, },
          },
          {
            name: 'url', resolver: 'fields.slug',
            indexed: false, store: true,
          },
          {
            name: 'type', resolver: 'fields.content_type',
            indexed: false, store: true
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-matomo`,
      options: {
        siteId: '1',
        matomoUrl: 'https://stats.openinternetproject.org',
        siteUrl: 'https://safetag.org'
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-sectionize`,
          `gatsby-remark-slug`,
          `gatsby-transformer-remark-frontmatter`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1024,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {fileAbsolutePath: {regex: "/posts/"}}
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "SAFETAG - RSS Feed",
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-use-query-params`,
  ],
}
