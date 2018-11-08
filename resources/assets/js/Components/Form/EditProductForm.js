import React, {PureComponent} from 'react';
import * as actions from '../../actions/adminActions';
import { connect } from 'react-redux';
import {Zoom} from 'react-reveal';
import { Field, reduxForm, Form } from 'redux-form';
class EditProductForm extends PureComponent {

    handleFormSubmit = ({name , categories_id , price , stars, description , amount}) => {
        const id = this.props.id;
        this.props.EditProduct({id,name , categories_id , price , stars, description , amount})

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
    renderCategories(){
        const categories = this.props.categories;
        console.log(categories);
    return  categories.map(category =>{
            return(
                <option key={category.id} value={category.id}>{category.name}</option>
            )
        })
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
                                <Field className="form-control" name="categories_id" component="select" type="text">
                                    {this.renderCategories()}
                                </Field>
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
                                <Field className="form-control textAreaMinWidth" name="description" component="textarea" type="text" />
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
        response : state.aproducts.response,
        categories: state.category.categories,
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
