import React, { Component } from 'react';
import Aux from '../Components/HOC/Aux'
import Cbanner from '../Components/Cbanner/Cbanner'
import {connect} from 'react-redux'
import {fetchCategory} from "../actions/categoryAction";
import {fetchCategoryProducts} from "../actions/productAction";
import Products from "../Components/Products/Products";
import Layout from "../Components/Layout/Layout";


class Category extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchCategory(id);
        this.props.fetchCategoryProducts(id);

    }
    componentDidUpdate(prevProp){
        const currentProp = this.props.match.params.id;
        if(prevProp.match.params.id !== currentProp){
            this.props.fetchCategory(currentProp);
            this.props.fetchCategoryProducts(currentProp);
        }
    }

    showParams = () =>{
        return this.props.id
    };

    render() {
        const id = this.props.match.id;
        return (
            <Layout>
                <Cbanner>{this.props.category.name}</Cbanner>
                <Products products={this.props.products}/>
            </Layout>
        );
    }
}
const mapStateToProps = state =>({
    category: state.category.category,
    products : state.products.products
});

export default connect(mapStateToProps,{fetchCategory , fetchCategoryProducts})(Category);
