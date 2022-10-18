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
export default function Category() {
    $(document).ready(function () {
        $('#datatablesSimple').DataTable();
    });
    const [loading,setLoading]=useState(true);
    const [categorylist,setCategorylist]=useState([]);
   const history =useHistory();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/employee_categories')
        .then(respnse =>{
            if(respnse.data.success===true){
                setCategorylist(respnse.data.employee_category);
                console.log(respnse.data);
               
            }
            setLoading(false);
        });
    }, []);
    const deleteCategory=(e,id)=>{
        const thisClicked=e.currentTarget;
        thisClicked.innerText="Deleting..";

        const url = `http://127.0.0.1:8000/api/employee_categories/${id}`;

    axios
      .delete(url)
      .then(res => {
        if(res.data.success===true){
            swal('Success',res.data.message,'success');
            thisClicked.closest("tr").remove();
        }
        else{
            swal('Error!',res.data.error,'error');
            thisClicked.innerText="Delete";
            history.push('/employee/category')
        }
      })
 
    }
    var htmlTable="";
    if (loading) {
        return <h1>Loading Category.......</h1>
    }
    else{
        htmlTable=categorylist.map((item)=>{
            return(
                 <tr key={item.id} className="table-success">
                 <td>{item.id}</td>
                 <td>{item.title}</td>
                 <td> <button type="button" onClick={(e)=>deleteCategory(e,item.id)} className="btn btn-danger btn-sm" >Delete</button></td>
                 </tr>
            )
        });
    }
    return (
        <div className="container px-4">
        <div className="card mt-4">
        <div className="card-header">
        <h3>Category List</h3>
        
        <Link to="/employee/category/create" className="btn btn-info pull-right"><i className="fa fa-plus" />
          NewCategory</Link>
      
        </div>
        <div className="card-body">
        <table id="datatablesSimple" className="table table-striped table-bordered table-sm row-border hover mb-5">
        <thead>
          <tr>
          <th>#Id</th>
          <th>Name</th>
          <th>Action</th>
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
