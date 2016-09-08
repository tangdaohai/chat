/**
 * Created by Jerry on 16/9/6.
 */

const Format = require("../DataFormat");

module.exports = class UserService{

    /**
     * 根据邮箱密码查询用户
     * @param user
     * @returns {*}
     */
    login(user = {}){
        const UserList = this._getUserList();

        const index = UserList.findIndex((val) => val.email === user.email && val.password === user.password);
        
        if(index > -1){
            return Format.success(UserList[index]);
        }

        return Format.fail("账号或密码输入不匹配");
    }

    /**
     * 获取 user 的 mock 数据.
     * @private
     */
    _getUserList(){
        return require("../../mock-data/user.json");
    }
};
