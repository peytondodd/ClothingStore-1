import * as types from "./types";
import axios from 'axios'
import History from '../history'

const gotToken = () => localStorage.getItem('token');
const headers = () => {
    return {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    };
};
export const fetchProducts = () =>{
    if(gotToken()){
        return (dispatch)=>{

        axios.get('/api/admin/products',headers())
            .then(res => dispatch({
                type:types.FETCH_ADMINPRODUCTS,
                payload: res.data
            }))
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
