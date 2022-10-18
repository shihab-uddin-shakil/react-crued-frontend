import React from 'react'
import { Link } from 'react-router-dom'
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
export default function History() {
    $(document).ready(function () {
        $('#datatablesSimple').DataTable();
    });
    const [loading,setLoading]=useState(true);
    const [historylist,setHistorylist]=useState([]);
//    const history =useHistory();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/salary_historys')
        .then(respnse =>{
            if(respnse.data.success===true){
                setHistorylist(respnse.data.history);
                // console.log(respnse.data.history);
            }
            setLoading(false);
        });
    }, []);
   
    var htmlTable="";
    if (loading) {
        return <h1>history.......</h1>
    }
    else{
        htmlTable=historylist.map((item)=>{
            return(
                 <tr key={item.id} className="table-success">
                 <td>{item.id}</td>
                 <td>{item.employee.name}</td>
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
        <h3>Payment History</h3>
        
        <Link to="/admin/payment" className="btn btn-info pull-right"><i className="fa fa-plus" />
          NewPayment</Link>
      
        </div>
        <div className="card-body">
        <table id="datatablesSimple" className="table table-striped table-bordered table-sm row-border hover mb-5">
        <thead>
          <tr>
          <th>#Id</th>
          <th>Employee</th>
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
