/**
 * Created by Jerry on 16/9/12.
 */

const mongoose = require("mongoose");
//替换自身的 Promise
mongoose.Promise = Promise;

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    avatarType: Number
});

UserSchema.methods = {

    saveUser: function () {
        return this.save();
    }
};

UserSchema.statics = {

    findUser: function (user) {
        return this.findOne(user).exec();
    },
    modify: function(_id, updateDate){
        return this.update({_id: _id}, {$set: updateDate}).exec();
    },
    modifyPassword: function(_id, oldPassword, newPassword){
        return this.update({_id: _id, password: oldPassword}, {$set: {password: newPassword}}).exec();
    }
};

const UserModel = mongoose.model("users",UserSchema);

/**
 * 登陆
 * @type {Function}
 */
exports.signIn = function*(user) {
    return yield UserModel.findUser(user);
};

/**
 * 注册
 * @type {Function}
 */
exports.signUp = function*(user) {
    return yield new UserModel(user).save();
};

/**
 * 查找邮箱是否存在
 * @type {Function}
 */
exports.findUserByEmail = function*(email) {
    return yield UserModel.findUser({"email": email});
};

/**
 * 更新名字
 * @param _id
 * @param name
 * @returns {*}
 */
exports.modifyName = function*(_id, name) {
    return yield UserModel.modify(_id, {name: name});
};
/**
 * 修改密码, 需要验证旧密码
 * @param _id
 * @param password
 * @returns {*}
 */
exports.modifyPassword = function*(_id, password){
    return yield UserModel.modifyPassword(_id, password.oldPassword, password.newPassword);
};

/**
 * 修改使用的头像类型
 * @param _id
 * @param type
 * @returns {*}
 */
exports.modifyAvatarType = function*(_id, type){
    return yield UserModel.modify(_id, {avatarType: type});
};
