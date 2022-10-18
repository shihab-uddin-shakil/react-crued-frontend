import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

export default function CreatePak() {
    const [pakInput,setPak]=useState({
        title: "",
        message: "",
    });
    const history=useHistory();

    const handleInput=(e)=>{
        e.persist();
        setPak({...pakInput,[e.target.name]: e.target.value});

    }
    const submitPak=(e)=>{
        e.preventDefault();
        const data ={
            title: pakInput.title
        }

        axios.post('http://127.0.0.1:8000/api/packeges/create',data).then(res=>{
           
           if (res.data.success===true) {
            swal("Success",res.data.message,'success');
            document.getElementById('CATEGORY_FORM').reset();
            history.push('/admin/tourist/pak');
           }
           else 
           {
           setPak({...pakInput, message: res.data.message})
           }
          });
    }
    return (
        <div className="container px-4">
        <div className="card mt-4">
        <div className="card-header">
        <h3>Create Package</h3>
        
        <Link to="/admin/tourist/pak" className="btn btn-info pull-right"><i className="fa fa-info" />
          All Package</Link>
      
        </div>
        <form onSubmit={submitPak} id="CATEGORY_FORM">
        <div className="card-body">
        <div className="tab-content ">
        <div className="tab-pane fade  show active">
        <div className="form-froup">
        <label htmlFor="title"> Paackage Type</label>
        <input className='form-control' onChange={handleInput} value={pakInput.title} type="text" name="title" />
        
        </div>
        <div>
  <br />
  <span>{pakInput.message}</span>
</div>

        </div>
        </div>
        <br />
    <button type="submit" className="btn btn-primary px-4">AddPackage</button>
        </div>
        </form>
      </div>
  
      </div>
    )
}
