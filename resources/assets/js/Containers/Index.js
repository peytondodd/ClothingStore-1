import React from 'react';
import Nav from '../Components/Nav/Nav'
import LazyLoad from 'react-lazyload'
import Aux from '../Components/HOC/Aux'
import MainBanner from '../Components/MainBanner/MainBanner'
import Images from "../Components/Images/Images";
import Slider from "../Components/Slider/Slider";
import Girl from '../Assets/Images/Girl.jpg';
import Brushes from '../Assets/Images/brushes.jpg';
import Shoes from '../Assets/Images/shoes.jpg';
import Acc from '../Assets/Images/acc.jpg';
import Salon from '../Assets/Images/Salon2.jpg';
import Sale from '../Assets/Images/Sale.jpg';

const Index = () => {
    return (
        <Aux>
            <Nav/>
            <MainBanner img={Salon}>SHOP THE COLLECTION</MainBanner>
                <div className="container-fluid container-fluid-NOP">
                <div className="row-fluid">
                    <LazyLoad height={200}>
                    <Images link="/" img={Brushes} alt="Make Up">


                        MAKE UP
                    </Images>
                    </LazyLoad>
                    <LazyLoad height={200}>
                    <Images link="/" img={Girl} alt="Clothes">
                        CLOTHES</Images>
                    </LazyLoad>
                </div>
                    <Slider/>
                    <Slider/>

                </div>
            <div className="container-fluid-NOP">
                <div className="row-fluid">
                    <LazyLoad height={200}>
                <Images link='/' img={Shoes} alt='shoes'>SHOES</Images>
                    </LazyLoad>
                    <LazyLoad height={200}>
                        <Images link='/' img={Acc} alt='ACCESORIES'>acc</Images>
                    </LazyLoad>
            </div>
            </div>
            <Slider/>
            <Slider/>
            <LazyLoad height={200}>
            <MainBanner img={Sale}>SALE</MainBanner>
            </LazyLoad>

        </Aux>
    )


};

export default Index;
