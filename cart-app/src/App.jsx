import React from 'react';
import Navbar from './components/navbar.jsx'
import Footer from './components/footer'
import Box from './components/box';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className='flexBox'>
        <Box />
      </div>
      <Footer />
    </div>
  );
}

export default App;
