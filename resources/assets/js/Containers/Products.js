import React from 'react';
import Nav from '../Components/Nav/Nav'
import Aux from '../Components/HOC/Aux'
import Product from "../Components/Product/Product";

const Products = ({match}) => {
    return (
        <Aux>
            <Nav />
            <Product id={match.params.id}/>
        </Aux>
    )


};

export default Products;
