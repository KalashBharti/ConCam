import React from 'react'
import '../style/home.css'

import cam from '../images/svgs/camera-icon.svg'
import { Link } from "react-router-dom";
import { useState } from 'react';
export default function HomePage() {
  const [validCode, setCodeType] = useState(false);
  const [code, changeCode] = useState("");

  const onCodeEnter = event => {
    let codeVal = event.target.value.toString();
    changeCode(codeVal);
    if (code.length === 4)
      setCodeType(true);
    else
      setCodeType(false);
  }

  return (

    <div className='page'>
      
      
      <div className="about-site">
        <div className='about-app'>
          <label className='home-label' >
            ConCam, Video Conferencing for Seamless Collaboration
          </label>

          <h2 className='explanation'>
            ConCam is a video conferencing app that transforms the way you connect, collaborate, and communicate. With its intuitive interface and powerful features, ConCam delivers a seamless and immersive conferencing experience that unites people across distances.
          </h2>
          <div className='btn-box'>
            <Link className='nav-link ' aria-current="page" to='Contribute'>
              <button>
                <img src={cam} alt="Conference" height={25} width={25} />
                <span style={{ marginLeft: "10px" }} >Conference </span>
              </button>
            </Link>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><i className="ri-keyboard-line"></i></span>
              <input id="code" className="form-control" placeholder="Enter Code" aria-describedby="basic-addon1" onChange={onCodeEnter} value={code} />
            </div>
            <span className={validCode ? "" : "hidden"} style={{ "fontSize": "larger" }}> Join</span>


          </div>


        </div>
      </div>
      <hr />

      {/* footer----- */}
      <div className='footer'>
        <footer className=" text-center text-white">
          <hr />
          {/* Grid container */}
          <div className="container p-4">
            {/* Section: Social media */}
            <section className="mb-4">
              {/* Facebook */}
              <a
                className="btn btn-outline-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="ri-facebook-fill"></i>
              </a>

              {/* Instagram */}
              <a
                className="btn btn-outline-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="ri-instagram-fill"></i>
              </a>
              {/* Linkedin */}
              <a
                className="btn btn-outline-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              {/* Github */}
              <a
                className="btn btn-outline-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="ri-github-fill"></i>
              </a>
            </section>
          </div>
        </footer>

      </div>

    </div>

  )
}
