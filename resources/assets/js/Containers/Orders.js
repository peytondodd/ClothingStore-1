import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/'
import Layout from "../Components/Layout/Layout";
import Cbanner from '../Components/Cbanner/Cbanner'
import Gegevens from "../Components/Profile/Gegevens";
import AllOrders from "../Components/Orders/AllOrders";

class Orders extends React.Component {

    componentDidMount(){
        this.props.fetchUserOrders();
    }
    render() {
        return (
            <Layout>
                <Cbanner>
                    Your Orders!
                </Cbanner>
                <div className="container">
                    <AllOrders/>
                </div>
            </Layout>
        );
    }


}
const MapStateToProps = state =>{
    return{
        user:state.auth.user
    }
};

export default connect(MapStateToProps, actions)(Orders);
