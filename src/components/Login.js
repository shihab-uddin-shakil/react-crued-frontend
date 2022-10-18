// import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import React,{useState} from 'react'
import axios from 'axios';
const [loading, setloading] = useState(false);
 
 function Login() {
const [loginInput, setLogin] = useState({
  email:'',
  password:'',
  error_list:[],
});

const handleInput = (e) =>{
  e.persist();
  setLogin({...loginInput,[e.target.name]:e.target.value});
}
const loginSubmit= (e)=> {
  e.preventDefault();
  const data={
    email:loginInput.email,
    password: loginInput.password,
  }
  axios.get('/oauth/token')
    .then(response => {
  axios.post(' http://127.0.0.1:8000/api/login',data).then(res=>{
    console.log(res.data)
   if (res.data.success===true) {
     console.log(res.data)
     localStorage.setItem('auth-token',res.data.token)
   }
   else 
   {
    setLogin({...loginInput,error_list:res.data.message});
   }
   setloading(false);
  });
  console.log(response.data);
});
}
if (loading) {
  return <h1>loading....</h1>
}
  return (
    <div className="conatiner py-5">
    <div className="row justify-content-center">
    <div id="col-md-6">
     
      <div className="fadeIn first">
        <img src="../login.png" id="icon" alt="" />
      </div>
     
      <form>
      <div className="form-group" onSubmit={loginSubmit}>
      <input type="email" id="login" onChange={handleInput} value={loginInput.email} className="fadeIn second" name="email" placeholder="email" />
        <span>{loginInput.error_list.email}</span>
      </div>
      <br />
      <div className="form-grouo">
      
      <input type="password" id="password"  onChange={handleInput} value={loginInput.password} className="fadeIn third" name="password" placeholder="password" />
      <span>{loginInput.error_list.password}</span>
        </div>
        <br />
        <div className="form-group">
      
        <button type="submit" className="btn btn-primary">Log In </button>
          </div>
      </form>
    <br />
      <div id="formFooter">
        <Link className="underlineHover" >Forgot Password?</Link>
      </div>
    </div>
  </div>
  
    </div>
  );
}

export default Login;