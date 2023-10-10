import React from 'react'
import './styles/navbar.css'
import { Outlet, Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav>
        <h2>Cart App</h2>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to= "/categories">Catergories</Link></li>
              <li><Link to= "/wishlist">Wishlist</Link></li>
              <li><Link to= "/cart">Cart</Link></li>
          </ul>
      </nav>

      <Outlet />
    </>
    
  )
}

export default Navbar