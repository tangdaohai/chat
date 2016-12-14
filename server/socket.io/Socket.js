/**
 * Created by Jerry on 16/9/3.
 */

const co = require("co");
const UserService = require("../dao/user/UserService");
const format = require("../configure/DataFormat");

module.exports = function Socket(io){

    //在线的用户列表
    const  onLines = new Map();

    io.of("/chat").on("connection", (socket) => {
        console.log("新的 socket 连接成功.");

        //登陆
        socket.on("user/signIn", (user, callback) => {
            co(function* (){

                const result = yield UserService.signIn(user);

                if(result) {
                    console.log(delete result.password);
                    console.log(result);
                    callback(format.success(result));

                    delete result.email;
                    socket.user = result;
                    //新用户加入
                    onLines.set(result._id.toString(), socket);
                    //发布上线通知
                    socket.broadcast.emit("add user", format.success(result));

                    return;
                }

                return callback(format.fail("sorry... 你输如的账号或密码有错误!"));
            });
        });

        //注册
        socket.on("user/signUp", (user, callback) => {
            co(function* (){

                const result = yield UserService.signUp(user);

                if(result){
                    delete result.password;
                    callback(format.success(result));

                    delete result.email;
                    socket.user = result;
                    //新用户加入
                    onLines.set(result._id.toString(), socket);
                    //发布上线通知
                    socket.broadcast.emit("add user", format.success(result));

                    return;
                }

                callback(format.fail("sorry... 注册失败!"));
            });
        });

        //获取在线用户
        socket.on("user/getOnLine", (callback) => {

            callback(format.success(getOnLines(socket.user, onLines)));
        });
        
        //用户发送信息
        socket.on("send message", (data) => {
            let toSocket = onLines.get(data.to);
            if(toSocket){
                toSocket.emit("new message", format.success(data));
            }
        });
        
        socket.on("disconnect", () => logout());

        /**
         * 去除本身
         * @returns {Array}
         */
        const getOnLines  = (currentUser = {_id: ""}, onLines) => {
            const users = [];
            for(let [key, value] of onLines.entries()){
                //去除当前用户
                if(key != currentUser._id.toString()){
                    users.push(value.user);
                }
            }
            return users;
        };

        /**
         * 用户退出
         */
        const logout = () => {
            //如果用户有登陆, 删除这个用户
            if(socket.user){
                onLines.delete(socket.user["_id"]);
                socket.broadcast.emit("user leave", format.success(socket.user));
            }
        }
    });
};