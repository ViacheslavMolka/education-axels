import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormControlLabel, Checkbox, TextField, InputAdornment, IconButton, Button } from '@material-ui/core';

import { LoginWrapper } from '../style/index';


const validate = values => {
    const errors = {};
    const requiredFields = ['username', 'email', 'password'];

    requiredFields.forEach(field => {
        if(!values[field]) {
            errors[field] = 'Required!'
        }
    });

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    };

    return errors;
};

const RenderTextField = ({label, input, meta: { touched, invalid, error }}) => {
    return (
        <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
    />
    )
};

const RenderPassword = ({ input, label, meta: { touched, invalid, error } }) => {
    const [visible, setVisible] = useState({
        showPassword: false
    });

    const handleClickShowPassword = () => {
        setVisible({ showPassword: !visible.showPassword });
    };
    return (
        <TextField
            id="pass"
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            type={visible.showPassword ? 'text' : 'password'}
            onChange={input.onChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                    >
                        {visible.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                    </InputAdornment>
                )
            }}
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
  
export default reduxForm({ form: 'login', validate })(Login);
