import React, { useState } from 'react'
import img from '../images/svgs/Sign up.gif'

// for authentication jsonwebtoken


export default function Login({start, toggleLogin ,pops}) {
    const [is_reg, setis_reg] = useState(false);
    const [name ,setName] = useState("");
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");

    const inpName=(e)=>{
        setName(e.target.value);
    }
    const inpEmail=(e)=>{
        setEmail(e.target.value);
    }
    const inpPasssword=(e)=>{
        setPassword(e.target.value);
    }
    const changeReg=()=>{
        setis_reg((prev)=>!prev)
    }
    const submit =()=>{
        if(is_reg)
        {
            if(name==="" || email==="" || password==="")
            {
                alert("All the credential are Compulsory");
                return;
            }
            register();
            // console.log(name,email,password);
            // registration();
        }
        else{
            if(email==="" || password==="")
            {
                alert("All the credential are Compulsory");
                return;
            }
            logedIN();
        }

        
        
    }

    const register = async ()=>{

        const user = JSON.stringify({
            "name" :name,
            "email":email,
            "password":password
        });

        console.log(user);

        await fetch("http://localhost:3001/user/register",{
            method:"POST",
            body: user,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin" : '*'
              }
        }).then((response)=>{
            
            if(response.status === 201)
            {
                toggleLogin();
                pops("Registered Successfully !");
                return response.json();
            }
            else
            {
             pops("User Already Exiest")
            }
           

        }).catch((error)=>{console.log(error)
            pops("Something went wrong");
        })

    }
    const logedIN = async ()=>{

        const user = JSON.stringify({
            "email":email,
            "password":password
        });

        // console.log(user);

        await fetch("http://localhost:3001/user/login",{
            method:"POST",
            body: user,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin" : '*'
              }
        }).then((response)=>{
            
            if(response.status === 200)
            {
                toggleLogin();
                pops("Login Successfull !");
                return response.json();
            }
            else
            {
             pops("Email or Password not match !")
            }
           

        }).then((json)=>{
            console.log(json);
        }).catch((error)=>{console.log(error)
            pops("Something went wrong");
        })

    }
    return (
        <div className={start?'container login mt-3 d-flex ' : "none"}>
            <div className='login-img'>
                <img src={img} alt='login_image'/>
            </div>
            <div className='login-details '>
                <form>
                    <label className='login-lable' > {is_reg ? "Register" : "Login"}</label>
                    {is_reg ?
                        <div className="mb-3 d-flex flex-column">
                            <label htmlFor="exampleInputEmail1" className="form-label">Enter Name</label>
                            <div className='login-details-input d-flex flex-row'>
                                <i className="ri-keyboard-line"></i>
                                <input type='text' autoComplete='false' onInput={inpName} value={name}/>
                            </div>
                        </div> : ""}
                    <div className="mb-3 d-flex flex-column">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <div className='login-details-input d-flex flex-row'>
                            <i className="ri-user-5-fill"></i>
                            <input type='email' autoComplete='false'  onInput={inpEmail} value={email}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <div className='login-details-input d-flex flex-row'>
                            <i className="ri-lock-fill"></i>
                            <input type='password' autoComplete='false' onInput={inpPasssword} value={password}/>
                        </div>
                    </div>

                    {/* <button type="submit" className="btn btn-primary w-25">Submit</button> */}
                    
                    <div className="d-flex mb-3">
                        <button type="button" className="btn btn-primary" onClick={submit}>Submit</button>
                        
                        <div className="lr-text ">
                            <button  type='button' onClick={changeReg} >
                                {!is_reg ? "Register" : "Login"}
                                </button>
                            </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
