import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const Header = () => {

  // Optional: Handle navbar collapse on toggle
  const menuActive = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    navbar.classList.toggle("show");
  }

  return (
    <>
      <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* Amazon Logo */}
            <a className="navbar-brand" href="#">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" width="100" />
            </a>

            {/* Navbar Toggle Button for Mobile */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation" onClick={menuActive}>
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links and Search Bar */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                 <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Trending
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Best Seller</a></li>
                    <li><a className="dropdown-item" href="#">New Release</a></li>
                    <li><hr className="dropdown-divider" />Mobile</li>
                    <li><a className="dropdown-item" href="#">Computers</a></li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link " href="#" tabIndex="-1">Categories</a>
                </li>
              </ul>
              
              {/* Search Bar */}
              {/* <form className="d-flex w-100" style={{ maxWidth: '400px' }}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit"><CiSearch /></button>
              </form> */}

              {/* Shopping Cart Icon */}
              {/* <div className="navbar-nav ms-auto">
                <a className="nav-link" href="#">
                  <i className="btn btn-outline-success"><FaCartShopping /></i>
                </a>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header;
