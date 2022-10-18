import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="message-box animated fadeIn" data-sound="alert" id="mb-signout">
  <div className="mb-container">
    <div className="mb-middle">
      <div className="mb-title"><span className="fa fa-sign-out" /> Log
        <strong>Out</strong> ?
      </div>
      <div className="mb-content">
        <p>Are you sure you want to log out?</p>
        <p>Press No if youwant to continue work. Press Yes to logout current user.</p>
      </div>
      <div className="mb-footer">
        <div className="pull-right">
          <Link className="btn btn-success btn-lg">Yes</Link>
          <button className="btn btn-default btn-lg mb-control-close">No</button>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
