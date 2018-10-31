import * as types from "./types";
import axios from 'axios'
import History from '../history'

const gotToken = () => localStorage.getItem('token');
const headers = () => {
    return {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    };
};
export const fetchHomeProduct = ()=> {
    return (dispatch) => {
        axios.get(`/api/products/home`)
            .then(res => {
                const products = res.data;
               dispatch({
                   type:types.FETCH_HOMEPOST,
                   payload:products
               })

            })
    }
};

export const fetchCategoryProducts = (id) =>{
    return(dispatch)=> {
        axios.get('http://localhost:8000/api/categories/'+id+'/products')
            .then(res =>{
                const products = res.data;
                dispatch({
                    type: types.FETCH_CATEGORYPRODUCTS,
                    payload: products
                })
            })
    }
};

export function fetchProduct(id){
    return function (dispatch) {
        axios.get(`http://localhost:8000/api/products/` + id)

            .then(res => {
                const products = res.data;
                dispatch({
                    type:types.FETCH_PRODUCT,
                    payload:products,

                })
            });
    }
}

export function fetchCategories() {
    return (dispatch)=>{
        axios.get('/api/categories')
            .then(res =>{
               dispatch({
                   type: types.FETCH_CATEGORIES,
                   payload: res.data,

               })
            })

        .catch(e =>{

        })
    }

}
export function SORT_LOWRATED (){
    return{
        type:types.SORT_LOWRATED
    }
}
export function SORT_TOPRATED (){
    return{
        type:types.SORT_TOPRATED
    }
}
export function SORT_LOWTOHIGH (){
    return{
        type:types.SORT_LOWTOHIGH
    }
}
export function SORT_HIGHTOLOW (){
    return{
        type:types.SORT_HIGHTOLOW
    }
}
export function SEARCH_PRODUCTS (value){
    return{
        type:types.SEARCH_PRODUCTS,
        payload: value
    }
}
export const fetchCategory = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:8000/api/categories/`+ id)

            .then(res => {
                const category = res.data;
                const products = category.products;
                dispatch({
                    type: types.FETCH_CATEGORY,
                    payload: category,
                    payloadC: products
                })



            });
    }
};

export const signupUser =(payload)=> {
    return (dispatch) => {
        axios.post(`/api/register`, payload)
            .then(res => {
                if(res.data.message){
                    dispatch({
                        type:types.SIGNUP_USER,
                        payload:res.data.message
                    })
                }


            })
            .catch(err => {
                dispatch(authError(err.response.data.errors));
            });

    }
};

export const authError = (error) => {
    return {
        type: types.AUTH_ERROR,
        payload: error
    };
};

export const signInUser = (payload) =>{
    console.log(payload);
   return (dispatch) =>{
    axios.post(`/api/login`, payload)
        .then(res => {
            const token = res.data.access_token;
           if(token){
               localStorage.setItem('token', token);
               dispatch({type: types.SIGNIN_USER});
               History.push('/');
           }
           else{
              dispatch(authError(res.data.message));
           }


        })
        .catch(err => {
            dispatch(authError(err.response.data.errors));
        });
   }
};

export const signOutUser =()=>{
    if(gotToken()){
        return (dispatch) =>{
            axios.post('/api/logout',null,headers())
                .then(res => {
                    localStorage.removeItem('token');
                    dispatch({
                        type: types.SIGNOUT_USER
                    })
                })
                .catch(e => console.log(e));
        }
    }

};
