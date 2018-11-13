import React, {PureComponent} from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import {Zoom} from 'react-reveal';
import { Field, reduxForm, Form } from 'redux-form';
class EditForm extends PureComponent {

    handleFormSubmit = ({firstName , secondName , email , password ,old_password, address , PostalCode, city , country}) => {

        this.props.EditUser({firstName , secondName , email , password ,old_password, address , PostalCode , city ,country})

    };

    renderError(){
        const response = this.props.response;
        let message = [];
        if (typeof response !== 'object'){
            message.push(response);
        }
        else{
            Object.keys(response).forEach(key =>{
                message.push(response[key][0])
            });
        }

        return(
            <Zoom when={message.length}>
                <div className="alert alert-danger mt-2">
                    {message.map((message , i ) =>{
                        return (
                            <p key={i}>{message}</p>
                        )
                    })}
                </div>
            </Zoom>
        )


    };

    render() {
        const { handleSubmit , user } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mx-auto my-5">
                        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <fieldset className="form-group">
                                <label>First Name:</label>
                                <Field className="form-control"  name="firstName" component="input" type="text" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Second Name:</label>
                                <Field className="form-control" name="secondName" component="input" type="text" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Email</label>
                                <Field className="form-control" name="email" component="input" type="email" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Old-Password:</label>
                                <Field className="form-control" name="old_password" component="input" type="password" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>New Password</label>
                                <Field className="form-control" name="password" component="input" type="password" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Address</label>
                                <Field className="form-control" name="address" component="input" type="text" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Postal Code</label>
                                <Field className="form-control" name="PostalCode" component="input" type="text" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>City</label>
                                <Field className="form-control" name="city" component="input" type="text" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Country</label>
                                <Field className="form-control" name="country" component="input" type="text" />
                            </fieldset>
                            <button type="submit" className="btn btn-primary btnCustom">Sign Up</button>
                            {this.renderError()}
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state , ownProps) =>{
    return {
        response : state.auth.response,
        error : state.auth.error,
        user : state.auth.user,
        initialValues: {
            firstName : ownProps.userData.firstName,
            secondName : ownProps.userData.secondName,
            email : ownProps.userData.email,
            address : ownProps.userData.address,
            PostalCode : ownProps.userData.PostalCode,
            country:ownProps.userData.country,
            city:ownProps.userData.city

        }
    }
};


export default connect(mapStateToProps, actions)(reduxForm({
    form: 'EditForm',
    enableReinitialize : true,
})(EditForm));
