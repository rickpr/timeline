import type { Options } from '@swc/core'
import path from 'path'
import type { StorybookConfig } from '@storybook/react-webpack5'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import type { RuleSetRule } from 'webpack'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
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
    },
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {}
              }
            ]
          },
          {
            test: /\.s[ac]ss$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: { importLoaders: 2 }
              },
              require.resolve('resolve-url-loader'),
              {
                loader: require.resolve('sass-loader'),
                options: {
                  // Want to add more Sass options? Read more here: https://webpack.js.org/loaders/sass-loader/#options
                  implementation: require.resolve('sass'),
                  sourceMap: true,
                  sassOptions: {}
                }
              }
            ]
          }
        ]
      }
    },
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {},
    }
  },
  docs: {},
  swc: (config: Options) => {
    return ({
      ...config,
      jsc: {
        ...config.jsc,
        baseUrl: path.resolve(__dirname),
        paths: {
          'queries/build_time': [path.resolve(__dirname, 'mocks', 'build_time.ts')],
          'queries/file': [path.resolve(__dirname, 'mocks', 'file.ts')],
        }
      }
    })
  },
  webpackFinal: async config => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    const rule = config.module.rules.find((rule) => JSON.stringify(rule).includes('/swc-loader/')) as RuleSetRule
    rule.exclude = [/node_modules\/(?!(gatsby|gatsby-script)\/)/]
    return config
  }
}
export default config
