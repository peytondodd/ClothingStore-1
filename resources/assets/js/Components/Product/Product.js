import React, {Component} from 'react';
import axios from 'axios';
import Aux from '../HOC/Aux'
import './Product.css'
import {connect} from 'react-redux'
import {fetchProduct} from "../../actions/productAction";

import ReactImageMagnify from 'react-image-magnify';

class Product extends Component {

    componentDidMount() {
        this.props.fetchProduct(this.props.id)

    }

    ShowDollar = (isTrue) => {
        if (isTrue === true) {
            return "$";
        }
        else {
            return null;
        }
    };
    renderCategories() {
    }

    render() {

        const products = this.props.product;
        const categories = this.props.category;


        return (
            <Aux>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a
                            href={"/categories/" + 'categorie.id' + '/' + 'categorie.name'}>category.name</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{products.name}</li>
                    </ol>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: require('./pallet.jpg')
                                },
                                largeImage: {
                                    src: require('./pallet.jpg'),
                                    width: 1200,
                                    height: 1800
                                }
                            }} />

                        </div>
                        <div className="col-6">
                            <h2 className="Item-title">{products.name}</h2>
                            <p className="text-center">
                                ${products.price}

                            </p>
                            <p className="text-center mt-3">
                                {products.description}
                            </p>
                            <button className='btn btn-primary'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}


const mapStateToProps = state =>({
  product: state.products.product,
    category: state.category.category
});
export default connect(mapStateToProps,{fetchProduct})(Product);
