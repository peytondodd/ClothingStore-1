import * as types from "./types";
import axios from 'axios'
import History from '../history'

const gotToken = () => localStorage.getItem('token');
const headers = () => {
    return {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    };
};
export const fetchProducts = count =>{
    if(gotToken()){
        return (dispatch)=>{

        axios.get(`/api/admin/products?page%5Bnumber%5D=${count}`,headers())
            .then(res =>
            {console.log(res.data);
                dispatch({
                type:types.FETCH_ADMINPRODUCTS,
                payload: res.data,
                    total:res.data.total
            })
            })
    }

    }
};

export const fetchProduct = (id) =>{
    console.log(id);
    if(gotToken()){
        return (dispatch)=>{

            axios.get(`/api/admin/product/${id}`,headers())
                .then(res => dispatch({
                    type:types.FETCH_ADMINPRODUCT,
                    payload: res.data
                }))
        }

    }
};

export const EditProduct = (payload) =>{
    if(gotToken()){
        return dispatch =>{
            axios.post(`/api/admin/product/${payload.id}/edit`,payload,headers())
                .then(res => dispatch({
                    type:types.UPDATE_ADMINPRODUCT,
                    payload: res.data.product,
                    response: res.data.messages
                }));
        }
    }
};
