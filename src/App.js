import React from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import Login from './components/auth/Login';
//import Home from './assets/frontend/Home';
//import MasterLayout from './layout/admin/MasterLayout';
import EmployeeList from './components/employee/EmployeeList';
// import Logout from './components/auth/Logout';
import Auth from './components/auth/Auth';
import Sidebar from './layout/admin/Sidebar';
import Navbar from './layout/admin/Navbar';
// import Footer from './layout/admin/Footer'
// import Profile from './components/admin/Profile'
import NewCategory from './components/employee/NewCategory'
import EmployeeCreate from './components/employee/EmployeeCreate'
import EditEmployee from './components/employee/EditEmployee';
import Transaction from './components/admin/Transation';
//import 'bootstrap'
import 'bootstrap'
import 'react-bootstrap'
import "../src/assets/admin/css/styles.css"
import '../src/assets/admin/js/scripts'
import Category from './components/employee/Category';
import Dashboard from './layout/admin/Dashboard';
import Tourist from './layout/admin/Tourist/Tourist';
import Complain from './layout/admin/complain/Complain';
import ComplainReply from './layout/admin/complain/ComplainReply';
import NewPayment from './layout/admin/payment/NewPayment';
import History from './layout/admin/payment/History';
import Report from './layout/admin/report/Report';
import Review from './layout/admin/review/Review';
import CreatePak from './layout/admin/Package/CreatePak';
import PackageList from './layout/admin/Package/PackageList';
import Message from './components/messages/Message';
import TouristPayment from './layout/admin/Tourist/TouristPayment';
// import { useState } from 'react';
// import swal from 'sweetalert';
//import '../src/assets/admin/css/styles.css'
function App() {
  const history=useHistory();
  
  
  return (
    <div className="App">
    <Router history={history}>
     <Switch>
      
          <Route exact name="Home" path='/' component={EmployeeCreate}/> 
          <Route exact
          path="/employee/create"
          
          name="EmployeeCreate"
          component={EmployeeCreate}
          
        />
        <Route exact
          path="/employee"
          
          name="Employee"
          component={EmployeeList}
        />
        <Route exact
          path="/employee/update/:id"
          
          name="EditEmployee"
          component={EditEmployee}
        />
          <div className="sb-nav-fixed">
            <Navbar/>
            <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
              <Sidebar/>
              </div>
              <div id="layoutSidenav_content">
               <main>
               
        <Route   exact
          path="/admin/dashboard"
         name="Dashboard"
          component={props => <Auth {...props} Component={Dashboard} />}
        />
        {/* <Route exact
          path="/employee"
          
          name="Employee"
          component={EmployeeList}
        />
        <Route exact
          path="/employee/create"
          
          name="EmployeeCreate"
          
        /> */}
        
        <Route  exact
          path="/employee/category"
         
          name="Category"
          component={props => (
            <Auth {...props} Component={Category} />
          )}
        />

        <Route  exact
        path="/employee/category/create"
        name="NewCategory"
        component={props => (
          <Auth {...props} Component={NewCategory} />
        )}
      />

      <Route  exact
      path="/admin/employee/report"
      name="Report"
      component={props => (
        <Auth {...props} Component={Report} />
      )}
    />

      <Route  exact
      path="/admin/tourist"
      name="Tourist"
      component={props => (
        <Auth {...props} Component={Tourist} />
      )}
    />

    <Route  exact
      path="/admin/tourist/complain"
      name="Complain"
      component={props => (
        <Auth {...props} Component={Complain} />
      )}
    />
    
    <Route exact
    path="/rply/com/:id"
    
    name="ComplainReply"
    component={props => (
      <Auth {...props} Component={ComplainReply} />
    )}
  />
  
  <Route  exact
  path="/admin/tourist/review"
  name="Review"
  component={props => (
    <Auth {...props} Component={Review} />
  )}
/>
<Route  exact
path="/admin/tourist/payment"
name="TouristPayment"
component={props => (
  <Auth {...props} Component={TouristPayment} />
)}
/>

<Route  exact
path="/admin/tourist/pak"
name="PackageList"
component={props => (
  <Auth {...props} Component={PackageList} />
)}
/>
  <Route  exact
path="/admin/tourist/pak/create"
name="CreatePak"
component={props => (
  <Auth {...props} Component={CreatePak} />
)}
/>
      <Route  exact
        path="/admin/transactions"
        name="Transaction"
        component={props => (
          <Auth {...props} Component={Transaction} />
        )}
      />

      <Route  exact
      path="/admin/payment"
      name="NewPayment"
      component={props => (
        <Auth {...props} Component={NewPayment} />
      )}
    />
    <Route  exact
    path="/admin/payment/history"
    name="History"
    component={props => (
      <Auth {...props} Component={History} />
    )}
  />

  <Route  exact
  path="/admin/messages"
  name="Message"
  component={props => (
    <Auth {...props} Component={Message} />
  )}
/>
        </main>
        
        </div>
        
      </div>
    

  </div>
          <Route path='*'>
             <h1> 404 not found </h1>
          </Route>          
      </Switch>
  </Router>
    </div>
  );
}

export default App;
