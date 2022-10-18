import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './message.css'
import swal from 'sweetalert';
export default function Message() {
    const [loading,setLoading]=useState(true);
    const [messagelist,setMessagelist]=useState([]);

    const [messageInput,setMessage]=useState({
      user_id: "",
      message: "",
      error:"",
  });
    const handleInput=(e)=>{
      e.persist();
      setMessage({...messageInput,[e.target.name]: e.target.value});

  }
  const submitMessage=(e)=>{
      e.preventDefault();
      const formData= new FormData();
     const u_id=localStorage.getItem('user');
      // const newId=Number.parseInt(u_id);
      formData.append('user_id',u_id);
      formData.append('message',messageInput.message);
    
      // const data =[{
      //     user_id: newId,
      //     message: messageInput.message,
      // }];
      // console.log("messsgae processing.....");
      // console.log(formData);
      // console.log(data);
      axios.post('http://127.0.0.1:8000/api/message/create',formData).then(res=>{
         
         if (res.data.success===true) {
          console.log("messsgae processing.....");
          swal("Success",res.data.message,'success');
          document.getElementById('M_FORM').value="";
         
         }
         else 
         {
          // swal("Success",res.data.error,'success');
          // console.log("messsgae processing.....");
          // console.log(res.data);
         setMessage({...messageInput, error: res.data.error})
         }
        });
  }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/message')
        .then(respnse =>{
            if(respnse.data.success===true){
                setMessagelist(respnse.data.messages);
                // console.log(respnse.data.messages.user);
                // console.log(respnse.data.messages);
                // // console.log(respnse.data.messages.user.id);
               
               
            }
            setLoading(false);
        });
    }, []);

    var html="";
    var html2="";
   
if (loading) {
    return <img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves" width={250} />

  }else{
   const id=localStorage.getItem('user');
   const newId=Number.parseInt(id);
      html=messagelist.map((item,key=item.id)=>{
          if (newId===item.user.id) {
            return(
              <div className="chat-log__item chat-log__item--own">
              <h3 className="chat-log__author">{item.user.name} <small>14:30</small></h3>
              <div className="chat-log__message">{item.message}</div>
            </div>
           )
          }
        
       
    });

    html2=messagelist.map((item,key=item.id)=>{
        if (newId===item.user.id) {
          return(
              <p></p>
         )
        }
        else{
            return(
                 
              <div className="chat-log__item">
              <h3 className="chat-log__author">{item.user.name} <small></small></h3>
              <div className="chat-log__message">{item.message}</div>
             </div>
           )
        }
      
     
  });
  }
    return (
      <div>
  <header className="page-header">
    <div className="container ">
      <h2>{localStorage.getItem('name')}</h2>
    </div>
  </header>
  <div className="main">
    <div className="container ">
      <div className="chat-log">
       {html}
       {html2}
      </div>
    </div>
    <div className="chat-form">
      <div className="container ">
        <form onSubmit={submitMessage} >
          <div className="row">
            <div className="col-sm-10 col-xs-8">
              <input type="text" className="form-control" id="M_FORM" name="message" onChange={handleInput} value={messageInput.message}  placeholder="Message" />
            </div>
            <div className="col-sm-2 col-xs-4">
              <button type="submit" className="btn btn-success btn-block">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

        )
}
