import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from "../../actions/adminActions";
import Layout from "../../Components/Layout/Layout";
import Cbanner from "../../Components/Cbanner/Cbanner";
import AdminNav from "../../Components/Nav/AdminNav";
import EditProductForm from "../../Components/Form/EditProductForm";
import EditCategoriesForm from "../../Components/Form/EditCategoriesForm";

class EditCategory extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.fetchCategory(id);
    }
    render(){
        const {category} =this.props;
        console.log(`category name = ${category.name}`)
        const OGdata={
            name : category.name

        };

        const id = this.props.match.params.id;
        console.log(this.props.product);
        return(
            <Layout>
                <Cbanner>Edit Category #{id}</Cbanner>
                <AdminNav/>
                <EditCategoriesForm id={id} OGdata={OGdata}/>
            </Layout>
        )
    }

}

const MapStateToProps = state =>{
    return {
        category : state.admin.category
    }
};
export default connect(MapStateToProps,actions)(EditCategory);
