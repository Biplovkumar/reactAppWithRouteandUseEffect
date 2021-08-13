import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Password from './component/Password';
import {Router, BrowserRouter, Route, Switch , Redirect} from "react-router-dom";
import Navigate from './component/Navigate';
import Login from './component/Login';
import Welcome  from './component/Welcome';
const App = () => {
 
  return (

    <div className="App">
    
      <BrowserRouter>
      <Switch>
      <Route path="/Password" component={Password} />
      <Route path="/Login" component={Login} />
      <Route path="/Welcome" component={Welcome} /> 
      <Route path="/" component={Navigate} />
   
      </Switch>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App; 


