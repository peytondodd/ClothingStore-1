import React from 'react';
import './Cbanner.css'
import {Link} from 'react-router-dom';
import Aux from '../../Components/HOC/Aux'

const Cbanner = (props) =>{

    return(
        <Aux>
            <Link className="NOHREF" to={props.href}>
          <div className="banner">
              <div className="container">
              <h1 className='RalewayBold my-auto mx-auto'>{props.children}</h1>
          </div>
            </div>
            </Link>
        </Aux>
    )



};

export default Cbanner;
