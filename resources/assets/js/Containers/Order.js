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
import OrderProducts from "../Components/OrderProducts/OrderProducts";
import OrderInformation from "../Components/OrderProducts/OrderInformation";
class AllOrder extends React.Component{


    componentDidMount(){
        this.props.fetchOrder(this.props.match.params.id);
    }
    render(){
        const {id } = this.props.match.params;
        const {order} = this.props;
        console.log(order);
    return(
        <Layout>
            <Cbanner>
               Order #{id}
            </Cbanner>
            <div className="statusbar my-auto">
                <h2 className={'RalewayBold'}>{Moment(order.created_at).format('D MMMM Y')}</h2>
            </div>
            <div className="container">

            <div className="row my-3">
                <div className="col-12">
                    <ul className="list-group mt-2">
                    <OrderProducts order={this.props.order} user={this.props.user}/>
                    </ul>
                </div>
            </div>
                <div className="row my-3">
                    <OrderInformation order={order}/>
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
