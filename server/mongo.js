var mongodb = require('mongodb'),
    mongoClient = mongodb.MongoClient,
    serverConfig = require('./config');

exports.find = function (collectionName, params, successCallback, errorCallback) {
    mongoClient.connect(serverConfig.mongoURL, function(err, db){
        if(err){
            errorCallback();
        }else {
            db.collection(collectionName).findOne(params, function (err, result) {
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

exports.findAll = function (collectionName, params, successCallback, errorCallback) {
    mongoClient.connect(serverConfig.mongoURL, function(err, db){
        if(err){
            errorCallback();
        }else {
            db.collection(collectionName).find(params).toArray(function (err, result) {
                if (result) {
                    db.close();
                    successCallback(result);
                } else {
                    db.close();
                    errorCallback();
                }
            })
        }
    })
};