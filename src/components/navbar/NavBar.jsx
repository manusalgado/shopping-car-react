import React, { Component } from 'react';
import './NavBar.scss';

const NavBar = ({ totalCounters }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
          <a href="#" className="navbar-brand">
          Navbar <span className="badge m-2 badge-secondary">{totalCounters}</span>
          </a>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
