import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, SEARCH_PRODUCT, CLEAR_SEARCH, INIT_PRODUCT, FETCH_PRODUCT_START, FETCH_PRODUCT_FAILED} from '../constants/actionTypes';

const initState = {
    products: [],
    fetching: false,
    fetched: false,
    error: null
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
        case INIT_PRODUCT:
            newState.products = action.products;
            newState.fetching = false;
            newState.fetched = true;
            return newState;
        case FETCH_PRODUCT_START:
            newState.fetching = true;
            return newState;
        case FETCH_PRODUCT_FAILED:
            newState.fetching = false;
            newState.fetched = false;
            newState.error = action.error;
            return newState;
    }
    return newState;
};

export default productReducer;