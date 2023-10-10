import React from 'react'
import CartItem from '../cartItem'

function Cart() {
  return (
    <React.Fragment>
      <h1>Cart</h1>

      <CartItem />
      {/* {list.map(()=>{
        return <CartItem />
      })} */}
      <button>proceed to Checkout</button>
    </React.Fragment>
  )
}

export default Cart

/** 
 * on button press item should be added to cart
 * 
 * baiscally, i know i want it to render the elements depending on how many of them you want in cart 
 * so i know it has to be an array of cart items
 * i want to manage the state of the array for it to change anytime a new item is added to cart
 * const [list, setList] = useState([])
 * addItems () =>{
 *  setList(prevItem=> [...prevItem, item])
 * }
 * */ 