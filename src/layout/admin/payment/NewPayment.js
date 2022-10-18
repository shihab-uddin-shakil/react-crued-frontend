import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import swal from 'sweetalert';
export default function NewPayment() {
  const [employeelist,setEmployeelist]=useState([]);
//   const [newlist,setnewEmployeelist]=useState([]);
  // const history=useHistory();
  const [loading,setLoading]=useState(true);
  const [error, setError] = useState([]);
   const [paymentInput, setPayment] = useState({
       user_id: "" ,
       amount: "",
       account:"",
      
    });

    const handleInput = (e) =>{
      e.persist();
      setPayment({...paymentInput, [e.target.name]: e.target.value});

    }
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/employee')
    .then(respnse =>{
        if(respnse.data.success===true){
            setEmployeelist(respnse.data.users);
           // console.log(respnse.data.employee_category);
            // console.log(respnse.data.users);
           
        }
         setLoading(false);
    });
}, []);
const info =(e)=>{
    e.preventDefault();
    const id =document.getElementById('user').value
    axios.get(`http://127.0.0.1:8000/api/employee/${id}`)
    .then(respnse =>{
        if(respnse.data.success===true){
            setPayment(respnse.data.users);
        //   console.log(respnse.data.users);
            //console.log(respnse.data.employee_category.title);
         
        }
        
        else{
            swal('Error',respnse.data.message,'error');
            // history.push('/employee');
        }
         setLoading(false);
    });
    console.log("am info");
}

const submitPayment= (e) =>{
  e.preventDefault();
  const nid =document.getElementById('user').value
//   const formData= new FormData();
//    formData.append('user_id', paymentInput.user_id);
  
//    formData.append('account', paymentInput.account);
//    formData.append('amount', paymentInput.salary);
//   // formData.append('phone', employeeInput.phone);
//   console.log(formData);
  const data={
      user_id:nid,
       amount: paymentInput.salary,
       account:paymentInput.account,
  }
  console.log(data);

  axios.post("http://127.0.0.1:8000/api/payment/create", data)
  .then(res => 
  {
    if (res.data.success===true) {
      swal("Success",res.data.message,'success');
      setPayment({...paymentInput,
        user_id: "" ,
        amount: "",
        account:"",
       
     });
 
      setError([]);
      document.getElementById('E_FORM').reset();
      // history.push('/employee');
     }
     else 
     {
       console.log(res.data);
       swal("All Fields Are mandatory","","error");
       console.log(res.data.message);
       setError(res.data.message);
     }
    });

}
var html=""

if (loading) {
    return <img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves" width={250} />

  }
  return (
    <div className="container-fluid px-4">
    <div className="card mt-4">
    <div className="card-header">
    <h4>Make Payment
    <Link to="/admin/payment/history" className="btn btn-primary btn-sm float-end">Payment History</Link>
    </h4>
  
    </div>
    <div className="card-body">
      <form onSubmit={submitPayment} id="E_FORM">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
             <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Payment</button>
          </li>
        </ul>
            <div className="tab-content" id="myTabContent">
        <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div className="form-group mb-3">
    <label htmlFor="caregory_id">Select Category</label>
    <select className="form-control"onClick={info} id="user" onChange={handleInput} value={paymentInput.user_id} name="user_id">
    <option>--Select Employee--</option>
          {
            employeelist.map((item)=>{
              return(
                <option value={item.id} key={item.id}> {item.name}</option>
                
              )
            })
          }
    </select>
    <small className="text-danger"> {error[0]}</small>
    </div>

  
      <div className="form-group mb-3">
       <div>  <label htmlfor="account">Account</label>
             <input className="form-control" onChange={handleInput} value={paymentInput.account} name="account" readOnly/>
         </div>
        </div>
         <div className="form-group mb-3">
          <div>
            <label htmlfor="salary">Salary</label>
            {html}
            <input type="number" className="form-control" onChange={handleInput} value={paymentInput.salary} name="salary" readOnly/>
            </div>
            </div>
   
          </div>
          </div>
        
          <button type="submit" className="btn btn-primary px-4 mt-2">PayNow</button>
       </form>
    
       </div>
    </div>
    </div>
        
    
  )
}
