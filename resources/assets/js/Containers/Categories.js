import React, { Component } from 'react';
import Aux from '../Components/HOC/Aux'
import Cbanner from '../Components/Cbanner/Cbanner'
import {connect} from 'react-redux'
import * as actions from '../actions'
import Products from "../Components/Products/Products";
import Layout from "../Components/Layout/Layout";


class Category extends Component {
    constructor(props){
        super(props);
        this.state ={
            search:false
        }
    }
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

    showLowRated(){
        return this.props.SORT_LOWRATED();
    }
    showTopRated(){
       return this.props.SORT_TOPRATED();
    }

    showHighToLow(){
        return this.props.SORT_HIGHTOLOW();
    }
    showLowToHigh(){
        return this.props.SORT_LOWTOHIGH();

    }
    searchProducts(string){
            if(string !== ''){
                this.setState({search:true});
                return this.props.SEARCH_PRODUCTS(string);
            }
            else{
                this.setState({search:false});
            }

    }

    render() {
        const id = this.props.match.id;
        return (
            <Layout>
                <Cbanner href={`/categories/${this.props.category.id}/${this.props.category.name}`}>{this.props.category.name}</Cbanner>

                <Products  search={this.state.search} filter={this.props.filter} searchProducts={(string)=>{this.searchProducts(string)}} showLowRated={()=>{this.showLowRated()}} showHighToLow={()=>{this.showHighToLow()}} showLowToHigh={()=>{this.showLowToHigh()}}  showTopRated={()=>{this.showTopRated()}} products={this.props.products}/>
            </Layout>
        );
    }
}

const mapStateToProps = state =>({
    category: state.category.category,
    products : state.products.products,
    filter : state.products.filter
});

export default connect(mapStateToProps, actions)(Category);
