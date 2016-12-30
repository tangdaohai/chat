const router = require("koa-router")();
/**
 * /react 开头的所有的请求方式(get|post|update|delete等等), 所有的路径都会进入
 */
router.all(["/react", "/react/*"], ctx => {
  console.log("选择 React UI");

  //开发模式, webpack 会将 html 放入内存, 无法使用 koa-static 去渲染, 此处比较恶心
  if(process.env.NODE_ENV === "development"){
    return ctx.body = ctx.webpack.fileSystem.readFileSync('/react.html').toString();
  }
  //线上模式
  return ctx.render("react.html");
});

module.exports = router;
