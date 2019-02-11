import React from 'react';
import './Images.css'
import Aux from '../../Components/HOC/Aux'
import {Link} from 'react-router-dom'
const Images = (props) =>{
    return(
        <Aux>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 m-0 p-0">
                <div className="img-con">
                    <div className="ButtonMiddle">
                    <Link to={props.link}><img className="img-fluid" src={props.img} alt={props.alt}/></Link>

                    <Link to={props.link}  className='btn-img RalewayExtraBold NOHREF'>{props.children}</Link>
                    </div>
                </div>
            </div>
        </Aux>
    )



};

export default Images;
