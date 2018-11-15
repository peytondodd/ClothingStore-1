import * as types from "../actions/types";

const initialState = {
    categories:[],
    category: {}

};

export default function (state = initialState , action) {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return{
                ...state,
                categories: action.payload,
            };
        case types.FETCH_CATEGORY:
            return{
                ...state,
                category: action.payload,
            };
        case types.UPDATED_ADMINCATEGORY:
            return{...state, categories:[...state.categories, action.payload]};
        default:
            return state
    }

}
