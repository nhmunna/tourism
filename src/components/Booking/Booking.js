import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://secret-taiga-88128.herokuapp.com/tourism/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const handleDelete = id => {
        const url = `https://secret-taiga-88128.herokuapp.com/tourism/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    <div class="alert alert-success" role="alert">
                        Successfully deleted a service.
                    </div>
                }
            })
    }
    return (
        <div className="row m-2 g-5 justify-content-md-center">
            <div className="col-lg-6 border border-dark shadow rounded-3 p-3">
                <h2 className="text-success"> {service.name}</h2>
                <h5 className="text-warning">Price: {service.price}</h5>
                <p className="px-3">{service.text}</p>
                <div className="m-3">
                    <Link to={`/manageOrders/${service._id}`}><button className="mx-2 px-2 btn btn-info" >Update Your Order</button></Link>
                    <Link to='/addService'><button className="mx-2 px-2 btn btn-primary">Add Another Service</button></Link>
                    <Link to={`/myOrder/${service._id}`}><button className="mx-2 px-2 btn btn-success">Place Your Order</button></Link>
                    <button className="m-2 px-2 btn btn-danger" onClick={() => handleDelete(service._id)}>Delete This Service</button>
                </div>
            </div>
        </div >
    );
};

export default Booking;