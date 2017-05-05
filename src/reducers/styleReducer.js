import {TOGGLE_LOGIN} from '../constants/actionTypes';

const initState = {
    loginStyle: "login-opened"
};

const styleReducer = (state = initState, action) => {
    var newState = {...state};
    switch (action.type){
        case TOGGLE_LOGIN:
            newState.loginStyle = newState.loginStyle == "login-opened"? "login-collapsed": "login-opened";
            return newState;
    }
    return newState;
};

export default styleReducer;