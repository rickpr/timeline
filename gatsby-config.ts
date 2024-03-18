import path from 'path'

module.exports = {
  siteMetadata: {
    title: 'Adalida',
    description: 'My portfolio',
    authors: ['@adalidabaca', '@rickpr']
  },
  plugins: [
    'gatsby-plugin-preload-fonts',
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
        name: 'Adalida Page',
        short_name: 'timeline',
        start_url: '/',
        background_color: '#3E4242',
        theme_color: '#3E4242',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-typescript'
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    // In your gatsby-config.js
  ]
}
