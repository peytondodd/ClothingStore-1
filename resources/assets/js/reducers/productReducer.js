import * as types from "../actions/types";

const initialState = {
    products:[],
    product:[],
    category:[],
    filter:[],
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
        case types.SORT_TOPRATED:
            return{
                ...state , products : [...state.products.sort((a,b) => b.stars - a.stars)]
            };
        case types.SORT_LOWRATED:
            return{
                ...state , products : [...state.products.sort((a,b) => a.stars - b.stars)]
            };

        case types.SORT_LOWTOHIGH:
            return{
                ...state , products : [...state.products.sort((a,b) => a.price - b.price)]
            };

        case types.SORT_HIGHTOLOW:
            return{
                ...state , products : [...state.products.sort((a,b) => b.price - a.price)]
            };
        case types.SEARCH_PRODUCTS:
            return{
                ...state, filter:[...state.products.filter( value => value.name.toLowerCase().search(action.payload.toLowerCase()) !== -1)]
            };

         default:
                return state
    }

}
