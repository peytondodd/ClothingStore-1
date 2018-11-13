
import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from "../../actions/adminActions";
import Layout from "../../Components/Layout/Layout";
import Cbanner from "../../Components/Cbanner/Cbanner";
import AdminNav from "../../Components/Nav/AdminNav";
import ProductsTable from "../../Components/tables/ProductsTable";
import ProductNav from "../../Components/Nav/ProductNav";
import CategoriesNav from "../../Components/Nav/CategoriesNav";
import CategoriesTable from "../../Components/tables/CategoriesTable";

class AdminCategories extends Component {

    render(){
        return(
            <Layout>
                <Cbanner>Admin Panel</Cbanner>
                <AdminNav/>
                <CategoriesNav/>
                <CategoriesTable/>
            </Layout>
        )
    }

}


export default connect(null,actions)(AdminCategories);
