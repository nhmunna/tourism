import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import UpComing from '../UpComing/UpComing';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <UpComing></UpComing>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;