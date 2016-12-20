/**
 * Created by Jerry on 16/12/20.
 */
require('shelljs/global')
env.NODE_ENV = 'production';
var path = require("path");
var ora = require("ora");
var webpack = require('webpack');
var baseWebpack = require("../../webpack/webpack.prod.config");

console.log(
    '  Tip:\n' +
    '  Built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
);

var spinner = ora('building for production...\t');
spinner.start();

rm('-rf', path.resolve(__dirname, "../public/*.html"));
rm('-rf', path.resolve(__dirname, "../public/fonts"));
rm('-rf', path.resolve(__dirname, "../public/img"));
rm('-rf', path.resolve(__dirname, "../public/css"));
rm('-rf', path.resolve(__dirname, "../public/js"));

webpack(baseWebpack, (err, stats) => {
    spinner.stop();
    if (err) {
        throw err;
    }
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n');
});