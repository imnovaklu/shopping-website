var express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    status = require('../constants/ajaxStatus'),
    response = require('./response');

router.get('/', function (req, res) {
    var token = jwt.sign({}, process.env.SECRET_KEY, {
        expiresIn: 60*60
    });
    response.send(res, status.SUCCESSFUL, {
        token: token
    });
});

router.get('/verify', function (req, res) {
    var token = req.body.token || req.header['token'] || req.query['token'];
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
                succ: "valid token"
            });
        }
    });

});

module.exports = router;