const router = require("koa-router")();
const co = require("co");
const UserService = require("../dao/user/UserService");
const format = require("../configure/DataFormat");
const SocketIDStore = require("../socket.io/SocketIdStore");
const Publish = require("../util/PublishSubscribe");

router.post("/user/login", ctx => co(function* (){
    let user = ctx.request.body;
    const result = yield UserService.signIn({
        email: user.email,
        password: user.password
    });

    if(result) {
        let u = {
                _id: result._id.toString(),
                email : result.email,
                name : result.name,
                avatarType: result.avatarType || 0,
                // avatar: utility.md5(result.email)
        };
        SocketIDStore.add(u, user.socketId);
        Publish.emit("user/login", u);
        ctx.body = JSON.stringify(format.success(u));
    }else{
        ctx.body = JSON.stringify(format.fail("账号密码错误"));
    }
}));

module.exports = router;