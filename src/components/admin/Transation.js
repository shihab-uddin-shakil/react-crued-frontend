import React from 'react'
// import {  useHistory } from 'react-router-dom'
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

export default function Transaction() {
  const [loading,setLoading]=useState(true);
  const [transactionlist,setTransaction]=useState([]);
//  const history =useHistory();
  $(document).ready(function () {
    $('#datatablesSimple').DataTable();
});

useEffect(() => {
  axios.get('http://127.0.0.1:8000/api/admin/transaction')
  .then(respnse =>{
      if(respnse.data.success===true){
        setTransaction(respnse.data.transactions);
         
      }
      setLoading(false);
  });
}, []);


var htmlTable="";
if (loading) {
  return <h1>Loading Transaction.......</h1>
}
else{
  htmlTable=transactionlist.map((item)=>{
      return(
           <tr key={item.id} className="table-success">
           <td>{item.id}</td>
           <td>{item.user}</td>
           <td>{item.activity}</td>
           <td>{item.description}</td>
           <td>{item.created_at}</td>
           </tr>
      )
  });
}
  return (
    <div className="container px-4">
    <div className="card mt-4">
    <div className="card-header">
    <h3>All Transactions</h3>
    
    
    </div>
    <div className="card-body">
    <table id="datatablesSimple" className="table table-striped table-bordered table-sm row-border hover mb-5">
    <thead>
      <tr>
      <th>#Id</th>
      <th>User</th>
      <th>Activity</th>
      <th>Description</th>
      <th>Date</th>
      
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

