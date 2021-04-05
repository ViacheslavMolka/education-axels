import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormControlLabel, Checkbox, TextField, Input, InputAdornment, IconButton, Button } from '@material-ui/core';

import LoginWrapper from '../style/loginStyled';


const RenderTextField = ({label, input, meta: { touched, invalid, error }}) => {
    return (
        <TextField
        label={label}
        placeholder={label}
        {...input}
    />
    )
};

const RenderPassword = ({ input, label }) => {
    const [visible, setVisible] = useState({
        showPassword: false
    });

    const handleClickShowPassword = () => {
        setVisible({ showPassword: !visible.showPassword });
    };
    return (
        <Input
            id="pass"
            type={visible.showPassword ? 'text' : 'password'}
            onChange={input.onChange}
            placeholder={label}
            endAdornment={
                <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                >
                    {visible.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
                </InputAdornment>
            }
        />
    )
};

const RenderCheckbox = ({ input, label }) => (
    <FormControlLabel 
        control={
            <Checkbox
                color="primary"
                checked={input.value ? true : false}
                onChange={input.onChange}
            />
        }
        label={label}
    />
);

const Login = (props) => {   
    return (
        <LoginWrapper>
            <form onSubmit={props.handleSubmit}>
                <div className="line">
                    <Field name="username" component={RenderTextField} label="Username"/>
                </div>
                <div className="line">
                    <Field name="email" component={RenderTextField} label="Email"/>
                </div>
                <div className="line password">
                    <Field name="password" component={RenderPassword} label="Password"/>
                </div>
                <div>
                    <Field name="remember" component={RenderCheckbox} label="Remember"/>
                </div>
                <Button type="submit" variant="contained">Submit</Button>
            </form> 
        </LoginWrapper>  
    )
};
  
export default reduxForm({ form: 'login' })(Login)
