import axios from 'axios';
import React from 'react'
// import { useState } from 'react';
import { Redirect } from "react-router-dom";
import swal from 'sweetalert';

export default function Auth ({Component}) {
  // const [loading, setLoading] = useState(false);
  // const [authenticate, setAuthenticate] = useState(false);
  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/api/userValidate').then(res=>{
  //      if (res.data.status===200) {
  //        setAuthenticate(true);
  //      }
  // return()=>{
  //   setAuthenticate(false);
  // }
  //   })
  // }, [])
    // if (!localStorage.getItem("XSRF-TOKEN")) {
    //   // setLoading(false);
    //   swal("Errors!","You are not Permited .I Don't Know Who are you?",'error')
    //   return <Redirect to="/" />;
    // }
    // if (loading) {
    //   <h1>loaing...........</h1>
    // }
    
    // axios.defaults.headers.common['Authorization']="Bearer "+localStorage.getItem('laravel-session');
    return <Component/>;
  }
 