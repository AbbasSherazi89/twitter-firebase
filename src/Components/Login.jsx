import React from "react";
import {Link} from 'react-router-dom'

const Login = ({setEmail, setPassword, handleAction}) => {
  return (
    <>
      <div className="contianer">
        <div className="row justify-content-center py-5">
          <div className="col-md-4 login-form">
            <h1 className="fw-bold py-4 text-center">Login Form</h1>
            <input type="email" id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input type="password" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button className="btn btn-info" onClick={handleAction}> Login </button><br/>
           <h5> Don't have an account: <Link to="/register">Register</Link> </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
