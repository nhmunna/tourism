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
                    alert("Successfully submit");
                    reset();
                }
            })
    };
    return (
        <div className="add-service">
            <h2>Please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <textarea {...register("text")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;