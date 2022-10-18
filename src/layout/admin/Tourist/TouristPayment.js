import React from 'react'
// import { Link } from 'react-router-dom'
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
export default function TouristPayment() {
    $(document).ready(function () {
        $('#datatablesSimple').DataTable();
    });
    const [loading,setLoading]=useState(true);
    const [tplist,setTPlist]=useState([]);
//    const history =useHistory();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tourist/payment')
        .then(respnse =>{
            if(respnse.data.success===true){
                setTPlist(respnse.data.payment);
                console.log(respnse.data.payment);
            }
            setLoading(false);
        });
    }, []);
   
    var htmlTable="";
    if (loading) {
        return <h1>tourist payment.......</h1>
    }
    else{
        htmlTable=tplist.map((item)=>{
            return(
                 <tr key={item.id} className="table-success">
                 <td>{item.id}</td>
                 <td>{item.tourist.name}</td>
                 <td>{item.amount}</td>
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
        <h3>Tourist Payment History</h3>
        
       
        </div>
        <div className="card-body">
        <table id="datatablesSimple" className="table table-striped table-bordered table-sm row-border hover mb-5">
        <thead>
          <tr>
          <th>#Id</th>
          <th>Tourist</th>
          <th>Amount</th>
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
