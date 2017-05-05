var mongodb = require('mongodb'),
    mongoClient = mongodb.MongoClient,
    serverConfig = require('./config');

exports.find = function (params, successCallback, errorCallback) {
    mongoClient.connect(serverConfig.mongoURL, function(err, db){
        if(err){
            errorCallback();
        }else {
            db.collection("user").findOne(params, function (err, result) {
                if(result){
                    db.close();
                    successCallback(result);
                }else {
                    db.close();
                    errorCallback();
                }
            })
        }
    })
};