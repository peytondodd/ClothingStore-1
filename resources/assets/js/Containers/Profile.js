import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/'
import Layout from "../Components/Layout/Layout";
import Cbanner from '../Components/Cbanner/Cbanner'
import Gegevens from "../Components/Profile/Gegevens";
import Orders from "../Components/Profile/Orders";
const Profile = (props) =>{


return(
    <Layout>
       <Cbanner>
           Welcome! {props.user.firstName}
       </Cbanner>
        <div className="container">
        <div className="row">
            <Gegevens/>
            <Orders/>

        </div>
        </div>
    </Layout>
    );



};







const MapStateToProps = state =>{
    return{
        user:state.auth.user
    }
};

export default connect(MapStateToProps, actions)(Profile);
