import React from "react";
import "./Header.scss";
import toggler from "../assets/toggler.png";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


// {/* <h3>Achinta</h3>
//       <a class="" href="#">Home</a>
//       <a class="" href="#">About</a>
//       <a class="" href="#">Contact</a> */}


function Header(){

    return( 
      
      <div className="row header">

<nav class="navbar navbar-expand-lg" style={{backgroundColor: '#2d043f'}}>
  <div class="container-fluid">
    <a class="navbar-brand">Achinta</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link item" aria-current="page" href="/">About</a>
        <a class="nav-link item" href="#">Projects</a>
        <a class="nav-link item" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>

      </div>
    
    );
}

export default Header;


{/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Achinta</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link active" aria-current="page">About</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav> */}