import React, {Component} from 'react';
import './Nav.css';
import Aux from '../../Components/HOC/Aux';
import axios from 'axios';
import {FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';
class Nav extends Component {
    state = {
        categories:[],

    };
    componentDidMount() {
        axios.get('/api/categories')
            .then(res => {
                const categories = res.data;
                console.log(res.data);
                this.setState({ categories });
            })
    }


    render() {
        return (
            <Aux>
                <nav className="navbar navbar-expand-lg navbar-dark UpperNav rounded">
                    <div className="navWrapper">
                        <div className="search-container">
                            <div className="search-icon-btn">
                            <FaSearch/>
                            </div>
                            <div className="search-input">
                                <input type="search" className="search-bar" placeholder="Search..."/>
                            </div>
                        </div>
                    <a className="nav-link RalewayExtraBold">Free NL shipping on orders over $150</a>
                        <a className={'nav-link RalewayExtraBold'}>My Account</a>
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
                                { this.state.categories.map((category , i) =>
                                    <Link key={i}
                                          className="p-2 text-black RalewayBold"
                                          to={'/categories/'+category.id+'/'+category.name.replace(/ +/g, "")}>
                                        {category.name}</Link>)}

                        </nav>
                    </div>
                </div>
            </Aux>
        );
    }

}


export default Nav;
