import {FETCH_CATEGORY} from "./types";
import axios from 'axios'



export function fetchCategory(id) {
    return function (dispatch) {
        axios.get(`http://localhost:8000/api/categories/`+ id)

            .then(res => {
                const category = res.data;
                const products = category.products;
                dispatch({
                    type: FETCH_CATEGORY,
                    payload: category,
                    payloadC: products
                })



            });
    }
}