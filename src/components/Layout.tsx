import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/Layout.css';

import { Header } from './Header';

export function Layout(): JSX.Element {
  return (
    <>
      <div className="layout">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
