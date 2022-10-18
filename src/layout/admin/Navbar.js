import axios from 'axios';
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';

 const Navbar= ()=> {
  const history=useHistory();
  const logout=()=>{
    // sweetAlert('Are you Sure Want to log out?');
    swal('Success',"Successfully logout",'success');
    localStorage.clear();
    axios.defaults.headers.common['Authorization']="Bearer ";
    history.push('/')
  }
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
  
        <Link className="navbar-brand ps-3" to="/admin">Descalzo Admin</Link>

       <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" to="#!"><i className="fas fa-bars" /></button>
       <ul className="navbar-nav ms-auto ms-md-2 me-3 me-lg-4">
       <li className="nav-item dropdown">
        <Link className="navbar-brand ps-2" to="/admin">Hello {localStorage.getItem('name')} ! Wellcome Your Dashboard</Link>
       </li>
       
     </ul>
  <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
    <div className="input-group">
      <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
      <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search" /></button>
    </div>
  </form>

  <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
    <li className="nav-item dropdown">
    <button type="btn btn-warning btn-sm" onClick={logout}><i className="fas fa-user fa-fw" />LogOut</button>
    </li>
    
  </ul>
</nav>

    );
}
export default Navbar;