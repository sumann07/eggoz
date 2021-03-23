import React from 'react';
import "./Cards.css";
import srcUrl from "../../assets/mar.png";
export default function Cards({Name}) {
    return (
        <div className="card-main-container">
            <div className="upper-container">
            <img className="card-icon" src={srcUrl} alt=""/>
            <p className="name">{Name}</p>
            </div>

            <p className="no">24,568</p>

            <div className="second-half">
                <div className="second-half-first">
                <p style={{    padding: "0 20px", color:"#977A68"}}> Full Tray (30in a unit)</p>
                 <p style={{}}> 845</p>
                 </div>
                 
            </div>
            <div className="second-half">
                <div className="second-half-first">
                <p style={{    padding: "0 20px", color:"#977A68",margin: "0 0"}}> Single Eggs</p>
                 <p style={{margin: "0 0"}}> 27</p>
                 </div>
                 
            </div>
             <div className="second-half">
                <div className="second-half-first">
                <p style={{    padding: "0 20px", color:"#977A68"}}> Chatki Eggs</p>
                 <p style={{}}>9</p>
                 </div>
                 
            </div>
            

            
        </div>
    )
}
