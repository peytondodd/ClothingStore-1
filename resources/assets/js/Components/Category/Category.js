import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../HOC/Aux'
import Item from '../Item/Item'
import Cbanner from '../Cbanner/Cbanner'
import Product from "../Product/Product";
class Category extends Component {
    state = {
        category: [],
        products:[]
    };
    componentDidMount() {

        axios.get(`http://localhost:8000/api/categories/`+this.props.id)

            .then(res => {
                const category = res.data;
                const products = category.products;

                this.setState({ category });
                this.setState({ products});



            });

    }
    ShowDollar = (isTrue) =>{
        if (isTrue === true){
            return "$";
        }
        else {
            return null;
        }
    };
    showParams = () =>{
        return this.props.id
    }
    render() {
        return (
          <Aux>

              <Cbanner>{this.state.category.name}</Cbanner>
              <div className='container-fluid'>
                  <div className="row">
              {this.state.products.map(product =>
                    <div className='col-4'>
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

export default Category;
