/**
 * Created by Jerry on 16/9/6.
 */

const Format = require("../../configure/DataFormat");

module.exports = class UserService{

    /**
     * 根据邮箱密码查询用户
     * @param user
     * @returns {*}
     */
    signIn(user){
        user = user || {};
        const UserList = this._getUserList();

        const index = UserList.findIndex((val) => val.email === user.email && val.password === user.password);
        
        if(index > -1){
            let user = Object.assign({}, UserList[index]);
            delete user.password;
            return Format.success( user );
        }

        return Format.fail("账号或密码输入不匹配");
    }
    
    signUp(user){
        return Format.fail("注册失败……");
    }

    getOnlineUser(){

    }

    /**
     * 获取 user 的 mock 数据.
     * @private
     */
    _getUserList(){
        return require("../../mock-data/user.json");
    }
};
