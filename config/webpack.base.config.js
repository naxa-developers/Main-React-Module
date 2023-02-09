/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');
const dotenv = require('dotenv').config();
const esbuild = require('esbuild');
// const colors = require('../src/constants/colors');

const APP_DIR = path.resolve(__dirname, '../src');
const { TITLE } = dotenv.parsed;
module.exports = (env = {}) => {
  const { NODE_ENV } = env;
  return merge([
    {
      entry: ['react-hot-loader/patch', APP_DIR],
      output: {
        publicPath: '/',
      },
      resolve: {
        fallback: {
          fs: false,
        },
        extensions: ['.js', '.jsx'],
        alias: {
          'react-dom': '@hot-loader/react-dom',
          '@src': path.resolve(__dirname, '../src'),
          '@Actions': path.resolve(__dirname, '..', 'src', 'actions'),
          '@Assets': path.resolve(__dirname, '..', 'src', 'assets'),
          '@Components': path.resolve(__dirname, '..', 'src', 'components'),
          '@Hooks': path.resolve(__dirname, '..', 'src', 'hooks'),
          '@Reducers': path.resolve(__dirname, '..', 'src', 'reducers'),
          '@Sagas': path.resolve(__dirname, '..', 'src', 'sagas'),
          '@Selectors': path.resolve(__dirname, '..', 'src', 'selectors'),
          '@Services': path.resolve(__dirname, '..', 'src', 'services'),
          '@Utils': path.resolve(__dirname, '..', 'src', 'utils'),
        },
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
          },

          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'esbuild-loader',
              options: {
                loader: 'jsx', // Remove this if you're not using JSX
                target: 'esnext', // Syntax to compile to (see options below for possible values)
                implementation: esbuild,
              },
            },
          },
          {
            test: /\.css$/,
            use: [
              NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'postcss-loader',
              {
                loader: 'esbuild-loader',
                options: {
                  loader: 'css',
                  minify: true,
                },
              },
            ],
          },
          {
            test: /\.s(a|c)ss$/,
            use: [
              NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  // additionalData:
                  //   `$primary50: ${colors[THEME].primary50}; ` +
                  //   `$primary100: ${colors[THEME].primary100}; ` +
                  //   `$primary200: ${colors[THEME].primary200}; ` +
                  //   `$primary300: ${colors[THEME].primary300}; ` +
                  //   `$primary400: ${colors[THEME].primary400}; ` +
                  //   `$primary500: ${colors[THEME].primary500}; ` +
                  //   `$primary600: ${colors[THEME].primary600}; ` +
                  //   `$primary700: ${colors[THEME].primary700}; ` +
                  //   `$primary800: ${colors[THEME].primary800}; ` +
                  //   `$primary900: ${colors[THEME].primary900}; `,
                },
              },
            ],
          },

          {
            test: /\.(png|jpg|gif)$/,
            type: 'asset/resource',
          },
          {
            test: /\.woff(2)?(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
            type: 'asset/resource',
          },
          {
            test: /\.(ttf|eot)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
            type: 'asset/resource',
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: '@svgr/webpack',
              },
              {
                loader: 'file-loader',
              },
            ],
            type: 'javascript/auto',
            issuer: {
              and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
            },
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: TITLE,
          template: 'public/index.html',
          filename: 'index.html',
          inject: true,
          // favicon: `src/assets/image/${PROJECT}/favicon.png`,
          minify: {
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            minifyCSS: true,
            minifyURLs: true,
            minifyJS: true,
            removeComments: true,
            removeRedundantAttributes: true,
          },
        }),
        // new ESLintPlugin({
        //   extensions: [`js`, `jsx`],
        //   exclude: [`/node_modules/`],
        //   failOnWarning: true,
        //   failOnError: true,
        //   fix: true,
        // }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
          'process.env': JSON.stringify(dotenv.parsed),
        }),
      ],
      devtool: 'eval-source-map',
      devServer: {
        allowedHosts: 'all',
      },
    },
  ]);
};
