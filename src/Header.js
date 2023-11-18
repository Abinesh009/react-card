import React from 'react';
import { FaHome, FaSignInAlt, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="logo">!PICS!</div>
      <nav>
        <ul>
          <li>
            <FaHome /> Home
          </li>
          <li>
            <FaUser /> Login
          </li>
          <li>
            <FaSignInAlt /> Sign In
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
