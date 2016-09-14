/**
 * Created by Jerry on 16/9/12.
 */

const mongoose = require("mongoose");
//替换自身的 Promise
mongoose.Promise = Promise;
const co = require("co");

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    nick: String,
    handImg: String
});

UserSchema.methods = {

    saveUser: function () {
        return this.save();
    }
};

UserSchema.statics = {

    findUser: function (user) {
        return this.findOne(user).exec();
    }
};

const UserModel = mongoose.model("users",UserSchema);

/**
 * 登陆
 * @type {Function}
 */
exports.signIn = co.wrap(function*(user) {

    return yield UserModel.findUser(user);

});

/**
 * 注册
 * @type {Function}
 */
exports.signUp = co.wrap(function*(user) {

    return yield new UserModel(user).save();

});

/**
 * 查找邮箱是否存在
 * @type {Function}
 */
exports.findUserByEmail = co.wrap(function*(email) {
    return yield UserModel.findUser({"email": email});
});
