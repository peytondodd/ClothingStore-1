import * as types from "../actions/types";

const initialState = {
    products:[],
    product:{},
    response: ""
};

export const aProductsReducer = function (state = initialState , action) {
    switch (action.type) {
        case types.FETCH_ADMINPRODUCTS:
            return {...state , products: action.payload};
        case types.FETCH_ADMINPRODUCT:
            return{...state , product :action.payload};
        case types.UPDATE_ADMINPRODUCT:
            console.log(action.response);
            return{...state, product:action.payload , response:action.response}

        default:
            return state
    }

};
