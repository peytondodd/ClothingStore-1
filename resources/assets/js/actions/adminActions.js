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
            .then(res => console.log(res.data))
    }

    }
};
