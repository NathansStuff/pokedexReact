import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/index';
import PokemonPage from './pages/pokemon/[pokemon-slug]';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pokemon/:id' element={<PokemonPage />} />
    </Routes>
  );
};

export default Main;
