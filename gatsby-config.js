const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Adalida and Ricardo',
    description: 'Our blog front-end',
    authors: ['@adalidabaca', '@rickpr']
  },
  plugins: [
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Adalida and Ricardo Page',
        short_name: 'timeline',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    // In your gatsby-config.js
  ]
}
