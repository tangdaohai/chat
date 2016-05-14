/**
 * Created by Jerry on 16/4/25.
 */

let Koa = require("koa"),
    app = new Koa(),
    co = require("co");

app.use(co.wrap(function *(ctx, next){
    console.time(`${ctx.method} ${ctx.url}`);
    yield next();
    console.timeEnd(`${ctx.method} ${ctx.url}`);
}));

app.use(co.wrap(function *(ctx) {
    ctx.body = "<h1>Hello Word---!</h1>";
}));

module.exports = app;