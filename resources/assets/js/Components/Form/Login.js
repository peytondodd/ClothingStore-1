import React, {PureComponent} from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import {Zoom} from 'react-reveal';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends PureComponent {

    constructor(props) {
        super(props);
        this.state= {
            remember_me:false,
        };
    }
    componentWillUnmount(){
        this.props.resetResponse();
    }


    handleFormSubmit = async({email , password}) => {
        const rememberMe = this.state.remember_me;
        await this.props.signInUser({email , password , rememberMe});

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

    handleRememberChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    onclick() {
        this.setState({remember_me: !this.state.remember_me});


    };

    render() {
        const { handleSubmit } = this.props;

        return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mx-auto my-5">
                            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                <fieldset className="form-group">
                                    <label>Email</label>
                                    <Field className="form-control" name="email" component="input" type="email" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Password:</label>
                                    <Field className="form-control" name="password" component="input" type="password" />
                                </fieldset>
                                <fieldset className={'form-group'} onClick={()=>{this.onclick()}}>
                                    <Field className={""} name='rememberMe' component={'input'} type={'checkbox'} onChange={this.handleRememberChange.bind(this)} value={this.state.remember_me} checked={this.state.remember_me}/>
                                    <label className={'ml-1'}>remember login?</label>
                                </fieldset>
                                {this.renderError()}
                                <button type="submit" className="btn btn-primary btnCustom">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        response : state.auth.response

    }
};
export default  reduxForm({
    form: 'signin'
})(connect(mapStateToProps, actions)(LoginForm));
