const { merge } = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
// const Visualizer = require('webpack-visualizer-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const { ESBuildMinifyPlugin } = require('esbuild-loader');

const baseConfig = require('./webpack.base.config');

const prodConfiguration = () =>
  merge([
    {
      output: {
        publicPath: '/',
        filename: '[name].[contenthash].js',
      },
      optimization: {
        minimizer: [
          new ESBuildMinifyPlugin({
            target: 'es2015', // Syntax to compile to (see options below for possible values)
            css: true,
            drop: ['console', 'debugger'],
          }),
          // new TerserPlugin({
          //   // sourceMap: true, // Must be set to true if using source-maps in production
          //   terserOptions: {
          //     compress: {
          //       drop_console: true,
          //     },
          //   },
          // }),
          // new OptimizeCssAssetsPlugin(),
        ],
        splitChunks: {
          chunks: 'all',
        },
        runtimeChunk: {
          name: (entrypoint) => `runtimechunk~${entrypoint.name}`,
        },
      },

      plugins: [
        new webpack.ids.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
        }),
        // new Visualizer({ filename: './statistics.html' }),
        new CompressionPlugin({
          algorithm: 'gzip',
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0,
        }),
      ],
      // devtool: '',
    },
  ]);

module.exports = (env) => merge(baseConfig(env), prodConfiguration(env));
