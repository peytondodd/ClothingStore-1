import React from 'react';
import Layout from "../Components/Layout/Layout";
import RegisterForm from "../Components/Form/Register";
import Cbanner from '../Components/Cbanner/Cbanner'

const Register = () =>{

    return(
        <Layout>
            <Cbanner href={'/register'}>Register</Cbanner>
            <RegisterForm/>
            <Cbanner href={'/login'}>Login</Cbanner>
        </Layout>
    )
};

export default Register;
