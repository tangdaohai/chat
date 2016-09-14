/**
 * Created by Jerry on 16/9/3.
 */

const co = require("co");
const UserService = require("../dao/user/UserService");
const format = require("../configure/DataFormat");

module.exports = function Socket(io){

    const  onLines = new Map();

    io.of("/chat").on("connection", (socket) => {
        console.log("新的 socket 连接成功.");

        //登陆
        socket.on("user/signIn", (user, callback) => {
            co(function* (){

                const result = yield UserService.signIn(user);

                if(result) {
                    result.password = "";
                    //新用户加入
                    onLines.set(result.email, { socket, user : result});
                    return callback(format.success(result));
                }

                return callback(format.fail("sorry... 你输如的账号或密码有错误!"));
            });
        });

        //注册
        socket.on("user/signUp", (user, callback) => {
            co(function* (){

                const result = yield UserService.signUp(user);

                if(result){
                    result.password = "";
                    return callback(format.success(result));
                }

                callback(format.fail("sorry... 注册失败!"));
            });
        });

        //获取在线用户
        socket.on("user/getOnLine", (callback) => {
            const users = [];
            for(let [key, value] of onLines.entries()){
                //去除本身
                users.push(value.user);
            }

            callback(format.success(users));
        });
    });
};