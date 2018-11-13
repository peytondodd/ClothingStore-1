import * as types from '../actions/types'
const initialState = {
    user:{},
    authenticated:false,
    response:[]
};
export const authReducer = (state = initialState , action)=>{
    switch (action.type) {
        case types.SIGNIN_USER:
            return { ...state, error: '', authenticated: true };
        case types.SIGNUP_USER:
            return { ...state,   response:action.payload};
        case types.EDIT_USER:
            return{...state, user:action.userPayload , response:action.responsePayload};
        case types.SIGNOUT_USER:
            return{ ...state , authenticated: false , user: {}};
        case types.AUTH_ERROR:
            return { ...state,  response:action.payload  };
        case types.FETCH_USER:
            return{...state , user:action.payload , response:[]};
        case types.RESET_RESPONSE:
            return {...state ,response:[]};
            default:
            return state;

    }
};
