
import React, { Component } from 'react';
import {BrowserRouter , Route , Switch, Router} from 'react-router-dom'
import Index from "../../Containers/Index";
import Categories from "../../Containers/Categories";
import Product from "../../Containers/Product";
import history from '../../history';
import requireGuest from '../auth/requireGuest'
import requireAuth from '../auth/requireAuth'
import Register from "../../Containers/Register";
import Login from '../../Containers/Login'
import Profile from "../../Containers/Profile";
import CheckOut from "../../Containers/Checkout";
import ProfileEdit from "../../Containers/ProfileEdit";
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Router history={history}>
                <Switch>

                    <Route path="/" exact component={Index}/>
                    <Route path="/register" exact component={requireGuest(Register)}/>
                    <Route path="/profile" exact component={requireAuth(Profile)}/>
                    <Route path="/login" exact component={requireGuest(Login)}/>
                    <Route path="/categories/:id/:name" exact component={Categories}/>
                    <Route path="/products/:id/:name" exact component={Product}/>
                    <Route path="/checkout" exact component={requireAuth(CheckOut)} />
                    <Route path="/profile/edit" exact component={requireAuth(ProfileEdit)} />
                </Switch>

                </Router>
            </BrowserRouter>
        );
    }
}

export default App
