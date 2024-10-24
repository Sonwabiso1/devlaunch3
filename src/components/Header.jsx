import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/devlaunch_logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="DevLaunch Logo" />
        <ul className="navlist">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bootcamps">Bootcamps</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li className="sign-in"><Link to="/sign-in">Sign In</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
