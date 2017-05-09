var express = require('express'),
    app = express(),
    path = require('path'),
    mongodb = require('mongodb'),
    bodyParser = require('body-parser'),
    serverConfig = require('./server/config');

process.env.SECRET_KEY = serverConfig.secret_key;

var new_db = new mongodb.Db(serverConfig.DBName, new mongodb.Server('localhost', 27017));
new_db.open(function (err, db) {
    if(err){
        console.log('Error When Trying To Connect To MongoDB!');
    }else {
        console.log('Connection Established!');
        db.close();
    }
});

app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/node_modules'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/user', require('./server/controller/user'));
app.use('/api/product', require('./server/controller/product'));
app.use('/api/access', require('./server/controller/token'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/404', function (req, res) {
    res.sendFile(__dirname + '/404.html');
});

app.get('*', function (req, res) {
    res.redirect('/');
});

app.listen(serverConfig.port, function () {
    console.log('Server is running at http://localhost:8080');
});