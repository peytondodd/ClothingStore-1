import React from 'react';
import * as actions from "../../actions/adminActions";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
const ProductsTable  = (props) => {
    const renderProducts = () =>{
      const products = props.products;
    if(products && products.data){
        return products.data.map(product =>{
            return(
                <tr key={product.id}>
                    <th scope="row">{product.id}</th>
                    <td>{product.name}</td>
                    <td>{product.categories.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stars}</td>
                    <td>{product.amount}</td>
                    <td>{product.description}</td>
                    <td>
                        <Link to={`/admin/product/${product.id}`}> <button className={'btn btn-warning'} >Update</button></Link>
                    </td>
                </tr>
            )
        })
    }
    else{
        return(
             <tr>

            </tr>
        )
    }


    };

    return(
        <div className="container">
        <table className="table table-hover table-bordered-custom">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Categorie</th>
                <th scope="col">Price</th>
                <th scope="col">Stars</th>
                <th scope="col">Amount</th>
                <th scope="col">description</th>
                <th scope='col'>Action</th>
            </tr>
            </thead>
            <tbody>
            {renderProducts()}
            </tbody>
        </table>
        </div>
    )

};


const mapStateToProps = state =>({
    products: state.aproducts.products,
});
export default connect(mapStateToProps)(ProductsTable);
