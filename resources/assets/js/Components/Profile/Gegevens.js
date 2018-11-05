import React from 'react';
import './Profile.css'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import {Link} from 'react-router-dom'
const Gegevens = (props) =>{


    return(
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
            <div className="information-wrapper ">
            <h3 className='information-head RalewayBold'>My information:</h3>
                <p className='RalewayBold information-p'>Address informations</p>
                <p className='RalewayBold information-p'>Delivery address</p>
                <p className='information-p'>{`${props.user.firstName} ${props.user.secondName}`}</p>
                <p className='information-p'>{`${props.user.address}`}</p>
                <p className='information-p'>{`${props.user.PostalCode}`}</p>
                <p className='information-p'>{`${props.user.city}`}</p>
                <p className='information-p'>{`${props.user.country}`}</p>
                <p className='RalewayBold information-p mt-3'>Personal information</p>
                <div className="personal-information">
                    <p className='RalewayBold information-p '>Name:</p>
                    <p className='information-p align-right'>{`${props.user.firstName} ${props.user.secondName}`}</p>
                </div>
                <div className="personal-information">
                    <p className='RalewayBold information-p '>Phone number:</p>
                    <p className='information-p align-right'>+31642727522</p>
                </div>
                <div className="personal-information">
                    <p className='RalewayBold information-p '>Type account:</p>
                    <p className='information-p align-right'>Private</p>
                </div>
                <div className="personal-information">
                    <p className='RalewayBold information-p '>Language:</p>
                    <p className='information-p align-right'>Dutch</p>
                </div>
                </div>
            <Link to={'/profile/edit'} className='edit-Information RalewayBold'> > Edit my information</Link>
        </div>
    );



};







const MapStateToProps = state =>{
    return{
        user:state.auth.user
    }
};

export default connect(MapStateToProps, actions)(Gegevens);
