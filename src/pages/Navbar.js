import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaFacebook, FaPhone, FaTimes, FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/de-emicslogo.png"
import '../styles/NavBarStyles.css';
import Footer from "./Footer";


const Navbar = () => {

  const [state, setState] = useState(false);
  const handleChange = (e) => {
    e.preventDefault()
    setState(!state)
  }
  return (
    <div className="">
      <div className="nav-bar">
        <div className="nav-content">
          <div className="logo">
            <img src={Logo} alt="logo" />
            <h1>De - Emics</h1>
          </div>
          <div className={!state ? "links" : "links  return"}>
            <nav>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='about'>About Us</NavLink>
              <NavLink to='services'> Services</NavLink>
              <NavLink to="contact">Contact Us</NavLink>
            </nav>
            <div className="socials">
              <span style={{ fontSize: "16px" }}> <FaPhone size={20} color="#FEA116" /> +23408036056588</span>
              <FaFacebook size={20} color="#FEA116" />
              <FaWhatsapp size={20} color="#FEA116" />
            </div>
          </div>
          <div className="hamburger" onClick={handleChange}>
            {!state ? <FaBars size={30} color='white' /> :
              <FaTimes size={30} color="white" />}
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Navbar;
