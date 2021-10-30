import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://secret-taiga-88128.herokuapp.com/tourism')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="service" className="container my-5">
            <h2 className="text-success mt-5">Our Tours Plan</h2>
            <div className="row g-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;