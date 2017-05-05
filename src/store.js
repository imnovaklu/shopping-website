import {createStore} from 'redux';
import reducers from './reducer';

const Store = createStore(reducers);

export default Store;