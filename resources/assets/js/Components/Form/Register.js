import React, {PureComponent} from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import {Zoom} from 'react-reveal';
import { Field, reduxForm } from 'redux-form';
class RegisterForm extends PureComponent {


    handleFormSubmit = ({firstName , secondName , email , password ,password_confirmation, address , PostalCode, city , country}) => {

        this.props.signupUser({firstName , secondName , email , password ,password_confirmation, address , PostalCode , city ,country})

    };


    componentDidMount(){
        // return this.props.dispatch(actions.afterAuthError());
    }

    renderResponse() {
        const response = this.props.response;
        console.log(response);
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
    }


    render() {
        const { handleSubmit } = this.props;

        return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mx-auto my-5">
                            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                <fieldset className="form-group">
                                    <label>First Name:</label>
                                    <Field className="form-control" name="firstName" component="input" type="text" />
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
                                    <label>Password:</label>
                                    <Field className="form-control" name="password" component="input" type="password" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Confirm Password</label>
                                    <Field className="form-control" name="password_confirmation" component="input" type="password" />
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
                                {this.renderResponse()}
                                <button type="submit" className="btn btn-primary btnCustom">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
              );
    }
}
const mapStateToProps = (state) =>{
    return {
        response : state.auth.response,

    }
};
export default reduxForm({
    form: 'signup'
})(connect(mapStateToProps, actions)(RegisterForm));
