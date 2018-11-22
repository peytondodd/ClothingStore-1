import * as types from "./types";
import axios from 'axios'
import History from '../history'

const gotToken = () => localStorage.getItem('token');
const headers = () => {
    return {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    };
};


export const fetchCategoryProducts = (id) =>{
    return(dispatch)=> {
        axios.get('/api/categories/'+id+'/products')
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
        axios.get(`/api/products/` + id)

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
        axios.get(`/api/categories/`+ id)

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
    console.log(payload);
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

export const FETCH_ALLCART = (items)=>{
    const payload = JSON.parse(localStorage.getItem('cart'));
    return{
        type:types.FETCH_ALLCART,
        payload:payload,
    }
};


export const ADDTOCART = (product,count)=>{
    const cart = localStorage.getItem('cart');
    product['count'] = count;
    const newproduct = product;
    if(!cart){
       let cartArray = [];
           cartArray.push(newproduct);
           localStorage.setItem('cart', JSON.stringify(cartArray));
           return{
               type : types.ADD_TOCART,
               payload:newproduct
           }
    }
    else{
        const ar = JSON.parse(localStorage.getItem('cart'));
         const found   =ar.some((el)=>{
            return el.id === newproduct.id;

        });
        if(!found){
            ar.push(newproduct);
            localStorage.setItem('cart' , JSON.stringify(ar));
            return{
                type : types.ADD_TOCART,
                payload:newproduct
            }
        }
        else{
        ar.forEach(p =>{
            if(p.id === product.id){
                p.count += count;
                localStorage.setItem('cart' , JSON.stringify(ar));
            }
        });
            return{
                type:types.UPDATE_TOCART,
                payload: ar
            }
        }

    }
};





export const closeCart = () =>{
  return{
      type: types.CLOSE_CART
  }
};

export const fetchUser = () =>{
    return (dispatch)=> {
        if (gotToken())
            axios.get('/api/user',headers())
                .then(res => {
                    const user =res.data;
                    dispatch({
                        type:types.FETCH_USER,
                        payload : user
                    })
                })
                .catch(err => {
                    console.log(err);
                    localStorage.removeItem('token');
                     dispatch(signOutUser());
                    return History.push('/');
                })
    }
    };



export const addToCart = (id) =>{
    const ar = JSON.parse(localStorage.getItem('cart'));
    ar.map(p => p.id === id ? p.count +=1 : p);
    localStorage.setItem('cart' , JSON.stringify(ar));
    return{
        type:types.ADD_CART,
        payload:ar
    }

};
export const removeItem = id =>{
    const ar = JSON.parse(localStorage.getItem('cart'));
    const newArray =   ar.filter(p => p.id !== id );
    console.log(newArray);
    localStorage.setItem('cart' , JSON.stringify(newArray));
    return{
        type:types.ADD_CART,
        payload:newArray
    }
};
export const RemoveFromCart = (id) =>{
    const ar = JSON.parse(localStorage.getItem('cart'));
    ar.map(p => p.id === id ? p.count -=1 : p);
 const newarray = ar.filter(p =>  p.count >= 1);
    localStorage.setItem('cart' , JSON.stringify(newarray));
return{
    type:types.REMOVE_CART,
    payload:newarray
}
};

export const checkout = () =>{
    if(gotToken()){
        return (dispatch)=>{
        const products = JSON.parse(localStorage.getItem('cart'));
        axios.post('/api/order/new',products,headers())
            .then(res => {
                localStorage.removeItem('cart');
                const string = res.data;
                const link = string.substr(57);
               return window.location = `https://www.mollie.com/paymentscreen/issuer/select/ideal/${link}`;

            });
    }
    }
};

export const fetchLatestOrders = () =>{
    return (dispatch) =>{
    if(gotToken()){
        axios.get('/api/user/orders/latest',headers())
            .then(res => dispatch({
                type:types.FETCH_USERORDERS,
                payload:res.data

            }))
    }

    }
};

export const EditUser =(payload)=> {
    return (dispatch) => {
        if(gotToken()){
        axios.post(`/api/user/edit`, payload, headers())
            .then(res => {
                if(res.data.message){
                    dispatch({
                        type:types.EDIT_USER,
                        userPayload:res.data.user,
                        responsePayload:res.data.message
                    })
                }
                if(res.data.error){
                    dispatch(authError(res.data.error))

                }


            })
            .catch(err => {
                console.log(err.response.data.errors);
                dispatch(authError(err.response.data.errors));
            });
    }
    }
};

export const fetchUserOrders = () =>{
    if(gotToken()){
            return (dispatch) =>{
                axios.get('/api/user/orders',headers())
                    .then(res => dispatch({
                        type:types.FETCH_ALLUSERORDERS,
                        payload : res.data
                    }));
            }

    }
};

export const fetchOrder = (id) =>{
    if(gotToken()){
        return (dispatch)=>{
            axios.get(`/api/order/${id}`,headers())
                .then(res => dispatch({
                    type: types.FETCH_ORDER,
                    payload: res.data
                }))
                .catch(err => History.push('/profile'))
        }
    }
};

export const resetResponse = () =>{
    return {
        type:types.RESET_RESPONSE
    }
};

