import React from 'react'
import {Link} from 'react-router-dom'
import Upload from './Upload'

const Register = ({setEmail, setPassword, setAge,setGender, handleAction}) => {
  return (
    <>
      <div className="contianer">
        <div className="row justify-content-center py-5">
          <div className="col-md-4 login-form">
            <h1 className="fw-bold py-4 text-center">Register Form</h1>
            <Upload/><br/>
            <input type="email" id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input type="gender" id="gender" placeholder="Gender" onChange={(e)=>setGender(e.target.value)}/><br/>
            <input type="number" id="age" placeholder="Age" onChange={(e)=>setAge(e.target.value)}/><br/>
            <input type="password" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button className="btn btn-info" onClick={handleAction}> Register </button><br/>
           <h5> Don't have an account: <Link to="/"> Login </Link> </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
