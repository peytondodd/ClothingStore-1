import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom'
import Aux from '../../Components/HOC/Aux';
import Palet from '../../Assets/Images/pallet.jpg';


const Item = (props) => {


    return(

        <Link className={'NOHREF'} to={props.href}>
            <div className="product-container">
                    <img src={Palet} alt="" className="product-image"/>
                      <p className="product-price">{props.dollar}{props.price}</p>
                    <p className="product-stars"> {props.stars}</p>
                    <p className="product-title">{props.children}</p>
                  </div>
        </Link>
    )


};


export default Item;
