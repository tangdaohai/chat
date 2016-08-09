/**
 * Created by Jerry on 16/4/25.
 *
 * Github 插件地址
 * koa            : https://github.com/koajs/koa
 * co             : https://github.com/tj/co
 * koa-bodyparser : https://github.com/koajs/bodyparser
 * koa-views      : https://github.com/queckezz/koa-views
 * koa-router     : https://github.com/alexmingoia/koa-router/tree/master/
 * logger         : https://github.com/koajs/logger
 * koa-static     : https://github.com/koajs/static
 * koa-convert    : https://github.com/koajs/convert
 */

//引用插件
const Koa = require("koa"),
    app = new Koa(),
    co = require("co"),
    bodyParser = require("koa-bodyparser"),
    views = require("koa-views"),
    router = require("koa-router")(),
    logger = require("koa-logger"),
    staticFiles = require("koa-static"),
    convert = require("koa-convert");

/**
 * Github 插件地址
 * webpack        : https://github.com/webpack/webpack
 * koa-webpack-middleware : https://github.com/leecade/koa-webpack-middleware
 * koa-webpack-hot-middleware : https://github.com/dayAlone/koa-webpack-hot-middleware
 */
/** webpack configure. start */
//开发模式下使用 webpack 自动打包插件
if(configure.useWebpack){
    const webpack = require('webpack'),
        config = require('../webpack/webpack.middleware.config.js'),    //引入配置文件
        compile = webpack(config.basic);
    //webpack 依赖插件
    require("babel-polyfill");

    //打包
    app.use( convert(require("koa-webpack-dev-middleware")(compile, config.dev)) );
    //热替换
    app.use( convert(require("koa-webpack-hot-middleware")(compile, config.hot)) );
}
/** webpack configure. end */

//配置 body parser
app.use(bodyParser( configure.bodyparser ));
//配置 ejs 模板引擎
app.use(views(__dirname + "/public",{ extension: 'ejs' }));
//配置 logger
app.use( convert(logger()) );

//引用路由文件
const index = require("./routes/index");

//配置路由
router.use("/index", index.routes(), index.allowedMethods());
app.use(router.routes());
app.use(router.allowedMethods());

//静态资源
app.use( convert(staticFiles(__dirname + "/public")) );

app.use(co.wrap(function *(ctx){
    console.log("已进入404的方法");
    if(ctx.status === 404){
        console.log(`here, 404... ${ctx.path}`);
        ctx.throw(404);
    }
}));

app.use(co.wrap(function *(ctx){
    console.log("已进入500的方法");
    if(ctx.status === 500){
        console.log(`here, 500... ${ctx.path}`);
        ctx.throw(500);
    }
}));

module.exports = app;
