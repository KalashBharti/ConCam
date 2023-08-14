import React from 'react'
import "../style/sidebar.css"
import instagram from "../icons/instagram.png"
import facebook from "../icons/facebook.png"
import linkedin from "../icons/linkedin.png"
import github from "../icons/github.png"
import { Link } from "react-router-dom";

export default function Sidebar({ sidebarState }) {
    return (
        <div className={sidebarState ? 'side-bar active' : "side-bar"}>
            <div className="list-contents">

                <li>
                <Link className='nav-link ' aria-current="page" to='/'>
                        <i className="ri-home-4-fill"></i>
                       <label className='gap' >Home</label> 
                    </Link>
                </li>
                <li >
                <Link className='nav-link ' aria-current="page" to='contact'>
                    <i className="ri-contacts-fill"></i>
                    <label className='gap'>
                        contact us
                        </label> 
                    </Link>
                    </li>
                <li>
                <Link className='nav-link ' aria-current="page" to='contact'>
                    <i className="ri-questionnaire-fill"></i>
                    <label htmlFor="" className='gap'>
                         How to Use
                        </label>
                    </Link></li>

                <li>
                <Link className='nav-link ' aria-current="page" to='feedback'>
                    <i className="ri-feedback-fill"></i>
                    <label htmlFor="" className="gap">

                    Feedback
                    </label>
                    </Link>
                    </li>
            </div>
            <div className="social">

                <a href="https://www.linkedin.com/in/kalash-bharti-31842a251/" target='_blank' rel="noreferrer">
                    <img src={linkedin} alt="" />
                </a>
                <a href="https://github.com/KalashBharti" target='_blank' rel="noreferrer">
                    <img src={github} alt="" />
                </a>

                <a href="https://www.instagram.com/kalashbharti26/" target='_blank' rel="noreferrer">
                    <img src={instagram} alt="" rel="noreferrer" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100012271084222" target='_blank' rel="noreferrer">

                    <img src={facebook} alt="" />
                </a>

            </div>
        </div>
    )
}
