import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from "../../actions/adminActions";

class AdminProducts extends Component {

    componentDidMount(){
       return this.props.fetchProducts();
    }
    render(){
        return(
            <div>
                hello
            </div>
        )
    }

}


const mapStateToProps = state =>({
    product: state.products.product,
});
export default connect(mapStateToProps,actions)(AdminProducts);
