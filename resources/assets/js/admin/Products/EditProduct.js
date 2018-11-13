import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from "../../actions/adminActions";
import Layout from "../../Components/Layout/Layout";
import Cbanner from "../../Components/Cbanner/Cbanner";
import AdminNav from "../../Components/Nav/AdminNav";
import ProductsTable from "../../Components/tables/ProductsTable";
import EditProductForm from "../../Components/Form/EditProductForm";

class AdminProducts extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
         this.props.fetchProduct(id);
    }
    render(){
        const {product} =this.props;
        const OGdata={
            name : product.name,
            price : product.price,
            stars : product.stars,
            description : product.description,
            amount : product.amount,

        };

        const id = this.props.match.params.id;
            console.log(this.props.product);
        return(
            <Layout>
                <Cbanner>Edit Product #{id}</Cbanner>
                <AdminNav/>
                <EditProductForm id={id} OGdata={OGdata}/>
            </Layout>
        )
    }

}

const MapStateToProps = state =>{
    return {
        product : state.admin.product
    }
};
export default connect(MapStateToProps,actions)(AdminProducts);
