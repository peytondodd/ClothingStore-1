import React from 'react';
import "./Nav.css"
import {Link} from 'react-router-dom'
import Pagination from 'rc-pagination';
import {connect} from 'react-redux'
import * as actions from '../../actions/adminActions'
import 'rc-pagination/assets/index.css';
import Aux from "../HOC/Aux";
class ProductNav  extends React.Component{
    state = {
        current: 1,
    };

    componentDidMount(){
        return this.props.fetchProducts(this.state.current);
    }

    onChange = (page) => {
        this.setState({
            current: page,
        },()=>{this.props.fetchProducts(this.state.current)})

    };

    render(){
        return(
        <div className='product-Nav'>
            <Link className='RalewayBold createbutton' to={'/admin/products/create'}>Create</Link>
            <Pagination className={'my-auto'} pageSize={30} onChange={this.onChange} current={this.state.current} total={this.props.total} />
        </div>
    )
    }
}

const MapStateToProps = state =>{
    return{
        total:state.aproducts.total,

    }
};

export default connect(MapStateToProps , actions)(ProductNav);
