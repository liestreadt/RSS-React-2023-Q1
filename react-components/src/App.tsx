import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { AboutUs } from './pages/About';
import { Main } from './pages/Main';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
