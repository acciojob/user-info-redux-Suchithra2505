import React from "react";
import './../styles/App.css';
import {useDispatch,useSelector} from 'react-redux';
import { name,email } from "../redux/action/userAction";

const App = () => {
  const dispatch=useDispatch();
  const nameVal=useSelector(state=>state.name);
  const emailVal=useSelector(state=>state.email);
  // console.log(data); 
  
  return (
    <div>
        <h1>User Information</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" onChange={(e)=>dispatch(name(e.target.value))}/><br />
          <label htmlFor="name" >Email</label>
          <input type="email" onChange={(e)=>dispatch(email(e.target.value))}/>
        </div>
        <div className="output">
          <p>Current value in store:</p>
          <p>Name - {nameVal}</p>
          <p>Email - {emailVal}</p>
        </div>
    </div>      
  )
}

export default App