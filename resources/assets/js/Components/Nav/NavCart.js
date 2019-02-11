import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions';
import palet from '../../Assets/Images/pallet.jpg'
import {Link} from 'react-router-dom';
import Aux from "../HOC/Aux";
import {FaShoppingCart} from "react-icons/fa";
const NavCart = props =>{
    console.log(props.isOpen);
    const items = () =>{
      const items = props.items;
      return items.map(item => {
          console.log(item);
            return(
                <li className="clearfix li-shopping-cart" key={item.id}>
                    <img className={'item-image'} src={`/images/default.jpg`} alt="item1"/>
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">${item.price}</span>
                    <span className="item-quantity">Quantity: {item.count}</span>
                </li>
            )
      })
    };
return(
    <Aux>
        <div className={"dropdown shoppingCart "  + (props.isOpen ? "show" : '')}>
        <FaShoppingCart

            size={20}
            className='shoppingCart'
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={(props.isOpen ? "true" : 'false')}/>
        <div className={"dropdown-menu dropdown-menu-left " + (props.isOpen ? "show" : '')} aria-labelledby="dropdownMenuButton">

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

                <Link to={'/checkout'} className="button">Checkout</Link>
            </div>
        </div>

        </div>
    </div>
    </Aux>

)


};
const MapStateToProps = (state) =>{
    return{
        items : state.cart.products,
        totalPrice: state.cart.totalPrice,
        totalItems : state.cart.totalItems,
        isOpen : state.cart.isOpen
    }
};

export default  connect(MapStateToProps , actions)(NavCart);
