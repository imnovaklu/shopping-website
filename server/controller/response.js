exports.send = function (res, statusObj, optionalObj) {
    optionalObj = optionalObj || {};
    for (var key in statusObj) {
        optionalObj[key] = statusObj[key];
    }
    res.setHeader('Content-Type', 'application/json');
    return res.status(statusObj.status).send(JSON.stringify(optionalObj));
};