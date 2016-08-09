/**
 * Created by Jerry on 16/8/3.
 */

const mongo = require('mongodb');

mongo.MongoClient.connect('mongodb://localhost:27017/test', (err, db) => {
    if(err) throw err;

    db.authenticate("test", "123456", (err, result) => {
        if(err) throw err;

        const coll = db.collection("abd");

        coll.find({a:2}).toArray((err, data) => {
            if(err) throw err;

            console.log(data);

            db.logout();
            db.close();
        });

    });
});
