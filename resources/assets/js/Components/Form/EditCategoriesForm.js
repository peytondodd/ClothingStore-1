import React, {PureComponent} from 'react';
import * as actions from '../../actions/adminActions';
import { connect } from 'react-redux';
import {Zoom} from 'react-reveal';
import { Field, reduxForm, Form } from 'redux-form';
class EditCategoriesForm extends PureComponent {

    handleFormSubmit = ({name}) => {
        const id = this.props.id;
        this.props.UpdateCategory({id,name})

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
        response : state.admin.response,
        error : state.auth.error,
        user : state.auth.user,
        initialValues: {
            name : ownProps.OGdata.name,


        }
    }
};


export default connect(mapStateToProps, actions)(reduxForm({
    form: 'EditForm',
    enableReinitialize : true,
})(EditCategoriesForm));
