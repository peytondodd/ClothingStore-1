import React from 'react';
import {connect } from 'react-redux'
import './Cart.css'
import * as action from '../../actions'
import Palet from '../../Assets/Images/pallet.jpg'
const Cart  = (props) => {
    const renderItems = () =>{
        const items = props.items;
       return items.map(item =>{
            return(
                <tr key={item.id} className='align-td-middle'>
                    <td><img src={Palet} className='img-custom-table' alt=""/></td>
                    <td>{item.name}</td>
                    <td><div className="input-group input-group-sm  custom-table-width">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">-</span>
                        </div>
                        <input type="number" name='count' value={item.count} className="form-control amountForm" aria-label="Sizing example input"
                               aria-invalid={"false"}
                               aria-describedby="inputGroup-sizing-sm" />
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">+</span>
                        </div>
                    </div></td>
                     <td>${totalPrice(item.price , item.count)}</td>
                </tr>
            )
        })
    };

    const totalPrice =(price , amount)=> price * amount;

    return(
       <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
           <h3 className='shopping-cart-name RalewayBold'>Shopping Cart of {props.user.firstName}:</h3>
         <div className="table-responsive-sm">
           <table className="table">
               <tbody>
               {renderItems()}
               </tbody>
           </table>
         </div>
       </div>
    )

};
const MapStateToProps = (state)=>{
    return{
        items : state.cart.products,
        user : state.auth.user
    }
};
export default connect(MapStateToProps ,action)(Cart);
