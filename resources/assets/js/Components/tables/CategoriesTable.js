import React from 'react';
import * as actions from "../../actions/adminActions";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
const CategoriesTable  = (props) => {
    const renderProducts = () =>{
        const categories = props.categories;
        if(categories && categories.data){
            return categories.data.map(category =>{
                return(
                    <tr key={category.id}>
                        <th scope="row">{category.id}</th>
                        <td>{category.name}</td>
                        <td>
                            <Link to={`/admin/categories/${category.id}`}> <button className={'btn btn-warning'} >Update</button></Link>
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
            <div className="table-responsive">
                <table className="table table-hover table-bordered-custom">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope='col'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderProducts()}
                    </tbody>
                </table>
            </div>
        </div>
    )

};


const mapStateToProps = state =>({
    categories: state.admin.categories,
});
export default connect(mapStateToProps)(CategoriesTable);
