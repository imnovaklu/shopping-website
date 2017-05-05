import {combineReducers} from 'redux';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import styleReducer from './reducers/styleReducer';

const reducers = combineReducers({
    user: userReducer,
    product: productReducer,
    style: styleReducer
});

export default reducers;