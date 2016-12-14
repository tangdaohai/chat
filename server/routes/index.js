let router = require("koa-router")();

router.get("*", function (ctx){
  return ctx.render("index.html");
});

module.exports = router;
