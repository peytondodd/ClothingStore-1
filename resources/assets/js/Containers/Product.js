import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from "../actions/index";
import { Link } from 'react-router-dom'
import Palet from '../Assets/Images/pallet.jpg'
import Layout from "../Components/Layout/Layout";
import {FaStar} from "react-icons/fa";
class Product extends Component {
            constructor(props){
                super(props);
                this.state ={
                    count: 1
                };
            }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchProduct(id);


    }
    componentWillUnmount(){
          this.props.closeCart();
    }
    handleNumberChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }
    onclick(type) {
        this.setState(prevState => {
           if(prevState.count === 1){
               return {count: type === 'add' ? prevState.count + 1 : 1}
        }
        else{
               return {count: type === 'add' ? prevState.count + 1 : prevState.count - 1}
           }
        });
    }

    addtoBag = () =>{
            this.props.ADDTOCART(this.props.product, this.state.count);
            this.setState({count :  1 })
    };
     stars = (amount) => {
         let stars = [];
         for (let i = 0; i < amount; i++) {
             stars.push(<FaStar key={i}/>);
         }
         return stars;
     };
    ShowDollar = (isTrue) => {
        if (isTrue === true) {
            return "$";
        }
        else {
            return null;
        }
    };
    renderCategories() {
        const products = this.props.product;
        const categories = products.categories;
        if(categories){
            return(
                <li className="breadcrumb-item RalewayExtraBold">
                    <Link
                    to={`/categories/${categories.id}/${categories.name}`}>{categories.name}</Link>
                </li>
            )
        }
    }
    renderImage(){
        const products = this.props.product;
        if(products.images){
           return <img className={'img-fluid'} src={`/images/${products.images.url}`} alt=""/>
        }
    }

    render() {
        const products = this.props.product;
        if(products.images){
            console.log(products.images);
        }
        return (
            <Layout>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item RalewayExtraBold"><Link to="/">Home</Link></li>
                        {this.renderCategories()}
                        <li className="breadcrumb-item active RalewayExtraBold" aria-current="page">{products.name}</li>
                    </ol>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8  col-lg-8 col-md-8 col-sm-12 col-12">
                            {this.renderImage()}
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 order-xl-last order-lg-last order-md-last order-sm-first order-first">
                            <h2 className="Item-title">{products.name}</h2>
                            <p className="text-center">
                                ${products.price}
                            </p>
                            <div className="stars">
                                {this.stars(products.stars)}
                            </div>
                            <p className="text-center mt-3">
                                {products.description}
                            </p>
                            <div className="CartButtonWrapper ">
                            <div className="input-group input-group-sm  customWidthProfile">
                                <div className="input-group-prepend" onClick={this.onclick.bind(this,'sub')}>
                                    <span className="input-group-text" id="inputGroup-sizing-sm">-</span>
                                </div>
                                <input type="number" name='count' onChange={this.handleNumberChange.bind(this)} value={this.state.count} className="form-control amountForm" aria-label="Sizing example input"
                                    aria-invalid={"false"}
                                       aria-describedby="inputGroup-sizing-sm" />
                                <div className="input-group-prepend"  onClick={this.onclick.bind(this,'add')}>
                                    <span className="input-group-text" id="inputGroup-sizing-sm">+</span>
                                </div>
                            </div>

                            <button className='btn btn-primary addCartfirst ' onClick={() =>{this.addtoBag()}}>Add to bag</button>
                            </div>
                        </div>

                    </div>
                    <div className="row mobileOnly">
                        <div className="col">
                        <div className="CartButtonWrapper ">
                            <div className="input-group input-group-sm  mobileButton">
                                <div className="input-group-prepend" onClick={this.onclick.bind(this,'sub')}>
                                    <span className="input-group-text" id="inputGroup-sizing-sm">-</span>
                                </div>
                                <input type="number" name='count' onChange={this.handleNumberChange.bind(this)} value={this.state.count} className="form-control amountForm" aria-label="Sizing example input"
                                       aria-invalid={"false"}
                                       aria-describedby="inputGroup-sizing-sm" />
                                <div className="input-group-prepend"  onClick={this.onclick.bind(this,'add')}>
                                    <span className="input-group-text" id="inputGroup-sizing-sm">+</span>
                                </div>
                            </div>

                            <button className='btn btn-primary mobileCartAdd ' onClick={() =>{this.addtoBag()}}>Add to bag</button>
                        </div>
                    </div>
                    </div>
                </div>
            </Layout>
        );
    }
}


const mapStateToProps = state =>({
    product: state.products.product,
});
export default connect(mapStateToProps,actions)(Product);
