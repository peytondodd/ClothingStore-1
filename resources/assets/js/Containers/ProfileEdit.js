import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/'
import Layout from "../Components/Layout/Layout";
import Cbanner from '../Components/Cbanner/Cbanner'
import EditForm from "../Components/Form/EditForm";
class ProfileEdit extends React.Component{


    render(){
        const user = this.props.user
        const userData={
            firstName : user.firstName,
            secondName : user.secondName,
            email : user.email,
            address : user.address,
            PostalCode : user.PostalCode,
            country:user.country,
            city:user.city
        };

    return(
        <Layout>
            <Cbanner>
                Edit Account!
            </Cbanner>
            <div className="container">
            <EditForm userData={userData}/>
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

export default connect(MapStateToProps, actions)(ProfileEdit);
