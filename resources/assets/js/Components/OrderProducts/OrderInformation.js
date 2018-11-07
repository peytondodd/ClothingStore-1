import React from 'react';
import Aux from '../../Components/HOC/Aux'
import './OrderProducs.css';

const OrderInformation = (props) => {

   const getTotalPrice = (array) =>{
        if(array){
            let totalPrices = 0;
            array.forEach( p => totalPrices += (p.product.price * p.Quantity));
            return totalPrices;
        }
    };
    const renderInformation = () => {
        const order = props.order;
        const user = order.user;
        const status = order.status;
        if (user && status) {
            return (
                <Aux>
                    <div className="information-wrapper ">
                        <div className="row text-center">
                            <div className="col"><p className='RalewayBold mx-auto'>Status</p></div>
                            <div className="col"><p className='RalewayBold'>Order Number</p></div>
                            <div className="col"><p className='RalewayBold'>total price</p></div>
                        </div>
                        <div className="row text-center">
                            <div className="col">
                                <p className='RalewayBold'>Your order is {order.status.body}</p>
                            </div>
                            <div className="col">
                                <p className='RalewayBold'>{order.id}</p>
                            </div>
                            <div className="col">
                                <p className='RalewayBold'>${getTotalPrice(order.order_product)}</p>
                            </div>
                        </div>

                        <div className="information-wrap">
                        <p className='RalewayBold information-p'>Delivery address</p>
                        <p className='information-p'>{`${user.firstName} ${user.secondName}`}</p>
                        <p className='information-p'>{`${user.address}`}</p>
                        <p className='information-p'>{`${user.PostalCode}`}</p>
                        <p className='information-p'>{`${user.city}`}</p>
                        <p className='information-p'>{`${user.country}`}</p>
                        </div>
                    </div>
                </Aux>
            )
        }
        else {
            return (
                <div>

                </div>
            )
        }
    };

    return (
        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col'>
            <div className="information-box">
                {renderInformation()}
            </div>
        </div>
    )

};

export default OrderInformation;
