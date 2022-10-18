import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="page-sidebar">
      
        <ul className="x-navigation">
          <li className="xn-logo">
            <Link href>Descalzo</Link>
            <Link href="#" className="x-navigation-control" />
          </li>
          
          <li className="xn-title">Navigation</li>
          <li className="active">
            <Link ><span className="fa fa-desktop" /> <span className="xn-text">Dashboard</span></Link>
          </li>
          <li className="xn-openable">
            <Link href="#"><span className="fa fa-files-o" /> <span className="xn-text">Personal</span></Link>
            <ul> 
              <li className="xn-openable">
                <Link href="#"><span className="fa fa-envelope" /> Mailbox</Link>
                <ul>
                  <li><Link ><span className="fa fa-inbox" /> Inbox</Link></li>
                  <li><Link ><span className="fa fa-file-text" />
                      Message</Link>
                      </li>
                  <li>
                  <Link  ><span className="fa fa-pencil" /> Compose</Link>
                  </li>
                </ul>
              </li>
              <li><Link ><span className="fa fa-comments" /> Messages</Link></li>
              <li><Link  ><span className="fa fa-calendar" /> Calendar</Link></li>
               </ul>
           </li>
          <li className="xn-title">All Users</li>
          <li className="xn-openable">
            <Link  href="#"><span className="fa fa-users" /> <span className="xn-text">Employees</span></Link>
            <ul>
              <li><Link  ><span className="fa fa-user" />User</Link></li>
              <li><Link  ><span className="fa fa-users" />Group</Link></li>
            </ul>
          </li>
          <li className="xn-openable">
            <Link  href="#"><span className="fa fa-users" /> <span className="xn-text">Tourist</span></Link>
            <ul>
              <li><Link ><span className="fa fa-user" />User</Link></li>
              <li><Link ><span className="fa " />Review</Link></li>
              <li><Link  ><span className="fa " />Packge</Link></li>
            </ul>

          </li>
          <li className="xn-openable">
            <Link  href="#"><span className="fa fa-bar-chart-o" /> <span className="xn-text">Transactions</span></Link>
            <ul>
              <li><Link  ><span className="fa  fa-bar-chart-o">Transaction</span></Link>
              </li>
            </ul>
          </li>
          <li className="xn-openable">
            <Link  href="#"><span className="fa fa-credit-card" /> <span className="xn-text">Payments</span></Link>
            <ul>
              <li><Link ><span className="fa fa-money xn-text">Salary</span></Link>
              </li>
              <li><Link  ><span className="fa fa-history xn-text">History</span></Link></li>
            </ul>
          </li>
          <li className>
            <Link ><span className="fa fa-flag-checkered" /> <span className="xn-text">Complains</span></Link>
          </li>
          <li className>
            <Link  ><span className="fa fa-flag" /> <span className="xn-text">Reports</span></Link>
          </li>
          <li className>
            <Link href="#"><span className="fa fa-flag-o" /> <span className="xn-text">Reports</span></Link>
          </li>
       </ul>
      </div>
      
    )
}
