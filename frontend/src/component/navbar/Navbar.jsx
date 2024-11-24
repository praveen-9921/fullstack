// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Optional: for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MyApp</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;