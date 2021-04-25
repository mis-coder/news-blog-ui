import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStream, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [IsClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(!IsClicked);
  return (
    <>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          BBC
        </Link>
        <div
          className={IsClicked ? "menu-icon close" : "menu-icon"}
          onClick={handleClick}
        >
          {IsClicked ? <FaTimes /> : <FaStream />}
        </div>
        <ul className={IsClicked ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Blog
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              News
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
