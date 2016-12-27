/**
 * Created by Jerry on 16/9/3.
 */

const co = require("co");
const UserService = require("../dao/user/UserService");
const format = require("../configure/DataFormat");
const utility = require("utility");

module.exports = function Socket(io){

    //在线的用户列表
    const  onLines = new Map();

    io.of("/chat").on("connection", (socket) => {
        console.log("新的 socket 连接成功.");
        
        //登陆
        socket.on("user/signIn", (user, callback) => {

            if(!user){
                return callback(format.fail("请输入账号密码"));
            }
            co(function* (){

                const result = yield UserService.signIn({
                    email: user.email,
                    password: user.password
                });

                if(result) {
                    return addUser(result, callback);
                }

                return callback(format.fail("sorry... 你输如的账号或密码有错误!"));
            });
        });

        //注册
        socket.on("user/signUp", (user, callback) => {
            co(function* (){
                //默认的头像类型
                user.avatarType = 0;
                const result = yield UserService.signUp(user);
                if(result){
                    return addUser(result, callback);
                }
                callback(format.fail("sorry... 注册失败!"));
            });
        });

        //修改名称
        socket.on("user/modifyMyName", (name, callback) => {
            if( !socket.user || !socket.user._id){
                callback(format.fail());
            }
            co(function* () {
                const result = yield UserService.modifyName(socket.user._id, name);
                if(result.nModified >= 1){
                    callback(format.success());
                }else{
                    callback(format.fail());
                }
            })
        });
        
        //修改密码
        socket.on("user/modifyPassword", (password, callback) => {
            if( !socket.user || !socket.user._id){
                callback(format.fail());
            }
            co(function* (){
                const result = yield  UserService.modifyPassword(socket.user._id, password);
                if(result.nModified >= 1){
                    callback(format.success());
                }else{
                    callback(format.fail());
                }
            });
        });
        
        //修改使用的头像类型
        socket.on("user/modifyAvatarType", (type, callback) =>{
            co(function* (){
                const result = yield  UserService.modifyAvatarType(socket.user._id, type);
                if(result.nModified >= 1){
                    callback(format.success());
                }else{
                    callback(format.fail());
                }
            });
        });

        //获取在线用户
        socket.on("user/getOnLine", (callback) => {

            callback(format.success(getOnLines(socket.user)));
        });
        
        //用户发送信息
        socket.on("send message", (data) => {
            let toSocket = onLines.get(data.to);
            if(toSocket){
                toSocket.emit("new message", format.success(data));
            }
        });

        //断开连接
        socket.on("disconnect", () => logout());

        /**
         * 去除本身
         * @returns {Array}
         */
        const getOnLines  = (currentUser = {_id: ""}) => {
            const users = [];
            for(let [key, value] of onLines.entries()){
                //去除当前用户
                if(key != currentUser._id){
                    users.push(value.user);
                }
            }
            return users;
        };

        /**
         * 有新用户加入
         * @param result
         * @param callback
         */
        function addUser(result, callback) {
            const user = {
                _id: result._id.toString(),
                email : result.email,
                name : result.name,
                avatarType: result.avatarType || 0,
                avatar: utility.md5(result.email)
            };
            callback(format.success(user));
            delete user.email;
            socket.user = user;
            //新用户加入
            onLines.set(user._id, socket);
            //发布上线通知
            socket.broadcast.emit("add user", format.success(socket.user));
        }

        /**
         * 用户退出
         */
        const logout = () => {
            console.log("socket 断开");
            //如果用户有登陆, 删除这个用户
            if(socket.user){
                console.log(socket.user.name + " 离开");
                onLines.delete(socket.user["_id"]);
                socket.broadcast.emit("user leave", format.success(socket.user));
            }
        };
    });
};