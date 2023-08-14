import React from 'react'
import { useState } from 'react'
import svg from '../icons/idea.svg'
import work  from "../icons/work.svg"
export default function Contribute() {
    const [BackDrop , setBackdrop] =useState(false);
  const toogleBackdrop=()=>{
    setBackdrop((prev)=>!prev);
  }
  return (
    <div className='earth-img'>
    <div className=' container contactUs text-white'>
      <img className='svg' src={svg} alt="" />
       <form className='container form-container m-lg-1'>
        <div className="mb-3">
          
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control"  placeholder='Your Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp " className="form-text text-white ">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="Name" className='form-label'>
            Name
          </label>
          <input className='form-control' type='text' placeholder='Your Good Name'/>
          
        </div>
        <div className="mb-3">
          <label htmlFor="Idea" className='form-label'>
            Idea About
          </label>
          <input className='form-control' type='text' placeholder='Your Idea about'/>
          <br />
        </div>
        <div className="form-floating text-black-50">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Detail Explanation</label>
</div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label "   htmlFor="exampleCheck1">Become a partner</label>
        </div> 
        <div className='btn-box'>

        <button type='button' className="btn btn-primary p-2" onClick={toogleBackdrop}>Submit</button>
        </div>
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
    </div>
  )
}
