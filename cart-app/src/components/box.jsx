import React, { useState } from 'react'
import Buttons from'./buttons'
import './styles/box.css'

function Box(props) {
    const [click, setClick] = useState(false);
    const handleClick = ()=>{
        setClick(true);
        }
    
  return (
    <div className='box' type='button'>
        <img className='pro-img' src={props.src} alt={props.alt} />
        <h1 className='head'>{props.itemName}</h1>
        <p>{props.price}</p>
        <button className='btn' style={{backgroundColor : click? "transparent" : "yellow"}} onClick={handleClick}> {click ? <Buttons /> : "add to cart"} </button>
        {/* what i want todo is to conditionally render 2 buttons ba which would increase or decrease the number of items depending on the button clicked */}
    </div>
  )}

export default Box;
