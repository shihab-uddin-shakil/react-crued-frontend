import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <ul className="x-navigation x-navigation-horizontal x-navigation-panel">

  <li className="xn-icon-button">
    <Link href="#" className="x-navigation-minimize"><span className="fa fa-dedent" /></Link>
  </li>
 
  <li className="xn-search">
    <form role="form">
      <input type="text" name="search" placeholder="Search..." />
    </form>
  </li>
 
  <li className="xn-icon-button pull-right">
    <Link href="#" className="mb-control" data-box="#mb-signout"><span className="fa fa-sign-out"></span></Link>
  </li>
 
  <li className="xn-icon-button pull-right">
    <Link href="#"><span className="fa fa-comments" /></Link>
    <div className="informer informer-danger">4</div>
    <div className="panel panel-primary animated zoomIn xn-drop-left xn-panel-dragging">
      <div className="panel-heading">
        <h3 className="panel-title"><span className="fa fa-comments" /> Messages</h3>
        <div className="pull-right">
          <span className="label label-danger">4 new</span>
        </div>
      </div>
      
        
    </div>
  </li>
 
  <li className="xn-icon-button pull-right">
    <div className="informer informer-info"> </div>
  </li>
  
</ul>

    )
}
