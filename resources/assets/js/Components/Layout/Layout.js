import React from 'react'
import Aux from "../HOC/Aux";
import Nav from "../Nav/Nav";

const Layout =  (props) =>{

    return(
        <Aux>
            <Nav/>
        <div className={props.container}>
            {props.children}
        </div>
        </Aux>
    )
}
export default Layout
