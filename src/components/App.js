import React from 'react';

import Login from './login';

import GlobalStyle from '../style/globalStyled';
import AppWrapper from '../style/appStyled';


const App = () => {
  const onSubmit = (values) => {
    console.log(values);
  }
  return (
    <AppWrapper>
      <GlobalStyle/>
      <h1>Login</h1>
      <Login onSubmit={onSubmit}/>
    </AppWrapper>
  );
}

export default App;
