/**
 * Created by Jerry on 16/4/27.
 */


const gulp = require('gulp'),
      nodemon = require('gulp-nodemon');

/**
 * 使用 nodemon 启动方式
 */
gulp.task('start', function () {
    nodemon({
        script : "server/bin/www",      //启动文件
        args : ["dev"],                 //项目启动参数
        // nodeArgs : ["--es_staging", "--harmony"],   //node 启动参数 ["--use-strict", "--es_staging", "--harmony"]
        watch : ["server"],             //监视 server 目录
        ignore : ["server/public/**.*"],//排除 public 目录
        ext : "js",                     //监测 js 结尾的文件
        delay : 2 * 1000                //延迟2
    }).on("restart", (event) => {
        console.log(`更改文件 : \n \t${event.join("\n\t")}`);
    });
});