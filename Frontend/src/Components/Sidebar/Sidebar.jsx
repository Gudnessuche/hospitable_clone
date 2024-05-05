import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="upper-part">
            <div className="sidebar-nav">
                <img src={assets.user_icon} alt="" />
                <p>HOSPITABLE</p>
            </div>
            <div className="sidebar-contents">
                <li><img src={assets.user_icon} alt="" /> Inbox</li>
                <li><img src={assets.user_icon} alt="" /> Properties</li>
                <li><img src={assets.user_icon} alt="" /> Calendar</li>
                <li><img src={assets.user_icon} alt="" /> Guest Experience</li>
                <li><img src={assets.user_icon} alt="" /> Operations</li>
                <li><img src={assets.user_icon} alt="" /> Metrics</li>
                <li><img src={assets.user_icon} alt="" /> Connected Accounts</li>
                <li><img src={assets.user_icon} alt="" /> Direct</li>
                <li><img src={assets.user_icon} alt="" /> Devices</li>
            </div>
        </div>
        <div className="lower-part">
            <div className="lower-contents">
                <li><img src={assets.user_icon} alt="" /> Apps</li>
                <li><img src={assets.user_icon} alt="" /> Help</li>
                <li><img src={assets.user_icon} alt="" /> Settings</li>
                <hr />
                <li><img src={assets.user_icon} alt="" /> Sky Suites</li>
            </div>
        </div>
    </div>
  )
}

export default Sidebar