import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Collection from '../pages/Collection';
import Mint from '../pages/Mint';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />;
      <Route exact path='/collection' element={<Collection />} />;
      <Route exact path='/mint' element={<Mint />} />;
    </Routes>
  );
};

export default Main;
