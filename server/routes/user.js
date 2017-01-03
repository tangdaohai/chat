const router = require("koa-router")();
const co = require("co");
const utility = require("utility");

const UserService = require("../dao/user/UserService");
const format = require("../configure/DataFormat");
const SocketIDStore = require("../socket.io/SocketIdStore");
const Publish = require("../util/PublishSubscribe");

router.post("/user/login", ctx => co(function* (){
    let body = ctx.request.body;
    const result = yield UserService.signIn({
        email: body.email,
        password: body.password
    });

    if(result) {
        let user = formatUser(result);
        SocketIDStore.add(user, body.socketId);
        Publish.emit("user/login", user);
        ctx.body = JSON.stringify(format.success(user));
    }else{
        ctx.body = JSON.stringify(format.fail("账号密码错误"));
    }
}));

router.put("/user/register", ctx => co(function* (){
    const body = ctx.request.body;
    //默认的头像类型
    body.avatarType = 0;
    const result = yield UserService.signUp(body);
    if(result){
        let user = formatUser(result);
        SocketIDStore.add(user, body.socketId);
        //发布用户登录事件
        Publish.emit("user/login", user);
        ctx.body = JSON.stringify(format.success(user));
    }else{
        ctx.body = JSON.stringify(format.fail("sorry... 注册失败!"));
    }
}))

module.exports = router;

/**
 * 将从数据库查询出的 user 过滤, 
 * @REVIEST
 * 这快应该在 mongooese 处理
 * 
 * @param {Object} user
 */
formatUser = (user) => ({
    _id: user._id.toString(),
    email : user.email,
    name : user.name,
    avatarType: user.avatarType || 0,
    avatar: utility.md5(user.email)
});