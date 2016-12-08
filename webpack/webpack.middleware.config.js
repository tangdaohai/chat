/**
 * Created by Jerry on 16/8/4.
 */

"use strict";

var webpack = require('webpack');
var path = require('path');

//基础配置
const basic = {
    entry: {
        index: [
            "webpack-hot-middleware/client",
            "../client/react/Index.js"
        ]
    },
    output: {
        path: __dirname + "/js",
        filename: "[name].js",
        chunkFilename: '[id].chunk.js',
        publicPath: "/js/"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('shared.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    debug: true,
    devtool: 'inline-source-map',
    resolve: {
        root: [
            path.resolve(__dirname, './components')
        ],
        extensions: ['', '.js', '.json', '.jsx']
    },
    // Expose __dirname to allow automatically setting basename.
    context: __dirname,
    node: {
        __dirname: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query : {
                    "presets": ["react", "es2015", "stage-0"],
                    "plugins": ["transform-decorators-legacy"],
                    "env": {
                        "development": {
                            "presets": ["react-hmre"]
                        }
                    }
                },
                exclude: /node_modules/
            },{
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    }
};

//webpack dev middleware 配置
const dev = {
        quiet: false,
        noInfo: !0,
        historyApiFallback: false,
        publicPath: basic.output.publicPath,
        filename: basic.output.filename,
        stats: {colors: true},
        headers: {"X-Custom-Header": "yes"}
    };
//webpack hot middleware 配置
const hot = {};

module.exports = {basic, dev, hot};