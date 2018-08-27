import React, {Component} from 'react';
import axios from 'axios';
import Aux from '../HOC/Aux'
import './Product.css'

import ReactImageMagnify from 'react-image-magnify';

class Product extends Component {
    state = {
        products: [],
        categories: []
    };

    componentDidMount() {

        axios.get(`http://localhost:8000/api/products/` + this.props.id)

            .then(res => {
                const products = res.data;
                this.setState({products});
                const categories = products.categories;
                this.setState({categories});
                console.log(categories.name);
                console.log(products.name)


            });

    }

    ShowDollar = (isTrue) => {
        if (isTrue === true) {
            return "$";
        }
        else {
            return null;
        }
    };


    render() {

        const products = this.state.products;
        let category = this.state.categories;
        return (
            <Aux>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a
                            href={"/categories/" + category.id + '/' + category.name}>{category.name}</a>
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

export default Product;
