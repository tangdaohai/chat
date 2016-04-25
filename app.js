/**
 * Created by Jerry on 16/4/25.
 */

var Koa = require("koa");
var app = new Koa();

app.use(ctx => {
    ctx.body = "<h1>Hello Word</h1>";
});

app.listen(3003);