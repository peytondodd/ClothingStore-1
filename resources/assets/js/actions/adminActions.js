import * as types from "./types";
import axios from 'axios'
import History from '../history'
import FormData from 'form-data';
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
export const getCategories = count =>{
    if(gotToken()){
        return (dispatch)=>{

            axios.get(`/api/admin/categories?page%5Bnumber%5D=${count}`,headers())
                .then(res =>
                {console.log(res.data);
                    dispatch({
                        type:types.FETCH_ADMINCATEGORIES,
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
                .catch(e =>  History.push('/admin/products'))
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
                }))
                .catch(err => History.push('/admin/products'))
        }
    }
};
export const CreateProduct = (payload) =>{
    let formData = new FormData();
    formData.append("upload", payload.files[0]);
    formData.set('name' , payload.name);
    formData.set('categories_id' , payload.categories_id);
    formData.set('price' , payload.price);
    formData.set('stars' , payload.stars);
    formData.set('description' , payload.description);
    formData.set('amount' , payload.amount);
    if(gotToken()){
        return dispatch =>{
            axios.post(`/api/admin/product/create`,formData,headers())
                .then(res => dispatch({
                    type:types.UPDATE_ADMINPRODUCT,
                    payload: res.data.product,
                    response: res.data.messages
                }))
                .catch(err => {console.log(err)})
        }
    }
};
