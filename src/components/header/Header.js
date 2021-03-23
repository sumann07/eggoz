import React from 'react';
import "./Header.css";

const Header = ({ pageHeader }) => {
    return (
        
             <header className="header">
            <div className="page-header">
                <h1 className="heading">{pageHeader}</h1>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",width:"40%"}}>
            <div className="action-container">
                
            </div>
           
            </div>
        </header>

    )
}
export default Header;
