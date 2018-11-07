import { combineReducers} from 'redux'
import productReducer from './productReducer'
import categoryReducer from './categoryReducer'
import { reducer as formReducer } from 'redux-form';
import {authReducer} from "./authReducer";
import cartReducer from './cartReducer'
import {ordersReducer} from './ordersReducer'
import {aProductsReducer} from './aProductsReducer'

export default combineReducers({
    cart : cartReducer,
    form: formReducer,
    products : productReducer,
    category: categoryReducer,
    auth: authReducer,
    orders:ordersReducer,
    aproducts : aProductsReducer
});
