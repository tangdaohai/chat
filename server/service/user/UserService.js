/**
 * Created by Jerry on 16/9/6.
 */

module.exports = class UserService{

    /**
     * 根据邮箱密码查询用户
     * @param user
     * @returns {*}
     */
    login(user = {}){
        const UserList = this._getUserList();

        const index = UserList.findIndex((val) => val.email === user.email && val.password === user.password);

        return UserList[index];
    }

    /**
     * 获取 user 的 mock 数据.
     * @private
     */
    _getUserList(){
        return require("../../mock-data/user.json");
    }
};
