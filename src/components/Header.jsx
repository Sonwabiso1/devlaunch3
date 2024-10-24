import React from 'react';
import logo from '../assets/devlaunch_logo.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="DevLaunch Logo" />
        <ul className="navlist">
          <li><a href="/">Home</a></li>
          <li><a href="/bootcamp">Bootcamps</a></li>
          <li><a href="/review">Review</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li className="sign-in"><a href="/sign-in">Sign In</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
