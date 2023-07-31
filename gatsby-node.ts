import { type CreateWebpackConfigArgs } from 'gatsby'
import path from 'path'

exports.onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  // Allow absolute imports
  actions.setWebpackConfig({
    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules']
    }
  })
}
