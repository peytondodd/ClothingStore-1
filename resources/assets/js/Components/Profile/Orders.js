import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions/'
import Moment from 'moment'
import Palet from '../../Assets/Images/pallet.jpg'
import {Link} from 'react-router-dom'
import Aux from "../HOC/Aux";
class Orders extends React.Component{

        componentDidMount(){
            this.props.fetchLatestOrders();
        }
        renderProducts(products){
            const newArray = products.slice(0 , 4);
           return newArray.map(product =>{
                return(
                    <div className='product-child' key={product.id}>
                            <img src={Palet} className={'order-image'} alt=""/>
                    </div>
                        )
            })
        }
        showOrders(){
            const orders = this.props.orders;
            return orders.map(order=>{
            console.log(order);
                        return(
                            <li className="list-group-item" key={order.id}>
                              <div className="order-information RalewayExtraBold">
                                <p className='RalewayBold'>{Moment(order.created_at).format('D MMMM Y')}</p>
                                  <p className='RalewayBold order-status'>Your order is {order.status.body}</p>
                                  <Link className={"RalewayBold NOHREF "} to={`/profile/order/${order.id}`}>> View order
                                  </Link>
                              </div>
                                <div className={'product-box'}>
                                    {this.renderProducts(order.order_product)}
                                </div>
                            </li>
                        )
            })
        }

    render(){
    return(

        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5'>
            <div className="information-wrapper">
                <h5 className='information-head RalewayBold'>Your latest orders:</h5>
                <ul className="list-group">
                    {this.showOrders()}
                </ul>
                <h5 className={'my-3'}><Link className="edit-Information RalewayBold" to={'/profile/orders'}>>View all orders </Link></h5>
            </div>
        </div>
    );
    }









}
const MapStateToProps = state =>{
    return{
       orders:state.orders.orders
    }
};

export default connect(MapStateToProps, actions)(Orders);
