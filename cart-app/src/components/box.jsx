import React, { useState } from 'react'
import Buttons from'./buttons'

function Box(props) {
    const [click, setClick] = useState(false);
    const handleClick = ()=>{
        setClick(true);
        }
    }
  return (
    <div>
        <h1>{props.itemName}</h1>
        <img src={props.src} alt={props.alt} />
        <p>{props.price}</p>
        <button onClick={handleClick}> {click ? <Buttons /> : "add to cart"} </button>
        {/* what i want todo is to conditionally render 2 buttons ba which would increase or decrease the number of items depending on the button clicked */}
    </div>
  )

export default Box;