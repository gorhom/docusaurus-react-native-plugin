const webpack = require("webpack");
const path = require('path');

module.exports = function DocusaurusReactNativePlugin(_, { alias }) {
  return {
    name: "@gorhom/docusaurus-react-native-plugin",
    configureWebpack(config) {
      return {
        mergeStrategy: {
          'resolve.extensions': 'prepend',
          'module.rules': 'prepend',
        },
        entry: [
          'babel-polyfill',
          ...[config.entry.main ? config.entry.main : config.entry],
        ],
        plugins: [
          new webpack.DefinePlugin({
            process: { env: {} },
            __DEV__: process.env.NODE_ENV !== 'production' || true,
          }),
        ],
        module: {
          rules: [
            {
              test: /\.(js|jsx|ts|tsx)$/,
              include: [...Object.values(alias)],
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    'module:metro-react-native-babel-preset',
                    '@babel/preset-env',
                    '@babel/preset-react',
                    { plugins: ['@babel/plugin-proposal-class-properties'] },
                  ],
                  plugins: [
                    'react-native-web',
                    'react-native-reanimated/plugin',
                  ],
                },
              },
            },
          ],
        },
        resolve: {
          alias: {
            ...alias,
            'react-native': 'react-native-web',
            react: path.resolve(siteDir, 'node_modules/react'),
          },
          extensions: ['.web.js'],
        },
      };
    },
  }
};
