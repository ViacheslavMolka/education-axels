import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from '../containers/loginPage';
import { Header, SliderForCharts } from './index';

import { AppWrapper, GlobalStyle } from '../style/index';


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
        <Route path='/charts/' component={SliderForCharts}/>
      </AppWrapper>
    </Router>
  );
}

export default App;
