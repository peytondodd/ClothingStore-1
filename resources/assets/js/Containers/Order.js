import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions'
import Layout from "../Components/Layout/Layout";
import Cbanner from '../Components/Cbanner/Cbanner'
import Palet from '../Assets/Images/pallet.jpg'
import Moment from "moment";
import {Link} from "react-router-dom";
import './Register.css'
import {FaStar} from "react-icons/fa";
class AllOrder extends React.Component{


    componentDidMount(){
        this.props.fetchOrder(this.props.match.params.id);
    }
    stars = (amount) =>{
        let stars =[];
        for(let i = 0; i < amount; i++) {
            stars.push(<FaStar key={i}/>);
        }
        return stars;
    };

    totalPrice = (price , amount) => price * amount;

    getTotalPrice = (array) =>{
        if(array){
         let totalPrices = 0;
        array.forEach( p => totalPrices += (p.product.price * p.Quantity));
         return totalPrices;
        }
};

    renderProducts(){
      const {order} = this.props;
        const products = order.order_product;
          if(products){
              return products.map(product =>{
                  const productObj = product.product;
                  console.log(product);
                  return(
                      <li className="list-group-item display-flex" key={productObj.id}>
                          <div className="order-information RalewayExtraBold mb-15">
                              <img src={Palet} className={'order-image'} alt=""/>
                          </div>
                         <div className="product-info RalewayBold ml-2">
                             <span>{productObj.name}</span>
                             <span>Price : ${productObj.price}</span>
                             <span>Ordered : {product.Quantity}</span>
                             <span>{this.stars(productObj.stars)}</span>
                             <span>{productObj.categories.name}</span>
                         </div>
                          <div className={'order-product-box'}>
                              <div className='order-product-child'>
                                  <p className='RalewayBold order-status'>${this.totalPrice(productObj.price , product.Quantity)}</p>
                              </div>
                          </div>
                      </li>
                  )
              })
          }
        }
    render(){
        const {id } = this.props.match.params;
        const {order} = this.props;
    return(
        <Layout>
            <Cbanner>
               Order #{id}
            </Cbanner>
            <div className="statusbar my-auto">
                <h2 className={'RalewayBold'}>{Moment(order.created_at).format('D MMMM Y')}</h2>
            </div>
            <div className="container">

            <div className="row">
                <div className="col-12">
                    <ul className="list-group mt-2">
                    {this.renderProducts()}
                    </ul>
                    <h2>total:{this.getTotalPrice(this.props.order.order_product)}</h2>
                </div>
            </div>
                <div className="row">

                </div>
            </div>
        </Layout>
    );
    }


}







const MapStateToProps = state =>{
    return{
        order: state.orders.order,
        user:state.auth.user
    }
};

export default connect(MapStateToProps, actions)(AllOrder);
