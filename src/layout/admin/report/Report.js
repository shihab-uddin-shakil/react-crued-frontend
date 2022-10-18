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

export default function Report() {
  const [loading,setLoading]=useState(true);
  const [rlist,setR]=useState([]);
 const history =useHistory();
  $(document).ready(function () {
    $('#datatablesSimple').DataTable();
});

useEffect(() => {
  axios.get('http://127.0.0.1:8000/api/report')
  .then(respnse =>{
      if(respnse.data.success===true){
        setR(respnse.data.users);
        //   console.log(respnse.data);
         
      }
      setLoading(false);
  });
}, []);

const deleteR=(e,id)=>{
  const thisClicked=e.currentTarget;
  thisClicked.innerText="Deleting..";

  const url =  `http://127.0.0.1:8000/api/report/destroy/${id}`;;

axios
.delete(url)
.then(res => {
  if(res.data.success===true){
    history.push('/admin/tourist/report');
    // console.log(res.data);
      swal('Success',res.data.message,'success');
      thisClicked.closest("tr").remove();
     
    //   useEffect();
  }
  else{
      swal('Error!',res.data.error,'error');
      thisClicked.innerText="Delete";
      
  }
})

}
const activeR=(e,id)=>{
    const thisClicked=e.currentTarget;
    thisClicked.innerText="Active...";
  
    const url =  `http://127.0.0.1:8000/api/report/edit/${id}`;;
  
  axios
  .get(url)
  .then(res => {
    if(res.data.success===true){
        history.push('/admin/tourist/report')
        thisClicked.innerText="Active";
        swal('Success',res.data.message,'success');
        // thisClicked.closest("tr").remove();
       
    }
    else{
        swal('Error!',res.data.message,'error');
        thisClicked.innerText="Active";
        
    }
  })
  
  }

  
var htmlTable="";
if (loading) {
  return <h1>Loading Report.......</h1>
}
else{
  htmlTable=rlist.map((item)=>{
      return(
           <tr key={item.id} className="table-success">
           <td>{item.id}</td>
          <td>{item.employee_id}</td>
           <td>{item.type}</td>
           <td>{item.description}</td>
           <td>{item.status}</td>
           <td> <button type="button" onClick={(e)=>activeR(e,item.id)} className="btn btn-info btn-sm" >Active</button></td>
          <td> <button type="button" onClick={(e)=>deleteR(e,item.id)} className="btn btn-danger btn-sm" >Delete</button></td>
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
     <th>Employee</th>
      <th>Type </th>
      <th>Description</th>
      <th>Status</th>
      <th>Active</th>
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

