import React from 'react'
import Aux from "../HOC/Aux";
import Item from "../Item/Item";
import {connect} from 'react-redux'
import * as actions from "../../actions/index";
import './Products.css'
import {Zoom} from 'react-reveal'
import {FaSearch} from "react-icons/fa";
const Products = (props) =>{
  const renderProducts =  () =>{
    let filter = props.filter;
    let search = props.search;
    if(search && filter.length){
        return filter.map(product =>{
            if(product.images){
                return (
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12' key={product.id}>
                        <Zoom ssrFadeout={true}>
                            <Item href={'/products/'+product.id+'/'+product.name.replace(/ +/g, "")}
                                  showCurrency={true}
                                  stars={product.stars}
                                  price={product.price}
                                  image={product.images.url}>
                                {product.name}
                            </Item>
                        </Zoom>
                    </div>
                )
            }
        }
        )
    }
    if(search && !filter.length){
        return <span>Sorry no results are found</span>
    }
    else{
        console.log(props.products);
      return props.products.map(product =>{
          if(product.images){
              return (
                  <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12' key={product.id}>
                      <Zoom ssrFadeout={true}>
                          <Item href={'/products/'+product.id+'/'+product.name.replace(/ +/g, "")}
                                showCurrency={true}
                                stars={product.stars}
                                price={product.price}
                                image={product.images.url}>
                              {product.name}
                          </Item>
                      </Zoom>
                  </div>
              )
          }
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
                            <div className="search-container searchbar-custom">
                                <div className="search-icon-btn border-raduis">
                                    <FaSearch/>
                                </div>
                                <div className="search-input">
                                    <input
                                        type="search"
                                        className="search-bar searchbar-custom"
                                        placeholder="Search for product..."
                                        onChange={(e) => props.searchProducts(e.target.value)}
                                        value={props.value}/>
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        {renderProducts()}

                    </div>
                </div>
            </Aux>
        );
};

export default connect(null , actions)(Products)
