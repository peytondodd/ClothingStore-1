import React from 'react';
import './Cbanner.css'
import Aux from '../../Components/HOC/Aux'

const Cbanner = (props) =>{

    return(
        <Aux>
            <a className="NOHREF" href={props.href}>
          <div className="banner">
              <div className="container">
              <h1 className='RalewayBold my-auto mx-auto'>{props.children}</h1>
          </div>
            </div>
            </a>
        </Aux>
    )



};

export default Cbanner;
