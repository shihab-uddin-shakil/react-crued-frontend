import React from 'react'
import {  useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import { useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import swal from 'sweetalert';

export default function Tourist() {
  const [loading,setLoading]=useState(true);
  const [tlist,setT]=useState([]);
 const history =useHistory();
  $(document).ready(function () {
    $('#datatablesSimple').DataTable();
});

useEffect(() => {
  axios.get('http://127.0.0.1:8000/api/tourist')
  .then(respnse =>{
      if(respnse.data.success===true){
        setT(respnse.data.users);
        //   console.log(respnse.data);
         
      }
      setLoading(false);
  });
}, [],2000);

const deleteT=(e,id)=>{
  const thisClicked=e.currentTarget;
  thisClicked.innerText="Deleting..";

  const url =  `http://127.0.0.1:8000/api/tourist/destroy/${id}`;;

axios
.delete(url)
.then(res => {
  if(res.data.success===true){
    console.log(res.data);
      swal('Success',res.data.message,'success');
      thisClicked.closest("tr").remove();
      history.push('/admin/tourist');
    //   useEffect();
  }
  else{
      swal('Error!',res.data.error,'error');
      thisClicked.innerText="Delete";
      
  }
})

}
const activeT=(e,id)=>{
    const thisClicked=e.currentTarget;
    thisClicked.innerText="Acrive...";
  
    const url =  `http://127.0.0.1:8000/api/tourist/edit/${id}`;;
  
  axios
  .get(url)
  .then(res => {
    if(res.data.success===true){
      console.log(res.data);
        swal('Success',res.data.message,'success');
        // thisClicked.closest("tr").remove();
        history.push('/admin/tourist')
    }
    else{
        swal('Error!',res.data.message,'error');
        thisClicked.innerText="Active";
        
    }
  })
  
  }

  const deactiveT=(e,id)=>{
    const thisClicked=e.currentTarget;
    thisClicked.innerText="Deactivate...";
  
    const url =  `http://127.0.0.1:8000/api/tourist/update/${id}`;;
  
  axios
  .get(url)
  .then(res => {
    if(res.data.success===true){
      history.push('/admin/tourist')
        swal('Success',res.data.message,'success');
        // thisClicked.closest("tr").remove();
        
    }
    else{
        swal('Error!',res.data.message,'error');
        thisClicked.innerText="Deactivate";
        
    }
  })
  
  }
var htmlTable="";
if (loading) {
  return <h1>Loading Tourist.......</h1>
}
else{
  htmlTable=tlist.map((item)=>{
      return(
           <tr key={item.id} className="table-success">
           <td>{item.id}</td>
          <td>{item.name}</td>
           <td>{item.account}</td>
           <td>{item.address}</td>
           <td>{item.email}</td>
           <td>{item.phone}</td>
           <td>{item.status}</td>
           <td> <button type="button" onClick={(e)=>activeT(e,item.id)} className="btn btn-info btn-sm" >Active</button></td>
           <td> <button type="button" onClick={(e)=>deactiveT(e,item.id)} className="btn btn-warning btn-sm" >Deactivate</button></td>
           <td> <button type="button" onClick={(e)=>deleteT(e,item.id)} className="btn btn-danger btn-sm" >Delete</button></td>
           </tr>
      )
  });
}
  return (
    <div className="container px-4">
    <div className="card mt-4">
    <div className="card-header">
    <h3>Tourist List</h3>
    
   
    </div>
    <div className="card-body">
    <table id="datatablesSimple" className="table table-striped table-bordered table-sm row-border hover mb-5">
    <thead>
      <tr>
      <th>#Id</th>
     <th>Name</th>
      <th>Account</th>
      <th>Address</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Status</th>
      <th>Active</th>
      <th>Deactivate</th>
      <th>Delete</th>
     
      </tr>
    </thead>
    <tbody>
    {htmlTable}
    </tbody>
    </table>

    </div>
  </div>

  </div>
  )
}

