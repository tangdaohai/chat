/**
 * Created by Jerry on 16/8/4.
 */

"use strict";

var webpack = require('webpack');
var path = require('path');

//基础配置
module.exports = {
    entry: {
        react: [
            "../client/react/app.js"
        ]
    },
    output: {
        path: "/",
        filename: "js/[name].js",
        chunkFilename: 'js/[id].js',
        publicPath: "/"
    },
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        root: [
            path.resolve(__dirname, './components')
        ],
        fallback: [path.join(__dirname, '../node_modules')],
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
            },{
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: "img/[name].[hash:7].[ext]"
                }
            },{
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: "fonts/[name].[hash:7].[ext]"
                }
            }
        ]
    }
};