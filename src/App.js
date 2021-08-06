import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";



const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
 checkData();
  }, []);

  const checkData = () => {
    var cars = [40, 100, 1, 0, 5, 25, 10];
    var valid = [] 
    for(var i = 0;  i < cars.length; i++){
     valid.push(cars[i])
    }
    console.log("checkVluee", valid)
    setData(valid)
   }
  console.log("valid valueeee", data);

  return (
    <div className="App">
      <div >
        {
          data.map((item, index) => {
            return <p key={index} style={{ textAlign: "left" }}>{item}</p>
          })
        }
      </div>
    </div>
  );
}

export default App;
