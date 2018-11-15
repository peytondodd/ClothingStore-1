
import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from "../../actions/adminActions";
import Layout from "../../Components/Layout/Layout";
import Cbanner from "../../Components/Cbanner/Cbanner";
import AdminNav from "../../Components/Nav/AdminNav";
import CategoriesNav from "../../Components/Nav/CategoriesNav";
import CategoriesTable from "../../Components/tables/CategoriesTable";
import CreateCategoryForm from "../../Components/Form/CreateCategoryForm";

class CreateCategory extends Component {

    render(){
        return(
            <Layout>
                <Cbanner>Create Categories</Cbanner>
                <AdminNav/>
                <CategoriesNav/>
                <CreateCategoryForm/>
            </Layout>
        )
    }

}


export default connect(null,actions)(CreateCategory);
