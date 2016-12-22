/**
 * Created by Jerry on 16/8/4.
 */

"use strict";

var webpack = require('webpack');
var path = require('path');
var basicWebPack = require("./webpack.base.config");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CompressionWebpackPlugin = require('compression-webpack-plugin');

//修改环境变量为线上模式
process.env.NODE_ENV = "production";

basicWebPack.output = {
    path: "./server/public",
    filename: "js/[name].[chunkhash].js",
    chunkFilename: 'js/[id].[chunkhash].js',
    publicPath: "/"
};

//使用 css 提取
basicWebPack.module.loaders.unshift({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader")
});

basicWebPack.plugins =  [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"' //注意一个单引号一个双引号……
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        comments: false,        //去掉注释
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),

    new ExtractTextPlugin('[name].[contenthash].css'),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
        filename: 'react.html',
        template: '../client/react.html',
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
    }),
    new CompressionWebpackPlugin({ //gzip 压缩
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
            '\\.(js|css)$'
        ),
        threshold: 10240,
        minRatio: 0.8
    })
];

module.exports = basicWebPack;