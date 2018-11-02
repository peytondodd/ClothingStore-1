import * as types from "../actions/types";

const initialState = {
  products : [],
    totalPrice:0,
    totalItems:0
};

export default function (state = initialState , action) {
    switch (action.type) {
        case types.FETCH_ALLCART:
         return{
             ...state, products:action.payload, totalItems:action.payload.length
         };
        case types.ADD_TOCART:
            return{
                ...state, products:[...state.products,action.payload] ,totalItems:[...state.products,action.payload].length
            };
        default:
            return state
    }

}