import React from 'react'
import { Link, useHistory } from 'react-router-dom'
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
export default function PackageList() {
    $(document).ready(function () {
        $('#datatablesSimple').DataTable();
    });
    const [loading,setLoading]=useState(true);
    const [paklist,setPaklist]=useState([]);
   const history =useHistory();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/packeges')
        .then(respnse =>{
            if(respnse.data.success===true){
                setPaklist(respnse.data.package);
              //  console.log(respnse.data);
               
            }
            setLoading(false);
        });
    }, [paklist]);
    const deletePak=(e,id)=>{
        const thisClicked=e.currentTarget;
        thisClicked.innerText="Deleting..";

        const url = `http://127.0.0.1:8000/api/packeges/${id}`;

    axios
      .delete(url)
      .then(res => {
        if(res.data.success===true){
            swal('Success',res.data.message,'success');
            thisClicked.closest("tr").remove();
        }
        else{
            swal('Error!',res.data.message,'error');
            thisClicked.innerText="Delete";
            history.push('/admin/packge')
        }
      })
 
    }
    var htmlTable="";
    if (loading) {
        return <h1>Loading Package.......</h1>
    }
    else{
        htmlTable=paklist.map((item)=>{
            return(
                 <tr key={item.id} className="table-success">
                 <td>{item.id}</td>
                 <td>{item.title}</td>
                 <td> <button type="button" onClick={(e)=>deletePak(e,item.id)} className="btn btn-danger btn-sm" >Delete</button></td>
                 </tr>
            )
        });
    }
    return (
        <div className="container px-4">
        <div className="card mt-4">
        <div className="card-header">
        <h3>Package List</h3>
        
        <Link to="/admin/tourist/pak/create" className="btn btn-info pull-right"><i className="fa fa-plus" />
          NewPackage</Link>
      
        </div>
        <div className="card-body">
        <table id="datatablesSimple" className="table table-striped table-bordered table-sm row-border hover mb-5">
        <thead>
          <tr>
          <th>#Id</th>
          <th>Name</th>
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
