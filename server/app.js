/**
 * Created by Jerry on 16/4/25.
 *
 * Github 插件地址
 * koa            : https://github.com/koajs/koa
 * co             : https://github.com/tj/co
 * koa-bodyparser : https://github.com/koajs/bodyparser
 * koa-views      : https://github.com/queckezz/koa-views
 * koa-router     :https://github.com/alexmingoia/koa-router/tree/master/
 * logger         : https://github.com/koajs/logger
 */

//引用插件
let Koa = require("koa"),
    app = new Koa(),
    co = require("co"),
    bodyParser = require("koa-bodyparser"),
    views = require("koa-views"),
    router = require("koa-router")(),
    logger = require("koa-logger"),
    convert = require("koa-convert");

//引用路由文件
let index = require("./routes/index");

//配置 ejs 模板引擎 github : https://github.com/queckezz/koa-views
app.use(views(__dirname + "/public",{ extension: 'ejs' }));

app.use( convert(logger()) );
app.use(bodyParser( configure.bodyparser ));

//配置路由
router.use("/index", index.routes(), index.allowedMethods());
app.use(router.routes());
app.use(router.allowedMethods());

app.use(co.wrap(function *(ctx, next){
  console.log("here, 404...");
  if(ctx.status === 404){
    ctx.body = "<h1>404 ...</h1>";
  }

}));

app.use(co.wrap(function *(ctx, next){
    console.log("here, 404...");
    if(ctx.status === 500){
        ctx.body = "<h1>500 ...</h1>";
    }

}));

module.exports = app;
