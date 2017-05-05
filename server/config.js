var config = {
    mongoURL: 'mongodb://localhost:27017/shop-web',
    DBName: 'shop-web',
    port: process.env.PORT || 8080,
    secret_key: "novaksecret"
};

module.exports = config;