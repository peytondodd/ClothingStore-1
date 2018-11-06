import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions'
import Layout from "../Components/Layout/Layout";
import Cbanner from '../Components/Cbanner/Cbanner'
import Moment from "moment";
import {Link} from "react-router-dom";
import './Register.css'
class AllOrder extends React.Component{


    componentDidMount(){
        this.props.fetchOrder(this.props.match.params.id);
    }
    renderProducts(){
      const {order} = this.props;
        const products = order.orders_product;
          return products.map(product =>{
              const productObj = product.product;
                return(
                    <div className="card">
                        <div className="card-body">
                            {productObj.name}
                        </div>
                    </div>
                )
            })
        }
    render(){
        const {id } = this.props.match.params;
        const {order} = this.props;
    return(
        <Layout>
            <Cbanner>
               Order #{id}
            </Cbanner>
            <div className='background-grey'>
            <div className="statusbar">
                <h2 className={'RalewayBold'}>{Moment(order.created_at).format('D MMMM Y')}</h2>
            </div>
            <div className="container">

            <div className="row">
                <div className="col-12">
                    {this.renderProducts()}
                </div>
            </div>
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
