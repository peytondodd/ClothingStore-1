
import React, { Component } from 'react';
import {BrowserRouter , Route , Switch, Router, Redirect} from 'react-router-dom'
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
import Orders from "../../Containers/Orders";
import AllOrder from "../../Containers/Order";
import Products from "../../admin/Products/Products";
import ACategories from "../../admin/Categories/Categories";
import EditProduct from '../../admin/Products/EditProduct'
import CreateProduct from "../../admin/Products/CreateProduct";
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Router history={history}>
                <Switch>

                    <Route path="/" exact component={Index}/>
                    <Route path="/register" exact component={requireGuest(Register)}/>
                    <Route path="/profile" exact component={requireAuth(Profile)}/>
                    <Route path="/profile/orders" exact component={requireAuth(Orders)}/>
                    <Route path="/profile/order/:id" exact component={requireAuth(AllOrder)}/>
                    <Route path="/login" exact component={requireGuest(Login)}/>
                    <Route path="/categories/:id/:name" exact component={Categories}/>
                    <Route path="/products/:id/:name" exact component={Product}/>
                    <Route path="/checkout" exact component={requireAuth(CheckOut)} />
                    <Route path="/profile/edit" exact component={requireAuth(ProfileEdit)} />
                    <Route path="/admin/products" exact component={requireAuth(Products)}/>
                    <Route path='/admin/product/:id' exact component={requireAuth(EditProduct)}/>
                    <Route path="/admin/products/create" exact component={requireAuth(CreateProduct)}/>
                    <Route path="/admin/categories" exact component={requireAuth(ACategories)}/>

                </Switch>

                </Router>
            </BrowserRouter>
        );
    }
}

export default App
