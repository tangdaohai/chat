/**
 * Created by Jerry on 16/8/4.
 */

"use strict";

var webpack = require('webpack');
var path = require('path');
var basicWebPack = require("./webpack.base.config");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//修改环境变量为线上模式
process.env.NODE_ENV = "production";

basicWebPack.output = {
    path: "./server/public",
    filename: "js/[name].[chunkhash].js",
    chunkFilename: 'js/[id].[chunkhash].js',
    publicPath: "/"
};

basicWebPack.plugins =  [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"' //注意一个单引号一个双引号……
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        sourceMap: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),

    new ExtractTextPlugin('css/[name].[contenthash].css'),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
        filename: 'react.html',
        template: '../server/react.html',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    }),

    // new webpack.NoErrorsPlugin(),

    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module, count) {
            // any required modules inside node_modules are extracted to vendor
            return (
                module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(
                    path.join(__dirname, '../node_modules')
                ) === 0
            )
        }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        chunks: ['vendor']
    })
];

module.exports = basicWebPack;