import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Header.css';

import { getCurrentLocationName } from '../helpers/helperFunctions';

export function Header(): JSX.Element {
  const location = useLocation();

  return (
    <header className="header">
      <div>
        <NavLink className="header__link" to="/">
          Main
        </NavLink>
        <NavLink className="header__link" to="/about">
          About Us
        </NavLink>
        <NavLink className="header__link" to="/forms">
          Forms
        </NavLink>
      </div>
      <div>
        <b>{getCurrentLocationName(location.pathname)}</b>
      </div>
    </header>
  );
}
