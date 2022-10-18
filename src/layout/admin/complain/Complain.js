import React from 'react'
import {  Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import { useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
// import swal from 'sweetalert';

export default function Complain() {
  const [loading,setLoading]=useState(true);
  const [complainlist,setComplain]=useState([]);
//  const history =useHistory();
  $(document).ready(function () {
    $('#datatablesSimple').DataTable();
});

useEffect(() => {
  axios.get('http://127.0.0.1:8000/api/complains')
  .then(respnse =>{
      if(respnse.data.success===true){
        setComplain(respnse.data.complains);
        //  console.log(respnse.data.complains.user);
      }
      setLoading(false);
  });
}, []);


// const replyCom=(e,id)=>{
//     const thisClicked=e.currentTarget;
//     thisClicked.innerText="Active...";
  
//     const url =  `http://127.0.0.1:8000/api/review/edit/${id}`;;
  
//   axios
//   .get(url)
//   .then(res => {
//     if(res.data.success===true){
//         history.push('/admin/tourist/review')
//         swal('Success',res.data.message,'success');
        
//     }
//     else{
//         swal('Error!',res.data.message,'error');
//         thisClicked.innerText="Active";
        
//     }
//   })
  
//   }

  
var htmlTable="";
if (loading) {
  return <h1>Loading complain.......</h1>
}
else{
  htmlTable=complainlist.map((item)=>{
      return(
           <tr key={item.id} className="table-success">
           <td>{item.id}</td>
          <td>{item.user.name}</td>
          <td>{item.title}</td>
           <td>{item.message}</td>
           <td>{item.created_at}</td>
           <td> <Link to={`/rply/com/${item.id}`} className="btn btn-info btn-sm">Reply</Link></td>
           
            </tr>
      )
  });
}
  return (
    <div className="container px-4">
    <div className="card mt-4">
    <div className="card-header">
    <h3>Complains</h3>
    
   
    </div>
    <div className="card-body">
    <table id="datatablesSimple" className="table table-striped table-bordered table-sm row-border hover mb-5">
    <thead>
      <tr>
      <th>#Id</th>
     <th>User</th>
     <th>Title</th>
      <th>Message </th>
      <th>Date</th>
      <th>Reply</th>
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

