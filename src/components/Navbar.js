import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="nav-container flex">
    <div className="navbar flex">
      <p>Bookstore CMS</p>
      <nav>
        <ul className="nav flex">
          <li>
            <NavLink to="/" exact>
              BOOKS
            </NavLink>
          </li>
          <li className="categories">
            <NavLink to="/categories" exact>
              CATEGORIES
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <span><MdAccountCircle className="account" /></span>
  </div>
);
export default Navbar;
