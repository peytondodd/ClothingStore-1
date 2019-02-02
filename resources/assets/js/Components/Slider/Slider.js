import React from "react";
import Slider from "react-slick"
import Item from '../../Components/Item/Item'
import Aux from '../../Components/HOC/Aux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {connect} from 'react-redux'
import {fetchHomeProduct} from "../../actions/index";
import PropTypes from 'prop-types'
import axios from "axios";
import * as types from "../../actions/types";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " greyArrow"}
            style={{ ...style, display: "block" ,left:0, zIndex:1}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " greyArrow"}
            style={{ ...style, display: "block" ,right:0}}
            onClick={onClick}
        />
    );
}


class SliderS extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        axios.get(`/api/products/home`)
            .then(res => this.setState({products:res.data}))
    }


    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            prevArrow: <SampleNextArrow/>,
            nextArrow: <SamplePrevArrow/>,
            arrows : true,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Aux>
                  <div className="container-fluid">
                    <h4 className='text-black text-center RalewayExtraBold'>NEW COLLECTION</h4>
                    <Slider {...settings}>
                        { this.state.products.map((product , i) =>{
                                  if(product.images){
                                      console.log(product);
                                    return <Item
                                        key={i}
                                          image={product.images.url}
                                        showCurrency={true}
                                        href={'/products/'+product.id+'/'+product.name.replace(/ +/g, "")}
                                        price={product.price}
                                        stars={product.stars}>{product.name}
                                        </Item>
                                  }
                        } )
                        }
                    </Slider>
                </div>
            </Aux>
        );
    }
}

export default SliderS;
