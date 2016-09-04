/**
 * Created by Jerry on 16/9/4.
 */
import Socket from "socket.io-client";

export default function SocketService(){

    const io = Socket('http://localhost:3003/chat',{
        reconnection : !0,
        reconnectionDelay : 1000
    });

    io.on("connect", (data) => {
        console.log(data);
    });

    io.on("get", (data) => {
        console.log(data);
    });

    io.emit("send", "服务器端发送测试");
}
