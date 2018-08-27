import React from 'react';
import './Images.css'
import Aux from '../../Components/HOC/Aux'

const Images = (props) =>{
    return(
        <Aux>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 m-0 p-0">
                <div className="img-con">
                    <div className="ButtonMiddle">
                    <a href={props.link}><img className="img-fluid" src={props.img} alt={props.alt}/></a>

                    <a  className='btn-img RalewayExtraBold'>{props.children}</a>
                    </div>
                </div>
            </div>
        </Aux>
    )



};

export default Images;
