import React from "react";
import "./all.css"
export default function Navigation(props) {
  return (
    <div className="menu">
    <div className="navbar">
      <a href="/">La naturopathie</a>
      <a href="/aboutme">Mon approche</a>
      <a href="/rdv">Prendre un rendez-vous</a>
    </div>
    </div>

    // <nav className="menu">
    //   <ul className="centre-text bold-text"></ul>
    //   <li>
    //   <a href="/" className="card">
    //   La naturopathie
    //   </a>
    //   </li>
    //   <li>
    //   <a href="/aboutme" className="card">
    //    Mon approche
    //   </a>
    //   </li>
    //   <li>
    //   <a
    //     href="https://www.coraliebeguin.com/tarifs-et-rendez-vous/"
    //     className="card"
    //   >
    //    Tarifs & rendez-vous
    //   </a>
    //   </li>
    // </nav>
   
  );
}
