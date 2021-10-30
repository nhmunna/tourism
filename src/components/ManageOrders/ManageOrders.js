import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';

const ManageOrders = () => {
    // console.log(serviceId);
    const { serviceId } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://secret-taiga-88128.herokuapp.com/tourism/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const handleUpdateName = e => {
        const updatedName = e.target.value;
        const updatedService = {
            name: updatedName,
            img: service.img,
            text: service.text,
            price: service.price
        };
        setService(updatedService);
    }
    const handleUpdateImg = e => {
        const updatedImg = e.target.value;
        const updatedService = {
            name: service.name,
            img: updatedImg,
            text: service.text,
            price: service.price
        };
        setService(updatedService);
    }
    const handleUpdateText = e => {
        const updatedText = e.target.value;
        const updatedService = {
            name: service.name,
            img: service.img,
            text: updatedText,
            price: service.price
        };
        setService(updatedService);
    }
    const handleUpdatePrice = e => {
        const updatedPrice = e.target.value;
        const updatedService = {
            name: service.name,
            img: service.img,
            text: service.text,
            price: updatedPrice
        };
        setService(updatedService);
    }

    const onSubmit = data => {
        const url = `https://secret-taiga-88128.herokuapp.com/tourism/${serviceId}`;
        // fetch(url, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(service)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount > 0) {
        //             alert('updated successfully')
        //             setService({});
        //             reset();
        //         }
        //     })

        axios.put(url, data)
            .then(res => {
                console.log(res);
                if (res.data.modifiedCount > 0) {
                    <div class="alert alert-success" role="alert">
                        Successfully updated a service.
                    </div>
                    setService({});
                    reset();
                }
            })
    }
    return (
        <div>
            <h2 className="text-warning">Update Your Service</h2>
            <h2 className="text-success">{service.name}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-grid p-2 justify-content-md-center">
                <input className="my-2" onChange={handleUpdateName} {...register("name")} placeholder="name" />
                <textarea className="my-2" onChange={handleUpdateText} {...register("text")} placeholder="description" />
                <input className="my-2" onChange={handleUpdatePrice} type="number" {...register("price")} placeholder="price" />
                <input className="my-2" onChange={handleUpdateImg} {...register("img")} placeholder="image" />
                <input className="my-2" type="submit" />
            </form>
        </div>
    );
};

export default ManageOrders;