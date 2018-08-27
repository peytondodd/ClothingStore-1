import React, {Component} from 'react';
import './Nav.css';
import Aux from '../../Components/HOC/Aux';
import axios from 'axios';

class Nav extends Component {
    state = {
        categories:[],

    };
    componentDidMount() {
        axios.get('http://localhost:8000/api/categories')
            .then(res => {
                const categories = res.data;
                this.setState({ categories });
            })
    }

    render() {
        return (
            <Aux>
                <nav className="navbar navbar-expand-lg navbar-dark UpperNav rounded">
                    <div className="container">
                        <ul className="nav">
                            <li className="nav-item active">
                                <a className="nav-link RalewayExtraBold">Free NL shipping on orders over $150</a>
                            </li>
                        </ul>
                        <ul className="nav justify-content-end">
                            <li className="nav-item active">
                                <a className="nav-link RalewayExtraBold">search</a>
                            </li>
                            <li className="nav-item active">

                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <header className="blog-header py-3 mt-5">
                        <div className="row flex-nowrap justify-content-between align-items-center">
                            <div className="col text-center">
                                <a className="blog-header-logo text-dark" href="/">Clothing store</a>
                            </div>
                        </div>
                    </header>

                    <div className="nav-scroller py-1 mb-2">
                        <nav className="nav d-flex justify-content-between">
                            <a className="p-2 text-black RalewayBold" href="/">SALE</a>
                                { this.state.categories.map((category , i) => <a key={i} className="p-2 text-black RalewayBold" href={'/categories/'+category.id+'/'+category.name.replace(/ +/g, "")}>{category.name}</a>)}
                        </nav>
                    </div>
                </div>
            </Aux>
        );
    }

}


export default Nav;
