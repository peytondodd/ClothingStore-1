import * as types from "../actions/types";

const initialState = {
    products:[],
    product:[],
    category:[]
};

export default function (state = initialState , action) {
    switch (action.type) {
        case types.FETCH_HOMEPOST:
            return{
                ...state,
                products: action.payload
            };
        case types.FETCH_CATEGORYPRODUCTS:
            return{
                ...state,
                products: action.payload
            };
        case  types.FETCH_PRODUCT:
            return{
                ...state,
                product: action.payload,
            };
            default:
                return state
    }

}
