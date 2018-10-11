import React, {Component} from 'react';
import Aux from '../HOC/Aux'
import  {connect} from 'react-redux'
import {fetchCategoryProducts} from "../../actions/productAction";
import Item from "../Item/Item";

class Products extends Component {
    componentDidMount(){
        this.props.fetchCategoryProducts(this.props.id);
    }
    ShowDollar = (isTrue) =>{
        if (isTrue === true){
            return "$";
        }
        else {
            return null;
        }
    };
    render() {
        return (
           <Aux>
               <div className='container-fluid'>
                   <div className="row">
                       {this.props.products.map(product =>
                           <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12' key={product.id}>
                               <Item
                                   href={'/products/'+product.id+'/'+product.name.replace(/ +/g, "")}
                                   price={product.price}
                                   dollar={this.ShowDollar(true)}
                               >
                                   {product.name}
                               </Item>
                           </div>
                       )}
                   </div>
               </div>
           </Aux>
        );
    }
}

const mapStateToProps = state =>({
    products : state.products.products
});

export default connect(mapStateToProps,{fetchCategoryProducts})(Products);
