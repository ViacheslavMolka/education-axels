import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../redux/index';


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.login.isLogin);
    const classes = useStyles();

    const loginGroupBtn = value ? 
        <LinkContainer to='/'><Button onClick={() => {dispatch(logout())}} variant="outlined" color="inherit">Logout</Button></LinkContainer> : 
        <LinkContainer to='/login/'><Button color="inherit">Login</Button></LinkContainer>;

    return (
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                Education App
                </Typography>
                {loginGroupBtn}
            </Toolbar>
            </AppBar>
        </div>
    );
};


export default Header;
