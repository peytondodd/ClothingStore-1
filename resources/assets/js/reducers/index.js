import { combineReducers} from 'redux'
import productReducer from './productReducer'
import categoryReducer from './categoryReducer'
import floatCartReducer from './floatCartReducer';
import updateCartReducer from './updateCartReducer';
import filterReducer from './filterReducer';
import sortReducer from './sortReducer';

export default combineReducers({
    products : productReducer,
    category: categoryReducer,
    cartProducts: floatCartReducer,
    cartTotals: updateCartReducer,
    filters: filterReducer,
    sort: sortReducer,
});