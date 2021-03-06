import React, { useEffect } from 'react';
import axiosInstance from '../axios';
import { useForm } from '../customHooks';
import { useHistory } from 'react-router-dom'

const initialValue = {
    email: "ashik@mail.com",
    password: "asdf12345"
}


const LogIn = () => {
    const history = useHistory()
    // handeled by a custom hook
    const [values, handleChange] = useForm(initialValue)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);

        axiosInstance
            .post('token/', {
                email: values.email,
                password: values.password,
            })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access)
                localStorage.setItem('refresh_token', res.data.refresh)
                axiosInstance.defaults.headers['Authorization'] =
                    'JWT ' + localStorage.getItem('access_token')

                history.push('/')

            }).then(console.log(localStorage))
            .catch(er => console.log(er))
    }
    useEffect(() => {
        console.log('localStorage in LOGIN-> ', localStorage);
    }, [localStorage])
    return (
        <div className={"grid place-items-center"}>
            <form action="" onSubmit={handleSubmit}>


                <label htmlFor="email">Email</label>
                <input type="text" name='email' value={values.email} onChange={handleChange} className={"shadow-md block"} />

                <label htmlFor="password">Password</label>
                <input type="password" name='password' value={values.password} onChange={handleChange} className={"shadow-md block"} />

                <button className="bg-red-300 px-4 py-2" type="submit">LogIn</button>
            </form>
        </div>
    );
}

export default LogIn;

// {
//     "email": "a@mail.com",
//     "password": "asdf"
// }
