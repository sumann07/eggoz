import React from 'react';
import Header from "../header/Header";
import Cards from "../cards/Cards";
import "./Card.css";

export default function Card() {
    return (
        <div>
            <Header pageHeader="Operations Dashboard - Stock Management"/>
            <div className="card">
            
            <Cards Name="White Eggs"/>
            
            <Cards Name="Brown Eggs"/>
            <Cards Name="Nutri Eggs"/>
            <Cards Name="d"/>
        
            </div>
      </div>
    )
}
