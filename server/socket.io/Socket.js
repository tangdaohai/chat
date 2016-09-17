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
                    delete result.password;
                    socket.user = result;
                    //新用户加入
                    onLines.set(result["_id"], { socket, user : result});
                    //发布上线通知
                    socket.broadcast.emit("new user", { newUser : result});
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

            callback(format.success(getOnLines()));
        });

        /**
         * 去除本身
         * @returns {Array}
         */
        const getOnLines  = () => {
            const users = [];
            for(let [key, value] of onLines.entries()){
                if(key != value["_id"]){
                    //去除本身
                    users.push(value.user);
                }
            }
            return users;
        };

        /**
         * 用户退出
         */
        const logout = () => {
            onLines.delete(socket.user["_id"]);
            socket.broadcast.emit("user logout", { user : socket.user});
        }
    });
};