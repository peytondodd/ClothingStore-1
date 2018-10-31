import { combineReducers} from 'redux'
import productReducer from './productReducer'
import categoryReducer from './categoryReducer'
import { reducer as formReducer } from 'redux-form';
import {authReducer} from "./authReducer";
export default combineReducers({
    form: formReducer,
    products : productReducer,
    category: categoryReducer,
    auth: authReducer,
});
