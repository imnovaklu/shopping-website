var express = require('express'),
    router = express.Router(),
    store = require('./store'),
    jwt = require('jsonwebtoken'),
    status = require('../constants/ajaxStatus'),
    response = require('./response'),
    mongo = require('../mongo');

router.get('/', function (req, res) {
    var token = req.body.token || req.header['token'] || req.query['token'];
    if(!token) return response.send(res, status.NO_TOKEN);
    jwt.verify(token, process.env.SECRET_KEY, function (err, decode) {
        if(err){
            //res.status(404).json(status.INVALID_TOKEN);
            response.send(res, status.UNSUCCESSFUL);
        }else{
            response.send(res, status.SUCCESSFUL, {
                user: store.users
            });
            /*return res.status(200).json({
                users: store.users
            });*/
        }
    });
});

router.post('/login', function (req, res) {
    var token = req.body.token || req.header['token'] || req.query.token;
    if(!token) return response.send(res, status.NO_TOKEN);
    console.log("body: ", req.body, "query: ", req.body);

    jwt.verify(token, process.env.SECRET_KEY, function (err, decode) {
        if(err){
            response.send(res, status.INVALID_TOKEN);
        }else{
            mongo.find("user",{
                username: req.body.username,
                password: req.body.password
            }, function (data) {
                return response.send(res, status.SUCCESSFUL, data);
            }, function () {
                return response.send(res, status.UNSUCCESSFUL);
            });
        }
    });
});

module.exports = router;