module.exports = {
  "siteMetadata": {
    "title": "My Blog",
    "description": "first blog built with the help of gatsby",
  },
  "plugins": [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-react-helmet"
  ]

}