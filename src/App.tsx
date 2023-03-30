import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Main } from './pages/Main';
import { About } from './pages/About';
import { Forms } from './pages/Forms';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="forms" element={<Forms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
