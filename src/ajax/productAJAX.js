/*
import $ from 'jquery';
*/

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

export const getDetails = (directory, id) => {
    return fetch('api/product')
        .then(resp => resp.json())
};
