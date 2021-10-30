import React from 'react';
import banner1 from '../../images/sajek.jpg';

const UpComing = () => {
    return (
        <div className="container card my-5 rounded shadow">
            <div className="row g-0">
                <div className="col-md-4 p-2">
                    <img src={banner1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                        <h5 className="card-title text-danger">Upcoming Tour</h5>
                        <p className="card-text">Our upcoming tour is coming in the next week. Are you ready to do a adventure.</p>
                        <p className="card-text"><small className="text-muted">Last updated 11 hours ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpComing;