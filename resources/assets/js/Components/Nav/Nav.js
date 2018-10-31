import React, {Component} from 'react';
import './Nav.css';
import Aux from '../../Components/HOC/Aux';
import {FaSearch, FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions'
import Item from '../../Components/Item/Item'
class Nav extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    renderShoppingCart() {
        const cart = [];
        return (
            <div className="dropdown shoppingCart">
                <FaShoppingCart
                    className='shoppingCart'
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"/>
                <div className="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#"> ITEMS  </a>

                </div>
            </div>
        )
    }

    renderDropDownItem() {
        const authenticated = this.props.authenticated;
        if (authenticated) {
            return (
                <Aux>
                    <Link className="dropdown-item" to="/profile">Profile</Link>
                    <a className="dropdown-item" onClick={() => {
                        this.props.signOutUser()
                    }}>Logout</a>
                </Aux>
            )
        }
        else {
            return (
                <Aux>
                    <Link className="dropdown-item" to="/Login">Login</Link>
                    <Link className="dropdown-item" to="/Register">Register</Link>
                </Aux>
            )
        }
    }

    render() {

        return (
            <Aux>
                <nav className="navbar navbar-expand-lg navbar-dark UpperNav rounded">
                    <div className="navWrapper">
                        {this.renderShoppingCart()}
                        <a className="nav-link RalewayExtraBold my-auto">Free NL shipping on orders over $150</a>


                        <div className="dropdown my-auto">
                            <a id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                               className={'nav-link RalewayExtraBold my-auto customdropdownbutton '}>My Account</a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                {this.renderDropDownItem()}
                            </div>
                        </div>


                    </div>
                </nav>
                <div className="container">
                    <header className="blog-header py-3 mt-5">

                        <div className="row flex-nowrap justify-content-between align-items-center">
                            <div className="col text-center">
                                <Link className="blog-header-logo text-dark" to="/">Clothing store</Link>
                            </div>
                        </div>
                    </header>

                    <div className="nav-scroller py-1 mb-2">
                        <nav className="nav d-flex justify-content-between">
                            {this.props.categories.map((category, i) =>
                                <Link key={i}
                                      className="p-2 text-black RalewayBold"
                                      to={'/categories/' + category.id + '/' + category.name.replace(/ +/g, "")}>
                                    {category.name}</Link>)}

                        </nav>
                    </div>
                </div>
            </Aux>
        );
    }

}

const MapStateToProps = (state) => {
    return {
        categories: state.category.categories,
        authenticated: state.auth.authenticated
    }
};

export default connect(MapStateToProps, actions)(Nav);
