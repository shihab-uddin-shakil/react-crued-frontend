import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';
import { useState } from 'react';

export default function ComplainReply() {
// const history=useHistory();
    const [messageInput,setMessage]=useState({
        user_id:"",
        message: "",
        emessage: "",
    });
    const history=useHistory();

    const handleInput=(e)=>{
        e.persist();
        setMessage({...messageInput,[e.target.name]: e.target.value});

    }
    const submitMessage=(e)=>{
        e.preventDefault();
        const r_id=window.location.pathname.split("/rply/com/")[1];
        const data ={
            user_id:r_id,
            message: messageInput.message
        }

        axios.post('http://127.0.0.1:8000/api/complains/store',data).then(res=>{
           
           if (res.data.success===true) {
            swal("Success",res.data.emessage,'success');
            document.getElementById('E_FORM').reset();
             history.push('/admin/tourist/complain');
           }
           else 
           {
           setMessage({...messageInput, emessage: res.data.emessage});
           }
          });
    }
    return (
        <div className="container-fluid px-4">
    <div className="card mt-4">
    <div className="card-header">
    <h4>Reply Complain
    <Link to="/admin/tourist/complain" className="btn btn-primary btn-sm float-end">Complains</Link>
    </h4>
  
    </div>
    <div className="card-body">
      <form onSubmit={submitMessage}  id="E_FORM">
         <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
             <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
          </li>
       
        </ul>
            <div className="tab-content" id="myTabContent">
    <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
   <div className="form-group mb-3">
        <div>
        <div>
        <label htmlFor="message">Message</label>
        <textarea className="form-control" onChange={handleInput} value={messageInput.message} name="message" id="exampleFormControlTextarea3" rows={7}  />
      </div>
     <small className="text-danger"> </small>
   
        </div>
    </div>

    </div>
  </div>
          </div>
          <button type="submit" className="btn btn-primary px-4 mt-2">Reply</button>
       </form>
    </div>
        
    </div>
      
    </div>
    )
}
