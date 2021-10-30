import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/slider1.jpg';
import banner2 from '../../images/slider2.jpg';
import banner3 from '../../images/slider3.jpg';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src={banner1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src={banner2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src={banner3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;