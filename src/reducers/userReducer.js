import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, LOGIN} from '../constants/actionTypes';

const initState = {
    loginUser: {}
};

const userReducer = (state = initState, action) => {
    var newState = {...state};
    switch (action.type){
        case LOGIN:
            newState.loginUser = action.user;
            return newState;
        case DELETE_PRODUCT:
            newState.selectedModel = newState.brands.find(item=>item.name==newState.selectedBrand).model[action.index - 1];
            return newState;
        case EDIT_PRODUCT:
            newState.showText = true;
            return newState;
    }
    return newState;
};

export default userReducer;