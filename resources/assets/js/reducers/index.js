import { combineReducers} from 'redux'
import productReducer from './productReducer'
import categoryReducer from './categoryReducer'
import { reducer as formReducer } from 'redux-form';
import {authReducer} from "./authReducer";
import cartReducer from './cartReducer'
export default combineReducers({
    cart : cartReducer,
    form: formReducer,
    products : productReducer,
    category: categoryReducer,
    auth: authReducer,
});
