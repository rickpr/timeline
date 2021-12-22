const path = require('path')

exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }

  // Allow absolute imports
  actions.setWebpackConfig({
    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules']
    }
  })
}
