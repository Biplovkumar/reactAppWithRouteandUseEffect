
import React, { useState, useEffect } from "react";
import Password from './Password';
import {Router, BrowserRouter, Route, Switch , Redirect, Link} from "react-router-dom"
import Login from './Login';
import Welcome from './Welcome';
const Navigate = () => {

  return (
    <div className="App">
<h1>Navigate</h1>
    <Link to="/Login">Login</Link><br></br><br></br>
    <Link to="/Password">Password</Link><br></br><br></br>
  <Link to="/Welcome">Welcome</Link>
    </div>
  );
}

export default Navigate;
