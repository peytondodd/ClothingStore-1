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
      /*  case types.FETCH_USER:
            return { ...state, error: '', authenticated: true , user: action.payload};
            */
        case types.SIGNUP_USER:
            return { ...state, authenticated: false , user:false , response:action.payload  , error:""};
        case types.AUTH_ERROR:
            return { ...state,  response:'' , error: action.payload  };
            default:
            return state;

    }
};
