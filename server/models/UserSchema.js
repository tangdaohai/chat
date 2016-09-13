/**
 * Created by Jerry on 16/9/13.
 */

const mongoose = require("mongoose");
//替换自身的 Promise
mongoose.Promise = Promise;

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

mongoose.model("users", UserSchema);