module.exports = {
  siteMetadata: {
    title: `Photon's Blog`,
    description: `Just a simple blog...`,
    author: `Shabuktagin Photon Khan`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },
  ],
}
