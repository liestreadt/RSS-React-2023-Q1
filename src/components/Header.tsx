import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

export function Header(): JSX.Element {
  return (
    <header className="header">
      <NavLink className="header__link" to="/">
        Main
      </NavLink>
      <NavLink className="header__link" to="/about">
        About Us
      </NavLink>
      <NavLink className="header__link" to="/forms">
        Forms
      </NavLink>
    </header>
  );
}
