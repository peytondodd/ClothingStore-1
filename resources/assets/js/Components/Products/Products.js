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
  const renderProducts =  () =>{
    let filter = props.filter;
    let search = props.search;
    if(search && filter.length){
        return filter.map(product =>{
            return (<LazyLoad height={200} key={product.id}>
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
        )
    }
    if(search && !filter.length){
        return <span>Sorry no results are found</span>
    }
    else{
        console.log(props.products);
      return props.products.map(product =>{
          return(
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
          )
      })
    }
  };
        return (
            <Aux>
                <div className='container-fluid'>

                        <div className="flex-filterbar">
                    <div className="btn-group">
                        <button className="btn btn-lg dropdown-toggle btnCustom" type="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" onClick={props.showLowRated} >Low Rated</a>
                            <a className="dropdown-item" onClick={props.showTopRated} >Top Rated</a>
                            <a className="dropdown-item" onClick={props.showLowToHigh}>Price low to high</a>
                            <a className="dropdown-item" onClick={props.showHighToLow}>Price high to low</a>
                        </div>
                    </div>
                        <input
                            className="form-control searchbar-custom"
                            placeholder = "Search for product ..."
                            onChange={(e) => props.searchProducts(e.target.value)}
                            value={props.value} />
                    </div>
                    <div className="row">

                        {renderProducts()}
                    </div>
                </div>
            </Aux>
        );
};

export default connect(null , actions)(Products)
