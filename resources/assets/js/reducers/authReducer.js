import * as types from '../actions/types'
const initialState = {
    user:{},
    authenticated:false,
    error:'',
    response:''
};
export const authReducer = (state = initialState , action)=>{
    switch (action.type) {
        case types.SIGNIN_USER:
            return { ...state, error: '', authenticated: true };
        case types.SIGNUP_USER:
            return { ...state,   response:action.payload  , error:""};
        case types.SIGNOUT_USER:
            return{ ...state , authenticated: false , user: {}};
        case types.AUTH_ERROR:
            return { ...state,  response:'' , error: action.payload  };
        case types.FETCH_USER:
            return{...state , user:action.payload};
            default:
            return state;

    }
};
