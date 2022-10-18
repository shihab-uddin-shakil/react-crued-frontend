import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import swal from 'sweetalert';
export default function EmployeeCreate() {
  // const [categorylist,setCategorylist]=useState([]);
  // const history=useHistory();
  const [error, setError] = useState([]);
   const [employeeInput, setEmployee] = useState({
      //  category_id: "" ,
       name: "",
      //  username:"",
      //  password: "",
       email:"",
       phone:"",
       address:"",
      //  account:"",
      //  salary:""  ,  
    });

    const handleInput = (e) =>{
      e.persist();
      setEmployee({...employeeInput, [e.target.name]: e.target.value});

    }
//   useEffect(() => {
//     axios.get('http://127.0.0.1:2344/api/employee_categories')
//     .then(respnse =>{
//         if(respnse.data.success===true){
//             setCategorylist(respnse.data.employee_category);
//            // console.log(respnse.data.employee_category);
//             //console.log(respnse.data.employee_category.title);
           
//         }
//         // setLoading(false);
//     });
// }, []);

const submitEmployee= (e) =>{
  e.preventDefault();
  const formData= new FormData();
  //  formData.append('category_id', employeeInput.category_id);
   formData.append('name', employeeInput.name);
  //  formData.append('username', employeeInput.username);
  //  formData.append('password', employeeInput.password);
   formData.append('email', employeeInput.email);
   formData.append('phone', employeeInput.phone);
   formData.append('address', employeeInput.address);
  //  formData.append('account', employeeInput.account);
  //  formData.append('salary', employeeInput.salary);
  // formData.append('phone', employeeInput.phone);

  const data={
    name: employeeInput.name,
    phone: employeeInput.phone,
    email: employeeInput.email,
    address: employeeInput.address
  }
  console.log(data);
  axios.post("/users", data)
  .then(res => 
  {
    if (res.data.name===data.name) {
    //   res.headers.add("Access-Control-Allow-Origin", "*")
    // res.headers.add("Access-Control-Allow-Headers", "*")
    // res.headers.add("Access-Control-Allow-Methods", "*")
      swal("Success",res.data.name,' added successfully');
      setEmployee({...employeeInput,
        // category_id: "" ,
        name: "",
        // username:"",
        // password: "",
        email:"",
        phone:"",
        address:"",
        // account:"",
        // salary:""  ,  
     });
 
      setError([]);
      document.getElementById('E_FORM').reset();
      // history.push('/employee');
     }
     else 
     {
       swal("All Fields Are mandariey","","error");
       console.log(res.data.message);
       setError(res.data.message);
     }
    });

}
  return (
    <div className="container-fluid px-4">
    <div className="card mt-4">
    <div className="card-header">
    <h4>Add User
    <Link to="/employee" className="btn btn-primary btn-sm float-end">User List</Link>
    </h4>
  
    </div>
    <div className="card-body">
      <form onSubmit={submitEmployee} id="E_FORM">
         <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
             <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
          </li>
         {/* <li className="nav-item" role="presentation">
          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Secure Info</button>
           </li> */}
            <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
          </li>
        </ul>
            <div className="tab-content" id="myTabContent">
    <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    {/* <div className="form-group mb-3">
    <label htmlFor="caregory_id">Select Category</label>
    <select className="form-control" onChange={handleInput} value={employeeInput.category_id} name="category_id">
    <option>--Select Category--</option>
          {
            categorylist.map((item)=>{
              return(
                <option value={item.id} key={item.id}> {item.title}</option>
              )
            })
          }
    </select>
    <small className="text-danger"> {error[0]}</small>
    </div> */}

    <div className="form-group mb-3">
        <div>
              <label htmlfor="name"> Name</label>
               <input className="form-control"onChange={handleInput} value={employeeInput.name} name="name"/>
               <small className="text-danger"> {error[1]}</small>
   
        </div>
    </div>

    </div>
    {/* <div className="tab-pane card-body border fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <div className="form-group mb-3">
          <div>
                <label htmlfor="username">Username</label>
                 <input className="form-control" onChange={handleInput} value={employeeInput.username} name="username"/>
                 <small className="text-danger"> {error[2]}</small>
          </div>
      </div>
      <div className="form-group mb-3">
       <div>
             <label htmlfor="password">Password</label>
             <input className="form-control" onChange={handleInput} value={employeeInput.password} name="password"/>
             <small className="text-danger"> {error[3]}</small>
       </div>
      </div>
      <div className="form-group mb-3">
       <div>
             <label htmlfor="account">Account</label>
             <input className="form-control" onChange={handleInput} value={employeeInput.account} name="account"/>
       </div>
      </div>
      <div className="form-group mb-3">
      <div>
            <label htmlfor="salary">Salary</label>
            <input type="number" className="form-control" onChange={handleInput} value={employeeInput.salary} name="salary"/>
      </div>
     </div>
    </div> */}
    <div className="tab-pane card-body border fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
    <div className="form-group mb-3">
          <div>
                <label htmlfor="phone">Phone</label>
                 <input className="form-control" onChange={handleInput} value={employeeInput.phone} name="phone"/>
          </div>
      </div>
      <div className="form-group mb-3">
       <div>
             <label htmlfor="email">Email</label>
             <input className="form-control" onChange={handleInput} value={employeeInput.email} name="email"/>
       </div>
      </div>
      <div className="form-group mb-3">
       <div>
             <label htmlfor="address">Address</label>
             <input className="form-control" onChange={handleInput} value={employeeInput.address} name="address"/>
       </div>
      </div>
    
    
    </div>
  </div>
          </div>
          <button type="submit" className="btn btn-primary px-4 mt-2">AddUser</button>
       </form>
    </div>
        
    </div>
      
    </div>
  )
}
