/**
 * Created by Jerry on 16/5/14.
 * 配置信息
 */
module.exports = model => {

  let conf = require(`./${model}`);
  if(!conf){
    console.info(`warning! ${model} 未找到这个配置,默认使用 dev 配置`);
    conf = require("./dev");
  }

  //bodyparser 配置参数
  conf.bodyparser = {
    encode : "utf-8",
    formLimit : "1MB",
    jsonLimit : "1.5MB"
  };

  return conf;
};
