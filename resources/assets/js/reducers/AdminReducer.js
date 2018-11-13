import * as types from "../actions/types";

const initialState = {
    products:[],
    product:{},
    producttotal:'',
    response: "",
    categoriestotal:'',
    categories:[]
};

export const AdminReducer = function (state = initialState , action) {
    switch (action.type) {
        case types.FETCH_ADMINPRODUCTS:
            return {...state , products: action.payload , total:action.total};
        case types.FETCH_ADMINCATEGORIES:
            return {...state , categories: action.payload , categoriestotal:action.total};
        case types.FETCH_ADMINPRODUCT:
            return{...state , product :action.payload};
        case types.UPDATE_ADMINPRODUCT:
            console.log(action.response);
            return{...state, product:action.payload , response:action.response};

        default:
            return state
    }

};
