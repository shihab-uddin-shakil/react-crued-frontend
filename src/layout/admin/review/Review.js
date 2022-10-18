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

export default function Review() {
  const [loading,setLoading]=useState(true);
  const [rlist,setR]=useState([]);
 const history =useHistory();
  $(document).ready(function () {
    $('#datatablesSimple').DataTable();
});

useEffect(() => {
  axios.get('http://127.0.0.1:8000/api/review')
  .then(respnse =>{
      if(respnse.data.success===true){
        setR(respnse.data.users);
        //   console.log(respnse.data);
         
      }
      setLoading(false);
  });
}, []);


const activeR=(e,id)=>{
    const thisClicked=e.currentTarget;
    thisClicked.innerText="Active...";
  
    const url =  `http://127.0.0.1:8000/api/review/edit/${id}`;;
  
  axios
  .get(url)
  .then(res => {
    if(res.data.success===true){
        history.push('/admin/tourist/review');
        thisClicked.innerText="Active";
        swal('Success',res.data.message,'success');
        
    }
    else{
        swal('Error!',res.data.message,'error');
        thisClicked.innerText="Active";
        
    }
  })
  
  }

  
var htmlTable="";
if (loading) {
  return <h1>Loading Tourist Review.......</h1>
}
else{
  htmlTable=rlist.map((item)=>{
      return(
           <tr key={item.id} className="table-success">
           <td>{item.id}</td>
          <td>{item.user_id}</td>
           <td>{item.rate}</td>
           <td>{item.coment}</td>
           <td>{item.status}</td>
           <td>{item.created_at}</td>
           <td> <button type="button" onClick={(e)=>activeR(e,item.id)} className="btn btn-info btn-sm" >Active</button></td>
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
     <th>User</th>
      <th>Rate </th>
      <th>Coment</th>
      <th>Status</th>
      <th>Date</th>
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

