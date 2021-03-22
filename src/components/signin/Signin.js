import React from 'react';
import "./Signin.css";
import web from "../../assets/Group 160@1X.png";

export default function Signin() {
    return (
        <>
        <div >
        <div className="main-container">
         <div className="logo-container">
         <img className="image" src={web} alt=""/>
             
         </div> 
         <div className="form-container">
         <div className="form">
             <p className="heading">Sign In</p>
             <form>
                 <label>Email Address</label><br></br>
                 <div className="input-container">
                 <input className="input-field" placeholder="John Doe" type="email"></input>
                 </div>
                 <label>Password</label><br></br>
                 <div className="input-container">                 
                     <input className="input-field"placeholder="******"></input>
                     </div>
                 <div className="button">
                 <a href="#">Forgot Password</a>
                <button>Log In</button>
                </div>
             </form>

              
                 
         </div>
        </div>
        </div>
        </div>


        </>
    )
}
