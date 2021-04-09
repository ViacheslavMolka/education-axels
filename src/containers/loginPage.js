import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

import Login from '../components/login';

import { login } from '../redux/index';


const LoginPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (values) => {
        if(values.username === 'Admin' && values.password === '12345') {
            dispatch(login())
            history.push('/charts/')
        } else {
            alert('Имя пользователя или пароль введены не верно')
        }    
    };

    return (
        <Login onSubmit={onSubmit}/>
    )
};

export default LoginPage;
