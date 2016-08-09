/**
 * Created by Jerry on 16/8/9.
 */
const config = require("./webpack/webpack.middleware.config")["basic"];

config.output.path = "./server/public/js";

module.exports = config;