/**
 * Created by Jerry on 16/8/4.
 */

"use strict";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var basicWebPack = require("./webpack.base.config");

//热加载
basicWebPack.entry.react.unshift("webpack-hot-middleware/client");
basicWebPack.plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'   //注意一个单引号一个双引号……
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
        filename: 'react.html',
        template: '../server/react.html',
        inject: true
    })
];

//webpack dev middleware 配置
const dev = {
        quiet: false,
        noInfo: !0,
        historyApiFallback: false,
        publicPath: basicWebPack.output.publicPath,
        filename: basicWebPack.output.filename,
        stats: {
            colors: true,
            chunks: false
        },
        headers: {"X-Custom-Header": "yes"}
    };
//webpack hot middleware 配置
const hot = {};

module.exports = {basicWebPack, dev, hot};