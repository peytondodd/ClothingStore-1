import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../HOC/Aux'
import Item from '../Item/Item'
import Cbanner from '../Cbanner/Cbanner'
import {connect} from 'react-redux'
import {fetchCategory} from "../../actions/categoryAction";
import PropTypes from 'prop-types'

class Category extends Component {
    componentDidMount() {
        this.props.fetchCategory(this.props.id)
    }

    showParams = () =>{
        return this.props.id
    };

    render() {
        return (
          <Aux>
              <Cbanner>{this.props.category.name}</Cbanner>
          </Aux>
        );
    }
}
const mapStateToProps = state =>({
    category: state.category.category,
    products : state.products.products
});

export default connect(mapStateToProps,{fetchCategory})(Category);
