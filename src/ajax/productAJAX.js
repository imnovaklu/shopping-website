/*let cache = null;*/

/*
export const getDetails = (directory, id) => {
    var delay = $.ajax({
        url: `/api/product`,
        type: 'GET',
        data: {directory: directory, id: id},
        dataType: 'application/json'
    })
        .done(resp => {
            console.log("resp", resp.json());
            return resp.json();
        });
    console.log("delay", delay);
};*/
import $ from 'jquery';
import {configAJAX, getToken} from './token';

export const getDetails = (directory, id, callback) => {
    fetch('api/product')
        .then(resp => {
            callback(resp.json());
        })
};

export const getProducts = (callback) => {
    /*getToken(function (token) {
        fetch('api/product/getAll?token=' + token,{
            method: "POST"
        })
            .then(resp => {
                callback(resp.json());
            })
    })*/
    getToken((token)=>{
        console.log(configAJAX('/api/product/getAll', 'POST', {
            token: token
        }));
        $.ajax(configAJAX('/api/product/getAll', 'POST', {
            token: token
        }))
            .done((resp)=>{
                callback(resp);
            })
            .fail((err)=>{
                console.log("error: ", err);
            })
    })
};
