let router = require("koa-router")();

router.get("*", function (ctx){
  console.log("选择 React UI");
  return ctx.render("react.html");
});

module.exports = router;
