import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, price, text, img } = service;
    return (
        <div className="col-lg-6 shadow p-3 rounded-3">
            <img className="img-fluid" src={img} alt="" />
            <h3 className="text-success">{name}</h3>
            <h5 className="text-warning">Price: {price}</h5>
            <p className="px-3">{text}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-success shadow">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;