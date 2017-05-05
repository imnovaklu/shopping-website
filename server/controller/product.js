var express = require('express'),
    router = express.Router(),
    mongoClient = require('mongodb').MongoClient,
    store = require('./store'),
    jwt = require('jsonwebtoken'),
    serverConfig = require('../config');

router.get('/', function (req, res) {
    /*var token = req.body.token || req.header['token'] || req.query['token'];
    if(!token) return res.json({
        err: "please insert a token"
    });
    jwt.verify(token, process.env.SECRET_KEY, function (err, decode) {
        if(err){
            res.status(404).json({
                err: "invalid token"
            });
        }else{
            return res.status(200).json({
                users: store.users
            });
        }
    });*/
    mongoClient.connect(serverConfig.mongoURL, function(err, db){
        if(err){
            console.log(err);
            res.send("Error happened while connecting to the database");
        }else {
            /*db.collection("women_products").findOne({"username":req.body.username, "password": req.body.password}, function (err, result) {
                if(result){
                    req.session.loguser = result;
                    res.send("successful");
                }else {
                    res.send("fail");
                }
                db.close();
            })*/
            console.log(req.query);
            res.send({name:"test"});
        }
    });
});

router.post('/', function (req, res) {
    var token = req.body.token || req.header['token'];
    if(!token) return res.json({
        err: "please insert a token"
    });
    jwt.verify(token, process.env.SECRET_KEY, function (err, decode) {
        if(err){
            res.status(500).json({
                err: "invalid token"
            });
        }else{
            if(!('username' in req.body) || !('birthday' in req.body) || !('location' in req.body)){
                return res.status(404).json({
                    err: "please provide with valid"
                });
            }
            for(var key in req.body){
                if(req.body[key] == ""){
                    return res.status(404).json({
                        err: "please provide with valid " + key
                    });
                }
            }
            var len = store.users.length;
            store.users.push({
                id: len+1,
                username: req.body.username,
                birthday: req.body.birthday,
                location: req.body.location
            });
            return res.status(200).json({
                succ: "post user successfully!"
            });
        }
    });
});

module.exports = router;