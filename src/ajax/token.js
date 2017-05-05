import $ from 'jquery';

const configAJAX = (url, type = 'GET', data = {}) => ({
    url: url,
    type: type,
    contentType: "application/json",
    dataType: 'json',
    data: JSON.stringify(data)
});

const getToken = (callback) => {
    $.ajax(configAJAX('/api/access'))
        .done((resp)=>{
            callback(resp.token);
        })
        .fail((err)=>{
            console.log("error: ", err);
        });
};

const verifyToken = () => {

};

export {
    configAJAX,
    getToken,
    verifyToken
};