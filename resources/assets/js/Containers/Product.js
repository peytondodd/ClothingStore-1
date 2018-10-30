import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchProduct} from "../actions/productAction";
import { Link } from 'react-router-dom'
import Palet from '../Assets/Images/pallet.jpg'
import Layout from "../Components/Layout/Layout";
import {FaStar} from "react-icons/fa";
class Product extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchProduct(id);

    }

     stars = (amount) => {
         let stars = [];
         for (let i = 0; i < amount; i++) {
             stars.push(<FaStar key={i}/>);
         }
     };
    ShowDollar = (isTrue) => {
        if (isTrue === true) {
            return "$";
        }
        else {
            return null;
        }
    };
    renderCategories() {
        const products = this.props.product;
        const categories = products.categories;
        if(categories){
            return(
                <li className="breadcrumb-item RalewayExtraBold">
                    <Link
                    to={`/categories/${categories.id}/${categories.name}`}>{categories.name}</Link>
                </li>
            )
        }
    }

    render() {

        const products = this.props.product;
        {console.log(products)}
        return (
            <Layout>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item RalewayExtraBold"><Link to="/">Home</Link></li>
                        {this.renderCategories()}
                        <li className="breadcrumb-item active RalewayExtraBold" aria-current="page">{products.name}</li>
                    </ol>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <img className='img-fluid' src={Palet} alt=""/>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
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
            </Layout>
        );
    }
}


const mapStateToProps = state =>({
    product: state.products.product
});
export default connect(mapStateToProps,{fetchProduct})(Product);
