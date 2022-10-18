import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Dashboard() {
    const [loading,setLoading]=useState(true);
    const [dashboardlist,setDashboardlist]=useState([]);
//    const history =useHistory();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/admin/dashboard')
        .then(respnse =>{
            if(respnse.data.success===true){
                 setDashboardlist(respnse.data.data);
                // console.log(respnse.data);
               
            }
            setLoading(false);
        });
    }, []);
    if (loading) {
        return <h1>Loading Dashboard.......</h1>
    }
    return (
        <div className="container-fluid px-4">
    <div className="card mt-4">
    <div className="card-header">
    <h4> {localStorage.getItem('name')} Dashboard
    </h4>
  
    </div>
    <div className="card-body">
     <div className="row">
      <div className="col-md-3">
      <div className="card text-white bg-primary mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-header">Total Employee</div>
  <div className="card-body">
    <h5 className="card-title">{dashboardlist.employee}</h5>
    <p className="card-text">pepoles</p>
  </div>
</div>

      </div>
      <div className="col-md-3">
      <div className="card text-white bg-warning mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-header">Total Payment</div>
  <div className="card-body">
    <h5 className="card-title">{dashboardlist.pay}</h5>
    <p className="card-text">Taka</p>
  </div>
</div>

      </div>
      <div className="col-md-3">
      <div className="card text-white bg-info mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-header">Total Profit </div>
  <div className="card-body">
    <h5 className="card-title">{dashboardlist.profit}</h5>
    <p className="card-text">Taka</p>
  </div>
</div>

      </div>
      <div className="col-md-3">
      <div className="card text-white bg-secondary mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-header">Total Earn</div>
  <div className="card-body">
    <h5 className="card-title">{dashboardlist.earn}</h5>
    <p className="card-text">Taka</p>
  </div>
</div>

      </div>
     </div>
    </div>
    </div>
    </div>
    
    )
}
