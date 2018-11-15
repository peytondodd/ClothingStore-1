import React, {PureComponent} from 'react';
import * as actions from '../../actions/adminActions';
import { connect } from 'react-redux';
import {Zoom} from 'react-reveal';
import { Field, reduxForm, Form } from 'redux-form';

class CreateCategoryForm extends PureComponent {

    handleFormSubmit = ({name}) => {
        this.props.CreateCategory({name})

    };
    renderResponse() {
        const response =this.props.response;
        return(
            <Zoom when={response}>
                <div className="alert alert-danger mt-2">
                    <p>{response}</p>
                </div>
            </Zoom>
        )

    }

    render() {
        const { handleSubmit} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mx-auto my-5">
                        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} encType="multipart/form-data">
                            <fieldset className="form-group">
                                <label>Name:</label>
                                <Field className="form-control"  name="name" component="input" type="text" />
                            </fieldset>
                        <button className='btn btn-primary btnCustom' type="submit">Submit</button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        response : state.admin.response,
        error : state.auth.error,
    }
};


export default connect(mapStateToProps, actions)(reduxForm({
    form: 'createcateogryform',
})(CreateCategoryForm));
