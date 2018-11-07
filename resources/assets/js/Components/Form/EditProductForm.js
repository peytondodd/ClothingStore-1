import React, {PureComponent} from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import {Zoom} from 'react-reveal';
import { Field, reduxForm, Form } from 'redux-form';
class EditProductForm extends PureComponent {

    handleFormSubmit = ({firstName , secondName , email , password ,old_password, address , PostalCode, city , country}) => {

        this.props.EditUser({firstName , secondName , email , password ,old_password, address , PostalCode , city ,country})

    };

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
        const { handleSubmit , user } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mx-auto my-5">
                        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <fieldset className="form-group">
                                <label>Name:</label>
                                <Field className="form-control"  name="name" component="input" type="text" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Category</label>
                                <Field className="form-control" name="category" component="input" type="text" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Price:</label>
                                <Field className="form-control" name="price" component="input" type="text" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Stars:</label>
                                <Field className="form-control" name="stars" component="input" type="text" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Description:</label>
                                <Field className="form-control" name="description" component="textarea" type="text" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Amount:</label>
                                <Field className="form-control" name="amount" component="input" type="text" />
                            </fieldset>
                            <button type="submit" className="btn btn-primary btnCustom">Save</button>
                            {this.renderResponse()}
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
            name : ownProps.OGdata.name,
            price : ownProps.OGdata.price,
            stars : ownProps.OGdata.stars,
            description : ownProps.OGdata.description,
            amount : ownProps.OGdata.amount,

        }
    }
};


export default connect(mapStateToProps, actions)(reduxForm({
    form: 'EditForm',
    enableReinitialize : true,
})(EditProductForm));
