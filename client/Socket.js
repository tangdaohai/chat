/**
 * Created by Jerry on 16/9/4.
 */
import Socket from "socket.io-client";

export default getSocket();

/**
 * 建立 socket 连接. 返回连接后的对象
 * @returns {*}
 */
function getSocket(){

    const io = Socket('http://localhost:3003/chat',{
        reconnection : !0,
        reconnectionDelay : 1000
    });

    io.on("connect", (data) => {
        console.log(data);
    });

    // io.on("get", (data) => {
    //     console.log(data);
    // });
    //
    // io.emit("login", {email : "1@qq.com", password : "123456"}, (user) =>{
    //     console.log(user);
    // });
    
    return io;
}