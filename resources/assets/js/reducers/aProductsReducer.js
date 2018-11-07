import * as types from "../actions/types";

const initialState = {
    products:[],
    product:{}
};

export const aProductsReducer = function (state = initialState , action) {
    switch (action.type) {
        case types.FETCH_ADMINPRODUCTS:
            return {...state , products: action.payload};
        case types.FETCH_ADMINPRODUCT:
            return{...state , product :action.payload}
        default:
            return state
    }

};
