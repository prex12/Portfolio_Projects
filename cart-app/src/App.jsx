import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Navbar from './components/navbar'
import Home from './components/pages/home'
import Categories from './components/pages/categories';
import Wishlist from './components/pages/wishlist';
import Cart from './components/pages/cart';

// file css
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/catergories' element={<Categories />} />
            <Route path='/wishlist'element={<Wishlist />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
