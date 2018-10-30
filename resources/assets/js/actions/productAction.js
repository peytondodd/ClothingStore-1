import * as types from "./types";
import axios from 'axios'

export function fetchHomeProduct() {
    return function (dispatch) {
        axios.get(`http://localhost:8000/api/products/home`)
            .then(res => {
                const products = res.data;
               dispatch({
                   type:type.FETCH_HOMEPOST,
                   payload:products
               })

            })
    }
}

export function fetchCategoryProducts(id){
    return function (dispatch) {
        axios.get('http://localhost:8000/api/categories/'+id+'/products')
            .then(res =>{
                const products = res.data;
                dispatch({
                    type: types.FETCH_CATEGORYPRODUCTS,
                    payload: products
                })
            })
    }
}

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
export function fetchCategory(id) {
    return function (dispatch) {
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
}
