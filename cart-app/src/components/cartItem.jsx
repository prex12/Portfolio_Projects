import React from 'react'
// import sales from './sales/sales'
import Navbar from './navbar'
import './styles/cartItem.css'


function CartItem(props) {
    const { name, price } = props
  return (
    <>
      <Navbar />
      <div className='flex'>
        <img src="" alt="" />
        <div className="flex">
          <img src= {props.img} alt={props.altForImg} />
          <p className='cart-detail' style={{fontWeight: 'bolder'}}>{name}</p>
          <p className='card-detail'>{price}</p>
        </div>
    </div>
    </>
    
  )
}

export default CartItem