let router = require("koa-router")();

router.get("/", function (ctx){
  console.log(ctx.path);
  return ctx.render("index");
});

module.exports = router;
