import React from 'react';
import Layout from "../Components/Layout/Layout";
import LoginForm from "../Components/Form/Login";
import Cbanner from '../Components/Cbanner/Cbanner';

const Login  = (props) => {
   return(
       <Layout>
           <Cbanner href={'/register'}>Login</Cbanner>
           <LoginForm/>
           <Cbanner href={'/login'}>Happy Shoping!</Cbanner>

       </Layout>
   )

};


export default Login;
