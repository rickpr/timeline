import path from 'path'

import GatsbyAdapterNetlify from 'gatsby-adapter-netlify'

module.exports = {
  adapter: GatsbyAdapterNetlify({ excludeDatastoreFromEngineFunction: false }),
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
        background_color: '#F5F5F5',
        theme_color: '#F5F5F5',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-typescript'
  ]
}
