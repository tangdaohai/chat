/**
 * Created by Jerry on 16/8/3.
 */

// const mongo = require('mongodb');
//
// mongo.MongoClient.connect('mongodb://localhost:27017/chat', (err, db) => {
//     if(err) throw err;
//
//     db.authenticate("test", "123456", (err, result) => {
//         if(err) throw err;
//
//         const coll = db.collection("abd");
//
//         coll.find({a:2}).toArray((err, data) => {
//             if(err) throw err;
//
//             console.log(data);
//
//             db.logout();
//             db.close();
//         });
//
//     });
// });

const mongoose = require('mongoose');
const co = require("co");

co(function* (){

    const options = {
        db: { native_parser: true },
        server: { poolSize: 5 },
        replset: { rs_name: 'myReplicaSetName' },
        user: 'chat',
        pass: '123456'
    }
    mongoose.connect('mongodb://localhost:27017/chat', options);

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
        // yay!
    });

    const UserSchema = mongoose.Schema({
        email : String,
        password : String,
        nick : String,
        handImg : String
    });
    const UserModel = mongoose.model("user", UserSchema);

    const user = new UserModel({
        "email" : "1@qq.com",
        "password" : "123456",
        "nick" : "哎呦我去",
        "handImg" : "https://facebook.github.io/react/img/logo.svg"
    });

// user.save( (err, user) => {
//     if (err) return console.error(user);
//     console.log(user);
//
//     UserModel.find({password: "123456"}, (err, users) => {
//         if (err) return console.error(err);
//
//         console.log(users);
//     } );
// } );

    const u = yield  UserModel.findOne({password: "123456"});

    console.log(u);
    // (err, users) => {
    //     if (err) return console.error(err);
    //
    //     console.log(users);
    // }

});