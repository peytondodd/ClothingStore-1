import React from 'react';
import './MainBanner.css'
import Aux from '../../Components/HOC/Aux'
import {Link} from 'react-router-dom'
const MainBanner = (props) =>{
    const style = {
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        minHeight:"500px",
        display:"flex",
        alignItems:"center",
        backgroundImage:`url(${props.img})`,
        marginBottom:"0",
    };

    return(
        <Aux>
            <div className="jumbotron jumbotron-fluid" style={style}>

                    <div className="ButtonMiddle">
                    <Link to={`/categories/3/Schoenen`}><button className="mainButton RalewayExtraBold">{props.children}</button></Link>

                </div>
            </div>
        </Aux>
    )



};

export default MainBanner;
