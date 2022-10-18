import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

export default function NewCategory() {
    const [categoryInput,setCategory]=useState({
        title: "",
        message: "",
    });
    const history=useHistory();

    const handleInput=(e)=>{
        e.persist();
        setCategory({...categoryInput,[e.target.name]: e.target.value});

    }
    const submitCategory=(e)=>{
        e.preventDefault();
        const data ={
            title: categoryInput.title
        }

        axios.post('http://127.0.0.1:8000/api/employee_categories/create',data).then(res=>{
           
           if (res.data.success===true) {
            swal("Success",res.data.message,'success');
            document.getElementById('CATEGORY_FORM').reset();
            history.push('/employee/category');
           }
           else 
           {
           setCategory({...categoryInput, message: res.data.message})
           }
          });
    }
    return (
        <div className="container px-4">
        <div className="card mt-4">
        <div className="card-header">
        <h3>Create Category</h3>
        
        <Link to="/employee/category" className="btn btn-info pull-right"><i className="fa fa-info" />
          All Category</Link>
      
        </div>
        <form onSubmit={submitCategory} id="CATEGORY_FORM">
        <div className="card-body">
        <div className="tab-content ">
        <div className="tab-pane fade  show active">
        <div className="form-froup">
        <label htmlFor="title"> Category</label>
        <input className='form-control' onChange={handleInput} value={categoryInput.title} type="text" name="title" />
        
        </div>
        <div>
  <br />
  <span>{categoryInput.message}</span>
</div>

        </div>
        </div>
        <br />
    <button type="submit" className="btn btn-primary px-4">AddCategory</button>
        </div>
        </form>
      </div>
  
      </div>
    )
}
