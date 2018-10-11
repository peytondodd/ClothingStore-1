
import React, { Component } from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Index from "../../Containers/Index";
import Categories from "../../Containers/Categories";
import Product from "../../Containers/Product";
import Register from "../../Containers/Register";
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>

                    <Route path="/" exact component={Index}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/categories/:id/:name" exact component={Categories}/>
                    <Route path="/products/:id/:name" exact component={Product}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App
