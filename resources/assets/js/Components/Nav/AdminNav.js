import React from 'react';
import "./Nav.css"
import {Link} from 'react-router-dom'
const AdminNav  = (props) => {
    return(
        <div className={'admin-Nav'}>
            <Link className='RalewayBold' to={'/admin/products'}>Products</Link>
        </div>
    )

};


export default AdminNav;
