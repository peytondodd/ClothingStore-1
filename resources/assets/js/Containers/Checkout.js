import React from 'react';
import Layout from "../Components/Layout/Layout";
import Cart from "../Components/Checkout/Cart";
import Cbanner from '../Components/Cbanner/Cbanner';

const CheckOut  = (props) => {
    return(
        <Layout>
            <Cbanner >Checkout</Cbanner>
            <div className="container">
                <div className="row">
                    <Cart/>

                </div>
                

            </div>
        </Layout>
    )

};


export default CheckOut;
