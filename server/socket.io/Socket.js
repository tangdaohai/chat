/**
 * Created by Jerry on 16/9/3.
 */

const UserService = require("../service/user/UserService");
const userService = new UserService();

module.exports = function Socket(io){
    io.of("/chat").on("connection", (socket) => {
        console.log(`有一个连接加入 ${socket}`);
        socket.on("send", (data) =>{
            console.log(data);
            socket.emit("get", "服务器端发送测试");
        });
        
        socket.on("user/signIn", (user, callback) => {
            callback(userService.signIn(user));
        });

        socket.on("user/signUp", (user, callback) => {
            callback(userService.signUp(user));
        });
    });
};