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
        const errors = this.props.error;
        const response =this.props.response;
        let errorsarray = [];
        if(errors){
            console.log(errors);

            if(errors.firstName){
                errorsarray.push(errors.firstName[0]);
            }
            if(errors.secondName){
                errorsarray.push(errors.secondName[0]);
            }
            if(errors.email){
                errorsarray.push(errors.email[0]);
            }
            if(errors.password){
                errorsarray.push(errors.password[0]);
            }
            if(errors.address){
                errorsarray.push(errors.address[0]);
            }
            if(errors.PostalCode){
                errorsarray.push(errors.PostalCode[0]);
            }
            if(errors.city){
                errorsarray.push(errors.city[0]);
            }
            if(errors.country){
                errorsarray.push(errors.country[0]);
            }
            return (
                <Zoom when={errors}>
                    <div className="alert alert-danger mt-2">
                        {
                            errorsarray.map(error => <p key={error}>{error}</p>)
                        }
                    </div>
                </Zoom>
            );

        }

        return(
            <Zoom when={response}>
                <div className="alert alert-danger mt-2">
                    <p>{response}</p>
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
                                <button type="submit" className="btn btn-primary btnCustom">Sign Up</button>
                                {this.renderResponse()}
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
        error : state.auth.error

    }
};
export default reduxForm({
    form: 'signup'
})(connect(mapStateToProps, actions)(RegisterForm));
