import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
    const [credentials,setCredentials] = useState({email:"",password:""})
let navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // fetch("http://localhost:5000/api/auth/login")
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            //   "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7
            // ImlkIjoiNjYwYWI0YTdjMGExMmM0ODA0MmMxMGI5In0sImlhdCI6MTcxMjAzMzQwOH0.yzjT9c2_tcWSpTtuNgzhIsgXYS0doVBsufsZ6h2RMlI"
            },    body: JSON.stringify({email:credentials.email,password:credentials.password})
           
           // body data type must match "Content-Type" header
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            //Save the auth token and redirect
            localStorage.setItem('token',json.authtoken); //saving auth-token in local storage
            props.showAlert("Login Successful","success")
           navigate("/");
          }
          else{
            // alert("Invalid Credentials")
            props.showAlert("Invalid Details","danger")
          }
    }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div>
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange}  name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password"/>
  </div>
 
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login
