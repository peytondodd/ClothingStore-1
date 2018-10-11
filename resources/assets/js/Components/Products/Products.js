import React from 'react'
import Aux from "../HOC/Aux";
import Item from "../Item/Item";
import { Link } from 'react-router-dom'
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
                    <div className="row">
                        {props.products.map(product =>

                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12'>
                                <Link className='NOHREF' to={'/products/'+product.id+'/'+product.name.replace(/ +/g, "")}>
                                <Item

                                    price={product.price}
                                    dollar={ShowDollar(true)}
                                >
                                    {product.name}
                                </Item>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </Aux>
        );
};

export default Products
