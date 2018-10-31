import React from "react";
import Slider from "react-slick"
import Item from '../../Components/Item/Item'
import Aux from '../../Components/HOC/Aux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {connect} from 'react-redux'
import {fetchHomeProduct} from "../../actions/index";
import PropTypes from 'prop-types'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" ,left:0, zIndex:1}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" ,right:0}}
            onClick={onClick}
        />
    );
}


class SliderS extends React.Component {
           componentWillMount(){
               this.props.fetchHomeProduct()
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
                        { this.props.products.map((product , i) =>
                            <div key={i}>
                                <Item
                                        showCurrency={true}
                                        href={'/products/'+product.id+'/'+product.name.replace(/ +/g, "")}
                                        price={product.price}
                                        stars={product.stars}>{product.name}</Item></div>

                        )
                        }
                    </Slider>
                </div>
            </Aux>
        );
    }
}
SliderS.propTypes = {
    fetchHomeProduct: PropTypes.func.isRequired
};
const mapStateToProps = state =>({
    products: state.products.products
});
export default connect(mapStateToProps,{fetchHomeProduct})(SliderS);
