import React from 'react';
import Nav from '../../Components/Nav/Nav'
import Aux from '../../Components/HOC/Aux'
import Category from "../../Components/Category/Category";
import Products from '../../Components/Products/Products'
const Categories = ({match}) => {
    return (
        <Aux>
            <Nav/>
           <Category id={match.params.id}/>
            <Products id={match.params.id}/>
        </Aux>
    )


};

export default Categories;