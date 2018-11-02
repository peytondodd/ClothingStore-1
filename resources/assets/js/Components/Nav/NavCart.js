import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions';
import palet from '../../Assets/Images/pallet.jpg'

import Aux from "../HOC/Aux";
const NavCart = props =>{
    const items = () =>{
      const items = props.items;
      return items.map(item => {
            return(
                <li className="clearfix li-shopping-cart" key={item.id}>
                    <img className={'item-image'} src={palet} alt="item1"/>
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">${item.price}</span>
                    <span className="item-quantity">Quantity: {item.count}</span>
                </li>
            )
      })
    };
return(
    <Aux>
        <div className="container-cart">
            <div className="shopping-cart">
                <div className="shopping-cart-header">
                    <i className="fa fa-shopping-cart cart-icon"> </i><span className="badge">{props.totalItems}</span>
                    <div className="shopping-cart-total">
                        <span className="lighter-text">Total:</span>
                        <span className="main-color-text">${props.totalPrice}</span>
                    </div>
                </div>

                <ul className="shopping-cart-items">
                    {items()}
                </ul>

                <a href="#" className="button">Checkout</a>
            </div>
        </div>
    </Aux>

)


};
const MapStateToProps = (state) =>{
    return{
        items : state.cart.products,
        totalPrice: state.cart.totalPrice,
        totalItems : state.cart.totalItems
    }
};

export default  connect(MapStateToProps , actions)(NavCart);
