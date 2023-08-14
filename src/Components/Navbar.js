// import {React, useState} from 'react'
import '../style/navbar.css'
import { Link } from "react-router-dom";


export default function Navbar({ toggleSideBar, sidebar ,toggleLogin }) {

  
  
  const handleClickIcon = () => {
    toggleSideBar()
  }

  return (
    <div>
      <div className="tool-bar">
        <div className="hamburger" onClick={handleClickIcon}>
          {sidebar ? <i className="ri-close-fill"></i> : <i className="ri-menu-line text-white"></i>}

        </div>
        <div className='title'>
          <Link className='nav-link ' aria-current="page" to='/'>
            ConCam
          </Link>
        </div>

        <div className='tool-right '>

          <div className='nav-right-element'>
            <a href='https://github.com/KalashBharti' target='_blank' rel="noreferrer">

              <i className="ri-github-fill"></i> GitHub
            </a>
          </div>
          <div className='nav-right-element'>
            <button className='btn-none text-white' onClick={toggleLogin} >

            <i className="ri-login-box-fill"></i> Login
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
