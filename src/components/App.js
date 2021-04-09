import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from '../containers/loginPage';
import ChartBar from './chartBar';
import Header from './header';

import GlobalStyle from '../style/globalStyled';
import AppWrapper from '../style/appStyled';


const App = () => {
  return (
    <Router>
      <AppWrapper>
        <GlobalStyle/>
        <Header/>
        <Route path='/' exact render={() => {
          return <h1>Welcome to my education app!</h1>
        }}/>
        <Route path='/login/' component={LoginPage}/>
        <Route path='/charts/' component={ChartBar}/>
      </AppWrapper>
    </Router>
  );
}

export default App;
