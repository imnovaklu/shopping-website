import {createStore, applyMiddleware} from 'redux';
import reducers from './reducer';
import { getProducts } from './ajax/productAJAX';
import thunk from 'redux-thunk';
import {FETCH_PRODUCT_START, FETCH_PRODUCT_FAILED} from './constants/actionTypes';

const Store = createStore(reducers, applyMiddleware(thunk));

Store.dispatch(dispatch => {
    dispatch({
        type: FETCH_PRODUCT_START
    });
    getProducts(
        (data) => {
            dispatch({
                type: 'INIT_PRODUCT',
                products: data
            });
        },
        (err) => {
            dispatch({
                type: FETCH_PRODUCT_FAILED,
                error: err
            })
        }
    );
});

export default Store;