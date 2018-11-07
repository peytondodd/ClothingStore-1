import React from 'react';
import {connect } from 'react-redux'
import './Cart.css'
import * as action from '../../actions'
import Palet from '../../Assets/Images/pallet.jpg'
const Cart  = (props) => {
    const renderItems = () =>{
        const items = props.items;
        if(items && items.length){

       return items.map(item =>{
            return(
                <tr key={item.id} className='align-td-middle mx-auto'>
                    <td><img src={Palet} className='img-custom-table' alt=""/></td>
                    <td>{item.name}</td>
                    <td><div className="input-group input-group-sm mx-auto custom-table-width">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm" onClick={()=>{props.RemoveFromCart(item.id)}}>-</span>
                        </div>
                        <input type="number" name='count' value={item.count}  onChange= {(e) => props.UpdateCART(e.target.value)} className="form-control amountForm" aria-label="Sizing example input"
                               aria-invalid={"false"}
                               aria-describedby="inputGroup-sizing-sm" />
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm" onClick={()=>{props.addToCart(item.id)}}>+</span>
                        </div>
                    </div></td>
                     <td>${totalPrice(item.price , item.count)}</td>
                </tr>
            )
        })

    }
        else {
            return <tr><td><span className='RalewayBold'>Your Shopping cart is empty!</span></td></tr>;
        }
    };

    const checkOutButton =()=>{return props.total ?  <button className={'btn btn-primary'} onClick={()=>{props.checkout()}}>Check Out</button>: null}
    const totalPrice =(price , amount)=> price * amount;

    return(
       <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
           <h3 className='shopping-cart-name RalewayBold'>Shopping Cart of {props.user.firstName}:</h3>
         <div className="table-responsive-sm">
           <table className="table">
               <tbody>
               {renderItems()}
               </tbody>
           </table>
         </div>
        <div className="shopping-cart-total">
            <h4 className='RalewayBold '>Your total Price : ${props.total}</h4>
            {checkOutButton()}
        </div>
       </div>
    )

};
const MapStateToProps = (state)=>{
    return{
        total:state.cart.totalPrice,
        items : state.cart.products,
        user : state.auth.user
    }
};
export default connect(MapStateToProps ,action)(Cart);
