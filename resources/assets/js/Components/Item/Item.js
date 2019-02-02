import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import Palet from '../../Assets/Images/pallet.jpg';
import LazyLoad from 'react-lazyload'

const Item = (props) => {

    const stars = (amount) =>{
        let stars =[];
     for(let i = 0; i < amount; i++) {
       stars.push(<FaStar key={i}/>);
    }
    return stars;
    };

    const ShowDollar = (isTrue) =>{
        if (isTrue === true){
            return "$";
        }
        else {
            return '';
        }
    };
    return(

        <Link className={'NOHREF'} to={props.href}>
            <div className="product-container">
                <img className={'img-fluid'} src={`/images/${props.image}`} alt=""/>
                <p className="product-price">{ShowDollar(props.showCurrency)}{props.price}</p>
                    <div className='product-stars'>
                    {stars(props.stars)}
                    </div>
                    <p className="product-title">{props.children}</p>
                  </div>
        </Link>
    )


};


export default Item;
