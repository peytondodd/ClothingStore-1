import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from "../../../actions/adminActions";
import Layout from "../../../Components/Layout/Layout";
import Cbanner from "../../../Components/Cbanner/Cbanner";
import AdminNav from "../../../Components/Nav/AdminNav";
import CreateForm from "../../../Components/Form/CreateProductForm";

class CreateProduct extends Component {

    render(){
        return(
            <Layout>
                <Cbanner>Create Product</Cbanner>
                <AdminNav/>
                <CreateForm/>
            </Layout>
        )
    }

}


export default connect(null,actions)(CreateProduct);
