/**
 * Created by Jerry on 16/9/3.
 */

module.exports = function Socket(io){
    console.log(io);
    io.of("/chat").on("connection", (socket) => {
        console.log(`有一个连接加入 ${socket}`);
        socket.on("send", (data) =>{
            console.log(data);
            socket.emit("get", "服务器端发送测试");
        })
    });
};