import {FETCH_HOMEPOST} from "../actions/types";

const initialState = {
    products:[],

};

export default function (state = initialState , action) {
    switch (action.type) {
        case FETCH_HOMEPOST:
            return{
                ...state,
                products: action.payload
            };
            default:
                return state
    }

}