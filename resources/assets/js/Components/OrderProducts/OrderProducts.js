import React from 'react';
import {FaStar} from "react-icons/fa";
import Palet from "../../Assets/Images/pallet.jpg";
import Aux from '../../Components/HOC/Aux'

const OrderProducts = (props) =>{

   const stars = (amount) =>{
        let stars =[];
        for(let i = 0; i < amount; i++) {
            stars.push(<FaStar key={i}/>);
        }
        return stars;
    };

    const totalPrice = (price , amount) => price * amount;


    const renderProducts =() =>{
        if(props.order.order_product){
            const {order} = props;
            const products = order.order_product;
            return products.map(product =>{
                const productObj = product.product;
                console.log(product);
                return(
                    <li className="list-group-item display-flex" key={productObj.id}>
                        <div className="order-information RalewayExtraBold mb-15">
                            <img  src={`/storage/Product/Images/${product.product.images.url}`} className={'order-image'} alt=""/>
                        </div>
                        <div className="product-info RalewayBold ml-2">
                            <span>{productObj.name}</span>
                            <span>Price : ${productObj.price}</span>
                            <span>Ordered : {product.Quantity}</span>
                            <span>{stars(productObj.stars)}</span>
                            <span>{productObj.categories.name}</span>
                        </div>
                        <div className={'order-product-box'}>
                            <div className='order-product-child'>
                                <p className='RalewayBold order-status'>${totalPrice(productObj.price , product.Quantity)}</p>
                            </div>
                        </div>
                    </li>
                )
            })
        }
        return(
            <div>

            </div>
        )

    };

    return (
        <Aux>
            {renderProducts()}
        </Aux>
    );
}
export default OrderProducts;
