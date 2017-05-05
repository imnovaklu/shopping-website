import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, SEARCH_PRODUCT, CLEAR_SEARCH} from '../constants/actionTypes';

const initState = {
    products: [{
        id: 1,
        directory: "women",
        name: "Opel",
        price: 125.15,
        discount: 125.15,
        imgUrl: "http://allswalls.com/images/tiger-wallpaper-54.jpg"
    }, {
        id: 2,
        directory: "women",
        name: "Skoda",
        price: 140.70,
        discount: 100.00,
        imgUrl: "http://allswalls.com/images/tiger-wallpaper-54.jpg"
    }, {
        id: 3,
        directory: "women",
        name: "Toyota",
        price: 37.99,
        discount: 19.99,
        imgUrl: "http://allswalls.com/images/tiger-wallpaper-54.jpg"
    }, {
        id: 4,
        directory: "girls",
        name: "Opel",
        price: 125.15,
        discount: 125.15,
        imgUrl: "http://allswalls.com/images/tiger-wallpaper-50.jpg"
    }, {
        id: 5,
        directory: "girls",
        name: "Skoda",
        price: 140.70,
        discount: 100.00,
        imgUrl: "http://allswalls.com/images/tiger-wallpaper-50.jpg"
    }, {
        id: 6,
        directory: "girls",
        name: "Toyota",
        price: 37.99,
        discount: 19.99,
        imgUrl: "http://allswalls.com/images/tiger-wallpaper-50.jpg"
    }, {
        id: 7,
        directory: "girls",
        name: "Toyota",
        price: 37.99,
        discount: 19.99,
        imgUrl: "http://allswalls.com/images/tiger-wallpaper-50.jpg"
    }, {
        id: 8,
        directory: "girls",
        name: "Toyota",
        price: 37.99,
        discount: 19.99,
        imgUrl: "http://allswalls.com/images/tiger-wallpaper-50.jpg"
    }, {
        id: 9,
        directory: "kids",
        name: "Opel",
        price: 125.15,
        discount: 125.15,
        imgUrl: "http://allswalls.com/images/tiger-wallpaper-40.jpg"
    }, {
        id: 10,
        directory: "kids",
        name: "Skoda",
        price: 140.70,
        discount: 100.00,
        imgUrl: "http://allswalls.com/images/tiger-wallpaper-40.jpg"
    }, {
        id: 11,
        directory: "kids",
        name: "Toyota",
        price: 37.99,
        discount: 19.99,
        imgUrl: "http://allswalls.com/images/tiger-wallpaper-40.jpg"
    }, {
        id: 12,
        directory: "kids",
        name: "Toyota",
        price: 37.99,
        discount: 19.99,
        imgUrl: "http://allswalls.com/images/tiger-wallpaper-40.jpg"
    }, {
        id: 13,
        directory: "kids",
        name: "Toyota",
        price: 37.99,
        discount: 19.99,
        imgUrl: "http://allswalls.com/images/tiger-wallpaper-40.jpg"
    }]
};

initState.search_results = [...initState.products];

const productReducer = (state = initState, action) => {
    var newState = {...state};
    switch (action.type) {
        case ADD_PRODUCT:
            newState.selectedBrand = newState.brands[action.index - 1].name;
            return newState;
        case DELETE_PRODUCT:
            newState.selectedModel = newState.brands.find(item=>item.name == newState.selectedBrand).model[action.index - 1];
            return newState;
        case EDIT_PRODUCT:
            newState.showText = true;
            return newState;
        case SEARCH_PRODUCT:
            newState.search_results = newState.products.filter(item=>item.directory.toLowerCase() == action.directory.toLowerCase() && item.name.toLowerCase().indexOf(action.text.toLowerCase())>=0);
            return newState;
        case CLEAR_SEARCH:
            newState.search_results = newState.products;
            return newState;
    }
    return newState;
};

export default productReducer;