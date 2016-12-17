/**
 * Created by Jerry on 16/9/12.
 */

const mongoose = require("mongoose");
//替换自身的 Promise
mongoose.Promise = Promise;

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String
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
    modifyName: function(_id, name){
        return this.update({_id: _id}, {$set: {name: name}}).exec();
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
    return yield UserModel.modifyName(_id, name);
};
