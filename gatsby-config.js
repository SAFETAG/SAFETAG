module.exports = {
  siteMetadata: {
    title: `Safetag`,
    description: `Create custom Safetag guides for your needs`,
    author: `@developmentseed`,
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
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-use-query-params`,
  ],
}
