import { FETCH_HOMEPOST} from "./types";
import axios from 'axios'

export function fetchHomeProduct() {
    return function (dispatch) {
        axios.get(`http://localhost:8000/api/products/home`)
            .then(res => {
                const products = res.data;
               dispatch({
                   type:FETCH_HOMEPOST,
                   payload:products
               })

            })
    }
}