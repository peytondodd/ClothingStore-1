import React from 'react';
import Nav from '../Components/Nav/Nav'
import LazyLoad from 'react-lazyload'
import {connect} from 'react-redux'
import Aux from '../Components/HOC/Aux'
import MainBanner from '../Components/MainBanner/MainBanner'
import Images from "../Components/Images/Images";
import Slider from "../Components/Slider/Slider";
import Girl from '../Assets/Images/Girl.jpg';
import Brushes from '../Assets/Images/brushes.jpg';
import Shoes from '../Assets/Images/shoes.jpg';
import Acc from '../Assets/Images/acc.jpg';
import Salon from '../Assets/Images/Salon2.jpg';
import Layout from "../Components/Layout/Layout";

const Index = (props) => {
    console.log(props.authenticated);
    return (
        <Layout>
            <MainBanner img={Salon}>SHOP THE COLLECTION</MainBanner>
                <div className="container-fluid container-fluid-NOP">
                <div className="row-fluid">
                    <LazyLoad height={200}>
                    <Images link="/categories/1/Makeup" img={Brushes} alt="Make Up">


                        MAKE UP
                    </Images>
                    </LazyLoad>
                    <LazyLoad height={200}>
                    <Images link="/categories/4/kleren" img={Girl} alt="Clothes">
                        CLOTHES</Images>
                    </LazyLoad>
                </div>
                    <Slider/>
                    <Slider/>

                </div>
            <div className="container-fluid-NOP">
                <div className="row-fluid">
                    <LazyLoad height={200}>
                <Images link='/categories/3/Schoenen' img={Shoes} alt='shoes'>SHOES</Images>
                    </LazyLoad>
                    <LazyLoad height={200}>
                        <Images link='/categories/3/Schoenen' img={Acc} alt='ACCESORIES'>acc</Images>
                    </LazyLoad>
            </div>
            </div>
            <Slider/>
            <Slider/>

            { /*<LazyLoad height={200}>
            <MainBanner img={Sale}>SALE</MainBanner>
            </LazyLoad>*/}
        </Layout>

    )


};

function mapStateToProps(state) {
    return { authenticated: state.auth };
}

export default connect(mapStateToProps)(Index);
