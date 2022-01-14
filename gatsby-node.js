const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  // Allow absolute imports
  actions.setWebpackConfig({
    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules']
    }
  })
}
