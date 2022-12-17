import React from 'react'
import { AiOutlineLineHeight } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-blue shadow-sm" style= {{backgroundColor :'red', height : '80px'}}>
        <div className="container">
          <a className="navbar-brand fw-bold me-1 fs-2" href="#">
            <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="home" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <input  type="search" placeholder="Find your favorite products" aria-label="Search"
              style= {{width : '550px', height : '35px', paddingLeft: '20px', borderRadius: '20px'}} />
            </ul>
            <div className="buttons">
              <a href="" className="btn btn-outline-dark" style= {{backgroundColor :'red'}}>
                <i className="fa fa-sign-in me-2" ></i>Login</a>
                <a href="" className="btn btn-outline-dark ms-4" style= {{backgroundColor :'red'}}>
                <i className="fa fa-shopping-cart me-2"></i>Cart (0)</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;