import React,{useState} from 'react'
import axios from 'axios';

import { Link, useHistory } from 'react-router-dom'
import swal from 'sweetalert';

 function Login() {
  
   const history=useHistory();
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
      //  axios.get('/oauth/personal-access-tokens')
          //.then(response => {
        axios.post(' http://127.0.0.1:8000/api/login',data).then(res=>{
         if (res.data.success===true) {
           console.log(res.data)
           localStorage.setItem('XSRF-TOKEN',res.data.token);
           localStorage.setItem('laravel-session',res.data.token);
           localStorage.setItem('name',res.data.user.name);
           localStorage.setItem('user',res.data.user.id);
           localStorage.setItem('Bearer ',res.data.token);
          
           swal("Success",res.data.message,"success");
           history.push('/admin/dashboard');
           setLogin({...loginInput,token:res.data.token});
         // console.log(localStorage.setItem('users' ,"shihab")) 
         }
         else 
         {
          setLogin({...loginInput,error_list:res.data.message});
          console.log(res.data.message)
         }
        });
       // console.log(response.data);
      //});
      }
      
    return (
      <div className="pt-5">
      <div className="row">  
      <div className="col-md-4  mx-auto">
      

      <div className="container-fluid px-4">
      <div className="card mt-4">
     
     <div className="card">
     <div className="card-header text-center">
      <h2>Login</h2>
   </div>
   <div className="card-body">
   <form  onSubmit={loginSubmit}>
   <div className="form-group">
   <input type="email" class="form-control form-control-lg" onChange={handleInput} value={loginInput.email}  name="email" placeholder="email" />
   <br />
     <span>{loginInput.error_list[0]}</span>
   </div>
   <br />
   <div className="form-grouo">
   
   <input type="password" class="form-control form-control-lg"  onChange={handleInput} value={loginInput.password}  name="password" placeholder="password" />
   <br />
   <span>{loginInput.error_list[1]}</span>
     </div>
     <br />
     <div className="form-group">
     <span>{loginInput.error_list}</span>
     <br />
     <input type="submit" value='Log In' className="btn btn-primary btn-lg"/>
       </div>
   </form>
<br />
       
   
   <div id="card-footer">
     <Link className="underlineHover" href="" to="/" >Forgot Password?</Link>
   </div>
   </div>
     </div>
    
     
     
    </div>
  </div>
  </div>
  </div>
  </div>
    
            
       
    )
}

export default Login;