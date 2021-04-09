import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to='/the-shiny-kitchen/'>
            <i className="fa fa-cutlery" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to='/the-shiny-kitchen/'>בית</Link>
        </li>
        <li>
          <Link to='/the-shiny-kitchen/contact'>יצירת קשר</Link>
        </li>
        <li>
          <Link to='/the-shiny-kitchen/faq'>שאלות ותשובות</Link>
        </li>
        <li>
          <Link to='/the-shiny-kitchen/checkout'>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
