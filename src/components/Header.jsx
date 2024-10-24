import React from 'react';
import logo from '../assets/devlaunch_logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="DevLaunch Logo" />
        <ul className="navlist">
          <Link to="/">Home</Link>
          <Link to="/bootcamp">Bootcamp</Link>
          <Link to="review"> Reviews</Link>
          <Link to="/contactUs"> Contact Us</Link>
          <Link to="signUp"> Sign In</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
