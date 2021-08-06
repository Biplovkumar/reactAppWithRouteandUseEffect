
import React, { useState, useEffect } from "react";
import {Router, BrowserRouter, Route, Switch , Redirect, Link} from "react-router-dom"


const Password = () => {
  return (
    <div className="App">
        <h1>password</h1>
        <Link to="/Password">password</Link><br></br><br></br>
        <Link to="/Login">Login</Link><br></br><br></br>
        <Link to="/Navigate">home</Link>
    </div>
  );
}

export default Password;
