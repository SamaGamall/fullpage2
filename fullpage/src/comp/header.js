import React from 'react';
import { Link, NavLink  } from "react-router-dom";
import './Header.css';
const Header = () => {
  return (
    <header>
  <div className="header">
    <a href="#default" className="logo">
      CompanyLogo
    </a>
    <div className="header-right">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  </div>
  <div style={{ paddingLeft: 20 }}>
    <h1>Responsive Header</h1>
    <p>Resize the browser window to see the effect.</p>
    <p>Some content..</p>
  </div>
</header>

  );
}

export default Header;

