/**
 * Created by Jerry on 16/8/4.
 */

var webpack = require('webpack');
var path = require('path');

//基础配置
const basic = {
    entry: [
        "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true",
        "./components/Root.js"
    ],
    output: {
        path: __dirname,
        publicPath: "/js",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    debug: true,
    devtool: '#source-map',
    resolve: {
        root: [
            path.resolve(__dirname, './components')
        ],
        extensions: ['', '.js', '.json', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};

//webpack dev middleware 配置
const dev = {
        quiet: false,
        noInfo: false,
        historyApiFallback: false,
        publicPath: basic.output.publicPath,
        filename: basic.output.filename,
        stats: {colors: true},
        headers: {"X-Custom-Header": "yes"}
    };
//webpack hot middleware 配置
const hot = {};

module.exports = {
    basic : basic,
    dev : dev,
    hot : hot
};