import * as types from "../actions/types";

const initialState = {
  products : [],
    totalPrice:0,
    totalItems:0,
    isOpen:false,
};

const getTotalItems = (array) =>{
    let totalItems = 0;
    array.forEach( p => totalItems += p.count);
    return totalItems;
};
const getTotalPrice = (array) =>{
    let totalPrices = 0;
    array.forEach( p => totalPrices += (p.price * p.count));
    return totalPrices;
};

export default function (state = initialState , action) {
    switch (action.type) {
        case types.FETCH_ALLCART:
            return{
                ...state , products:action.payload , totalPrice : getTotalPrice(action.payload) , totalItems:getTotalItems(action.payload)
            };

        case types.ADD_TOCART:
            return{
                ...state, products:[...state.products,action.payload] ,totalPrice:getTotalPrice([...state.products,action.payload]), totalItems:getTotalItems([...state.products,action.payload]), isOpen: true,
            };
        case types.UPDATE_TOCART:
          return {
              ...state , products:action.payload , totalPrice : getTotalPrice(action.payload) , totalItems:getTotalItems(action.payload), isOpen:true
          };
        case types.ADD_CART:
            return {
                ...state , products:action.payload , totalPrice : getTotalPrice(action.payload) , totalItems:getTotalItems(action.payload),
            };
        case types.REMOVE_CART:
            return {
                ...state , products:action.payload , totalPrice : getTotalPrice(action.payload) , totalItems:getTotalItems(action.payload),
            };
        case types.CLOSE_CART:
            return{
                ...state, isOpen:false
            };
        default:
            return state
    }

}
