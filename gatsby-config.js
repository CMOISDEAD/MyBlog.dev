module.exports = {
  siteMetadata: {
    title: `My blog`,
    description: `you need this.`,
    author: `@CMOISDEAD`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://radiant-scrubland-81376.herokuapp.com",
        // apiURL: "http://localhost:1337",
        contentTypes: [
          // Lista de tipos de contenido que tenemos en Strapi, en singular
          "articulo"
        ],
        queryLimit: 1000,
      },
     },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
