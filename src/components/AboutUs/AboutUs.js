import React from 'react';

const AboutUs = () => {
    return (
        <div id="about" className="container text-danger bg-light shadow rounded-3">
            <h2>awesometour.com</h2>
            <p>We are the most trusted <b>TOUR PROVIDER</b> in your town. We provide best tour with low cost. Our motto is <b>"TRAVELLING IS THE BEST WAY OF REFRESHMENT."</b></p>
            <p>Address:</p>
            <p>1123,xyz street, BanglaBazar.</p>
            <p>Mobile: +88018XXXXXX</p>
            <p>You can see our social platform to know more better.</p>
            <div>
                <i className="fab fa-facebook p-1 text-danger"></i><i className="fab fa-instagram p-1 text-danger"></i><i className="fab fa-twitter p-1 text-danger"></i>
            </div>
        </div>
    );
};

export default AboutUs;