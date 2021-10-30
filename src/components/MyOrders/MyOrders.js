import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { serviceId } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        data.order = serviceId;
        axios.post('https://secret-taiga-88128.herokuapp.com/orders', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("Successfully submit");
                    reset();
                }
            })

        console.log(data);
    };
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue={user.displayName} {...register("name")} />
                <input placeholder="address" defaultValue="" {...register("address")} />
                <input placeholder="city" defaultValue="" {...register("city")} />
                <input placeholder="phone" defaultValue="" {...register("phone")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span className="error">This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default MyOrders;