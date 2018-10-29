import React from 'react'
import Aux from "../HOC/Aux";
import Item from "../Item/Item";
import LazyLoad from 'react-lazyload'
import {connect} from 'react-redux'
import * as actions from "../../actions/productAction";
import './Products.css'
import {Fade} from 'react-reveal'
const Products = (props) =>{
  const ShowDollar = (isTrue) =>{
        if (isTrue === true){
            return "$";
        }
        else {
            return null;
        }
    };
        return (
            <Aux>
                <div className='container-fluid'>
                    <div className="container">
                    <div className="btn-group">
                        <button className="btn btn-lg dropdown-toggle btnCustom" type="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" onClick={props.showTopRated} >Top Rated</a>
                            <a className="dropdown-item" >Price low to high</a>
                            <a className="dropdown-item" >Price high to low</a>
                        </div>
                    </div>
                    </div>
                    <div className="row">

                        {props.products.map(product =>
                            <LazyLoad height={200} key={product.id}>
                            <Fade up>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12'>
                                <Item href={'/products/'+product.id+'/'+product.name.replace(/ +/g, "")}

                                      stars={product.stars}
                                    price={product.price}
                                    dollar={ShowDollar(true)}>
                                    {product.name}
                                </Item>
                            </div>

                            </Fade>
                            </LazyLoad>
                        )}
                    </div>
                </div>
            </Aux>
        );
};

export default connect(null , actions)(Products)
