import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="topbar">
      <div className="brand-block">
        <h1>Cositas Lab</h1>
      </div>
      <nav className="topnav">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          end
        >
          Home
        </NavLink>
        <NavLink 
          to="/products" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Catálogo
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
