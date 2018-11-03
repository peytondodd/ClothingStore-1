import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions/'
const Orders = (props) =>{


    return(
        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
            <div className="information-wrapper">
                <h3 className='information-head RalewayBold text-center'>My Orders:</h3>

            </div>
        </div>
    );



};







const MapStateToProps = state =>{
    return{
        user:state.auth.user
    }
};

export default connect(MapStateToProps, actions)(Orders);
