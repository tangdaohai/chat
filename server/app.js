/**
 * Created by Jerry on 16/4/25.
 *
 * Github 插件地址
 * koa            : https://github.com/koajs/koa
 * co             : https://github.com/tj/co
 * koa-bodyparser : https://github.com/koajs/bodyparser
 * koa-es         : https://github.com/koajs/ejs
 * koa-router     : https://github.com/alexmingoia/koa-router
 * logger         : https://github.com/koajs/logger
 */

let Koa = require("koa"),
    app = new Koa(),
    co = require("co"),
    bodyparser = require("koa-bodyparser"),
    render = require("koa-ejs"),
    router = require("koa-router"),
    logger = require("koa-logger"),
    convert = require("koa-convert");


//配置 ejs 模板引擎 github : https://github.com/koajs/ejs
render(app, configure.koaEjs);

app.use( convert(logger()) );
app.use(bodyparser( configure.bodyparser ));

app.use(co.wrap(function *(ctx, next) {
    // ctx.body = "<h1>Hello Word!</h1>";
    console.log(ctx.query);
    // yield ctx.render("index", {a : ctx.query.a});
    yield next();
}));

app.use(co.wrap(function *(ctx, next){
  if(ctx.status === 404){
    ctx.body = "<h1>404 ...</h1>";
  }

}));

module.exports = app;
