import React from 'react'
import { Link } from 'react-router-dom';

 const Sidebar= ()=> {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
  <div className="sb-sidenav-menu">
    <div className="nav">
      <div className="sb-sidenav-menu-heading">Core</div>
      <Link className="nav-link btn" to="/admin/dashboard">
        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt="/></div>
        Dashboard
      </Link>
      <Link className="nav-link" to="/admin/messages">
        <div className="sb-nav-link-icon"><i className="far fa-comment-dots"/></div>
       Chats
      </Link>
      <Link className="nav-link" to="/admin/profile">
        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"/></div>
        Charts
      </Link>
      <div className="sb-sidenav-menu-heading">Interface</div>
      <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
        <div className="sb-nav-link-icon"><i className="fas fa-user fa-fw" /></div>
        Employees
        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
      </Link>

      <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
        <nav className="sb-sidenav-menu-nested nav">
          <Link className="nav-link" to="/employee">Employee</Link>
          <Link className="nav-link" to="/employee/category">Category</Link>
          <Link className="nav-link" to="/admin/employee/report">Report</Link>
          <Link className="nav-link" to="/admin/payment">NewSalary</Link>
          <Link className="nav-link" to="/admin/payment/history">Salary History</Link>
        </nav>
      </div>
      <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
      <div className="sb-nav-link-icon"><i className="fas fa-user fa-fw" /></div>
      Touriss
      <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
    </Link>
    
    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
      <nav className="sb-sidenav-menu-nested nav">
        <Link className="nav-link" to="/admin/tourist">Tourist</Link>
        <Link className="nav-link" to="/admin/tourist/complain">Complain</Link>
        <Link className="nav-link" to="/admin/tourist/review">Review</Link>
        <Link className="nav-link" to="/admin/tourist/pak">Package</Link>
        <Link className="nav-link" to="/admin/tourist/payment">Payment History</Link>
      </nav>
    </div>
      <div className="sb-sidenav-menu-heading">Addons</div>
      <Link className="nav-link btn" to="/admin/transactions">
        <div className="sb-nav-link-icon"><i className="fas fa-chart-area" /></div>
        Transactions
      </Link>
    </div>
  </div>
  <div className="sb-sidenav-footer">
    <div className="small">Logged in as:</div>
    Descalzo
  </div>
</nav>


    );
}
export default Sidebar;