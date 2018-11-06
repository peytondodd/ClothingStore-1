import * as types from '../actions/types'
const initialState = {
   orders:[],
    order:{}
};
export const ordersReducer = (state = initialState , action)=>{
    switch (action.type) {
        case types.FETCH_USERORDERS:
            return { ...state, orders: action.payload };
        case types.FETCH_ALLUSERORDERS:
            return {...state, orders:action.payload};
        case types.FETCH_ORDER:
            return {...state , order:action.payload};
        default:
            return state;

    }
};
