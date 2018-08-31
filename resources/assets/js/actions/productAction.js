import * as type from "./types";
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
                    type: type.FETCH_CATEGORYPRODUCTS,
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
                    type:type.FETCH_PRODUCT,
                    payload:products,

                })

            });
    }
}