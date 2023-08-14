import React from 'react'
import '../style/contactUs.css'
import { useState } from 'react'
import svg from '../icons/Call center.gif'
import work  from "../icons/work.svg"
export default function ContackUs() {
  const [BackDrop , setBackdrop] =useState(false);
  const toogleBackdrop=()=>{
    setBackdrop((prev)=>!prev);
  }
  return (
    
    <div className='contactUs p-2'>
      <img className='svg' src={svg} alt="" />
       <form className='container w-auto form-container m-lg-1'>
        <div className="mb-3">
          
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp " className="form-text ">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="Name" className='form-label'>
            Name
          </label>
          <input className='form-control' type='text'/>
          <br />
        </div>
        <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea">Message</label>
</div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type='button' className="btn btn-primary" onClick={toogleBackdrop}>Submit</button>
      </form>
      
      <div className={BackDrop?"backdrop-contactus":"" } onClick={toogleBackdrop}>
      </div> 
      
      <div className={BackDrop?"submit":"none"}>
      <img src={work} alt="" />
      <label className="home-label" >
        We will contact you soon.
      </label>
      </div>

    </div>

  )
}
