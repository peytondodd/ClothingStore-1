import React from 'react';
import './Item.css';
import Aux from '../../Components/HOC/Aux';
import Palet from '../../Assets/Images/pallet.jpg';


const Item = (props) => {


    return(

        <Aux>
            <a className="NOHREF" href={props.href}>
            <div className="product-container">
                    <img src={Palet} alt="" className="product-image"/>
                      <p className="product-price">{props.dollar}{props.price}</p>
                    <p className="product-stars"> {props.stars}</p>
                    <p className="product-title">{props.children}</p>
                  </div>
            </a>
        </Aux>
    )


};


export default Item;
