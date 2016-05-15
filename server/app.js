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

//引用插件
let Koa = require("koa"),
    app = new Koa(),
    co = require("co"),
    bodyparser = require("koa-bodyparser"),
    render = require("koa-ejs"),
    router = require("koa-router")(),
    logger = require("koa-logger"),
    convert = require("koa-convert"),
    path = require("path");

//引用路由文件
let index = require("./routes/index");

//配置 ejs 模板引擎 github : https://github.com/koajs/ejs
render(app, {
  root: path.join(__dirname, 'public'),
  layout: false,
  viewExt: "ejs",
  cache: false,
  debug: true,
  delimiter : "%"
});

app.use( convert(logger()) );
app.use(bodyparser( configure.bodyparser ));

//配置路由
// router.use("/index", index.routes());
router.get("/index", function *(ctx){
  console.log(ctx.path);
  // ctx.body = "<h1>index</h1>";
  yield ctx.render("index", ctx.query);
});
app.use(router.routes()).use(router.allowedMethods());

// app.use(co.wrap(function *(ctx, next) {
//     // ctx.body = "<h1>Hello Word!</h1>";
//     console.log(ctx.query);
//     yield ctx.render("index", {a : ctx.query.a});
// }));

app.use(co.wrap(function *(ctx, next){
  console.log("here, 404...");
  if(ctx.status === 404){
    ctx.body = "<h1>404 ...</h1>";
  }

}));

module.exports = app;
