import React from 'react';
import "./signup.css";
import "../signin/Signin.css";
import web from "../../assets/Group 160@1X.png";

export default function Signup() {
    return (
        <>
        <div >
        <div className="main-container">
         <div className="logo-container">
         <img className="image" src={web} alt=""/>
             
         </div> 
         <div className="form-container">
         <div className="form-1">
             <p className="heading">Sign Up as Role Name appears here</p>
             <form>
                 <label className="label">Name</label><br></br>
                 <div className="input-container">
                 <input className="input-field" placeholder="John Doe" type="email"></input>
                 </div>
                 <label className="label">Email Address</label><br></br>
                 <div className="input-container">
                 <input className="input-field" placeholder="johndoe@gmail.com" type="email"></input>
                 </div>
                 <label className="label">Phone Number</label><br></br>
                 <div className="input-container">
                 <input className="input-field" placeholder="+91 9876543210" type="email"></input>
                 </div>
                 <label className="label">Create Password</label><br></br>
                 <div className="input-container">                 
                     <input className="input-field"placeholder="*********"></input>
                     </div>
                     <label className="label">Confirm Password</label><br></br>
                 <div className="input-container">                 
                     <input className="input-field"placeholder="*********"></input>
                     </div>
                 <div className="button">
                 <a href="#">Cancel</a>
                <button>Sign Up</button>
                </div>
             </form>

              
                 
         </div>
        </div>
        </div>
        </div>


        </>
    )
}
