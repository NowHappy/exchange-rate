const path = require('path')
const fs = require('fs')

const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const AsyncChunkNames = require('webpack-async-chunk-names-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const LocalBackendUrl = 'http://localhost:10000'

// https://webpack.js.org/configuration/dev-server/
module.exports = {
    mode: 'development',
    devtool: 'eval',
    devServer:{
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true,
        hot: true,
        port: 7777,
        disableHostCheck: true, // THIS IS NOT RECOMMENDED
        historyApiFallback: true,
        host: 'localhost',
        allowedHosts: [
            'localhost'
        ],
        hotOnly: true,
        proxy: {
            '/api': LocalBackendUrl
        }
    },
    entry: {
        'demo' : './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        // filename 종류
        //    [name] : entry의 이름(tc-ssc)으로 사용
        //    [hash] : 빌드시 특정 hash 하나를 생성하여 사용
        filename: '[hash]/js/test.js',
        chunkFilename: '[hash]/js/[name].js'
    },
    module: {
      rules:[
          {
              test: /\.vue$/,
              loader : 'vue-loader'
          },
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
          {
              test: /\.json\$/,
              loader: 'json-loader',
          },
          {
              test: /\.(sa|sc|c)ss$/,
              use: [
                  'style-loader',
                  'css-loader'
              ]
          },
          {
              test: /\.sh$/,
              loader: 'raw-loader'
          }
      ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            vue: true,
            title: 'demo',
            favicon : './public/favicon.ico',
            template: './public/index.html'
        }),
        new AsyncChunkNames()
    ],
    optimization: {
        minimizer: [
          new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: {
              safe: true,
            }
          })
        ]
    },
    resolve:{
        extensions: ['.vue', '.js', '.css', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@Common': path.resolve(__dirname, '../src/common'),
            '@Services': path.resolve(__dirname, '../src/common/services'),
            '@Static': path.resolve(__dirname, '../static'),
            '@Components' : path.resolve(__dirname, '../src/components/common')
        }
    }
}
