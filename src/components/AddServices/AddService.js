import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://secret-taiga-88128.herokuapp.com/tourism', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    <div class="alert alert-success" role="alert">
                        Successfully added a service.
                    </div>
                    reset();
                }
            })
    };
    return (
        <div>
            <h2 className="text-primary">Please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-grid p-2 justify-content-md-center">
                <input className="my-2" {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <textarea className="my-2" {...register("text")} placeholder="description" />
                <input className="my-2" type="number" {...register("price")} placeholder="price" />
                <input className="my-2" {...register("img")} placeholder="image" />
                <input className="my-2" type="submit" />
            </form>
        </div>
    );
};

export default AddService;