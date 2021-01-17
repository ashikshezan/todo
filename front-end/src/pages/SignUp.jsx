import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useForm } from '../customHooks';

const initialValue = {
    username: 'testUser',
    email: 'z@mail.com',
    password: 'asdfg12345'
}

const SignUp = () => {

    // handeled by a custom hook
    const [values, handleChange] = useForm(initialValue)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);

        axiosInstance
            .post(`users/register/`, {
                email: values.email,
                user_name: values.username,
                password: values.password,
            })
            .then((res) => {
                // history.push('/login');
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err.data))
    }


    return (
        <div className={"grid place-items-center"}>
            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="username">Username</label>
                <input type="text" name='username' value={values.username} onChange={handleChange} className={"shadow-md block"} />

                <label htmlFor="email">Email</label>
                <input type="text" name='email' value={values.email} onChange={handleChange} className={"shadow-md block"} />

                <label htmlFor="password">Password</label>
                <input type="password" name='password' value={values.password} onChange={handleChange} className={"shadow-md block"} />

                <button className="bg-red-300 px-4 py-2" type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
