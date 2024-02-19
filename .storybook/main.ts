import type { StorybookConfig } from '@storybook/react-webpack5'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import type { RuleSetRule } from 'webpack'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [{
          test: /\.s?css$/,
          sideEffects: true,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: { import: false }
            }
          ]
        }]
      }
    }
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: { useSWC: true },
    }
  },
  docs: { autodocs: 'tag' },
  webpackFinal: async config => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    const rule = config.module.rules.find((rule) => JSON.stringify(rule).includes('/swc-loader/')) as RuleSetRule
    rule.exclude = [/node_modules\/(?!(gatsby|gatsby-script)\/)/]
    return config
  }
}
export default config
