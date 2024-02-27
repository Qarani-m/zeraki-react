import React from 'react';
import "../assets/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#courses">Courses</a></li>
        <li><a href="#institutions">Institutions</a></li>
        <li><a href="#students">Students</a></li>
        <li><a href="#metrics">Metrics</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
