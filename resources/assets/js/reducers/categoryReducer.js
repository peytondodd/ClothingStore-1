import {FETCH_CATEGORY} from "../actions/types";

const initialState = {
    category:[],

};

export default function (state = initialState , action) {
    switch (action.type) {
        case FETCH_CATEGORY:
            return{
                ...state,
                category: action.payload,
            };
        default:
            return state
    }

}