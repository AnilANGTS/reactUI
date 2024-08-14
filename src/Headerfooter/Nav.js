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
  <nav className="navbar">
  <div className="container d-flex justify-content-between align-items-center">
    {/* <!-- Back Arrow on the Left --> */}
    <a className="navbar-back-arrow" href="" style={{ position: "absolute", left: "15px" }}>
      <img src="/assets/HomeImages/arr.png" alt="Back" width="30" />
    </a>
    
    {/* <!-- Logo in the Center --> */}
    <a className="navbar-brand mx-auto" href="" style={{ textAlign: "center" }}>
      <img src="/assets/HomeImages/amazon.png" alt="Amazon" width="100" />
    </a>
  </div>
</nav>
    </>
  )
}

export default Header;
