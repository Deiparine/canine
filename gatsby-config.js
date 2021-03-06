require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Colorado Canine Orthopedics`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://webriq-gatsby-cms-starter-template-sanity.webriq.me/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-use-query-params`,
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allSanityPost } }) => {
    //           return allSanityPost.edges.map(edge => {
    //             return Object.assign({}, edge.node, {
    //               title: edge.node.title,
    //               description: edge.node.excerpt,
    //               date: edge.node.publishedAt,
    //               url: site.siteMetadata.siteUrl + "/" + edge.node.slug.current,
    //               guid:
    //                 site.siteMetadata.siteUrl + "/" + edge.node.slug.current,
    //               custom_elements: [{ "content:encoded": edge.node.body }],
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allSanityPost{
    //               edges {
    //                 node {
    //                   id
    //                   title
    //                   publishedAt
    //                   excerpt
    //                   slug {
    //                     current
    //                   }
    //                   body
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: "/rss.xml",
    //         title: "Gatsby + Sanity CMS",
    //       },
    //     ],
    //   },
    // },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "3elb76f4",
        dataset: "production",
        // a token with read permissions is required
        // if you have a private dataset
        token:
          "skcCSqCyTNMxFjF3OPd3plrtl2DI4nYDdTZhJSg0C1uxrCd0qlteVmnhvoisA2qunBcR1bWe8fJccNuOQPEhqcQsVjQILxxzvqFTRuINJU3xmE2A7UxBR1nhboi5EZ13IdNhpjJIgogFnNCYfa1hgaj5zNvUshvLl2bvBnrzDMZNSyE06nBA",
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sanity CMS Template`,
        short_name: `sanitytemplate`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
  ],
}
