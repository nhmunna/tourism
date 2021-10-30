import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className="mx-auto mt-5 bg-dark text-center p-1 shadow-lg">
            <img className="img-fluid" src={logo} alt="" />
            <div>
                <i className="fab fa-facebook mx-4 text-warning"></i><i className="fab fa-instagram mx-4 text-warning"></i><i className="fab fa-twitter mx-4 text-warning"></i>
            </div>
            <p className="text-warning">nhmunna@2021</p>
        </div>
    );
};

export default Footer;