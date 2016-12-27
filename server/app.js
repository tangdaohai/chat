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
 * koa-favicon    : https://github.com/koajs/favicon
 * koa-session    : https://github.com/koajs/session
 * koa-convert    : https://github.com/koajs/convert
 */

const http = require("http");

//引用插件
const Koa = require("koa"),
    app = new Koa(),
    co = require("co"),
    bodyParser = require("koa-bodyparser"),
    views = require("koa-views"),
    router = require("koa-router")(),
    logger = require("koa-logger"),
    staticFiles = require("koa-static"),
    favicon = require("koa-favicon"),
    session = require('koa-session'),
    convert = require("koa-convert");

/**
 * Github 插件地址
 * webpack        : https://github.com/webpack/webpack
 * koa-webpack-middleware : https://github.com/leecade/koa-webpack-middleware
 * koa-webpack-hot-middleware : https://github.com/dayAlone/koa-webpack-hot-middleware
 */
/** webpack configure. start */
//开发模式下使用 webpack 热更新模块打包
if(process.env.NODE_ENV === "development"){
    const webpack = require('webpack'),
        config = require('../webpack/webpack.dev.config'),    //引入配置文件
        compile = webpack(config.basicWebPack);
    //webpack 依赖插件
    require("babel-polyfill");

    //打包
    app.use( convert(require("koa-webpack-dev-middleware")(compile, config.dev)) );
    //热替换
    app.use( convert(require("koa-webpack-hot-middleware")(compile, config.hot)) );
}
/** webpack configure. end */

var CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    maxAge: 86400000, /** (number) maxAge in ms (default is 1 days) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
};

app.keys = ['my chat'];
const Session = session(CONFIG, app);
app.use( convert(Session) );

app.use( convert(favicon(__dirname + '/favicon.ico')) );
//配置 body parser
app.use(bodyParser( configure.bodyparser ));
//静态资源
app.use( convert(staticFiles(__dirname + "/public")) );
//配置 ejs 模板引擎
app.use(views(__dirname + "/public",{ extension: 'ejs' }));
//配置 logger
app.use( convert(logger()) );

app.use((ctx, next) => {
    //首页暂时重定向到 /react
    if(ctx.path === "/"){
        return ctx.redirect("/react");
    }
    return next();
});

//引用路由文件
const index = require("./routes/index");
//配置路由
router.use("/react", index.routes(), index.allowedMethods());
app.use(router.routes());
app.use(router.allowedMethods());

app.use(co.wrap(function *(ctx){
    console.log("已进入404的方法");
    if(ctx.status === 404){
        ctx.body= "<h1>404</h1>";
        ctx.status = 404;
    }
}));

app.use(co.wrap(function *(ctx){
    console.log("已进入500的方法");
    if(ctx.status === 500){
        console.log(`here, 500... ${ctx.path}`);
        ctx.body= "<h1>服务器出错了……</h1>";
        ctx.status = 500;
    }
}));

/** mongoDB **/
const mongoose = require('mongoose');
connect()
    .on("error", console.error)
    .on('disconnected', connect)
    .once("open", () => {
        console.log("mongo db 连接成功.");
    });

function connect(){
    return mongoose.connect(configure.mongoURI, configure.mongoOption).connection;
}
/** end */

/**
 * Create HTTP server.
 */
const server = http.createServer(app.callback());

/** socket.io, 开启 socket 监听服务 **/
const io = require("socket.io")(server);
io.use(function(socket, next) {
    return next();
});
require("./socket.io/Socket")(io);
/**
 * end
 */


module.exports = server;
