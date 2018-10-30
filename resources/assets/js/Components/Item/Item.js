import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import Aux from '../../Components/HOC/Aux';
import Palet from '../../Assets/Images/pallet.jpg';
import {Fade} from "react-reveal";


const Item = (props) => {

    const stars = (amount) =>{
        let stars =[];
     for(let i = 0; i < amount; i++) {
       stars.push(<FaStar key={i}/>);
    }
    return stars;
    };

    return(
        <Fade up>
        <Link className={'NOHREF'} to={props.href}>
            <div className="product-container">
                    <img src={Palet} alt="" className="product-image"/>
                      <p className="product-price">{props.dollar}{props.price}</p>
                    <div className='product-stars'>
                    {stars(props.stars)}
                    </div>
                    <p className="product-title">{props.children}</p>
                  </div>
        </Link>
        </Fade>
    )


};


export default Item;
