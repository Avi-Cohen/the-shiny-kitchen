import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to='/'>
            <i className="fa fa-cutlery" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to='/'>בית</Link>
        </li>
        <li>
          <Link to='/contact'>יצירת קשר</Link>
        </li>
        <li>
          <Link to='/faq'>שאלות ותשובות</Link>
        </li>
        <li>
          <Link to='/checkout'>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
