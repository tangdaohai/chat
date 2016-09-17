/**
 * Created by Jerry on 16/9/4.
 */
import Socket from "socket.io-client";

const io = getSocket();

export default io;

/**
 * 建立 socket 连接. 返回连接后的对象
 * @returns {*}
 */
function getSocket(){

    const io = Socket('http://localhost:3003/chat',{
        reconnection : true,
        reconnectionDelay : 1000
    });

    io.on("connect", () => {
        console.log("socket. 连接成功");
    });

    require("./socketMonitor").montiort(io);

    return io;
}