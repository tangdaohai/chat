let router = require("koa-router")();

router.get("/", function (ctx){
  console.log(ctx.path);
  // ctx.body = "<h1>index</h1>";
  ctx.render("index", ctx.query);
});

module.exports = router;
