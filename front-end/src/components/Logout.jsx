import React from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../axios';

const LogOut = () => {
    const history = useHistory();

    const handleLogout = (e) => {
        const response = axiosInstance.post('users/logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token'),
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        history.push('/login');
    }
    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default LogOut;

