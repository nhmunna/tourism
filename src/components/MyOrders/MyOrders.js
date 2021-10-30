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
                    <div class="alert alert-success" role="alert">
                        Successfully submit your service.
                    </div>
                    reset();
                }
            })

        console.log(data);
    };
    return (
        <div>
            <h2 className="text-info">Please input your details</h2>
            <form className="d-grid p-2 justify-content-md-center" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className="my-2" defaultValue={user.displayName} {...register("name")} />
                <input className="my-2" placeholder="address" defaultValue="" {...register("address")} />
                <input className="my-2" placeholder="city" defaultValue="" {...register("city")} />
                <input className="my-2" placeholder="phone" defaultValue="" {...register("phone")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input className="my-2" defaultValue={user.email} {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span className="error">This field is required</span>}
                <input className="my-2" type="submit" />
            </form>
        </div>
    );
};

export default MyOrders;