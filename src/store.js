import {createStore} from 'redux';
import reducers from './reducer';
import { getProducts } from './ajax/productAJAX';

const Store = createStore(reducers);

getProducts(
    (data) => {
        Store.dispatch({
            type: 'INIT_PRODUCT',
            products: data
        });
    }
);

export default Store;