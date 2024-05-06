/* eslint-disable no-unused-vars */
import React from 'react'
import logo  from "../../images/download-removebg-preview.png"
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg navbar-light bg-main-light">
  <div className="container">
    <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse my-2" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Product">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Brands</NavLink>
        </li>
        
      </ul>
      <ul className="navbar-nav ms-auto m-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink className="nav-link position-relative me-2" to="/">
            Card
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">9</span></NavLink>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" to="/">Logout</a>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav></>
}
