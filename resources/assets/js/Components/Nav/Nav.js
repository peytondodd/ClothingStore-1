import React, {Component} from 'react';
import './Nav.css';
import Aux from '../../Components/HOC/Aux';
import {FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions'
class Nav extends Component {
    componentDidMount(){
        this.props.fetchCategories();
    }


    renderDropDownItem(){
        const authenticated = this.props.authenticated;
        if(authenticated){
            return(
                <Aux>
                    <Link className="dropdown-item" to="/profile">Profile</Link>
                    <Link className="dropdown-item" to="/logout">Logout</Link>
                </Aux>
            )
        }
        else{
            return(
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
                        <div className="search-container">
                            <div className="search-icon-btn">
                            <FaSearch/>
                            </div>
                            <div className="search-input">
                                <input type="search" className="search-bar" placeholder="Search..."/>
                            </div>
                        </div>
                    <a className="nav-link RalewayExtraBold my-auto">Free NL shipping on orders over $150</a>




                        <div className="dropdown my-auto">
                        <a  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={'nav-link RalewayExtraBold my-auto customdropdownbutton '}>My Account</a>
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
                            { this.props.categories.map((category , i) =>
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
const MapStateToProps = (state)=>{
    return{
        categories : state.category.categories,
        authenticated : state.auth.authenticated
    }
};

export default connect(MapStateToProps , actions)(Nav);
