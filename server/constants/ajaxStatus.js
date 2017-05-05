exports.INVALID_TOKEN = {
    status: 500,
    message: "The token is not valid or expired!"
};

exports.NO_TOKEN = {
    status: 404,
    message: "Please provide with a token!"
};

exports.SUCCESSFUL = {
    status: 200,
    message: "Success!"
};

exports.UNSUCCESSFUL = {
    status: 404,
    message: "Not result returned, please verify all the information!"
};

exports.COMMAND_NOT_FOUND = {
    status: 404,
    message: "This api is not found!"
};

exports.SERVER_ERROR = {
    status: 500,
    message: "The server happens with some error!"
};