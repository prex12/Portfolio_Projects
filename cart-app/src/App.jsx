import React from 'react';
import Navbar from './components/navbar.jsx'
import Footer from './components/footer'
import Box from './components/box';
import sales from './components/sales/sales'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className='flexBox general-padding'>
        {sales.map((one)=><Box 
        key= {one.id} 
        itemName = {one.productName} 
        price = {one.productPrice} 
        src = {one.imageSource} 
        />)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
